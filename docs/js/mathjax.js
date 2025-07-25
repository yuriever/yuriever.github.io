window.MathJax = {
    loader: {
        load: [
            "[tex]/tagformat",
            "[tex]/mathtools",
            "[tex]/empheq",
            "[tex]/cases"
        ]
    },
    chtml: {
        scale: 19/20
    },
    svg: {
        scale: 19/20
    },
    tex: {
        // packages included
        packages: {
            "[+]": ["tagformat", "mathtools", "empheq", "cases"]
        },
        // inline math mode delimiters
        inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"]
        ],
        // display math mode delimiters
        displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"]
        ],
        // use \$ to escape the dollar sign
        processEscapes: true,
        // process \begin{xxx}...\end{xxx} outside of math mode
        processEnvironments: true,
        // process \ref{...} outside of math mode
        processRefs: true,
        // pattern for recognizing numbers
        digits: /^(?:[0-9]+(?:\{,\}[0-9]{3})*(?:\.[0-9]*)?|\.[0-9]+)/,
        // tag options
        tags: "ams",
        tagSide: "right",
        tagIndent: "2em",
        tagformat: {
            number: (n) => n.toString(),
            tag: (tag) => "(" + tag + ")",
            id: (id) => "mjx-eqn:" + id.replace(/\s/g, "_"),
            url: (id, base) => base + "#" + encodeURIComponent(id)
        },
        useLabelIds: true,
        // MathJaxJSOverwrite-Macro-Begin
        macros: {
        	"barr":[
        		"\\overline{#1}",
        		1
        	],
        	"hatt":[
        		"\\widehat{#1}",
        		1
        	],
        	"wave":[
        		"\\widetilde{#1}",
        		1
        	],
        	"LR":[
        		"\\left(#1\\right)",
        		1
        	],
        	"LRa":[
        		"\\bigl(#1\\bigr)",
        		1
        	],
        	"LRb":[
        		"\\Bigl(#1\\Bigr)",
        		1
        	],
        	"LRc":[
        		"\\biggl(#1\\biggr)",
        		1
        	],
        	"LRd":[
        		"\\Biggl(#1\\Biggr)",
        		1
        	],
        	"eq":"=",
        	"eqq":"\\equiv",
        	"geq":"\\geqslant",
        	"ge":"\\geqslant",
        	"leq":"\\leqslant",
        	"le":"\\leqslant",
        	"peq":"\\phantom{{}={}}",
        	"mod":"\\bmod",
        	"half":"\\frac{1}{2}",
        	"xx":"\\times",
        	"ox":"\\otimes",
        	"oxx":"\\bigotimes",
        	"os":"\\oplus",
        	"oss":"\\bigoplus",
        	"ww":"\\wedge",
        	"vv":"\\vee",
        	"oo":"\\infty",
        	"pp":"\\partial",
        	"UU":"\\mathbb{U}",
        	"VV":"\\mathbb{V}",
        	"WW":"\\mathbb{W}",
        	"HH":"\\mathcal{H}",
        	"ip":[
        		"(#1,#2)",
        		2
        	],
        	"directIntegral":"\\int^{\\oplus}",
        	"set":[
        		"\\{ #1 \\}",
        		1
        	],
        	"given":"\\vert",
        	"Re":"\\operatorname{Re}",
        	"Im":"\\operatorname{Im}",
        	"intt":[
        		"\\int #1\\,",
        		1
        	],
        	"inttt":[
        		"\\int_{#2} #1\\,",
        		2
        	],
        	"intrange":[
        		"\\int_{#2}^{#3} #1\\,",
        		3
        	],
        	"Res":"\\operatorname{Res}",
        	"Disc":"\\operatorname{Disc}",
        	"volume":"\\operatorname{Vol}",
        	"abs":[
        		"\\left\\lvert #1 \\right\\rvert",
        		1
        	],
        	"norm":[
        		"\\left\\lVert #1 \\right\\rVert",
        		1
        	],
        	"sign":"\\operatorname{sign}",
        	"diag":"\\operatorname{diag}",
        	"gm":[
        		"\\Gamma[#1]",
        		1
        	],
        	"poch":[
        		"(#1)_{#2}",
        		2
        	],
        	"multiGamma":[
        		"\\Gamma\\biggl[\\genfrac..{0pt}{}{#1}{#2}\\biggr]",
        		2
        	],
        	"Faa":"{}_{1}F_{1}",
        	"Fab":"{}_{1}F_{2}",
        	"Fba":"{}_{2}F_{1}",
        	"Fcb":"{}_{3}F_{2}",
        	"Fpq":[
        		"\\,{}_{#1}F_{#2}\\biggl(\\genfrac..{0pt}{}{#3}{#4};#5\\biggr)",
        		5
        	],
        	"tp":"{\\scriptscriptstyle \\mathsf{T} }",
        	"tr":"\\operatorname{tr}",
        	"Tr":"\\operatorname{Tr}",
        	"dual":"\\prime",
        	"inj":"\\rightarrowtail",
        	"surj":"\\twoheadrightarrow",
        	"im":"\\operatorname{im}",
        	"coim":"\\operatorname{coim}",
        	"coker":"\\operatorname{coker}",
        	"codim":"\\operatorname{codim}",
        	"Aut":"\\operatorname{Aut}",
        	"End":"\\operatorname{End}",
        	"adjoint":"\\operatorname{ad}",
        	"Adjoint":"\\operatorname{Ad}",
        	"induce":"\\operatorname{Ind}",
        	"restrict":"\\operatorname{Res}",
        	"Sym":"\\operatorname{Sym}",
        	"Alt":"\\operatorname{Alt}",
        	"inverseLimit":"\\varprojlim",
        	"directLimit":"\\varinjlim",
        	"linearspan":[
        		"\\{ #1 \\}",
        		1
        	],
        	"ideal":[
        		"\\langle #1 \\rangle",
        		1
        	],
        	"spec":"\\operatorname{spec}",
        	"lie":[
        		"\\mathfrak{#1}",
        		1
        	],
        	"glie":"\\mathfrak{g}",
        	"UEA":[
        		"\\operatorname{U}(#1)",
        		1
        	],
        	"UEAC":[
        		"\\operatorname{ZU}(#1)",
        		1
        	],
        	"nlie":"\\mathfrak{n}",
        	"plie":"\\mathfrak{p}",
        	"blie":"\\mathfrak{b}",
        	"hlie":"\\mathfrak{h}",
        	"klie":"\\mathfrak{k}",
        	"gllie":"\\mathfrak{gl}",
        	"glgroup":"\\operatorname{GL}",
        	"olie":"\\mathfrak{o}",
        	"ogroup":"\\operatorname{O}",
        	"solie":"\\mathfrak{so}",
        	"sogroup":"\\operatorname{SO}",
        	"spingroup":"\\operatorname{Spin}",
        	"isolie":"\\mathfrak{iso}",
        	"isogroup":"\\operatorname{ISO}",
        	"ulie":"\\mathfrak{u}",
        	"ugroup":"\\operatorname{U}",
        	"sulie":"\\mathfrak{su}",
        	"sugroup":"\\operatorname{SU}",
        	"sllie":"\\mathfrak{sl}",
        	"slgroup":"\\operatorname{SL}",
        	"splie":"\\mathfrak{sp}",
        	"spgroup":"\\operatorname{Sp}",
        	"Diff":"\\operatorname{Diff}",
        	"Vir":"\\operatorname{Vir}",
        	"cat":[
        		"\\mathsf{#1}",
        		1
        	],
        	"catSet":"\\mathsf{Set}",
        	"catVec":"\\mathsf{Vec}",
        	"catCat":"\\mathsf{Cat}",
        	"catA":"\\mathsf{A}",
        	"catB":"\\mathsf{B}",
        	"catC":"\\mathsf{C}",
        	"catD":"\\mathsf{D}",
        	"catE":"\\mathsf{E}",
        	"catF":"\\mathsf{F}",
        	"catG":"\\mathsf{G}",
        	"Hom":"\\operatorname{Hom}",
        	"Ext":"\\operatorname{Ext}",
        	"Tor":"\\operatorname{Tor}",
        	"RR":"\\mathbb{R}",
        	"RRneq":"\\mathbb{R}^{*}",
        	"RRgeq":"\\mathbb{R}_{\\scriptscriptstyle{\\geqslant 0}}",
        	"RRleq":"\\mathbb{R}_{\\scriptscriptstyle{\\leqslant 0}}",
        	"RRg":"\\mathbb{R}_{\\scriptscriptstyle{> 0}}",
        	"RRl":"\\mathbb{R}_{\\scriptscriptstyle{< 0}}",
        	"ZZ":"\\mathbb{Z}",
        	"NN":"\\mathbb{N}",
        	"ZZneq":"\\mathbb{Z}^{*}",
        	"ZZgeq":"\\mathbb{Z}_{\\scriptscriptstyle{\\geqslant 0}}",
        	"ZZleq":"\\mathbb{Z}_{\\scriptscriptstyle{\\leqslant 0}}",
        	"ZZg":"\\mathbb{Z}_{\\scriptscriptstyle{> 0}}",
        	"ZZl":"\\mathbb{Z}_{\\scriptscriptstyle{< 0}}",
        	"QQ":"\\mathbb{Q}",
        	"QQneq":"\\mathbb{Q}^{*}",
        	"QQgeq":"\\mathbb{Q}_{\\scriptscriptstyle{\\geqslant 0}}",
        	"QQleq":"\\mathbb{Q}_{\\scriptscriptstyle{\\leqslant 0}}",
        	"QQg":"\\mathbb{Q}_{\\scriptscriptstyle{> 0}}",
        	"QQl":"\\mathbb{Q}_{\\scriptscriptstyle{< 0}}",
        	"CC":"\\mathbb{C}",
        	"CCneq":"\\mathbb{C}^{*}",
        	"CP":"\\mathbb{CP}",
        	"RP":"\\mathbb{RP}",
        	"Qp":"\\mathbb{Q}_{p}",
        	"Zp":"\\mathbb{Z}_{p}",
        	"Up":"\\mathbb{U}_{p}",
        	"cA":"\\mathcal{A}",
        	"cB":"\\mathcal{B}",
        	"cC":"\\mathcal{C}",
        	"cD":"\\mathcal{D}",
        	"cE":"\\mathcal{E}",
        	"cF":"\\mathcal{F}",
        	"cG":"\\mathcal{G}",
        	"cH":"\\mathcal{H}",
        	"cI":"\\mathcal{I}",
        	"cJ":"\\mathcal{J}",
        	"cK":"\\mathcal{K}",
        	"cL":"\\mathcal{L}",
        	"cM":"\\mathcal{M}",
        	"cN":"\\mathcal{N}",
        	"cO":"\\mathcal{O}",
        	"cP":"\\mathcal{P}",
        	"cQ":"\\mathcal{Q}",
        	"cR":"\\mathcal{R}",
        	"cS":"\\mathcal{S}",
        	"cT":"\\mathcal{T}",
        	"cU":"\\mathcal{U}",
        	"cV":"\\mathcal{V}",
        	"cW":"\\mathcal{W}",
        	"cX":"\\mathcal{X}",
        	"cY":"\\mathcal{Y}",
        	"cZ":"\\mathcal{Z}",
        	"bb":[
        		"\\boldsymbol{#1}",
        		1
        	],
        	"ddx":[
        		"d^{d}x_{#1}",
        		1
        	],
        	"ddp":[
        		"\\frac{d^{d}p_{#1}}{(2\\pi)^{d}}",
        		1
        	],
        	"xy":[
        		"x_{#1},y_{#1}",
        		1
        	],
        	"dxy":[
        		"dx_{#1}dy_{#1}",
        		1
        	],
        	"zzb":[
        		"z_{#1},\\bar{z}_{#1}",
        		1
        	],
        	"dzzb":[
        		"d^{2}z_{#1}",
        		1
        	],
        	"inn":"\\text{in}",
        	"out":"\\text{out}",
        	"io":"\\text{in\/out}",
        	"oi":"\\text{out\/in}",
        	"vac":"\\ket{0}",
        	"vev":[
        		"\\langle #1 \\rangle",
        		1
        	],
        	"ev":[
        		"\\langle #1 \\rangle",
        		1
        	],
        	"bra":[
        		"\\langle #1 \\vert",
        		1
        	],
        	"ket":[
        		"\\vert\\mathopen{} #1 \\rangle",
        		1
        	],
        	"braket":[
        		"\\langle #1 \\vert\\mathopen{} #2 \\rangle",
        		2
        	],
        	"brakets":[
        		"\\langle #1 \\vert\\mathopen{} #2 \\vert\\mathopen{} #3 \\rangle",
        		3
        	],
        	"op":"\\mathcal{O}",
        	"braketA":[
        		"\\langle #1 \\rangle",
        		1
        	],
        	"abraket":"\\braketA",
        	"braketS":[
        		"[ #1 ]",
        		1
        	],
        	"sbraket":"\\braketS",
        	"braketAS":[
        		"\\langle #1 \\mathclose{}|\\mathopen{} #2 \\mathclose{}|\\mathopen{} #3 ]",
        		3
        	],
        	"braketSA":[
        		"[ #1 \\mathclose{}|\\mathopen{} #2 \\mathclose{}|\\mathopen{} #3 \\rangle",
        		3
        	],
        	"braA":[
        		"\\langle #1 \\mathclose{|}",
        		1
        	],
        	"abra":"\\braA",
        	"ketA":[
        		"\\mathopen{|} #1 \\rangle",
        		1
        	],
        	"aket":"\\ketA",
        	"braS":[
        		"[ #1 \\mathclose{|}",
        		1
        	],
        	"sbra":"\\braS",
        	"ketS":[
        		"\\mathopen{|} #1 ]",
        		1
        	],
        	"sket":"\\ketS",
        	"sphere":[
        		"\\operatorname{S}^{#1}",
        		1
        	],
        	"hyperbolic":[
        		"\\operatorname{H}_{#1}",
        		1
        	],
        	"lightcone":[
        		"\\operatorname{LC}_{#1}",
        		1
        	],
        	"lightconeproj":[
        		"\\operatorname{PC}_{#1}",
        		1
        	],
        	"ads":[
        		"\\operatorname{AdS}_{#1}",
        		1
        	],
        	"eads":[
        		"\\operatorname{EAdS}_{#1}",
        		1
        	],
        	"ds":[
        		"\\operatorname{dS}_{#1}",
        		1
        	],
        	"kds":[
        		"\\operatorname{KdS}_{#1}",
        		1
        	],
        	"vx":"\\vec{x}",
        	"vy":"\\vec{y}",
        	"vp":"\\vec{p}",
        	"vq":"\\vec{q}",
        	"vk":"\\vec{k}",
        	"phat":"\\hat{p}",
        	"qhat":"\\hat{q}",
        	"khat":"\\hat{k}",
        	"zb":"\\bar{z}",
        	"wb":"\\bar{w}",
        	"hb":"\\bar{h}",
        	"Tb":"\\bar{T}",
        	"Lb":"\\bar{L}",
        	"ppb":"\\bar{\\partial}",
        	"psib":"\\bar{\\psi}",
        	"chib":"\\bar{\\chi}",
        	"normalOrder":[
        		":\\mathrel{#1}:",
        		1
        	],
        	"halfdim":"\\frac{d}{2}",
        	"signature":"{\\color{red}s}",
        	"polar":"{\\color{red}n}",
        	"shadow":"\\mathcal{S}",
        	"lightray":"\\mathcal{L}",
        	"CB":"G",
        	"CBC":"p",
        	"CPW":"\\Psi",
        	"CPWC":"\\rho",
        	"CPWCWithS":"\\sigma",
        	"rep":[
        		"\\mathcal{M}_{#1}",
        		1
        	],
        	"urep":[
        		"\\mathcal{P}_{#1}",
        		1
        	],
        	"hbar":"\\rlap{\\unicode{xAF}}h",
        	"eqqq":":=",
        	"id":"\\mathbf{1}",
        	"schannel":"\\mathsf{s}",
        	"tchannel":"\\mathsf{t}",
        	"uchannel":"\\mathsf{u}",
        	"textInMath":[
        		"\\, \\text{ #1 }\\,",
        		1
        	],
        	"nn":"\\nonumber",
        	"mathred":[
        		"{\\color{red} #1}",
        		1
        	],
        	"mathblue":[
        		"{\\color{blue} #1}",
        		1
        	],
        	"mathgreen":[
        		"{\\color{orange} #1}",
        		1
        	],
        	"mathorange":[
        		"{\\color{orange} #1}",
        		1
        	],
        	"mathpurple":[
        		"{\\color{purple} #1}",
        		1
        	],
        	"mathpink":[
        		"{\\color{pink} #1}",
        		1
        	],
        	"const":"\\mathsf{const.}",
        	"lhs":"\\mathsf{l.h.s.}",
        	"rhs":"\\mathsf{r.h.s.}"
        },
        // MathJaxJSOverwrite-Macro-End
        environments: {}
    },
    showProcessingMessages: true,
    options: {
        ignoreHtmlClass: ".",
        processHtmlClass: "arithmatex"
    }
};
