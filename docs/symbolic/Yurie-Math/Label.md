# Yurie/Math/Label

* `#!wl label[vars_,labs_,pos_]` - join the variable(s) and label(s) into a (sequence of) labeled object(s).

    * `#!wl vars_` and `#!wl labs_` accept `#!wl _|(List|Alternatives)[___]`.

    * The default value of `#!wl pos_` is `#!wl Function`.

    !!! wl "Example"

        === "Function"

            ``` wl
            label[x|y,1|2,Function]
            ```

            ``` wl
            Out[] = Sequence[x[1],x[2],y[1],y[2]]
            ```

        === "Symbol"

            ``` wl
            label[x|y,1|2,Symbol]
            ```

            ``` wl
            Out[] = Sequence[x1,x2,y1,y2]
            ```

        === "Any_"

            ``` wl
            label[x|y,1|2,f]
            ```

            ``` wl
            Out[] = Sequence[f[x,1],f[x,2],f[y,1],f[y,2]]
            ```

* `#!wl labelAt[var_,rules__,pos_]` - take the specific value(s) of the labeled object(s).

    !!! wl "Example"

        === "Function"

            ``` wl
            labelAt[x|y,1|2]
            ```

            ``` wl
            Out[] = Sequence[x[1],y[1],x[2],y[2]]
            ```

        === "Symbol"

            ``` wl
            label[x|y,1|2,Symbol]
            ```

            ``` wl
            Out[] = Sequence[x1,y1,x2,y2]
            ```

        === "_"

            ``` wl
            label[x|y,1|2,f]
            ```

            ``` wl
            Out[] = Sequence[f[x,1],f[y,1],f[x,2],f[y,2]]
            ```

* `#!wl labelConvert[vars__|{vars__},pos1_->pos2_,opts_][expr_]` - convert the labeled object(s) according to the two specified label positions.

    !!! wl "Example"

        ``` wl
        x1+y2//labelConvert[x,y,Symbol->Function]
        ```

        ``` wl
        Out[] = x[1]+y[2]
        ```

    * `#!wl "LabelType"->All` - control the pattern of labels, and resolves possible conflicts between variable and label.

        The supported values are

        * `#!wl All`
        * `#!wl "PositiveInteger"`
        * `#!wl "PositiveIntegerOrSingleLetter"`
        * `#!wl "PositiveIntegerOrGreekLetter"`
        * `#!wl "NaturalNumber"`
        * `#!wl "NaturalNumberOrSingleLetter"`
        * `#!wl "NaturalNumberOrGreekLetter"`
        * `#!wl _Symbol|_Function|_RightComposition|_Composition` - pure function for string pattern matching

        !!! wl "Example"

            === "Correct"

                ``` wl
                zb1//labelConvert[z,zb,Symbol->Function,"LabelType"->"PositiveInteger"]
                ```

                ``` wl
                Out[] = zb[1]
                ```

            === "Incorrect"

                ``` wl
                zb1//labelConvert[z,zb,Symbol->Function]
                ```

                ``` wl
                Out[] = z[b1]
                ```

    * `#!wl labelJoin|labelSplit` - special cases of `#!wl labelConvert` that convert `#!wl Symbol` to/from other `#!wl Function|Subscript|Superscript`.

* `#!wl labelTo*[vars__|{vars__},rules__|{rules__},pos_:Function]` - return a `#!wl ReplaceAll` function according to the rules.

    !!! wl "Example"

        ``` wl
        labelToDiff[x,y,1->2,Function]
        ```

        ``` wl
        Out[] = ReplaceAll[{x[1]->x[2]+x["12"],y[1]->y[2]+y["12"]}]
        ```

    | Name                   | Prototype                       |
    | ---------------------- | ------------------------------- |
    | `#!wl labelToZero`     | $ x_1 \to 0 $                   |
    | `#!wl labelToEqual`    | $ x_1 \to x_2 $                 |
    | `#!wl labelToDiff`     | $ x_1 \to x_{12} + x_2 $        |
    | `#!wl labelToDiffZero` | $ x_1 \to x_{12},\, x_2 \to 0 $ |
    | `#!wl labelToDiffBack` | $ x_{12} \to x_1 - x_2 $        |