# Example

The canonical commutation relation can be implemented as

!!! wl "CCR"

    ``` wl
    Needs["Yurie`Algebra`"]

    algebraDefine["CCR"]

    algebraDefault["CCR"]

    <|"Generator"->{x,p},"Relation"->{x**p:>p**x+id}|>//algebraAdd["CCR"]
    ```

    ``` wl
    operatorPower[x,2]**operatorPower[p,2]//algS
    ```

    ``` wl
    Out[] = 2 id+4 p**x+p**p**x**x
    ```
