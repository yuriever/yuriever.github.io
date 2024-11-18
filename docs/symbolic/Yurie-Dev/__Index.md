# Yurie/Index

## Designing idea

This package provides the functionality of coding/decoding a variable indexed by label and script into/from a single symbol. For example, `#!wl "x"<>"dagger"<>"0"` will be coded as `#!wl xdagger0` and formatted as $x^{\dagger}_{0}$.

``` wl
_Subsuperscript <=> "variable"<>"label"<>"script" <=> _Symbol
```

The system function pair `#!wl ToExpression, ToString` is non-invertible at `#!wl Null`, and to override this we introduce the public function `#!wl toString`.

The kernel functions will convert symbols to strings, use string pattern matching, and finally convert back to symbols if necessary.

## Functionalities

### Helper functions

* `#!wl toString` - map `#!wl Null` to empty string.

### Kernel functions

* `#!wl indexize` - indexify a list of variables.

* `#!wl indexify` - indexify the specified variables in an expression.

    Default options:

    * `#!wl Heads->False` - head variables will not be indexified. This option is inherited from `#!wl Replace`.

    * `#!wl Transpose->False` - Lacia-Breakpoint-2023-11-22-11:45

* `#!wl indexArray` - generate tensor of symbols by `#!wl Array`.

    ``` wl
    indexArray[{2}]@x

    indexArray[{2,2}]@x
    ```

    ``` wl
    Out[] = {x1,x2}

    Out[] = {{x11,x12},{x21,x22}}
    ```

* `#!wl indexPolynomial` - generate multi-variable polynomials by `#!wl indexArray`.

    ``` wl
    indexPolynomial[{2},{0}][a][x]

    indexPolynomial[{2,2},{0,0}][a][x,y]
    ```

    ``` wl
    Out[] = a0+a1 x

    Out[] = a00+a10 x+a01 y+a11 x y
    ```

* `#!wl indexSplit` - split `#!wl Symbol|String` into variable + (label +) index.
