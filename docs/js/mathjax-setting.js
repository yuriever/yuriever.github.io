window.MathJax = {
    loader: {
        load: [
            "[tex]/tagformat",
            "[tex]/mathtools",
            "[tex]/empheq",
            "[tex]/cases",
            "[tex]/boldsymbol"
        ]
    },
    chtml: {
        scale: 19 / 20
    },
    svg: {
        scale: 19 / 20
    },
    tex: {
        // packages included
        packages: {
            "[+]": ["tagformat", "mathtools", "empheq", "cases", "boldsymbol"]
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
        	"tildee":[
        		"\\widetilde{#1}",
        		1
        	],
        	"wave":[
        		"\\widetilde{#1}",
        		1
        	],
        	"LR":[
        		"\\mleft(#1\\mright)",
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
        	"co":"{\\mspace{1mu}\\cdot\\mspace{1mu}}",
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
        	"DirectIntegral":"\\int^{\\oplus}",
        	"ip":[
        		"(#1,#2)",
        		2
        	],
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
        	"Vol":"\\operatorname{Vol}",
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
        	"mg":[
        		"\\Gamma\\biggl[\\genfrac..{0pt}{}{#1}{#2}\\biggr]",
        		2
        	],
        	"Faa":[
        		"{}_{1}F_{1}(#1)",
        		1
        	],
        	"Fab":[
        		"{}_{1}F_{2}(#1)",
        		1
        	],
        	"Fba":[
        		"{}_{2}F_{1}(#1)",
        		1
        	],
        	"Fcb":[
        		"{}_{3}F_{2}(#1)",
        		1
        	],
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
        	"ad":"\\operatorname{ad}",
        	"Ad":"\\operatorname{Ad}",
        	"Sym":"\\operatorname{Sym}",
        	"Alt":"\\operatorname{Alt}",
        	"limInverse":"\\varprojlim",
        	"limDirect":"\\varinjlim",
        	"vecspan":[
        		"\\{ #1 \\}",
        		1
        	],
        	"ideal":[
        		"\\langle #1 \\rangle",
        		1
        	],
        	"spec":"\\operatorname{spec}",
        	"Spec":"\\operatorname{Spec}",
        	"lie":[
        		"\\mathfrak{#1}",
        		1
        	],
        	"glie":"\\mathfrak{g}",
        	"UEA":[
        		"\\operatorname{U}(#1)",
        		1
        	],
        	"UEACenter":[
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
        	"Ind":"\\operatorname{Ind}",
        	"RR":"\\mathbb{R}",
        	"RRstar":"\\mathbb{R}^{*}",
        	"RRgeq":"\\mathbb{R}_{\\scriptscriptstyle{\\geqslant 0}}",
        	"RRleq":"\\mathbb{R}_{\\scriptscriptstyle{\\leqslant 0}}",
        	"RRg":"\\mathbb{R}_{\\scriptscriptstyle{> 0}}",
        	"RRl":"\\mathbb{R}_{\\scriptscriptstyle{< 0}}",
        	"ZZ":"\\mathbb{Z}",
        	"NN":"\\mathbb{N}",
        	"ZZgeq":"\\mathbb{Z}_{\\scriptscriptstyle{\\geqslant 0}}",
        	"ZZleq":"\\mathbb{Z}_{\\scriptscriptstyle{\\leqslant 0}}",
        	"ZZg":"\\mathbb{Z}_{\\scriptscriptstyle{> 0}}",
        	"ZZl":"\\mathbb{Z}_{\\scriptscriptstyle{< 0}}",
        	"QQ":"\\mathbb{Q}",
        	"QQstar":"\\mathbb{Q}^{*}",
        	"QQgeq":"\\mathbb{Q}_{\\scriptscriptstyle{\\geqslant 0}}",
        	"QQleq":"\\mathbb{Q}_{\\scriptscriptstyle{\\leqslant 0}}",
        	"QQg":"\\mathbb{Q}_{\\scriptscriptstyle{> 0}}",
        	"QQl":"\\mathbb{Q}_{\\scriptscriptstyle{< 0}}",
        	"CC":"\\mathbb{C}",
        	"CCstar":"\\mathbb{C}^{*}",
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
        	"inn":"\\mathsf{i}",
        	"out":"\\mathsf{o}",
        	"io":"\\mathsf{i}\/\\mathsf{o}",
        	"oi":"\\mathsf{o}\/\\mathsf{i}",
        	"vac":"\\ket{0}",
        	"op":"\\mathcal{O}",
        	"vev":[
        		"\\langle #1 \\rangle",
        		1
        	],
        	"vevv":[
        		"\\langle\\langle #1 \\rangle\\rangle",
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
        	"xy":[
        		"x_{#1},y_{#1}",
        		1
        	],
        	"zzb":[
        		"z_{#1},\\bar{z}_{#1}",
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
        	"signature":"{\\color{red}s}",
        	"shadow":"\\mathcal{S}",
        	"lightray":"\\mathcal{L}",
        	"CB":"G",
        	"CBC":"p",
        	"CPW":"\\Psi",
        	"CPWC":"\\rho",
        	"CPWCWithS":"\\sigma",
        	"hbar":"\\rlap{\\unicode{xAF}}h",
        	"eqqq":":=",
        	"id":"\\mathbf{1}",
        	"schannel":"\\mathsf{s}",
        	"tchannel":"\\mathsf{t}",
        	"uchannel":"\\mathsf{u}",
        	"vevv":[
        		"\\langle\\!\\langle#1\\rangle\\!\\rangle",
        		1
        	],
        	"TextInMath":[
        		"\\, \\text{ #1 }\\,",
        		1
        	],
        	"nn":"\\nonumber",
        	"red":[
        		"{\\color{red} #1}",
        		1
        	],
        	"green":[
        		"{\\color{green} #1}",
        		1
        	],
        	"blue":[
        		"{\\color{blue} #1}",
        		1
        	],
        	"cyan":[
        		"{\\color{cyan} #1}",
        		1
        	],
        	"magenta":[
        		"{\\color{magenta} #1}",
        		1
        	],
        	"yellow":[
        		"{\\color{yellow} #1}",
        		1
        	],
        	"brown":[
        		"{\\color{brown} #1}",
        		1
        	],
        	"orange":[
        		"{\\color{orange} #1}",
        		1
        	],
        	"pink":[
        		"{\\color{pink} #1}",
        		1
        	],
        	"purple":[
        		"{\\color{purple} #1}",
        		1
        	],
        	"const":"\\mathsf{const.}",
        	"lhs":"\\mathsf{l.h.s.}",
        	"rhs":"\\mathsf{r.h.s.}",
        	"pass":"{\\color{violet}\\bf[PASS]}"
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
