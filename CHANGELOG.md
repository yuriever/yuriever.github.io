# Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - 2026-02-26

### Added

- Added MkDocs markdown preprocessing hook at `hooks/mathjax_env_preprocess.py`.
- Added MkDocs `hooks` configuration to enable the math environment preprocessor.

### Changed

- Normalized top-level TeX environments (`\begin{...}...\end{...}`) during build so they render correctly without manually adding blank lines.
- Forced paragraph splitting around top-level TeX environments when they appear inline with text.

### Fixed

- Fixed MathJax environment parsing failures caused by missing empty lines around TeX environments in markdown.
- Prevented transformations inside YAML front matter, fenced code blocks, and inline code spans.

## Historical Website Development

### Added

- Added TikZ support via `tikzjax`.
- Added BibTeX support via `mkdocs-bibtex`.
- Added subtitle support.
- Added Mathematica (`mma`) code block support.

### Changed

- Overwrote `main.html` to hide the sidebar on all pages.
- Customized `admonition.css`.
- Customized the code highlighter.
