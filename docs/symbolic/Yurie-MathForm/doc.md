# [Yurie/MathForm](https://github.com/yuriever/Yurie-MathForm)

A Mathematica paclet for improving LaTeX conversion.

## Public

* `#!wl texForm` - postprocess the string from `#!wl TeXForm` by the rules in `#!wl $texAssoc`.

* `#!wl texSetMacro` - set the symbol as a LaTeX macro and store the rule into `#!wl $texAssoc`.

<center>

| Pattern           |                       |                      |
| :---------------- | :-------------------- | :------------------- |
| `#!wl f`          | `#!wl f`              | `#!tex \f`           |
| `#!wl f[_]`       | `#!wl f[a]`           | `#!tex \f{a}`        |
| `#!wl f[___]`     | `#!wl f[a,b]`         | `#!tex \f{a}{b}`     |
| `#!wl f[_List]`   | `#!wl f[{a,b}]`       | `#!tex \f{a,b}`      |
| `#!wl f[___List]` | `#!wl f[{a,b},{c,d}]` | `#!tex \f{a,b}{c,d}` |

</center>
