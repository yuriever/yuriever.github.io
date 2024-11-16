# Optional Arguments

本页面介绍 Mathematica 的选项功能。

## 基本用法

以下称 `#!wl OptionsPattern[]` 为输入选项，称 `#!wl Options[]` 为默认选项。例如：

!!! wl "Example"

    ``` wl
    child//Options = {"a"->0};
    
    child[OptionsPattern[]] :=
        OptionValue["a"];
    ```

    ``` wl
    child[{{"a"->1,"a"->2}}]
    ```

    ``` wl
    Out[] = 1
    ```

## 选项的继承

此种用法适用于将简单函数从下到上的组合为复杂函数。例如：

=== "Incorrect"

    !!! wl "Example"

        ``` wl
        parent//Options = {
            Splice@Options@child,
            "b"->x
        };
        
        parent[opts:OptionsPattern[]] :=
            child@FilterRules[{opts},Options[child]];
        ```

        ``` wl
        SetOptions[parent,"a"->1]
        
        parent[]
        ```

        ``` wl
        Out[] = {a->1,b->x}

        Out[] = 0
        ```

=== "Correct"

    !!! wl "Example"

        ``` wl
        parent//Options = {
            Splice@Options@child,
            "b"->x
        };
        
        parent[opts:OptionsPattern[]] :=
            child@FilterRules[{opts,Options@parent},Options[child]];
        ```

        ``` wl
        SetOptions[parent,"a"->1]
        
        parent[]
        ```

        ``` wl
        Out[] = {a->1,b->x}

        Out[] = 1
        ```

此处 `#!wl FilterRules` 会过滤出 `#!wl child` 接受的选项。

在错误的例子中，若用 `#!wl SetOptions` 更新 `#!wl parent` 的默认选项，可以发现该更新未传递给 `#!wl child`。其原因在于键 `#!wl "a"` 未出现在 `#!wl parent` 的输入选项中，因此 `#!wl child` 调用了自身的默认选项 `#!wl "a"->0`。

在正确的例子中，我们用 `#!wl {opts,Options@parent}` 手动合并了 `#!wl parent` 的输入选项与默认选项，再将其传递给 `#!wl child`。

## 非局域选项的指定

上述继承的用法有时稍显笨重，特别是在顶层函数仅用来分离参数与选项，或检测参数类型，而非实现核心功能的时候。例如：

!!! wl "Example"

    ``` wl
    foo//Options = {"a"->0};

    foo[args___] :=
        With[ {sep = ArgumentsOptions[foo[args],{1,2},<|"Head"->HoldComplete,"OptionsMode"->"Shortest"|>]},
            ifoo[sep]/;!FailureQ[sep]
        ];
    ```

    ``` wl
    foo[x,"a"->1]

    foo[x,"b"->y]
    ```

    ``` wl
    Out[] = ifoo[{HoldComplete[x],HoldComplete["a"->1]}]

    Out[] = ifoo[{HoldComplete[x,"b"->y],HoldComplete[]}]
    ```

可见 `#!wl "a"->1` 被正确的识别为了选项，而未出现在 `#!wl foo` 的默认选项中的 `#!wl "b"->y` 被识别为了参数。

接下来部分实现 `#!wl ifoo` 的功能，

!!! wl ""

    ``` wl
    ifoo[{HoldComplete[x_],HoldComplete[opts___]}] :=
        x+OptionValue[foo,{opts},"a"];
    ```

此处 `#!wl OptionValue[foo,{opts},"a"]` 自动接受了 `#!wl foo` 的输入选项与默认选项。

!!! wl ""

    ``` wl
    SetOptions[foo,"a"->1];
    ```

    ``` wl
    foo[x]

    foo[x,"a"->0]
    ```

    ``` wl
    Out[] = 1+x

    Out[] = x
    ```

类似的，`#!wl OptionsPattern[foo]` 亦可以实现此种非局域的选项指定。

## 注意事项

* `#!wl OptionValue` 优先搜索输入选项，其次搜索默认选项。

* 输入选项的键 (key) 应首先出现在默认选项中。

* 若选项的键出现重复，**前面**的优先级更高。这与关联 (association) 的行为相反，关联的重复键中**后面**的优先级更高。

* 需注意，若函数接受的参数中含有列表，`#!wl FilterRules` 返回的列表可能会被匹配为列表而非输入选项。

* 此外，输入选项接受序列、列表和嵌套列表，后者为文档未指明的行为。默认选项也接受嵌套列表，在特定场景会报错，不影响功能。`#!wl FilterRules` 的两个参数接受列表和嵌套列表，返回列表。