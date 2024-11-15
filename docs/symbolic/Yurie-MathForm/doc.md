# [Yurie/MathForm](https://github.com/yuriever/Yurie-MathForm)

A Mathematica paclet for improving math layout.

## TeXConvert

* `#!wl texSetMacro` - set the symbol as LaTeX macro and store the rule into `#!wl $texAssoc`.

<center>

| Pattern           |                       |                      |
| :---------------- | :-------------------- | :------------------- |
| `#!wl f`          | `#!wl f`              | `#!tex \f`           |
| `#!wl f[_]`       | `#!wl f[a]`           | `#!tex \f{a}`        |
| `#!wl f[___]`     | `#!wl f[a,b]`         | `#!tex \f{a}{b}`     |
| `#!wl f[_List]`   | `#!wl f[{a,b}]`       | `#!tex \f{a,b}`      |
| `#!wl f[___List]` | `#!wl f[{a,b},{c,d}]` | `#!tex \f{a,b}{c,d}` |

</center>

## TeXShow

* `#!wl texForm` - refine the string from `#!wl TeXForm`.

* `#!wl texCopy` - copy the string from `#!wl texForm` and return the expression.

* `#!wl texShow` - show the LaTeX of the expression.

### Options of `#!wl texShow`

* **TODO**

## Index

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

* `#!wl indexSplit[vars__|{vars__}][expr_]` - split symbols into indexed variables in the expression.

    * Example:

        ``` wl
        z1+z2//indexSplit[z]
        ```

        ``` wl
        Out[] = z[1]+z[2]
        ```

### Options of `#!wl indexJoin|indexSplit`

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
