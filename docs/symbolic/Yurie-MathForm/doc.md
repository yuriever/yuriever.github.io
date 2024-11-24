# [Yurie/MathForm](https://github.com/yuriever/Yurie-MathForm)

A Mathematica paclet for improving math layout.

* Due to [this known `#!wl TeXForm` issue](https://mathematica.stackexchange.com/a/47740/86893), this paclet aims to improve `#!wl MF` output by utilizing `#!wl TraditionalForm`.

* The LaTeX template file `Source/template` is from [MaTeX](http://szhorvat.net/mathematica/MaTeX).

* The exported LaTeX strings will be formatted by [tex-fmt](https://github.com/WGUNDERWOOD/tex-fmt).

## MF

!!! wl "Flow chart"

    ``` mermaid

    flowchart LR

    Expression(Expression)
    TraditionalForm(TraditionalForm)
    TeXForm(TeXForm)
    LaTeXString(LaTeXString)
    PDF(PDF)

    $MFAssoc($MFAssoc)

    MFInterpret{{MFInterpret}}
    MFString{{MFString/MFCopy}}
    MFArgConvert{{MFArgConvert}}
    MFClear{{MFClear}}
    MF{{MF}}

    subgraph dataflow[" "]
    Expression --> TraditionalForm --> TeXForm
    TeXForm --- MFString --> LaTeXString
    LaTeXString --- MF --> PDF
    end

    MFArgConvert --> $MFAssoc
    MFClear -->|cancel| MFInterpret & MFArgConvert
    MFInterpret --> TraditionalForm
    $MFAssoc --> MFString

    classDef data fill:#ffc6ec20;
    class MFInterpret,MFString,MFArgConvert,MFClear,$MFAssoc,MF data;

    style dataflow fill:#ffdaaa20,stroke-width:0,rx:1rem,ry:1rem
    ```

!!! wl "Example"

    ``` wl
    MFArgConvert[]@{
        f[_],
        args[___]->"g",
        argList[_List]->"h"
    }
    ```

    ``` wl
    args[f[x],f[y]]//MFString

    argList[{f[x],f[y]}]//MFString
    ```

    ``` tex
    \g{\f{x}}{\f{y}}

    \h{
        \f{x},
        \f{y}
    }
    ```

### Formatting

* `#!wl MFString` - refine the string from `#!wl TeXForm`.

    The expression will be converted to string by `#!wl TeXForm`, then refined according to `#!wl $MFAssoc` and the following options:

    * `#!wl "RemoveLeftRightPair"->True` - remove the `#!tex \left(...\right)` pair.

    * `#!wl "Linebreak"->True` - insert line breaks into long expressions.

    * `#!wl "LinebreakThreshold"->6` - control the threshold of line breaking.

    * `#!wl "LinebreakIgnore"->{}` - treat the sub-expressions matching with the specified patterns as symbols.

* `#!wl MFCopy` - copy the string from `#!wl MFString` and return the original expression.

    * The options are inherited from `#!wl MFString`.

* `#!wl MF` - show the LaTeX of the expression.

    The expression will be converted to LaTeX string by `#!wl MFString`, then compiled into PDF, controlled by the following options:

    * `#!wl "Preamble"->{"\\usepackage{amsmath,amssymb}"}` - add to the preamble.

    * `#!wl "FontSize"->12` - adjust the font size.

    * `#!wl "LineSpacing"->{1.2,0}` - adjust the line spacing.

    * `#!wl "Magnification"->1.5` - magnify the output.

    * `#!wl "CopyToClipboard"->True` - copy the string from `#!wl MFString` to clipboard.

    * `#!wl "ClearCache"->False` - use the cache.

    * `#!wl "Listable"->True` - convert list elements as separate PDFs.

    * The other options are inherited from `#!wl MFString`.

### Format definition

* `#!wl MFInterpret` - set interpretable format values.

    * The supported arguments are:

        !!! code

            ``` wl
            MFInterpret[Format,format_.,{pattern_,definition_,interpretation_.}]
            ```

            ``` wl
            MFInterpret[MakeBoxes,format_.,{pattern_,definition_,interpretation_.}]
            ```

            ``` wl
            MFInterpret[__,{__List}] (*batch-operation*)
            ```

    * The arguments `#!wl format_` and `#!wl interpretation_` can be omitted.

    * The supported formats are `#!wl StandardForm|TraditionalForm` or non-specified.

* `#!wl MFArgConvert` - define LaTeX macro for the symbol and store the rule into `#!wl $MFAssoc`.

    * The existing format values will be cleared and messaged, since the symbol name is used as the key in `#!wl $MFAssoc`.

    * The supported conversion rules are as follows:

        <center>

        | Pattern           | Expression            | LaTeX                |
        | :---------------- | :-------------------- | :------------------- |
        | `#!wl f`          | `#!wl f`              | `#!tex \f`           |
        | `#!wl f[_]`       | `#!wl f[a]`           | `#!tex \f{a}`        |
        | `#!wl f[___]`     | `#!wl f[a,b]`         | `#!tex \f{a}{b}`     |
        | `#!wl f[_List]`   | `#!wl f[{a,b}]`       | `#!tex \f{a,b}`      |
        | `#!wl f[___List]` | `#!wl f[{a,b},{c,d}]` | `#!tex \f{a,b}{c,d}` |

        </center>

* `#!wl MFClear` - clear format values and rules in `#!wl $MFAssoc` of the symbol, or all symbols under the context.

## Index

* `#!wl indexize[var_,index_]|indexize[{var_,index_}]` - join the variable and index into a symbol.

    This is basically `#!wl ToExpression[ToString[var_]<>ToString[index_]]`, but treating `#!wl Null` as an empty string.

    !!! wl "Example"

        ``` wl
        indexize[z,1]
        ```

        ``` wl
        Out[] = z1
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

    * The options are the same as `#!wl indexJoin`.
