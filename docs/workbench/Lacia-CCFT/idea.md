# Designing idea

## Expression tree

Tensorial expression:

* linear combination of tensors;

* tensor product and contraction are represented by indices.

Nodes of expression tree:

* `#!wl _Plus`

* `#!wl _Times`

* tensorial nodes:

    * `#!wl vec[vector_,index_]` - vectors

    * `#!wl dot[vector1_,vector2_]` - contracted vectors

    * `#!wl met[index1_,index2_]` - metric tensor

## File structure
