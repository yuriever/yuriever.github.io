# [Yurie/MathForm](https://github.com/yuriever/Yurie-MathForm)

A Mathematica paclet for improving math layout.

* The LaTeX template file `Source/template` is from [MaTeX](http://szhorvat.net/mathematica/MaTeX).

* The exported LaTeX strings will be formatted by [tex-fmt](https://github.com/WGUNDERWOOD/tex-fmt).

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

## Formatting

* `#!wl MFString` - refine the string from `#!wl TeXForm`.

    The expression will be converted to string by `#!wl TeXForm`, then refined according to `#!wl $MFAssoc` and the following options:

    * `#!wl "RemoveLeftRightPair"->True` - remove the `#!tex \left(...\right)` pair.

    * `#!wl "Linebreak"->True` - insert line breaks into long expressions.

    * `#!wl "LinebreakThreshold"->6` - control the threshold of line breaking.

    * `#!wl "LinebreakIgnore"->{}` - treat the sub-expressions matching with the specified patterns as symbols.

* `#!wl MF` - show the LaTeX of the expression.

    The expression will be converted to LaTeX string by `#!wl MFString`, then compiled into PDF, controlled by the following options:

    * `#!wl "Preamble"->{}` - add to the preamble.

    * `#!wl "FontSize"->12` - adjust the font size.

    * `#!wl "LineSpacing"->{1.2,0}` - adjust the line spacing.

    * `#!wl "Magnification"->1.5` - magnify the output.

    * `#!wl "CopyToClipboard"->True` - copy the string from `#!wl MFString` to clipboard.

    * `#!wl "ClearCache"->False` - use the cache.

    * `#!wl "Listable"->True` - convert list elements as separate PDFs.

    * The other options are inherited from `#!wl MFString`.

## Format definition

* `#!wl MFMakeBox` - automatically inject interpretation (and/or tooltip) into format value, controlled by the following options:

    * `#!wl "Tooltip"->False` - disable tooltip injection.

    !!! wl "Usage"

        ``` wl
        MFMakeBox[{pattern_,format_}]
        ```

        ``` wl
        MFMakeBox[{pattern_,format_,interpretation_}]
        ```

        ``` wl
        MFInterpret[__List] (*batch-operation*)
        ```

* `#!wl MFArgConvert` - define LaTeX macro for the symbol and store the rule into `#!wl $MFAssoc`.

    !!! wl "Example"

        ``` wl
        MFArgConvert[][f->"f"]
        ```

        ``` wl
        MFArgConvert["{","}"][f[_]->"f"]
        ```

        ``` wl
        MFArgConvert["{","}"][f[___]->"f"]
        ```

        ``` wl
        MFArgConvert["{","}",","][f[_List]->"f"]
        ```

        ``` wl
        MFArgConvert["{","}",","][f[___List]->"f"]
        ```

        ``` wl
        MFArgConvert[___][{__}] (*batch-operation*)
        ```

    * The existing format values will be cleared and messaged, since the symbol name is used as the key in `#!wl $MFAssoc`.

    * The supported conversion rules are as follows:

        | Pattern           | Expression            | LaTeX                |
        | :---------------- | :-------------------- | :------------------- |
        | `#!wl f`          | `#!wl f`              | `#!tex \f`           |
        | `#!wl f[_]`       | `#!wl f[a]`           | `#!tex \f{a}`        |
        | `#!wl f[___]`     | `#!wl f[a,b]`         | `#!tex \f{a}{b}`     |
        | `#!wl f[_List]`   | `#!wl f[{a,b}]`       | `#!tex \f{a,b}`      |
        | `#!wl f[___List]` | `#!wl f[{a,b},{c,d}]` | `#!tex \f{a,b}{c,d}` |

* `#!wl MFClear` - clear format values and rules in `#!wl $MFAssoc` of the symbol, or all symbols under the context.
