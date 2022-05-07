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
      C: '{\\mathbb{C}}',
      vev: ['{\\langle #1 \\rangle}', 1],
      f: '{\\phi}',
      a: '{\\alpha}'
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