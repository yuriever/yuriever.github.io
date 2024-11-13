(* ::Package:: *)

ClearAll["`*"]


ReplaceAll[f[f[x]],f[x_]:>g[x]]

ReplaceAll[f[f[x]],f->g]

Replace[f[f[x]],f[x_]:>g[x],All]

Replace[f[f[x]],f->g,All,Heads->True]


ReplaceAll[{f[x],x},{x_f:>x,x->y}]


ReplaceAll[Hold[1+1],Hold[x_]:>Hold[x,x]]


ReplaceAll[Hold[f[x]],f[x_]:>Identity[x]]

ReplaceAll[Hold[f[x]],f[x_]:>RuleCondition@Identity[x]]



