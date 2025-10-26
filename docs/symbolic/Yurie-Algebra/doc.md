# [Yurie/Algebra](https://github.com/yuriever/Yurie-Algebra)

A Mathematica paclet for implementing and managing finitely presented associative algebras.

Dependency:

``` wl
"Yurie/Cluster"->">=2.0.0"
```

## Attributes

* `#!wl "Generator"` - list of generators.

* `#!wl "Relation"` - list of defining relations.

* `#!wl "Printing"` - list of formatting rules.

* `#!wl "TensorRank"` - list of tensor ranks of generators.

* `#!wl "Parity"` - list of parities of generators.

## Methods

* `#!wl algebraDefine[algList_|algs___]` - define the algebras.

* `#!wl algebraDefault[algList_|algs___]` - set the default algebras.

* `#!wl algebraReset|algebraUnset[algList_|algs___]` - reset/unset the algebras.

* `#!wl algebraAdd|algebraMinus[algList_|algs___][assoc_]` - add/drop elements to/from the algebras.

    The argument `#!wl assoc_` accepts `#!wl _Rule|{___Rule}|_Association`.

* `#!wl algebraShow[alg_]` - show the algebra.

| Name                    | Meaning                                         |
| :---------------------- | :---------------------------------------------- |
| `#!wl algebraDefine[]`  | return the defined algebras.                    |
| `#!wl algebraDefault[]` | return the default algebras.                    |
| `#!wl algebraReset[]`   | reset all the defined except internal algebras. |
| `#!wl algebraUnset[]`   | unset all the defined except internal algebras. |
| `#!wl algebraShow[]`    | show the default algebras.                      |

## Functionalities

For an algebra $A$ over a base field $k$, the following operations are implemented.

| Name             |                      | Symbol                        | Formatting                    |
| :--------------- | :------------------- | :---------------------------- | :---------------------------- |
| multiplication   | $m: A\ox A\to A$     | `#!wl NonCommutativeMultiply` | `#!wl NonCommutativeMultiply` |
| unit             | $\eta: k\to A$       | `#!wl id`                     | `#!wl 1`                      |
| conjugate        | $\bullet^\dagger: A\to A$    | `#!wl conjugate`              | `#!wl SuperDagger`            |
| inverse          | $\bullet^{-1}: A\to A$       | `#!wl inverse`                | `#!wl Inverse` |
| tensor product   |                      | `#!wl tensor`                 | `#!wl CircleTimes`            |
| comultiplication | $\Delta:A\to A\ox A$ | `#!wl comultiply`             | `#!wl "\[CapitalDelta]"`      |
| counit           | $\epsilon:A\to k$    | `#!wl counit`                 | `#!wl "\[Epsilon]"`           |
| antipode         | $S:A\to A$           | `#!wl antipode`               | `#!wl "S"`                    |

The predefined algebras with their implemented structures are listed below.

| Algebra            | Operation                | Structure                               |
| :----------------- | :----------------------- | :-------------------------------------- |
| `#!wl "Algebra"`   | multiplication           | linearity, zero, identity               |
| `#!wl "Conjugate"` | conjugate                | anti-linearity, anti-morphism, identity |
| `#!wl "Inverse"`   | inverse                  | inverse, anti-morphism, identity                 |
| `#!wl "Tensor"`    | tensor product           | linearity, composition                  |
| `#!wl "Coalgebra"` | comultiplication, counit | linearity                               |
| `#!wl "Bialgebra"` | comultiplication, counit | morphism, identity                      |
| `#!wl "Antipode"`  | antipode                 | linearity, anti-morphism, identity      |

There are several remarks.

* The algebra `#!wl "Algebra"` will be enabled by default.

* The associativity of multiplication and tensor product is implemented by the attributes `#!wl {Flat,OneIdentity}`.

* The base field $k$ and its embedding in the algebra $A$ is distinguished, and the identity operator `#!wl id` is the image $\eta(1)\in A$.

### Core functionalities

* `#!wl id` - identity operator.

* `#!wl generator[alg_]` - return the generators of the default/specified algebra.

* `#!wl relation[alg_]` - return the defining relations of the default/specified algebra.
* `#!wl printing[alg_]` - return the formatting rules of the default/specified algebra.

* `#!wl generatorQ[_]` - check whether the expression is a generator by the default algebra.

* `#!wl scalarQ|operatorQ[_]` - check whether the expression is a scalar/operator by the default algebra.

* `#!wl algebraSimplify[_]` - simplify the expression by the default algebra.

* `#!wl algebraPrint[_]` - format the expression by the default algebra.

* `#!wl tensorank[_]` - return the tensor rank of the expression by the default algebra.

* `#!wl tensorankUnsafe[_]` - return the tensor rank of the expression by the default algebra without validating the expression.

* `#!wl parity[_]` - return the parity of the expression by the default algebra.

* `#!wl parityUnsafe[_]` - return the parity of the expression by the default algebra without validating the expression.

Table of shortcuts:

| Name                  | Meaning                                              |
| :-------------------- | :--------------------------------------------------- |
| `#!wl algS[_]`        | `#!wl algebraSimplify`                               |
| `#!wl algP[_]`        | `#!wl algebraPrint`                                  |
| `#!wl algSP[_]`       | `#!wl algebraSimplify + algebraPrint`                |
| `#!wl algEqualQ[_,_]` | `#!wl x==y` for operators.                           |
| `#!wl algSameQ[_,_]`  | `#!wl x===y` for operators.                          |

### Involution

This functionality needs the algebras `#!wl "Conjugate"` and/or `#!wl "Inverse"`.

* `#!wl conjugate[_]` - conjugate of the operator.

* `#!wl innerProduct[_,_]` - inner product of the two operators.

    For operators $x$ and $y$ this returns $x^{\dagger}\cdot y$, and for a single operator $x$ this returns $x^{\dagger}\cdot x$.

* `#!wl inverse[_]` - inverse of the operator.

### Tensor product

This functionality needs the algebras `#!wl "Tensor"`, `#!wl "Coalgebra"`, `#!wl "Bialgebra"` and/or `#!wl "Antipode"`.

* `#!wl tensor[__]` - tensor product.

* `#!wl comultiply[_]` - comultiplication of coalgebra.

* `#!wl counit[_]` - counit of coalgebra.

* `#!wl antipode[_]` - antipode of Hopf algebra.

* `#!wl tensorCompose[_]` - composite the tensors over multiplication according to tensor rank.

* `#!wl tensorPermute[cycle_][_]` - permute the arguments of the tensor.

## Utilities

### Commutator

* `#!wl comm[__]` - (anti-)commutator.

* `#!wl commSim[__]` - simplify the (anti-)commutator.

* `#!wl commIn[_,_]:>_/;_` - define the (anti-)commutator with the given order and condition.

### Adjoint

* `#!wl adjoint[op_,order_:1][expr_]` - the adjoint action of Lie algebra.

    For $x,y\in \glie$, $\ad^{0}_x(y)=y$ and

    \begin{equation}
        \ad^n_x(y)
        =[x,\ad^{n-1}_x(y)]
        \, .
    \end{equation}

* `#!wl adjointExp[op_,max_,t_:1][expr_]` - the adjoint action of formal Lie group truncated at the given order.

    For $x,y\in \glie$ and $t\in \CC$,

    \begin{equation}
        \Ad_{t x}(y)|_{n}
        =
        e^{t x}y e^{-t x}|_{n}
        =
        \sum_{i=0}^{n}\frac{t^{i}}{i!}\ad^{i}_{x}(y)
        \, .
    \end{equation}

### Power

* `#!wl operatorPower[op_,order_:1]` - power of the operator.

* `#!wl operatorExp[op_,max_,t_:1]` - exponential of the operator truncated at the given order.

    For $x\in A$ and $t\in\CC$,

    \begin{equation}
        e^{t x}|_n=\sum_{i=0}^{n}\frac{t^i}{i!} x^i
        \, .
    \end{equation}

### Operator separation

* `#!wl operatorSeparate[_]` - separate scalars and operators in the given linear expression.

* `#!wl scalarSimplify[_]` - simplify the scalar part of the expression.

### Consistency check

User-defined relations are not guaranteed to be consistent with the internal ones. The following functions are designed for consistency checks.

* `#!wl checkLieBracket[_,_,_]` - check the Jacobi identity of Lie algebra.

    For $x,y,z\in\glie$,

    \begin{equation}
        [[x,y],z]=[x,[y,z]]-[y,[x,z]]
        \, .
    \end{equation}

* `#!wl checkLieModule[_,_,_]` - check the action on Lie module.

    For $x,y\in \glie $ and $v\in V$,

    \begin{equation}
        [x,y] (v)=x(y(v))-y(x(v))
        \, .
    \end{equation}

* `#!wl checkCoassociativity[_]` - check the coassociativity of comultiplication.

    For $x\in A$,

    \begin{equation}
        \sum
        x_{(1)(1)}\ox x_{(1)(2)}\ox x_{(2)}
        =
        \sum
        x_{(1)}\ox x_{(2)(1)}\ox x_{(2)(2)}
        \, .
    \end{equation}

* `#!wl checkCounitality[_]` - check the counitality of counit.

    For $x\in A$,

    \begin{equation}
        \sum
        \epsilon(x_{(1)})x_{(2)}
        =
        \sum
        x_{(1)}\epsilon(x_{(2)})
        =
        x
        \, .
    \end{equation}

* `#!wl checkAntipode[_]` - check the antipode of Hopf algebra.

    For $x\in A$,

    \begin{equation}
        \sum
        S(x_{(1)})x_{(2)}
        =
        \sum
        x_{(1)}S(x_{(2)})
        =
        \epsilon(x)\id
        \, .
    \end{equation}

## Other issues

* ``#!wl Needs["Yurie`Algebra`"]`` will preserve the previously defined algebras, while ``#!wl Get["Yurie`Algebra`"]`` will clear them.

* From version 14.2 to 14.3, the behavior of `#!wl Simplify` is changed to convert e.g. `#!wl x**x` to `#!wl GeneralizedPower[x,2]`.

    The function `#!wl scalarSimplify` mimics `#!wl Simplify` before version 14.3.