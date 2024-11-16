# [Yurie/MathForm](https://github.com/yuriever/Yurie-MathForm)

A Mathematica paclet for improving math layout.

* Due to [the known issue of `#!wl TeXForm`](https://mathematica.stackexchange.com/a/47740/86893), this paclet occupies `#!wl TraditionalForm`-definitions for better layout of `#!wl StandardForm` and `#!wl MF`.

## MF

* `#!wl MFString` - refine the string from `#!wl TeXForm`.

* `#!wl MFStringCopy` - copy the string from `#!wl MFString` and return the expression.

* `#!wl MF` - show the LaTeX of the expression.

    * **TODO** Options of `#!wl MF`

## MFDefine

* `#!wl MFDefine` - define LaTeX macro for the symbol and store the rule into `#!wl $MFAssoc`.

<center>

| Pattern           |                       |                      |
| :---------------- | :-------------------- | :------------------- |
| `#!wl f`          | `#!wl f`              | `#!tex \f`           |
| `#!wl f[_]`       | `#!wl f[a]`           | `#!tex \f{a}`        |
| `#!wl f[___]`     | `#!wl f[a,b]`         | `#!tex \f{a}{b}`     |
| `#!wl f[_List]`   | `#!wl f[{a,b}]`       | `#!tex \f{a,b}`      |
| `#!wl f[___List]` | `#!wl f[{a,b},{c,d}]` | `#!tex \f{a,b}{c,d}` |

</center>

## Index

* `#!wl indexize[var_,index_]|indexize[{var_,index_}]` - join the variable and index into a symbol.

    !!! wl "Example"

        ``` wl
        indexize[z,1]
        ```

        ``` wl
        Out[] = z1
        ```

    * This is basically `#!wl ToExpression[ToString[var_]<>ToString[index_]]`, but treating `#!wl Null` as an empty string.

* `#!wl indexJoin[vars__|{vars__}][expr_]` - join indexed variables into symbols in the expression.

    !!! wl "Example"

        ``` wl
        z[1]+z[2]//indexJoin[z]
        ```

        ``` wl
        Out[] = z1+z2
        ```

    * `#!wl "IndexPosition"->Construct` - controls the format of indexed vairables.

        !!! wl "Example"

            ``` wl
            z1+z2//indexSplit[z,"IndexPosition"->Subscript]
            ```

            ``` wl
            Out[] = Subscript[z,1]+Subscript[z,2]
            ```

        * The supported values are

            * `#!wl Construct`
            * `#!wl Subscript`
            * `#!wl Superscript`

    * `#!wl "IndexType"->All` - controls the pattern of indices, and resolves possible conflicts between variable and index.

        === "Correct"

            !!! wl "Example"

                ``` wl
                zb1//indexSplit[{z,zb},"IndexType"->"PositiveInteger"]
                ```

                ``` wl
                Out[] = zb[1]
                ```

        === "Wrong"

            !!! wl "Example"

                ``` wl
                zb1//indexSplit[{z,zb}]
                ```

                ``` wl
                Out[] = z[b1]
                ```

        * The supported values are

            * `#!wl All`
            * `#!wl "PositiveInteger"`
            * `#!wl "PositiveIntegerOrSingleLetter"`
            * `#!wl _Symbol` - any function for string pattern matching

* `#!wl indexSplit[vars__|{vars__}][expr_]` - split symbols into indexed variables in the expression.

    !!! wl "Example"

        ``` wl
        z1+z2//indexSplit[z]
        ```

        ``` wl
        Out[] = z[1]+z[2]
        ```

    * The options are the same as `#!wl indexJoin`.
