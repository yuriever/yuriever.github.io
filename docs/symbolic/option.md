# Inheritance of options

本页面总结 Mathematica 选项功能的使用方法。

## 基本用法

``` wl
f//Options=
    {"a"->"a1"};

f[opts:OptionsPattern[]]:=
    OptionValue["a"];

f[]

f[{{"a"->"a2","a"->"a3"}}]
```

``` wl
Out[] = "a1"

Out[] = "a2"
```

以下 `#!wl opts` 称为输入选项，`#!wl Options@f` 称为默认选项。

* 输入选项接受序列和（嵌套）列表 [^nestlist]。

* 输入选项的关键词必须出现在默认选项中。

* `#!wl OptionValue` 优先搜索输入选项，其次搜索默认选项。

* 对于输入选项或默认选项，重复的关键词中**前面**的优先级更高。这与关联的行为相反，例如 `#!wl <|"a"->1,"a"->2|>` 返回 `#!wl <|"a"->2|>`。

## 继承

``` wl
correct//Options=
    {Splice@Options@f,"b"->"b0"};

wrong//Options=
    {Splice@Options@f,"b"->"b0"};

SetOptions[{correct,wrong},"a"->"a0"];

correct[opts:OptionsPattern[]]:=
    {f@FilterRules[{opts,Options@correct},Options[f]],OptionValue["a"],OptionValue["b"]};

wrong[opts:OptionsPattern[]]:=
    {f@FilterRules[{opts},Options[f]],OptionValue["a"],OptionValue["b"]};

correct[]

wrong[]
```

``` wl
Out[] = {"a0","a0","b0"}

Out[] = {"a1","a0","b0"}
```

* `#!wl FilterRules` 的两个参数接受（嵌套）列表模式，返回列表。

* 函数 `#!wl g1` 和 `#!wl g2` 继承了 `#!wl f` 的默认选项，可用 `#!wl SetOptions` 改变默认选项的值。

* 若改变了默认选项的值，需手动将其传递给 `#!wl f`：用 `#!wl {opts,Options@g1}` 合并 `#!wl g1` 的输入选项与默认选项，用 `#!wl FilterRules` 过滤出 `#!wl f` 接受的选项。否则 `#!wl f` 调用自身的默认选项。

* 需注意，若 `#!wl f` 接受的参数中含有列表，`#!wl FilterRules` 返回的列表可能会被匹配为列表而非输入选项，消歧义的写法为 `#!wl sequence@@FilterRules`。

[^nestlist]: 接受（嵌套）列表为文档未指明的行为。默认选项也接受（嵌套）列表，在特定场景会报错，不影响功能。