# Yurie/Math/Label

* `#!wl label[var_|{vars__},label_|{labels__},pos_]` - join the variable(s) and label(s) into a (sequence of) labeled object(s).

    * `#!wl pos:Symbol|Construct|Function|Subscript|Superscript` - control the position of label. `#!wl Function` is a synonym of `#!wl Construct`.

        !!! wl "Example"

            ``` wl
            Map[label[x,1,#]&,{Symbol,Function}]
            ```

            ``` wl
            Out[] = {x1,x[1]}
            ```

* `#!wl labelConvert[vars__|{vars__},pos1_->pos2_,opts_][expr_]` - convert the labeled object(s) according to the two specified label positions.

    !!! wl "Example"

        ``` wl
        z1+z2//labelConvert[z,Symbol->Function]
        ```

        ``` wl
        Out[] = z[1]+z[2]
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
                zb1//labelConvert[{z,zb},Symbol->Function,"LabelType"->"PositiveInteger"]
                ```

                ``` wl
                Out[] = zb[1]
                ```

            === "Incorrect"

                ``` wl
                zb1//labelConvert[{z,zb},Symbol->Function]
                ```

                ``` wl
                Out[] = z[b1]
                ```

* `#!wl labelTo*[var_|{vars__},rule_|{rules__},pos_:Function]` - return a `#!wl ReplaceAll` function according to the rules.

    !!! wl "Example"

        ``` wl
        labelToDiff[{z,zb},{1->2},Function]
        ```

        ``` wl
        Out[] = ReplaceAll[{z[1]->z[2]+z["12"],zb[1]->zb[2]+zb["12"]}]
        ```

    | Name                   | Prototype                       |
    | ---------------------- | ------------------------------- |
    | `#!wl labelToZero`     | $ x_1 \to 0 $                   |
    | `#!wl labelToEqual`    | $ x_1 \to x_2 $                 |
    | `#!wl labelToDiff`     | $ x_1 \to x_{12} + x_2 $        |
    | `#!wl labelToDiffZero` | $ x_1 \to x_{12},\, x_2 \to 0 $ |
    | `#!wl labelToDiffBack` | $ x_{12} \to x_1 - x_2 $        |