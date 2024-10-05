# Yurie/Index

A Mathematica paclet for converting between indexed variables and symbols.

## Public

* `#!wl indexize[var_,index_]|indexize[{var_,index_}]` - join the variable and index into a symbol.

    * Example:

        ``` wl
        indexize[z,1]
        ```

        ``` wl
        Out[] = z1
        ```

    * This is basically `#!wl ToExpression[ToString[var_]<>ToString[index_]]`, but treating `#!wl Null` as an empty string.

* `#!wl indexJoin[vars__|{vars__}][expr_]` - join indexed variables into symbols in the expression.

    * Example:

        ``` wl
        z[1]+z[2]//indexJoin[z]
        ```

        ``` wl
        Out[] = z1+z2
        ```

* `#!wl indexSplit[vars__|{vars__}][expr_]` - split the symbol into a indexed variable.

    * Example:

        ``` wl
        z1+z2//indexSplit[z]
        ```

        ``` wl
        Out[] = z[1]+z[2]
        ```

* Options of `#!wl indexJoin|indexSplit`

    * `#!wl "IndexPosition"->Construct`

        * This option controls the format of indexed vairables. The supported option values are

            * `#!wl Construct`
            * `#!wl Subscript`
            * `#!wl Superscript`

        * Example:

            ``` wl
            z1+z2//indexSplit[z,"IndexPosition"->Subscript]
            ```

            ``` wl
            Out[] = Subscript[z,1]+Subscript[z,2]
            ```

    * `#!wl "IndexType"->All`

        * This option controls the pattern of indices. The supported option values are

            * `#!wl All`
            * `#!wl "PositiveInteger"`
            * `#!wl "PositiveIntegerOrSingleLetter"`
            * `#!wl _Symbol` - any function for string pattern matching

        * Example:

            Sometimes there can be conflict between variable and index, e.g.

            ``` wl
            zb1//indexSplit[{z,zb}]
            ```

            ``` wl
            Out[] = z[b1]
            ```

            comparing with

            ``` wl
            zb1//indexSplit[{z,zb},"IndexType"->"PositiveInteger"]
            ```

            ``` wl
            Out[] = zb[1]
            ```
