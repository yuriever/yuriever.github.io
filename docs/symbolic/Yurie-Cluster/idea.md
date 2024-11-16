# Designing idea

## Motivation

A finitely presented algebra (or monoid, module, ...) consists of lists of generators `#!wl operator` and relations `#!wl relation`. From above we can abstract the object as

* class: algebra

* instance attribute: name, operator, relation

* method: define, unset, reset, change_elements

Then different algebras correspond to different list-triples and can be composited into one algebra

* class: composite_algebra

* instance attribute: algebra_list

* method: init, del, ...

This leads to an abstraction of a three-layered structure, referred as

<center>

| Layer                        | Name    |
| :--------------------------- | :------ |
| composite algebra            | cluster |
| algebra                      | star    |
| operator, relation, printing | planet  |

</center>

## Structure

This kind of class composition can be illustrated by the following diagram.

!!! mark "Instance initializing and updating"

    ``` mermaid
    graph LR

    common --- define{{define/reset}}
    define --> instance1 & instance2 & instancen & ...
    extra & instance1 & instance2  --- update{{update}}
    update --> default
    
    subgraph instances
    instance1{{instance 1}} & instance2{{instance 2}} & ... & instancen{{instance n}}
    end
    ```

## Implementation

There are two styles of implementation:

* `#!wl DownValues` - `#!wl cluster` is the `#!wl UpValues` of the `#!wl star`, and `#!wl planet` is the `#!wl DownValues` of the `#!wl star`.

    !!! wl ""

        ``` wl
        clusterOf[star1] ^= cluster;

        star1[planet1] = {};
        
        star1[planet2] = {};

        ...
        ```

* `#!wl Association` - the data is stored into nested associations.

    !!! wl ""

        ``` wl
        cluster[<|
            star1-><|planet1->{},planet2->{},...|>,
            star2-><|planet1->{},planet2->{},...|>,
            ...
        |>]
        ```

We choose the latter since there are several advantages: `#!wl Association` is immutable and is faster to access, consumes less memory, and requires no symbol management.
