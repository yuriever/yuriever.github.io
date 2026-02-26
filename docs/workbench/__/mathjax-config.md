# MathJax configuration in MkDocs

References:

* [Material for MkDocs: MathJax supporting](https://squidfunk.github.io/mkdocs-material/reference/mathjax/)

* [MathJax: configmacros](https://docs.mathjax.org/en/latest/input/tex/extensions/configmacros.html)

---

1. Add the followings to `mkdocs.yml`:

    ``` yaml title="mkdocs.yml"
    markdown_extensions:
    #Python Markdown Extensions
    - pymdownx.arithmatex:
        generic: true

    extra_javascript:
    #mathjax
    - js/mathjax.js
    - https://polyfill.io/v3/polyfill.min.js?features=es6
    - https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
    ```

2. Edit the MathJax configuration file `mathjax.js` like:

    ``` js title="mathjax.js"
    window.MathJax = {
        loader: { load: ['[tex]/tagformat', '[tex]/configmacros', '[tex]/physics'] },
        tex: {
            // packages included
            packages: { '[+]': ['tagformat', 'configmacros', 'physics'] },
            // inline math mode delimiters
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            // display math mode delimiters
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            // use \$ to escape the dollar sign
            processEscapes: true,
            // process \begin{xxx}...\end{xxx} outside of math mode
            processEnvironments: true,
            // process \ref{...} outside of math mode
            processRefs: true,
            // pattern for recognizing numbers
            digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
            // tag options
            tags: 'all',
            tagSide: 'right',
            tagIndent: '2em',
            tagformat: {
                number: (n) => n.toString(),
                tag: (tag) => '(' + tag + ')',
                id: (id) => 'mjx-eqn:' + id.replace(/\s/g, '_'),
                url: (id, base) => base + '#' + encodeURIComponent(id),
            },
            // use label name rather than tag for ids
            useLabelIds: true,
            // macros
            macros: {

            },
            environments: {

            },
        },
        // package physics options
        physics: {
            italicdiff: false,
            arrowdel: false
        },
        options: {
            ignoreHtmlClass: '.',
            processHtmlClass: 'arithmatex'
        }
    };
    ```

Then `#!latex \vev{\f\f}` will be rendered as $\vev{\f\f}$, and the labeled equations will be displayed as:

``` latex
Two-point functions \eqref{eq:a}:

\begin{equation}
\vev{\f_1\f_2}=\delta_{12}|x_{12}|^{-2\Delta}
\label{eq:a}
\end{equation}
```

Two-point functions \eqref{eq:a}:

\begin{equation}
\vev{\f_1\f_2}=\delta_{12}|x_{12}|^{-2\Delta}
\label{eq:a}
\end{equation}
