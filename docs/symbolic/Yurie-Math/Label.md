# Yurie/Math/Label

## Kernel

* `#!wl label[var_,lab_,head_]` - join the variable(s) and label into labeled objects using the specified head.

    * `#!wl var_` accepts `#!wl _|(List|Alternatives)[__]`.

    * `#!wl lab_` accepts `#!wl _?AtomQ`.

    * `#!wl head_` accepts `#!wl _Symbol`. The heads `#!wl Function` and `#!wl Symbol` are handled separately, and the default is `#!wl Function`.

        | Head            | Example              |
        | :-------------- | :------------------- |
        | `#!wl Function` | `#!wl var[lab]`      |
        | `#!wl Symbol`   | `#!wl varlab`        |
        | `#!wl head`     | `#!wl head[var,lab]` |

    * `#!wl labell` - variant of `#!wl label` with `#!wl Symbol` as head.

* `#!wl labels[var_,range__,head_]` - join the variable(s) and labels in the range using the specified head.

    * `#!wl labells` - variant of `#!wl labels` with `#!wl Symbol` as head.

* `#!wl labelAt[var_,rules__,head_]` - take the specific values of the labeled objects according to rules.

* `#!wl labelConvert[var_,head1_->head2_,opts_][expr_]` - convert the labeled objects according to the two specified label heads.

    * `#!wl opts_:"LabelType"->All` - control the pattern of labels, and resolve possible conflicts between variable and label.

        The supported values are

        * `#!wl All`
        * `#!wl Any_` - user-specified function
        * `#!wl "PositiveInteger"`
        * `#!wl "PositiveIntegerOrSingleLetter"`
        * `#!wl "PositiveIntegerOrGreekLetter"`
        * `#!wl "NaturalNumber"`
        * `#!wl "NaturalNumberOrSingleLetter"`
        * `#!wl "NaturalNumberOrGreekLetter"`

    * `#!wl labelJoin|labelSplit` - variants of `#!wl labelConvert` that convert `#!wl Symbol` to/from other heads.

* `#!wl labelTo*[var_,rule_,head_]` - return a `#!wl ReplaceAll` function according to the rule.

    | Name                   | Prototype                       |
    | ---------------------- | ------------------------------- |
    | `#!wl labelToZero`     | $ x_1 \to 0 $                   |
    | `#!wl labelToEqual`    | $ x_1 \to x_2 $                 |
    | `#!wl labelToDiff`     | $ x_1 \to x_{12} + x_2 $        |
    | `#!wl labelToDiffZero` | $ x_1 \to x_{12},\, x_2 \to 0 $ |
    | `#!wl labelToDiffBack` | $ x_{12} \to x_1 - x_2 $        |

## Example

!!! wl "`#!wl label` Different heads"

    === "Function"

        ``` wl
        label[x|y,1,Function]
        ```

        ``` wl
        Out[] = Sequence[x[1],y[1]]
        ```

    === "Symbol"

        ``` wl
        label[x|y,1,Symbol]
        ```

        ``` wl
        Out[] = Sequence[x1,y1]
        ```

    === "Any head"

        ``` wl
        label[x|y,1,head]
        ```

        ``` wl
        Out[] = Sequence[head[x,1],head[y,1]]
        ```

!!! wl "`#!wl label` Patterned variables"

    ``` wl
    labels[x_|y_,4,Symbol]
    ```

    ``` wl
    Out[] = Sequence[x1_,y1_,x2_,y2_,x3_,y3_,x4_,y4_]
    ```

!!! wl "`#!wl labelAt` Different heads"

    === "Function"

        ``` wl
        labelAt[x,1->a,2|3->b,_->c,Function]
        ```

        ``` wl
        Out[] = ReplaceAll[{x[1]->a,x[2]->b,x[3]->b,x[_]->c}]
        ```

    === "Symbol"

        ``` wl
        (* _->c is not supported. *)
        labelAt[x,1->a,2|3->b,Symbol]
        ```

        ``` wl
        Out[] = ReplaceAll[{x1->a,x2->b,x3->b}]
        ```

    === "Any head"

        ``` wl
        labelAt[x,1->a,2|3->b,_->c,head]
        ```

        ``` wl
        Out[] = ReplaceAll[{head[x,1]->a,head[x,2]->b,head[x,3]->b,head[x,_]->c}]
        ```

!!! wl "`#!wl labelConvert` Basic usage"

    ``` wl
    x1+y2//labelConvert[x|y,Symbol->Function]
    ```

    ``` wl
    Out[] = x[1]+y[2]
    ```

!!! wl "`#!wl labelConvert` Confliction"

    === "Correct"

        ``` wl
        zb1//labelConvert[z|zb,Symbol->Function,"LabelType"->"PositiveInteger"]
        ```

        ``` wl
        Out[] = zb[1]
        ```

    === "Incorrect"

        ``` wl
        zb1//labelConvert[z|zb,Symbol->Function]
        ```

        ``` wl
        Out[] = z[b1]
        ```

!!! wl "`#!wl labelTo*` Basic usage"

    ``` wl
    labelToDiff[x,1->2,3->4]
    ```

    ``` wl
    Out[] = ReplaceAll[{x[1]->x[2]+x["12"],x[3]->x[4]+x["34"]}]
    ```
