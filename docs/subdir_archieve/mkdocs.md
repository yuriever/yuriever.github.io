# MkDocs 介绍

本网站由 mkdocs 生成，因此在这里给出简单介绍。使用 mkdocs，创作者可仅关注用 markdown 语法书写的内容，无需关心 html, css 等底层细节 <span class="heimu">（实际上还是需要）</span>。

## Documentations

* [mkdocs user guide](https://www.mkdocs.org/user-guide/)

* [mkdocs theme: material](http://squidfunk.github.io/mkdocs-material/), esp. the [Reference](https://squidfunk.github.io/mkdocs-material/reference/) pages.

## Project layout

```
mkdocs.yml      # The configuration file.
docs/
    index.md    # Homepage.
    ...         # Other files.
site/           # Built html files.
```

## Commands for Mac

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs build` - Build the html files.
* `mkdocs serve` - Start the live-reloading docs server at http://localhost:8000/ (may need `sudo`). 
* `mkdocs gh-deploy --force` - Push to github and then wait for minutes.
* `mkdocs -h` - Print help message.

*Windows: add `python -m` before `mkdocs`.*
