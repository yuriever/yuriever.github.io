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
		// begin macros
		macros: {
			"bar":[
				"\\overline{#1}",
				"1"
			],
			"hat":[
				"\\widehat{#1}",
				"1"
			],
			"wave":[
				"\\widetilde{#1}",
				"1"
			],
			"gm":[
				"\\Gamma[#1]",
				"1"
			],
			"poch":[
				"(#1)_{#2}",
				"2"
			],
			"Fpq":[
				"\\,{}_{#1}F_{#2}\\biggl(\\genfrac..{0pt}{}{#3}{#4};#5\\biggr)",
				"5"
			],
			"multiGamma":[
				"\\Gamma\\biggl[\\genfrac..{0pt}{}{#1}{#2}\\biggr]",
				"2"
			],
			"set":[
				"\\{ #1 \\}",
				"1"
			],
			"linearspan":[
				"\\{ #1 \\}",
				"1"
			],
			"ideal":[
				"\\langle #1 \\rangle",
				"1"
			],
			"intt":[
				"\\int #1\\,",
				"1"
			],
			"inttt":[
				"\\int_{#2} #1\\,",
				"2"
			],
			"intttt":[
				"\\int_{#2}^{#3} #1\\,",
				"3"
			],
			"intrange":[
				"\\int_{#2}^{#3} #1\\,",
				"3"
			],
			"ip":[
				"(#1,#2)",
				"2"
			],
			"cat":[
				"\\mathsf{#1}",
				"1"
			],
			"lie":[
				"\\mathfrak{#1}",
				"1"
			],
			"ddx":[
				"d^{d}x_{#1}",
				"1"
			],
			"ddp":[
				"d^{d}p_{#1}",
				"1"
			],
			"xy":[
				"x_{#1},y_{#1}",
				"1"
			],
			"dxy":[
				"dx_{#1}dy_{#1}",
				"1"
			],
			"zzb":[
				"z_{#1},\\bar{z}_{#1}",
				"1"
			],
			"dzzb":[
				"d^{2}z_{#1}",
				"1"
			],
			"vev":[
				"\\langle #1 \\rangle",
				"1"
			],
			"bra":[
				"{\\langle {#1} |}",
				"1"
			],
			"ket":[
				"{| {#1} \\rangle}",
				"1"
			],
			"braket":[
				"{\\langle {#1}|{#2} \\rangle}",
				"2"
			],
			"sphere":[
				"\\operatorname{S}^{#1}",
				"1"
			],
			"hyperbolic":[
				"\\operatorname{H}_{#1}",
				"1"
			],
			"lightcone":[
				"\\operatorname{LC}_{#1}",
				"1"
			],
			"lightconeproj":[
				"\\operatorname{PC}_{#1}",
				"1"
			],
			"ads":[
				"\\operatorname{AdS}_{#1}",
				"1"
			],
			"eads":[
				"\\operatorname{EAdS}_{#1}",
				"1"
			],
			"ds":[
				"\\operatorname{dS}_{#1}",
				"1"
			],
			"kds":[
				"\\operatorname{KdS}_{#1}",
				"1"
			],
			"rep":[
				"\\mathcal{V}_{#1}",
				"1"
			],
			"urep":[
				"\\mathcal{E}_{#1}",
				"1"
			],
			"unitaryDual":[
				"\\wave{#1}",
				"1"
			],
			"normalOrder":[
				":\\mathrel{#1}:",
				"1"
			],
			"pmat":[
				"\\pmqty{#1}",
				"1"
			],
			"bmat":[
				"\\bmqty{#1}",
				"1"
			],
			"cmat":[
				"\\mqty{#1}",
				"1"
			],
			"vmat":[
				"\\vmqty{#1}",
				"1"
			],
			"textInMath":[
				"\\, \\text{ #1 }\\, ",
				"1"
			],
			"ppair":[
				"\\left(#1\\right)",
				"1"
			],
			"bpair":[
				"\\left[#1\\right]",
				"1"
			],
			"cpair":[
				"\\left\\{#1\\right\\}",
				"1"
			],
			"vpair":[
				"\\left|#1\\right|",
				"1"
			],
			"a":"\\alpha",
			"b":"\\beta",
			"c":"\\chi",
			"d":"\\delta",
			"e":"\\epsilon",
			"f":"\\phi",
			"g":"\\gamma",
			"h":"\\eta",
			"i":"\\iota",
			"j":"\\digamma",
			"k":"\\kappa",
			"l":"\\lambda",
			"m":"\\mu",
			"n":"\\nu",
			"o":"\\omicron",
			"p":"\\pi",
			"q":"\\theta",
			"r":"\\rho",
			"s":"\\sigma",
			"t":"\\tau",
			"u":"\\upsilon",
			"v":"\\varphi",
			"w":"\\omega",
			"x":"\\xi",
			"y":"\\psi",
			"z":"\\zeta",
			"eq":"=",
			"eqq":"\\equiv",
			"geq":"\\geqslant",
			"ge":"\\geqslant",
			"leq":"\\leqslant",
			"le":"\\leqslant",
			"peq":"\\phantom{{}={}}",
			"Faa":"{}_{1}F_{1}",
			"Fab":"{}_{1}F_{2}",
			"Fba":"{}_{2}F_{1}",
			"Fcb":"{}_{3}F_{2}",
			"xx":"\\times",
			"ox":"\\otimes",
			"oxbig":"\\bigotimes",
			"os":"\\oplus",
			"osbig":"\\bigoplus",
			"ww":"\\wedge",
			"vv":"\\vee",
			"oo":"\\infty",
			"HH":"\\mathcal{H}",
			"half":"\\frac{1}{2}",
			"sign":"\\operatorname{sgn}",
			"lhs":"\\text{l.h.s}",
			"rhs":"\\text{r.h.s}",
			"const":"\\mathrm{const.}",
			"pp":"\\partial",
			"diag":"\\operatorname{diag}",
			"modulo":"\\bmod",
			"Re":"\\operatorname{Re}",
			"Im":"\\operatorname{Im}",
			"volume":"\\operatorname{Vol}",
			"residue":"\\operatorname{Res}",
			"disc":"\\operatorname{Disc}",
			"tp":"{\\scriptscriptstyle{\\mathsf{T}}}",
			"dual":"\\prime",
			"inj":"\\rightarrowtail",
			"surj":"\\twoheadrightarrow",
			"im":"\\operatorname{im}",
			"coim":"\\operatorname{coim}",
			"coker":"\\operatorname{coker}",
			"codim":"\\operatorname{codim}",
			"Spec":"\\operatorname{Spec}",
			"Aut":"\\operatorname{Aut}",
			"End":"\\operatorname{End}",
			"adjoint":"\\operatorname{ad}",
			"Adjoint":"\\operatorname{Ad}",
			"induce":"\\operatorname{Ind}",
			"restrict":"\\operatorname{Res}",
			"sym":"\\operatorname{Sym}",
			"alt":"\\operatorname{Alt}",
			"inverseLimit":"\\varprojlim",
			"directLimit":"\\varinjlim",
			"directIntegral":"\\int^{\\oplus}",
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
			"glie":"\\mathfrak{g}",
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
			"shadow":"\\cS",
			"lightray":"\\cL",
			"vac":"\\ket{0}",
			"op":"\\mathcal{O}",
			"CF":"\\mathcal{G}",
			"CFStripped":"\\mathcal{G}",
			"CFKinematical":"K",
			"CB":"G",
			"CBStripped":"G",
			"CPW":"\\Psi",
			"CPWStripped":"\\Psi",
			"CPWC":"\\rho",
			"CPWCWithS":"\\wave{\\rho}",
			"vx":"\\vec{x}",
			"vy":"\\vec{y}",
			"vp":"\\vec{p}",
			"vq":"\\vec{q}",
			"vk":"\\vec{k}",
			"hb":"\\bar{h}",
			"zb":"\\bar{z}",
			"wb":"\\bar{w}",
			"Tb":"\\bar{T}",
			"Lb":"\\bar{L}",
			"psib":"\\bar{\\psi}",
			"chib":"\\bar{\\chi}",
			"halfdim":"\\frac{d}{2}",
			"fm":"\\operatorname{fm}",
			"GeV":"\\operatorname{GeV}",
			"nn":"\\nonumber",
			"id":"\\operatorname{id}",
			"eqqq":":="
		},
		// end macros
		environments: {
		}
	},
	showProcessingMessages: true,
	options: {
		ignoreHtmlClass: '.',
		processHtmlClass: 'arithmatex'
	}
};

