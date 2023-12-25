window.MathJax = {
    loader: {
        load: ['[tex]/tagformat', '[tex]/configmacros', '[tex]/physics']
    },
    tex: {
        // packages included
        packages: { '[+]': ['tagformat', 'configmacros', 'physics'] },
        // inline math mode delimiters
        physics: {
            italicdiff: true,
            arrowdel: false
        },
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
            "en": [
                "(#1)",
                "1"
            ],
            "check": [
                "\\widecheck{#1}",
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
            "wave": [
                "\\widetilde{#1}",
                "1"
            ],
            "poch": [
                "(#1)_{#2}",
                "2"
            ],
            "Fpq": [
                "\\,{}_{#1}F_{#2}\\biggl(\\genfrac..{0pt}{}{#3}{#4};#5\\biggr)",
                "5"
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
            "ip": [
                "(#1,#2)",
                "2"
            ],
            "dual": [
                "{#1}^\\vee",
                "1"
            ],
            "lie": [
                "\\mathfrak{#1}",
                "1"
            ],
            "set": [
                "\\{ #1 \\}",
                "1"
            ],
            "linearSpan": [
                "\\operatorname{span}\\{ #1 \\}",
                "1"
            ],
            "modd": [
                "\\, \\operatorname{mod} #1 ",
                "1"
            ],
            "der": [
                "\\frac{d}{d #1}",
                "1"
            ],
            "vev": [
                "\\langle #1 \\rangle",
                "1"
            ],
            "bra": [
                "{\\langle {#1} |}",
                "1"
            ],
            "ket": [
                "{| {#1} \\rangle}",
                "1"
            ],
            "braket": [
                "{\\langle {#1}|{#2} \\rangle}",
                "2"
            ],
            "sphere": [
                "\\operatorname{S}^{#1}",
                "1"
            ],
            "hyperbolic": [
                "\\operatorname{H}_{#1}",
                "1"
            ],
            "lightcone": [
                "\\operatorname{LC}_{#1}",
                "1"
            ],
            "lightconeproj": [
                "\\operatorname{PC}_{#1}",
                "1"
            ],
            "ds": [
                "\\operatorname{dS}_{#1}",
                "1"
            ],
            "kds": [
                "\\operatorname{KdS}_{#1}",
                "1"
            ],
            "ads": [
                "\\operatorname{AdS}_{#1}",
                "1"
            ],
            "eads": [
                "\\operatorname{EAdS}_{#1}",
                "1"
            ],
            "rep": [
                "\\mathcal{V}_{#1}",
                "1"
            ],
            "urep": [
                "\\mathcal{E}_{#1}",
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
            "normalOrder": [
                "\\vcentcolon\\mathrel{#1}\\vcentcolon",
                "1"
            ],
            "pmat": [
                "\\pmqty{#1}",
                "1"
            ],
            "Pmat": [
                "\\Pmqty{#1}",
                "1"
            ],
            "bmat": [
                "\\bmqty{#1}",
                "1"
            ],
            "vmat": [
                "\\vmqty{#1}",
                "1"
            ],
            "textInMath": [
                "\\, \\text{ #1 }\\, ",
                "1"
            ],
            "mathInTitle": [
                "\\texorpdfstring{$#1$}{}",
                "1"
            ],
            "tableVerticalSpace": [
                "\\newcommand{\\arraystretch}{#1}",
                "1"
            ],
            "ppair": [
                "\\left(#1\\right)",
                "1"
            ],
            "bpair": [
                "\\left[#1\\right]",
                "1"
            ],
            "vpair": [
                "\\left|#1\\right|",
                "1"
            ],
            "Bpair": [
                "\\left\\{#1\\right\\}",
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
            "schannelcn": "$s$-道",
            "tchannelcn": "$t$-道",
            "uchannelcn": "$u$-道",
            "a": "\\alpha",
            "b": "\\beta",
            "c": "\\chi",
            "d": "\\delta",
            "e": "\\epsilon",
            "f": "\\phi",
            "g": "\\gamma",
            "h": "\\eta",
            "i": "\\iota",
            "j": "\\digamma",
            "k": "\\kappa",
            "l": "\\lambda",
            "m": "\\mu",
            "n": "\\nu",
            "o": "\\omicron",
            "p": "\\pi",
            "q": "\\theta",
            "r": "\\rho",
            "s": "\\sigma",
            "t": "\\tau",
            "u": "\\upsilon",
            "v": "\\varphi",
            "w": "\\omega",
            "x": "\\xi",
            "y": "\\psi",
            "z": "\\zeta",
            "geq": "\\geqslant",
            "leq": "\\leqslant",
            "Faa": "{}_{1}F_{1}",
            "Fab": "{}_{1}F_{2}",
            "Fba": "{}_{2}F_{1}",
            "Fcb": "{}_{3}F_{2}",
            "residue": "\\operatorname{Res}",
            "disc": "\\operatorname{Disc}",
            "volume": "\\operatorname{Vol}",
            "id": "\\operatorname{id}",
            "im": "\\operatorname{im}",
            "coim": "\\operatorname{coim}",
            "coker": "\\operatorname{coker}",
            "dim": "\\operatorname{dim}",
            "codim": "\\operatorname{codim}",
            "Spec": "\\operatorname{Spec}",
            "Aut": "\\operatorname{Aut}",
            "End": "\\operatorname{End}",
            "Outer": "\\operatorname{Out}",
            "Inner": "\\operatorname{Inn}",
            "adjoint": "\\operatorname{ad}",
            "Adjoint": "\\operatorname{Ad}",
            "induce": "\\operatorname{Ind}",
            "restrict": "\\operatorname{Res}",
            "inverseLimit": "\\varprojlim",
            "directLimit": "\\varinjlim",
            "directIntegral": "\\int^{\\oplus}",
            "catSet": "\\operatorname{Set}",
            "catVec": "\\operatorname{Vec}",
            "catCat": "\\operatorname{Cat}",
            "catA": "\\mathcal{A}",
            "catB": "\\mathcal{B}",
            "catC": "\\mathcal{C}",
            "catD": "\\mathcal{D}",
            "catE": "\\mathcal{E}",
            "catF": "\\mathcal{F}",
            "catG": "\\mathcal{G}",
            "Hom": "\\operatorname{Hom}",
            "Ext": "\\operatorname{Ext}",
            "Tor": "\\operatorname{Tor}",
            "RR": "\\mathbb{R}",
            "Rneq": "\\mathbb{R}^{\\neq 0}",
            "Rgeq": "\\mathbb{R}^{\\geqslant 0}",
            "Rleq": "\\mathbb{R}^{\\leqslant 0}",
            "Rpositive": "\\mathbb{R}^{> 0}",
            "Rnegative": "\\mathbb{R}^{< 0}",
            "ZZ": "\\mathbb{Z}",
            "NN": "\\mathbb{N}",
            "Zneq": "\\mathbb{Z}^{\\neq 0}",
            "Zgeq": "\\mathbb{Z}^{\\geqslant 0}",
            "Zleq": "\\mathbb{Z}^{\\leqslant 0}",
            "Zpositive": "\\mathbb{Z}^{> 0}",
            "Znegative": "\\mathbb{Z}^{< 0}",
            "QQ": "\\mathbb{Q}",
            "Qneq": "\\mathbb{Q}^{\\neq 0}",
            "Qgeq": "\\mathbb{Q}^{\\geqslant 0}",
            "Qleq": "\\mathbb{Q}^{\\leqslant 0}",
            "Qpositive": "\\mathbb{Q}^{> 0}",
            "Qnegative": "\\mathbb{Q}^{< 0}",
            "CC": "\\mathbb{C}",
            "Cneq": "\\mathbb{C}^{\\neq 0}",
            "CP": "\\mathbb{CP}",
            "RP": "\\mathbb{RP}",
            "Qp": "\\mathbb{Q}_{p}",
            "Zp": "\\mathbb{Z}_{p}",
            "Up": "\\mathbb{U}_{p}",
            "glie": "\\mathfrak{g}",
            "nlie": "\\mathfrak{n}",
            "plie": "\\mathfrak{p}",
            "blie": "\\mathfrak{b}",
            "hlie": "\\mathfrak{h}",
            "klie": "\\mathfrak{k}",
            "gllie": "\\mathfrak{gl}",
            "glgroup": "\\operatorname{GL}",
            "olie": "\\mathfrak{o}",
            "ogroup": "\\operatorname{O}",
            "solie": "\\mathfrak{so}",
            "sogroup": "\\operatorname{SO}",
            "spingroup": "\\operatorname{Spin}",
            "isolie": "\\mathfrak{iso}",
            "isogroup": "\\operatorname{ISO}",
            "ulie": "\\mathfrak{u}",
            "ugroup": "\\operatorname{U}",
            "sulie": "\\mathfrak{su}",
            "sugroup": "\\operatorname{SU}",
            "sllie": "\\mathfrak{sl}",
            "slgroup": "\\operatorname{SL}",
            "splie": "\\mathfrak{sp}",
            "spgroup": "\\operatorname{Sp}",
            "Diff": "\\operatorname{Diff}",
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
            "cZ": "\\mathcal{Z}",
            "xx": "\\times",
            "ox": "\\otimes",
            "os": "\\oplus",
            "ww": "\\wedge",
            "oo": "\\infty",
            "HH": "\\mathcal{H}",
            "half": "\\frac{1}{2}",
            "sign": "\\operatorname{sgn}",
            "peq": "\\phantom{=}",
            "lhs": "\\text{l.h.s}",
            "rhs": "\\text{r.h.s}",
            "const": "\\operatorname{const}",
            "pp": "\\partial",
            "schannel": "\\ifmmode {(s)} \\else $s$-channel \\fi",
            "tchannel": "\\ifmmode {(t)} \\else $t$-channel \\fi",
            "uchannel": "\\ifmmode {(u)} \\else $u$-channel \\fi",
            "halfdim": "\\frac{d}{2}",
            "vac": "\\ket{0}",
            "op": "\\mathcal{O}",
            "fourPoint": "\\cG",
            "blockStripped": "g",
            "blockDressed": "G",
            "partialWaveStripped": "\\psi",
            "partialWaveDressed": "\\Psi",
            "fm": "\\operatorname{fm}",
            "vp": "\\vec{p}",
            "vx": "\\vec{x}",
            "hb": "\\bar{h}",
            "wbar": "\\bar{w}",
            "zbar": "\\bar{z}",
            "Tbar": "\\bar{T}",
            "Lbar": "\\bar{L}",
            "psibar": "\\bar{\\psi}",
            "qiff": "\\qq{iff}",
            "nn": "\\nonumber",
            "nnn": "\\addtocounter{equation}{1}\\tag{\\theequation}"
        },
        environments: {
        },
    },
    showProcessingMessages: true,
    options: {
        ignoreHtmlClass: '.',
        processHtmlClass: 'arithmatex'
    }
};

