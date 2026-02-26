# Customizing shortcuts via Karabiner

References:

* [AutoHotkey](https://ahkcn.github.io/docs/AutoHotkey.htm)

* [Karabiner-Elements](https://karabiner-elements.pqrs.org/docs/json/)

---

## Introduction

Mac 端的 Karabiner 可以复现 Win 端的 AutoHotkey 的一部分功能。配置文件的格式为 JSON，默认目录为

``` text
~/.config/karabiner/assets/complex_modifications/xxx.json
```

配置文件 `xxx.json` 的结构为

``` json
{
    "title": "test shortcuts",
    "rules": [
        ...
    ]
}
```

数组 `rules` 存储了快捷键的配置信息，其结构如下。`from` 为快捷键以及修饰键，`to` 为激活的一系列按键或其它事件。

``` json
{
    "description": "...",
    "manipulators": [
        {
            "type": "basic",
            "from": {...},
            "to": [...],
        }
    }
    ...
]
```

例如，右 option 键加删除键实现向后删除的方案如下。键名可用 Karabiner 自带的 EventViewer 查看。

``` json
{
    "description": "right_option + del : del_forward",
    "manipulators": [
        {
            "type": "basic",
            "from": {
                "key_code": "delete_or_backspace",
                "modifiers": {
                    "mandatory": [
                        "right_option"
                    ]
                }
            },
            "to": [
                {
                    "key_code": "delete_forward"
                }
            ]
        }
    ]
},
```

Karabiner 不具有类似于 AutoHotkey `Send/SendRaw` 的函数，可以通过剪切板实现类似的功能，例如 LaTeX 的行间公式环境可被快捷键实现为，

``` json
{
    "description": "option + n : equation",
    "manipulators": [
        {
        "type": "basic",
        "from": {
            "key_code": "n",
            "modifiers": {
                "mandatory": [
                    "left_option"
                ]
            }
        },
        "to": [
            {
                "shell_command": "printf '\\\\begin{equation}\\n\\n\\\\end{equation}' | pbcopy",
                "hold_down_milliseconds": 200
            },
            {
                "key_code": "v",
                "modifiers": [
                    "right_command"
                ]
            },
            {
                "key_code": "up_arrow"
            }
        ]
        }
    ]
}
```

此处 `shell_command` 可通过命令行将字符串传输给剪切板。需要注意的是：

* 字符串需要通过两次转译，例如 `\begin{...}\n` 在命令行中应为 `\\begin{...}\n`，而在 `xxx.json` 中需要进一步将反斜杠进行转译，为 `\\\\begin{...}\\n`；
* 为保证粘贴之前已经完成字符串的传输，需要在两个事件间用 `hold_down_milliseconds` 添加延迟，类似于 AutoHotkey 的函数 `Sleep`。

## Location of configuration

<https://karabiner-elements.pqrs.org/docs/manual/misc/configuration-file-path/>