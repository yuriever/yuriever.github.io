# Designing idea

## Expression tree

Nodes of expression tree:

* `#!wl _Plus`

* `#!wl _Times`

* `#!wl _?generatorQ`

* `#!wl _tensor`

* `#!wl _NonCommutativeMultiply`

## Attributes

* `#!wl "Generator"`

    * `#!wl generatorQ`

    * `#!wl scalarQ|operatorQ`

* `#!wl "Relation"`

    * `#!wl relation`

    * `#!wl algebraSimplify`

* `#!wl "Printing"`

    * `#!wl printing`

    * `#!wl algebraPrint`

* `#!wl "Rank"`

    * `#!wl tensorankUnsafe` - faster; only handling the nodes `#!wl _?generatorQ|_tensor|_NonCommutativeMultiply|_Times`.

    * `#!wl tensorank` - check whether the expression is valid; return `#!wl Indeterminate` if it does not have a definite rank.

* `#!wl "Parity"`

    * `#!wl parityUnsafe` - similar to `#!wl tensorankUnsafe`.

    * `#!wl parity` - similar to `#!wl tensorank`.

## File structure

Core:

* Init.wl

    * class initialization

    * caching data into states

    * internal algebra initialization

* Algebra.wl

    * attributes and methods

* Core.wl

* Variable.wl

    * states

* Internal.wl

    * internal algebras

Extension

* Conjugate.wl

* Tensor.wl

* Utility.wl

* Check.wl

## Cache
