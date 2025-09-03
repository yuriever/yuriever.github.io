# Designing idea

## Motivation

A finitely presented algebra (or monoid, module, ...) consists of lists of generators `#!wl "Generator"` and relations `#!wl "Relation"`. From above we can abstract the object as

* class: algebra

* instance attribute: name, operator, relation

* method: define, unset, reset, change_elements

Then different algebras correspond to different list pairs and can be composited into one algebra

* class: composite_algebra

* instance attribute: algebra_list

* method: init, del, ...

This leads to an abstraction of a three-layered structure, referred as

| Layer                        | Name    |
| :--------------------------- | :------ |
| composite algebra            | cluster |
| algebra                      | star    |
| operator, relation, printing | planet  |

## Structure

This kind of class composition can be illustrated by the following diagram.

!!! wl "Instance initializing and updating"

    ``` mermaid
    flowchart LR

    common(common)
    extra(extra)
    default(default)

    define{{define/reset}}
    update{{update}}

    common --- define
    define --> instance1 & instance2 & instancen & ...
    extra & instance1 & instance2  --- update
    update --> default

    subgraph instances[" "]
    instance1(instance 1) & instance2(instance 2) & ...(...) & instancen(instance n)

    style instances fill:#ffdaaa20,stroke-width:0,rx:1rem,ry:1rem
    end
    ```

## Implementation

There are two styles of implementation:

* `#!wl DownValues` - `#!wl cluster` is the `#!wl UpValues` of the `#!wl star`, and `#!wl planet` is the `#!wl DownValues` of the `#!wl star`.

    !!! code

        ``` wl
        clusterOf[star1] ^= cluster;

        star1[planet1] = {};

        star1[planet2] = {};

        ...
        ```

* `#!wl Association` - the data is stored into nested associations.

    !!! code

        ``` wl
        cluster[<|
            star1-><|planet1->{},planet2->{},...|>,
            star2-><|planet1->{},planet2->{},...|>,
            ...
        |>]
        ```

We choose the latter since there are several advantages: `#!wl Association` is immutable and is faster to access, consumes less memory, and requires no symbol management.
