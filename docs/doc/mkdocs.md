# MkDocs

本网站由 mkdocs 生成，因此在这里给出简单介绍。使用 mkdocs，创作者可仅关注用 markdown 语法书写的内容，无需关心 html, css 等底层细节。

## Documentations

* [mkdocs](https://www.mkdocs.org/)

* [mkdocs theme: material](http://squidfunk.github.io/mkdocs-material/), esp. the [Reference](https://squidfunk.github.io/mkdocs-material/reference/) pages.


## Commands for Mac

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs build` - Build the html files.
* `mkdocs serve` - Start the live-reloading docs server at http://localhost:8000/ (may need `sudo`). 
* `mkdocs gh-deploy --force` - Push to github and then wait for minutes.
* `mkdocs -h` - Print help message.

*Windows: add `python -m` before `mkdocs`.*

## Project layout

```
mkdocs.yml    # The configuration file.
docs/
    index.md  # Homepage.
    ...       # Other markdown pages, images and other files.
site/         # Built html files.
```

## Other documents

<!-- * [github desktop](https://desktop.github.com/)。 -->

* [jekyll](https://jekyllrb.com/docs/) - mkdocs 的同类产品，基于 ruby。

* [yaml intro](http://gettaurus.org/docs/YAMLTutorial/) - yaml 介绍，`mkdocs.yml` 所用的语言。

* [markdown](https://markdown-zh.readthedocs.io/) - markdown 文档。

* [mathjax](http://docs.mathjax.org/en/latest/index.html) - mathjax 文档



