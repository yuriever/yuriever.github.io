# Implementing associative algebras in Mathematica

We introduce implementation of noncommutative algebras via Mathematica.


## Designing idea

In practice, we define an (associative) algebra $A$ using generators and relations, i.e., as a quotient of the free algebra.
We require that the set of generators $G(A)$ and the set of relations $R(A)$ can be expressed with a finite number of symbols, which covers a broader range than finitely presented algebras.

What expressions are noncommutative? We can store the generators $G(A)$ in the list `#!wl $generator` and use `#!wl FreeQ` to determine whether an expression is a scalar or an operator.

!!! code

    ``` wl
    $generator = {};

    scalarQ[expr_] :=
        FreeQ[expr,Alternatives@@$generator];
    ```

The function `#!wl scalarQ[expr]` returns `#!wl True` when `#!wl expr` is a scalar.

We then implement the relations $R(A)$ by a list of rules `#!wl $relation`, and simplify expressions using the function `#!wl ReplaceRepeated`.

!!! code

    ``` wl
    $relation = {};

    algebraSimplify[expr_] :=
        ReplaceRepeated[expr,$relation]//Simplify;
    ```

Noncommutative multiplication needs to satisfy the rules of identity, linearity and distributivity:

!!! code

    ``` wl
    NonCommutativeMultiply//Unprotect;

    NonCommutativeMultiply//Attributes = {Flat,OneIdentity};

    $relationInternal = {
        (*linearity*)
        (k_?scalarQ*x_)**y_:>k*x**y,
        x_**(k_?scalarQ*y_):>k*x**y,
        (x_+y_)**z_:>x**z+y**z,
        z_**(x_+y_):>z**x+z**y,
        (*zero*)
        0**_->0,
        _**0->0,
        (*identity*)
        id**x_:>x,
        x_**id:>x
    };
    ```

Here we have overload the internal function `#!wl NonCommutativeMultiply` with operator form `#!wl **` by adding the attributes `#!wl {Flat,OneIdentity}`.

To make the results readable, we define additional formatting rules.

!!! code

    ``` wl
    $printing = {} ;

    algebraPrint[expr_] :=
        ReplaceRepeated[expr,$printing];
    ```

To ensure the convergence of `#!wl ReplaceRepeated`, we need to specify the ordering of operators, and a simple choice is the Poincare-Birkhoff-Witt type basis.


## Example

!!! wl "Verma module of $\sllie(2)$"

    ``` wl
    $generator = {X,Y,H,v};

    $relation = {
        Splice@$relationInternal,
        X**H:>-2 X+H**X,
        H**Y:>-2 Y+Y**H,
        X**Y:>H+Y**X,
        H**v[h_]:>h v[h],
        X**v[h_]:>0
    };
    ```


## To-do

* algebra and module from factorization algebra
