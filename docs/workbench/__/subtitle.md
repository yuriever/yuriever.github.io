# Subtitle overrides

The subtitle is realized by `span`:

<h1>the_title
    <span class="subtitle">the_subtitle</span>
</h1>

``` html
<h1>title
    <span class="subtitle">the_subtitle</span>
</h1>
```

with additional metadata

``` yaml
---
title: the_title
---
```

since from [`material/partials/header.html`](https://github.com/squidfunk/mkdocs-material/blob/master/material/partials/header.html) line 23:

``` html
<div class="md-header__topic" data-md-component="header-topic">
    <span class="md-ellipsis">
    {% if page.meta and page.meta.title %}
        {{ page.meta.title }}
    {% else %}
        {{ page.title }}
    {% endif %}
    </span>
</div>
```

After updating to Material for MkDocs 9.x, also need rewriting the page `/custom/partials/content.html`, see [this update](https://github.com/squidfunk/mkdocs-material/pull/4628/files#diff-db74d007cdd9552f496a973903f6c0d75c034d53d76dd94ffed01926cb6e9f2a) and [here](https://github.com/squidfunk/mkdocs-material/blob/master/src/partials/content.html).
