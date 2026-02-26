r"""Normalize TeX environments so arithmatex can parse them as block math.

This hook inserts paragraph boundaries around top-level ``\begin{...}...\end{...}``
outside of fenced code and YAML front matter.
"""

from __future__ import annotations

import re
from dataclasses import dataclass, field

DEBUG_LOG = False

_FENCE_RE = re.compile(r"^[ \t]{0,3}(`{3,}|~{3,}).*$")
_ENV_RE = re.compile(r"\\(begin|end)\{([^{}]+)\}")


@dataclass
class _Writer:
    parts: list[str] = field(default_factory=list)
    recent: str = ""
    length: int = 0

    def append(self, text: str) -> None:
        if not text:
            return
        self.parts.append(text)
        self.length += len(text)
        self.recent = (self.recent + text)[-8:]

    def endswith(self, suffix: str) -> bool:
        if len(suffix) > len(self.recent):
            return False
        return self.recent.endswith(suffix)

    def text(self) -> str:
        return "".join(self.parts)


def _ensure_newline_before(w: _Writer) -> None:
    if w.length == 0 or w.endswith("\n"):
        return
    w.append("\n")


def _ensure_blankline_before(w: _Writer) -> None:
    if w.length == 0:
        return
    if w.endswith("\n\n"):
        return
    if w.endswith("\n"):
        w.append("\n")
    else:
        w.append("\n\n")


def _append_post_end_spacing_for_inline_tail(w: _Writer) -> None:
    if w.endswith("\n\n"):
        return
    if w.endswith("\n"):
        w.append("\n")
    else:
        w.append("\n\n")


def _process_line(
    line: str,
    w: _Writer,
    env_stack: list[str],
    code_span_ticks: int | None
) -> tuple[int | None, bool]:
    i = 0
    n = len(line)
    pending_blank_after_end = False

    while i < n:
        ch = line[i]

        if ch == "`":
            j = i
            while j < n and line[j] == "`":
                j += 1
            ticks = j - i
            if code_span_ticks is None:
                code_span_ticks = ticks
            elif code_span_ticks == ticks:
                code_span_ticks = None
            w.append(line[i:j])
            i = j
            continue

        if code_span_ticks is not None:
            w.append(ch)
            i += 1
            continue

        m = _ENV_RE.match(line, i)
        if not m:
            w.append(ch)
            i += 1
            continue

        kind, env = m.group(1), m.group(2)
        token = m.group(0)
        token_end = m.end()
        token_is_top_begin = kind == "begin" and len(env_stack) == 0
        token_is_top_end = kind == "end" and len(env_stack) == 1 and env_stack[-1] == env

        # Skip spaces right after a top-level token if it is followed by inline text.
        k = token_end
        while k < n and line[k] in " \t":
            k += 1
        has_inline_text_after = k < n and line[k] != "\n"

        if token_is_top_begin:
            _ensure_blankline_before(w)

        if kind == "begin":
            env_stack.append(env)
            w.append(token)
            if token_is_top_begin and has_inline_text_after:
                _ensure_newline_before(w)
            if token_is_top_begin and token_end < k:
                i = k
            else:
                i = token_end
            continue

        # kind == "end"
        if env_stack and env_stack[-1] == env:
            if token_is_top_end:
                _ensure_newline_before(w)
            env_stack.pop()
            w.append(token)
            if token_is_top_end:
                if has_inline_text_after:
                    _append_post_end_spacing_for_inline_tail(w)
                else:
                    pending_blank_after_end = True
            if token_is_top_end and token_end < k:
                i = k
            else:
                i = token_end
            continue

        # Mismatched end token, keep as-is.
        w.append(token)
        i = token_end

    return code_span_ticks, pending_blank_after_end


def _normalize_markdown(markdown: str) -> str:
    lines = markdown.splitlines(keepends=True)
    if not lines:
        return markdown

    out = _Writer()
    env_stack: list[str] = []
    code_span_ticks: int | None = None

    i = 0
    in_front_matter = bool(lines and lines[0].strip() == "---")
    in_fence = False
    fence_char = ""
    fence_len = 0
    pending_blank_after_end = False

    while i < len(lines):
        line = lines[i]

        if in_front_matter:
            if pending_blank_after_end and line.strip() != "":
                out.append("\n")
            pending_blank_after_end = False
            out.append(line)
            if i > 0 and line.strip() == "---":
                in_front_matter = False
            i += 1
            continue

        fence_match = _FENCE_RE.match(line)
        if not in_fence and fence_match:
            if pending_blank_after_end and line.strip() != "":
                out.append("\n")
            pending_blank_after_end = False
            marker = fence_match.group(1)
            in_fence = True
            fence_char = marker[0]
            fence_len = len(marker)
            out.append(line)
            i += 1
            continue

        if in_fence:
            if pending_blank_after_end and line.strip() != "":
                out.append("\n")
            pending_blank_after_end = False
            out.append(line)
            stripped = line.lstrip(" \t")
            run = 0
            while run < len(stripped) and stripped[run] == fence_char:
                run += 1
            if run >= fence_len:
                tail = stripped[run:].strip()
                if tail == "":
                    in_fence = False
                    fence_char = ""
                    fence_len = 0
            i += 1
            continue

        if pending_blank_after_end:
            if line.strip() == "":
                pending_blank_after_end = False
            else:
                out.append("\n")
                pending_blank_after_end = False

        code_span_ticks, closed_top_end = _process_line(line, out, env_stack, code_span_ticks)
        if closed_top_end:
            pending_blank_after_end = True
        i += 1

    return out.text()


def on_page_markdown(markdown, page, config, files):  # noqa: D401
    """MkDocs hook: normalize TeX environments before Markdown parsing."""
    normalized = _normalize_markdown(markdown)
    if DEBUG_LOG and normalized != markdown:
        print(f"[mathjax-env-preprocess] normalized: {page.file.src_path}")
    return normalized
