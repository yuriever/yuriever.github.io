window.MathJax = {
    loader: {
        load: ['[tex]/tagformat', '[tex]/configmacros', '[tex]/physics']
    },
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
        tags: 'ams',
        tagSide: 'right',
        tagIndent: '2em',
        tagformat: {
            number: (n) => n.toString(),
            tag: (tag) => '(' + tag + ')',
            id: (id) => 'mjx-eqn:' + id.replace(/\s/g, '_'),
            url: (id, base) => base + '#' + encodeURIComponent(id)
        },
        useLabelIds: true,
        // macros
        macros: {
            // DONT overwrite this part
            "ppair": ['{\\left( #1 \\right)}', "1"],
            // DONT overwrite this part
            //
            //
            // Automatically transformed from LaTeX
            //
            //
            "wave": [
                "\\widetilde{#1}",
                "1"
            ],
            "bar": [
                "\\overline{#1}",
                "1"
            ],
            "hat": [
                "\\widehat{#1}",
                "1"
            ],
            "case": [
                "\\begin{cases} #1 \\end{cases}",
                "1"
            ],
            "red": [
                "\\textcolor{red}{#1}",
                "1"
            ],
            "orange": [
                "\\textcolor{orange}{#1}",
                "1"
            ],
            "blue": [
                "\\textcolor{blue}{#1}",
                "1"
            ],
            "purple": [
                "\\textcolor{purple}{#1}",
                "1"
            ],
            "pink": [
                "\\textcolor{pink}{#1}",
                "1"
            ],
            "notethat": [
                "\\textcolor{red}{#1}",
                "1"
            ],
            "vev": [
                "\\langle #1 \\rangle",
                "1"
            ],
            "rep": [
                "\\cV_{#1}",
                "1"
            ],
            "urep": [
                "\\cE_{#1}",
                "1"
            ],
            "urepdiscrete": [
                "\\cD_{#1}",
                "1"
            ],
            "udual": [
                "\\wave{#1}",
                "1"
            ],
            "instate": [
                "#1_{\\operatorname{in}}",
                "1"
            ],
            "outstate": [
                "#1_{\\operatorname{out}}",
                "1"
            ],
            "GeV": [
                "\\operatorname{GeV}^{#1}",
                "1"
            ],
            "intt": [
                "\\int #1\\,",
                "1"
            ],
            "inttt": [
                "\\int_{#2} #1\\,",
                "2"
            ],
            "intrange": [
                "\\int_{#2}^{#3} #1\\,",
                "3"
            ],
            "diag": [
                "\\operatorname{diag}\\left( #1 \\right)",
                "1"
            ],
            "vspan": [
                "\\operatorname{span}\\{ #1 \\}",
                "1"
            ],
            "set": [
                "\\{ #1 \\}",
                "1"
            ],
            "modd": [
                "\\, \\operatorname{mod} #1 ",
                "1"
            ],
            "dual": [
                "{#1}^\\vee",
                "1"
            ],
            "innerproductmath": [
                "(#1,#2)",
                "2"
            ],
            "innerproductphy": [
                "#1 \\cdot #2",
                "2"
            ],
            "lie": [
                "\\mathfrak{#1}",
                "1"
            ],
            "geq": "\\geqslant",
            "leq": "\\leqslant",
            "nn": "\\nonumber",
            "impliesthat": "$\\implies$",
            "peq": "\\phantom{=}",
            "lhs": "\\text{l.h.s}",
            "rhs": "\\text{r.h.s}",
            "const": "\\operatorname{const}",
            "vac": "\\ket{0}",
            "op": "\\cO",
            "opshadow": "\\wave{\\op}",
            "fshadow": "\\wave{\\f}",
            "opcomposite": "\\op_{e}",
            "singletstructure": "r=1",
            "gram": "G",
            "fourpt": "\\cG",
            "blockstripped": "g",
            "blockdressed": "G",
            "CPWstripped": "\\psi",
            "CPWdressed": "\\Psi",
            "pT": "p_{\\perp}",
            "xT": "x_{\\perp}",
            "disc": "\\operatorname{Disc}",
            "fm": "\\operatorname{fm}",
            "vp": "\\vec{p}",
            "vx": "\\vec{x}",
            "hb": "\\bar{h}",
            "wbar": "\\bar{w}",
            "zbar": "\\bar{z}",
            "Tbar": "\\bar{T}",
            "Lbar": "\\bar{L}",
            "psib": "\\bar{\\psi}",
            "Vfuture": "\\bar{V}_{+}",
            "Vpast": "\\bar{V}_{-}",
            "Vcausal": "\\bar{V}_{\\pm}",
            "Faa": "{}_{1}F_{1}",
            "Fab": "{}_{1}F_{2}",
            "Fba": "{}_{2}F_{1}",
            "Fcb": "{}_{3}F_{2}",
            "half": "\\frac{1}{2}",
            "x": "\\times",
            "ox": "\\otimes",
            "os": "\\oplus",
            "w": "\\wedge",
            "inf": "\\infty",
            "oo": "\\infty",
            "p": "\\partial",
            "n": "\\nabla",
            "sign": "\\operatorname{sgn}",
            "EL": "\\operatorname{EL}",
            "directint": "\\int^{\\oplus}",
            "inverselimit": "\\varprojlim",
            "directlimit": "\\varinjlim",
            "im": "\\operatorname{im}",
            "coim": "\\operatorname{coim}",
            "coker": "\\operatorname{coker}",
            "opindex": "\\operatorname{index}",
            "spec": "\\operatorname{spec}",
            "Diff": "\\operatorname{Diff}",
            "Hom": "\\operatorname{Hom}",
            "Aut": "\\operatorname{Aut}",
            "End": "\\operatorname{End}",
            "Out": "\\operatorname{Out}",
            "Inn": "\\operatorname{Inn}",
            "id": "\\operatorname{id}",
            "ad": "\\operatorname{ad}",
            "Ad": "\\operatorname{Ad}",
            "codim": "\\operatorname{codim}",
            "vol": "\\operatorname{vol}",
            "ind": "\\operatorname{Ind}",
            "res": "\\operatorname{Res}",
            "rad": "\\operatorname{rad}",
            "H": "\\mathcal{H}",
            "M": "\\mathcal{M}",
            "ext": "\\operatorname{Ext}",
            "tor": "\\operatorname{Tor}",
            "setcat": "\\operatorname{Set}",
            "veccat": "\\operatorname{Vec}",
            "catcat": "\\operatorname{Cat}",
            "catA": "\\mathcal{A}",
            "catB": "\\mathcal{B}",
            "catC": "\\mathcal{C}",
            "catD": "\\mathcal{D}",
            "catE": "\\mathcal{E}",
            "catF": "\\mathcal{F}",
            "catG": "\\mathcal{G}",
            "Uvec": "\\mathbb{U}",
            "Vvec": "\\mathbb{V}",
            "Wvec": "\\mathbb{W}",
            "a": "\\alpha",
            "b": "\\beta",
            "c": "\\chi",
            "d": "\\delta",
            "D": "\\Delta",
            "e": "\\epsilon",
            "ve": "\\varepsilon",
            "g": "\\gamma",
            "G": "\\Gamma",
            "k": "\\kappa",
            "l": "\\lambda",
            "L": "\\Lambda",
            "lm": "\\lambda",
            "f": "\\phi",
            "vf": "\\varphi",
            "r": "\\rho",
            "s": "\\sigma",
            "S": "\\Sigma",
            "o": "\\omega",
            "O": "\\Omega",
            "t": "\\tau",
            "th": "\\theta",
            "Th": "\\Theta",
            "z": "\\zeta",
            "R": "\\mathbb{R}",
            "RR": "\\mathbb{R}",
            "Rnot": "\\mathbb{R}^{\\neq 0}",
            "Rneq": "\\mathbb{R}^{\\neq 0}",
            "Rgeq": "\\mathbb{R}^{\\geqslant 0}",
            "Rpositive": "\\mathbb{R}^{> 0}",
            "Rleq": "\\mathbb{R}^{\\leqslant 0}",
            "Rnegative": "\\mathbb{R}^{< 0}",
            "Z": "\\mathbb{Z}",
            "ZZ": "\\mathbb{Z}",
            "N": "\\mathbb{N}",
            "NN": "\\mathbb{N}",
            "Znot": "\\mathbb{Z}^{\\geqslant 0}",
            "Zneq": "\\mathbb{Z}^{\\neq 0}",
            "Zgeq": "\\mathbb{Z}^{\\geqslant 0}",
            "Zpositive": "\\mathbb{Z}^{> 0}",
            "Zleq": "\\mathbb{Z}^{\\leqslant 0}",
            "Znegative": "\\mathbb{Z}^{< 0}",
            "Q": "\\mathbb{Q}",
            "QQ": "\\mathbb{Q}",
            "Qnot": "\\mathbb{Q}^{\\geqslant 0}",
            "Qneq": "\\mathbb{Q}^{\\neq 0}",
            "Qgeq": "\\mathbb{Q}^{\\geqslant 0}",
            "Qpositive": "\\mathbb{Q}^{> 0}",
            "Qleq": "\\mathbb{Q}^{\\leqslant 0}",
            "Qnegative": "\\mathbb{Q}^{< 0}",
            "C": "\\mathbb{C}",
            "CC": "\\mathbb{CC}",
            "Cneq": "\\mathbb{C}^{\\neq 0}",
            "Cnot": "\\mathbb{C}^{\\neq 0}",
            "P": "\\mathbb{P}",
            "CP": "\\mathbb{CP}",
            "RP": "\\mathbb{RP}",
            "Qp": "\\mathbb{Q}_{p}",
            "Zp": "\\mathbb{Z}_{p}",
            "Up": "\\mathbb{U}_{p}",
            "spin": "\\operatorname{Spin}",
            "glie": "\\mathfrak{g}",
            "gllie": "\\mathfrak{gl}",
            "sllie": "\\mathfrak{sl}",
            "isllie": "\\mathfrak{isl}",
            "ulie": "\\mathfrak{u}",
            "sulie": "\\mathfrak{su}",
            "olie": "\\mathfrak{o}",
            "solie": "\\mathfrak{so}",
            "isolie": "\\mathfrak{iso}",
            "splie": "\\mathfrak{sp}",
            "nlie": "\\mathfrak{n}",
            "plie": "\\mathfrak{p}",
            "blie": "\\mathfrak{b}",
            "hlie": "\\mathfrak{h}",
            "klie": "\\mathfrak{k}",
            "cA": "\\mathcal{A}",
            "cB": "\\mathcal{B}",
            "cC": "\\mathcal{C}",
            "cD": "\\mathcal{D}",
            "cE": "\\mathcal{E}",
            "cF": "\\mathcal{F}",
            "cG": "\\mathcal{G}",
            "cH": "\\mathcal{H}",
            "cI": "\\mathcal{I}",
            "cJ": "\\mathcal{J}",
            "cK": "\\mathcal{K}",
            "cL": "\\mathcal{L}",
            "cM": "\\mathcal{M}",
            "cN": "\\mathcal{N}",
            "cO": "\\mathcal{O}",
            "cP": "\\mathcal{P}",
            "cQ": "\\mathcal{Q}",
            "cR": "\\mathcal{R}",
            "cS": "\\mathcal{S}",
            "cT": "\\mathcal{T}",
            "cU": "\\mathcal{U}",
            "cV": "\\mathcal{V}",
            "cW": "\\mathcal{W}",
            "cX": "\\mathcal{X}",
            "cY": "\\mathcal{Y}",
            "cZ": "\\mathcal{Z}"
        },
        environments: {
        },
    },
    showProcessingMessages: true,
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

