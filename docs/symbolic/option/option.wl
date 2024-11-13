(* ::Package:: *)

ClearAll["`*"];


(* ::Subsection:: *)
(*Example 1*)


child//Options = {"a"->0};

child[OptionsPattern[]] :=
    OptionValue["a"];

child[{{"a"->1,"a"->2}}]


(* ::Subsection:: *)
(*Inheritance example: wrong*)


parent//Options = {
    Splice@Options@child,
    "b"->x
};

parent[opts:OptionsPattern[]] :=
    child@FilterRules[{opts},Options[child]];


SetOptions[parent,"a"->1]

parent[]


(* ::Subsection:: *)
(*Inheritance example*)


parent//ClearAll;

parent//Options = {
    Splice@Options@child,
    "b"->x
};

parent[opts:OptionsPattern[]] :=
    child@FilterRules[{opts,Options@parent},Options[child]];


SetOptions[parent,"a"->1]

parent[]


(* ::Subsection:: *)
(*Separation of arguments and options*)


foo//Options = {"a"->0};

foo[args___] :=
    With[ {sep = ArgumentsOptions[foo[args],{1,2},<|"Head"->HoldComplete,"OptionsMode"->"Shortest"|>]},
        ifoo[sep]/;!FailureQ[sep]
    ];


foo[x,"a"->1]

foo[x,"b"->y]


ifoo[{HoldComplete[x_],HoldComplete[opts___]}] :=
    x+OptionValue[foo,{opts},"a"];


SetOptions[foo,"a"->1];

foo[x]

foo[x,"a"->0]


OptionsPattern
