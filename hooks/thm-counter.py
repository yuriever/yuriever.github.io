"""Build-time numbering for theorem-style admonitions."""

from __future__ import annotations

import html
import re
from html.parser import HTMLParser
from typing import Any

_NUMBERED_CLASSES = {"def", "lem", "thm", "cor", "ex"}

_CONFIG: dict[str, dict[str, str]] = {
    "def": {"label": "Definition", "default_label": "Def"},
    "lem": {"label": "Lemma", "default_label": "Lem"},
    "thm": {"label": "Theorem", "default_label": "Thm"},
    "cor": {"label": "Corollary", "default_label": "Cor"},
    "ex": {"label": "Example", "default_label": "Ex"},
    "proof": {"label": "Proof", "default_label": "Proof"},
    "idea": {"label": "Idea", "default_label": "Idea"},
    "remark": {"label": "Remark", "default_label": "Remark"},
    "fact": {"label": "Fact", "default_label": "Fact"},
}


class _AdmonitionNumberingParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=False)
        self._parts: list[str] = []
        self._stack: list[dict[str, Any]] = []
        self._capture_depth = 0
        self._capture_parts: list[str] = []
        self._capture_class: str | None = None
        self._capture_target_id: int | None = None
        self._next_id = 0

        self._shared_counter = 0
        self._example_counter = 0

    def _next_number(self, class_name: str) -> int | None:
        if class_name in {"def", "lem", "thm", "cor"}:
            self._shared_counter += 1
            return self._shared_counter
        if class_name == "ex":
            self._example_counter += 1
            return self._example_counter
        return None

    def _current_target(self) -> dict[str, Any] | None:
        for entry in reversed(self._stack):
            if entry["target_class"] is not None:
                return entry
        return None

    @staticmethod
    def _split_classes(attrs: list[tuple[str, str | None]]) -> list[str]:
        for key, value in attrs:
            if key == "class" and value:
                return value.split()
        return []

    @staticmethod
    def _is_title_tag(tag: str, attrs: list[tuple[str, str | None]]) -> bool:
        if tag == "summary":
            return True
        if tag != "p":
            return False
        classes = _AdmonitionNumberingParser._split_classes(attrs)
        return "admonition-title" in classes

    @staticmethod
    def _strip_tags(raw_html: str) -> str:
        return re.sub(r"<[^>]+>", "", raw_html)

    def _build_title_html(self, class_name: str, current_title_html: str) -> str:
        config = _CONFIG[class_name]
        text = html.unescape(self._strip_tags(current_title_html)).strip()
        suffix_html = current_title_html.strip()
        if text == config["default_label"]:
            suffix_html = ""

        if class_name in _NUMBERED_CLASSES:
            number = self._next_number(class_name)
            prefix = f'{config["label"]} {number}.'
        else:
            prefix = f'{config["label"]}.'

        return f"{prefix} {suffix_html}" if suffix_html else prefix

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        classes = self._split_classes(attrs)
        target_class = next((name for name in _CONFIG if name in classes), None)
        node_id = self._next_id
        self._next_id += 1
        self._stack.append({"id": node_id, "target_class": target_class, "title_done": False})

        raw = self.get_starttag_text()
        if self._capture_depth > 0:
            self._capture_parts.append(raw)
            self._capture_depth += 1
            return

        current_target = self._current_target()
        if (
            current_target is not None
            and not current_target["title_done"]
            and self._is_title_tag(tag, attrs)
        ):
            self._capture_depth = 1
            self._capture_parts = []
            self._capture_class = current_target["target_class"]
            self._capture_target_id = current_target["id"]
            self._parts.append(raw)
            return

        self._parts.append(raw)

    def handle_endtag(self, tag: str) -> None:
        if self._capture_depth > 0:
            self._capture_depth -= 1
            if self._capture_depth == 0:
                current_title = "".join(self._capture_parts)
                class_name = self._capture_class
                if class_name is None:
                    self._parts.append(current_title)
                else:
                    built = self._build_title_html(class_name, current_title)
                    self._parts.append(built)
                self._capture_parts = []
                self._capture_class = None
                if self._capture_target_id is not None:
                    for entry in reversed(self._stack):
                        if entry["id"] == self._capture_target_id:
                            entry["title_done"] = True
                            break
                self._capture_target_id = None
                self._parts.append(f"</{tag}>")
            else:
                self._capture_parts.append(f"</{tag}>")
        else:
            self._parts.append(f"</{tag}>")

        if self._stack:
            self._stack.pop()

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        raw = self.get_starttag_text()
        if self._capture_depth > 0:
            self._capture_parts.append(raw)
        else:
            self._parts.append(raw)

    def handle_data(self, data: str) -> None:
        if self._capture_depth > 0:
            self._capture_parts.append(data)
        else:
            self._parts.append(data)

    def handle_entityref(self, name: str) -> None:
        raw = f"&{name};"
        if self._capture_depth > 0:
            self._capture_parts.append(raw)
        else:
            self._parts.append(raw)

    def handle_charref(self, name: str) -> None:
        raw = f"&#{name};"
        if self._capture_depth > 0:
            self._capture_parts.append(raw)
        else:
            self._parts.append(raw)

    def handle_comment(self, data: str) -> None:
        raw = f"<!--{data}-->"
        if self._capture_depth > 0:
            self._capture_parts.append(raw)
        else:
            self._parts.append(raw)

    def handle_decl(self, decl: str) -> None:
        self._parts.append(f"<!{decl}>")

    def handle_pi(self, data: str) -> None:
        self._parts.append(f"<?{data}>")

    def unknown_decl(self, data: str) -> None:
        self._parts.append(f"<![{data}]>")

    def result(self) -> str:
        return "".join(self._parts)


def on_page_content(html: str, **kwargs) -> str:
    parser = _AdmonitionNumberingParser()
    parser.feed(html)
    parser.close()
    return parser.result()
