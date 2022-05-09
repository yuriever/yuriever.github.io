# MathJax Configuration

## MkDocs

[Material for MkDocs: MathJax supporting](https://squidfunk.github.io/mkdocs-material/reference/mathjax/)

Step 1: add the followings to `mkdocs.yml`:

```
markdown_extensions:
  # Python Markdown Extensions
  - pymdownx.arithmatex:
      generic: true

extra_javascript:
- js/mathjax.js
- https://polyfill.io/v3/polyfill.min.js?features=es6
- https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js
```

## MathJax

[MathJax: configmacros](https://docs.mathjax.org/en/latest/input/tex/extensions/configmacros.html)

Step 2: edit the mathjax configuration file `mathjax.js` like:

```
window.MathJax = {
  loader: {load: ['[tex]/tagformat', '[tex]/configmacros', '[tex]/physics']},
  tex: {
    // packages included
    packages: {'[+]': ['tagformat', 'configmacros', 'physics']},
    // inline math mode delimiters
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    // display math mode delimiters
    displayMath: [ ['$$','$$'], ['\\[','\\]'] ],
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
      tag:    (tag) => '(' + tag + ')',
      id:     (id) => 'mjx-eqn:' + id.replace(/\s/g, '_'),
      url:    (id, base) => base + '#' + encodeURIComponent(id),
    },
    // use label name rather than tag for ids
    useLabelIds: true,         
    // macros
    macros: {
      vev: ['{\\langle #1 \\rangle}', 1],
      f: '{\\phi}'
    },
    enviroments: {
      testenviroment: ['\\left\\{', '\\right\\}']
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

Then `\vev{\f\f}` will be rendered as $\vev{\f\f}$, and the labeled equations will be displayed as:

```
two-point functions \eqref{eq:a}:

\begin{equation}
  \vev{\f_1\f_2}=\delta_{12}|x_{12}|^{-2\Delta}
  \label{eq:a}
\end{equation}
```

two-point functions \eqref{eq:a}:

\begin{equation}
  \vev{\f_1\f_2}=\delta_{12}|x_{12}|^{-2\Delta}
  \label{eq:a}
\end{equation}

## LaTeX to MathJax

Mathematica documentation: `tutorial/StringsAndCharacters`

Step 3: translate latex macros into javascript, e.g. using mathematica:

```
ruleLaTeXToJS = {
  " " .. -> " ",
  "%" ~~ rest___ -> "//" ~~ rest,
  "\\renewcommand" -> "\\newcommand",
  "\\newmathcommand" -> "\\newcommand",
  "\\providecommand" ~~ __ :> ""
};
ruleLaTeXToJS1 = {
  "\\newcommand{\\" ~~ Shortest[macroName__] ~~ "}[" ~~ num_?DigitQ ~~ "]{" ~~ Longest[macroFunction__] ~~ "}" 
    -> macroName ~~ ": ['{" ~~ macroFunction ~~ "}', " ~~ num ~~ "]"
};
ruleLaTeXToJS2 = {
  "\\newcommand{\\" ~~ Shortest[macroName__] ~~ "}{" ~~ Longest[macroFunction__] ~~ "}" 
    -> macroName ~~ ": '{" ~~ macroFunction ~~ "}'"
};
laTeXToJS[str_] := Module[{var},
  var[1] = str // StringSplit[#, "\n"] & 
    // StringReplace[ruleLaTeXToJS] 
    // StringReplace[ruleLaTeXToJS1] 
    // StringReplace[ruleLaTeXToJS2] 
    // DeleteCases[""];
  var[2] = StringInsert[#, ",\n", -1] & /@ var[1] // StringExpression @@ # &
]
```

Step 4: test and modify the translated macros.
