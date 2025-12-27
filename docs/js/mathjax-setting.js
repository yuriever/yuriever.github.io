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
        	"hbar":"\\rlap{\\unicode{xAF}}h",
        	"mleft":"\\mathopen{}\\left",
        	"mright":"\\right",
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
        	"lhs":"\\mathsf{l.h.s.}",
        	"rhs":"\\mathsf{r.h.s.}",
        	"const":"\\mathsf{const.}",
        	"rest":"(\\cdots)",
        	"pass":"{\\color{gray}\\mathbf{PASS}}",
        	"TextInMath":[
        		"\\, \\text{ #1 }\\,",
        		1
        	],
        	"nn":"\\nonumber",
        	"id":"\\mathbf{1}",
        	"schannel":"\\mathsf{s}",
        	"tchannel":"\\mathsf{t}",
        	"uchannel":"\\mathsf{u}",
        	"inn":"{\\color{Red}\\mathsf{i}}",
        	"out":"{\\color{Blue}\\mathsf{o}}",
        	"innout":"{\\color{Red}\\mathsf{i}}\/{\\color{Blue}\\mathsf{o}}",
        	"outinn":"{\\color{Blue}\\mathsf{o}}\/{\\color{Red}\\mathsf{i}}",
        	"tacp":"{\\color{Purple}\\pmb{+}}",
        	"tacm":"{\\color{Purple}\\pmb{-}}",
        	"tacpm":"{\\color{Purple}\\pmb{\\pm}}",
        	"tacmp":"{\\color{Purple}\\pmb{\\mp}}",
        	"sphere":[
        		"\\operatorname{S}^{#1}",
        		1
        	],
        	"hyperbolic":[
        		"\\operatorname{H}^{#1}",
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
        	"lightcone":[
        		"\\operatorname{LC}_{#1}",
        		1
        	],
        	"lightconeproj":[
        		"\\operatorname{PC}_{#1}",
        		1
        	],
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
        	"signp":"\\mathord{+}",
        	"signm":"\\mathord{-}",
        	"signpm":"\\mathord{\\pm}",
        	"signmp":"\\mathord{\\mp}",
        	"eq":"=",
        	"eqq":"\\equiv",
        	"eqqq":"\\coloneqq",
        	"geq":"\\geqslant",
        	"ge":"\\geqslant",
        	"leq":"\\leqslant",
        	"le":"\\leqslant",
        	"peq":"\\phantom{{}={}}",
        	"xx":"\\times",
        	"co":"\\mathclose{}{\\mspace{1mu}\\cdot\\mspace{1mu}}\\mathopen{}",
        	"ox":"\\otimes",
        	"oxx":"\\bigotimes",
        	"os":"\\oplus",
        	"oss":"\\bigoplus",
        	"ww":"\\wedge",
        	"vv":"\\vee",
        	"pp":"\\partial",
        	"ppb":"\\bar{\\partial}",
        	"mod":"\\bmod",
        	"eval":[
        		"\\mleft. #1 \\mright\\vert_{#2}",
        		2
        	],
        	"sign":"\\operatorname{sign}",
        	"abs":[
        		"\\left\\lvert #1 \\right\\rvert",
        		1
        	],
        	"gm":[
        		"\\Gamma\\mleft[#1\\mright]",
        		1
        	],
        	"bt":[
        		"B\\mleft(#1\\mright)",
        		1
        	],
        	"mg":[
        		"\\Gamma\\mleft[\\genfrac..{0pt}{}{#1}{#2}\\mright]",
        		2
        	],
        	"gmShort":[
        		"\\Gamma\\mleft[#1\\mright]",
        		1
        	],
        	"btShort":[
        		"B\\mleft(#1\\mright)",
        		1
        	],
        	"mgShort":[
        		"\\Gamma\\mleft[\\genfrac..{0pt}{}{#1}{#2}\\mright]",
        		2
        	],
        	"Faa":[
        		"{}_{1}F_{1}\\mleft(#1\\mright)",
        		1
        	],
        	"Fab":[
        		"{}_{1}F_{2}\\mleft(#1\\mright)",
        		1
        	],
        	"Fba":[
        		"{}_{2}F_{1}\\mleft(#1\\mright)",
        		1
        	],
        	"Fcb":[
        		"{}_{3}F_{2}\\mleft(#1\\mright)",
        		1
        	],
        	"Fpq":[
        		"\\,{}_{#1}F_{#2}\\mleft(\\genfrac..{0pt}{}{#3}{#4};#5\\mright)",
        		5
        	],
        	"set":[
        		"\\lbrace #1 \\rbrace",
        		1
        	],
        	"given":"\\,\\vert\\,\\mathopen{}",
        	"HH":"\\mathcal{H}",
        	"ip":[
        		"\\left\\lparen #1 , #2 \\right\\rparen",
        		2
        	],
        	"norm":[
        		"\\left\\lVert #1 \\right\\rVert",
        		1
        	],
        	"DirectIntegral":"\\int^{\\oplus}",
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
        	"diag":"\\operatorname{diag}",
        	"tr":"\\operatorname{tr}",
        	"Tr":"\\operatorname{Tr}",
        	"tp":"{\\scriptscriptstyle\\mathsf{T}}",
        	"dual":"\\prime",
        	"Aut":"\\operatorname{Aut}",
        	"End":"\\operatorname{End}",
        	"ad":"\\operatorname{ad}",
        	"Ad":"\\operatorname{Ad}",
        	"Sym":"\\operatorname{Sym}",
        	"Alt":"\\operatorname{Alt}",
        	"vecspan":[
        		"\\left\\lbrace #1 \\right\\rbrace",
        		1
        	],
        	"ideal":[
        		"\\left\\langle #1 \\right\\rangle",
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
        		"\\operatorname{Z}(#1)",
        		1
        	],
        	"hlie":"\\mathfrak{h}",
        	"nlie":"\\mathfrak{n}",
        	"blie":"\\mathfrak{b}",
        	"klie":"\\mathfrak{k}",
        	"plie":"\\mathfrak{p}",
        	"zlie":"\\mathfrak{z}",
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
        	"Ind":"\\operatorname{Ind}",
        	"Ext":"\\operatorname{Ext}",
        	"Tor":"\\operatorname{Tor}",
        	"inj":"\\rightarrowtail",
        	"surj":"\\twoheadrightarrow",
        	"coker":"\\operatorname{coker}",
        	"im":"\\operatorname{im}",
        	"coim":"\\operatorname{coim}",
        	"codim":"\\operatorname{codim}",
        	"limInverse":"\\varprojlim",
        	"limDirect":"\\varinjlim",
        	"RR":"\\mathbb{R}",
        	"RRstar":"\\mathbb{R}^{*}",
        	"RRgeq":"\\mathbb{R}_{\\scriptscriptstyle \\geqslant 0}",
        	"RRleq":"\\mathbb{R}_{\\scriptscriptstyle \\leqslant 0}",
        	"RRg":"\\mathbb{R}_{\\scriptscriptstyle > 0}",
        	"RRl":"\\mathbb{R}_{\\scriptscriptstyle < 0}",
        	"ZZ":"\\mathbb{Z}",
        	"NN":"\\mathbb{N}",
        	"ZZgeq":"\\mathbb{Z}_{\\scriptscriptstyle \\geqslant 0}",
        	"ZZleq":"\\mathbb{Z}_{\\scriptscriptstyle \\leqslant 0}",
        	"ZZg":"\\mathbb{Z}_{\\scriptscriptstyle > 0}",
        	"ZZl":"\\mathbb{Z}_{\\scriptscriptstyle < 0}",
        	"QQ":"\\mathbb{Q}",
        	"QQstar":"\\mathbb{Q}^{*}",
        	"QQgeq":"\\mathbb{Q}_{\\scriptscriptstyle \\geqslant 0}",
        	"QQleq":"\\mathbb{Q}_{\\scriptscriptstyle \\leqslant 0}",
        	"QQg":"\\mathbb{Q}_{\\scriptscriptstyle > 0}",
        	"QQl":"\\mathbb{Q}_{\\scriptscriptstyle < 0}",
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
        	"half":"\\frac{1}{2}",
        	"oo":"\\infty",
        	"vac":"\\ket{0}",
        	"op":"\\mathcal{O}",
        	"ev":[
        		"\\langle #1 \\rangle",
        		1
        	],
        	"vev":[
        		"\\langle #1 \\rangle",
        		1
        	],
        	"vevv":[
        		"\\langle\\!\\langle #1 \\rangle\\!\\rangle",
        		1
        	],
        	"bra":[
        		"\\langle #1 \\rvert",
        		1
        	],
        	"ket":[
        		"\\lvert #1 \\rangle",
        		1
        	],
        	"braket":[
        		"\\langle #1 \\mathclose{}\\vert\\mathopen{} #2 \\rangle",
        		2
        	],
        	"brakett":[
        		"\\langle #1 \\mathclose{}\\vert\\mathopen{} #2 \\mathclose{}\\vert\\mathopen{} #3 \\rangle",
        		3
        	],
        	"braA":[
        		"\\langle #1 \\rvert",
        		1
        	],
        	"ketA":[
        		"\\lvert #1 \\rangle",
        		1
        	],
        	"braS":[
        		"\\mathopen{\\lbrack} #1 \\rvert",
        		1
        	],
        	"ketS":[
        		"\\lvert #1 \\mathclose{\\rbrack}",
        		1
        	],
        	"braketA":[
        		"\\langle #1 \\rangle",
        		1
        	],
        	"braketS":[
        		"\\mathopen{\\lbrack} #1 \\mathclose{\\rbrack}",
        		1
        	],
        	"braketAS":[
        		"\\langle #1 \\mathclose{}\\vert\\mathopen{} #2 \\mathclose{}\\vert\\mathopen{} #3 \\mathclose{\\rbrack}",
        		3
        	],
        	"braketSA":[
        		"\\mathopen{\\lbrack} #1 \\mathclose{}\\vert\\mathopen{} #2 \\mathclose{}\\vert\\mathopen{} #3 \\rangle",
        		3
        	],
        	"shadow":"\\mathcal{S}",
        	"lightray":"\\mathcal{L}",
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
        	"psib":"\\bar{\\psi}",
        	"chib":"\\bar{\\chi}",
        	"signature":"{\\color{red}s}"
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
