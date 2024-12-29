# [Yurie/Math](https://github.com/yuriever/Yurie-Math)

Math utilities.

## Index

* `#!wl indexize[var_,index_]` - join the variable and index(s) into a symbol.

    This is basically `#!wl ToExpression[ToString[var_]<>ToString[index_]]`, but treating `#!wl Null` as an empty string.

    !!! wl "Example"

        ``` wl
        indexize[z,1]
        ```

        ``` wl
        Out[] = z1
        ```

* `#!wl indexify` - join the variable(s) and index(s) into a sequence of symbols.

    !!! wl "Example"

        ``` wl
        indexify[{z,zb},1,2]
        ```

        ``` wl
        Out[] = Sequence[z1,zb1,z2,zb2]
        ```

* `#!wl indexSplit[vars__|{vars__}][expr_]` - split symbols into indexed variables in the expression.

    !!! wl "Example"

        ``` wl
        z1+z2//indexSplit[z]
        ```

        ``` wl
        Out[] = z[1]+z[2]
        ```

    * `#!wl "IndexPosition"->Construct` - controls the format of indexed vairables.

        The supported values are

        * `#!wl Construct`
        * `#!wl Subscript`
        * `#!wl Superscript`

        !!! wl "Example"

            ``` wl
            z1+z2//indexSplit[z,"IndexPosition"->Subscript]
            ```

            ``` wl
            Out[] = Subscript[z,1]+Subscript[z,2]
            ```

    * `#!wl "IndexType"->All` - controls the pattern of indices, and resolves possible conflicts between variable and index.

        The supported values are

        * `#!wl All`
        * `#!wl "PositiveInteger"`
        * `#!wl "PositiveIntegerOrSingleLetter"`
        * `#!wl "PositiveIntegerOrGreekLetter"`
        * `#!wl "NaturalNumber"`
        * `#!wl "NaturalNumberOrSingleLetter"`
        * `#!wl "NaturalNumberOrGreekLetter"`
        * `#!wl _Symbol` - any function for string pattern matching

        !!! wl "Example"

            === "Correct"

                ``` wl
                zb1//indexSplit[{z,zb},"IndexType"->"PositiveInteger"]
                ```

                ``` wl
                Out[] = zb[1]
                ```

            === "Incorrect"

                ``` wl
                zb1//indexSplit[{z,zb}]
                ```

                ``` wl
                Out[] = z[b1]
                ```

* `#!wl indexJoin[vars__|{vars__}][expr_]` - join indexed variables into symbols in the expression.

    !!! wl "Example"

        ``` wl
        z[1]+z[2]//indexJoin[z]
        ```

        ``` wl
        Out[] = z1+z2
        ```

    * The options are the same as `#!wl indexSplit`.
