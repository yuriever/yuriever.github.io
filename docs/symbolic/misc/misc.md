# Miscellaneous


## Replace vs. ReplaceAll

`#!wl ReplaceAll` 的策略是从外到内、广度优先的，匹配完的子表达式不再被匹配；
`#!wl Replace` 访问表达式的策略是从内到外、深度优先的。
此外，`#!wl Replace` 的默认选项为 `#!wl Heads->False`。
例如：

!!! wl "Example"

    ``` wl
    ReplaceAll[f[f[x]],f[x_]:>g[x]]

    ReplaceAll[f[f[x]],f->g]

    Replace[f[f[x]],f[x_]:>g[x],All]

    Replace[f[f[x]],f->g,All,Heads->True]
    ```

    ``` wl
    Out[] = g[f[x]]

    Out[] = g[g[x]]

    Out[] = g[g[x]]

    Out[] = g[g[x]]
    ```

对于 `#!wl ReplaceAll` 而言，一方面，规则 `#!wl {x_head:>x,...}` 可以防止 `#!wl Head` 为 `#!wl head` 的子表达式被匹配，称为哑规则 (dummy rule)；另一方面，其余的规则应避免此类不改变表达式的行为，以防止子表达式被遮蔽。例如：

!!! wl "Example"

    ``` wl
    ReplaceAll[{f[x],x},{x_f:>x,x->y}]
    ```

    ``` wl
    Out[] = {f[x],y}
    ```

`#!wl With|ReplaceAll` 等函数可将表达式注入到带有 `#!wl HoldAll` 属性的函数中。其中，注入模式 (injector pattern) 是一个比较灵活的技巧。例如：

!!! wl "Example"

    ``` wl
    ReplaceAll[Hold[1+1],Hold[x_]:>Hold[x,x]]
    ```

    ``` wl
    Out[] = Hold[1+1,1+1]
    ```

`#!wl RuleCondition` 是一个常用且稳定的无文档函数，可实现替换时的计算 (in-place evaluation)。例如：

!!! wl "Example"

    ``` wl
    ReplaceAll[Hold[f[x]],f[x_]:>Identity[x]]

    ReplaceAll[Hold[f[x]],f[x_]:>RuleCondition@Identity[x]]
    ```

    ``` wl
    Out[] = Hold[Identity[x]]

    Out[] = Hold[x]
    ```


## Decoupling

减少不同功能的函数与扩展包之间的关联。


## Helper function

复杂的主体函数应分层，最外层提供用户接口，若干内层的辅助函数实现不同功能，尽可能使函数的依赖关系为树状结构。为了避免重复判定条件，仅在最外层使用判别函数。


## Hold-like attributes

需注意 `#!wl HoldAll` 或类似属性在多层函数之间的正确传递。


## Set in package

当 `#!wl Set` 出现在扩展包中时，需注意相关符号在扩展包多次被调用后的状态，或在定义前清除原始值。


## Public variable

处理公共变量 `#!wl var=...` 时：

* 需注意状态的管理；

* 与 `#!wl HoldAll` 等非标准计算的交互。

<!-- ## Names

直到 14.0 版本，``#!wl Names[{"ctx`*"}]`` 会搜索多层的上下文，``#!wl Names["ctx`*"]`` 仅搜索一层，因此更快。例如 ``#!wl ctx`sub`fun`` 不会被后者搜索到。 -->