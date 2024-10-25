# [Yurie/LaTeXTool](https://github.com/yuriever/Yurie-LaTeXTool)

LaTeX tools.

## Public

* `#!wl LaTeXFormat[opts_][file_]` - format the LaTeX file.

    The file will be firstly formatted by [tex-fmt](https://github.com/WGUNDERWOOD/tex-fmt) with the option

    * `#!wl "Indentation"->4`

    and then successively by the steps controlled by the following options.

    * `#!wl "SurroundEquationWithPercent"->False`

        * surround equations with percentage symbol;

        * accepts `#!wl True` of `#!wl False`;

        * Example:

            === "After"

                ``` tex
                %
                \begin{equation}
                    a+b
                \end{equation}
                %
                ```

            === "Before"

                ``` tex
                \begin{equation}
                    a+b
                \end{equation}
                ```

    * `#!wl "EquationMarkSpacing"->None`

        * adjust spacings before punctuation marks in equation environment;

        * accepts `#!wl None` or one of the followings:

            ``` wl
            {"\\;","\\,","\\:","\\>","\\ "}
            ```

        * skip equations surrounded by the magic comments

            ``` tex
            % LaTeXFormat-EMS-Off
            ...
            % LaTeXFormat-EMS-On
            ```

        * Example:

            === "After"

                ``` tex
                \begin{equation}
                    a+b
                    \, .
                \end{equation}

                % LaTeXFormat-EMS-Off
                \begin{equation}
                    a+b.
                \end{equation}
                % LaTeXFormat-EMS-On
                ```

            === "Before"

                ``` tex
                \begin{equation}
                    a+b.
                \end{equation}

                % LaTeXFormat-EMS-Off
                \begin{equation}
                    a+b.
                \end{equation}
                % LaTeXFormat-EMS-On
                ```

* `#!wl LaTeXParser[opts_][file_]` - a simple parser of LaTeX.

    * Parse `#!tex \newcommand`, `#!tex \newenvironment` and `#!tex \usepackage`.

    * To disable parsing of a line, add the magic comment `#!tex % LaTeXParser-Skip` at the end of that line. To disable parsing of a block, use the magic comments:

        ``` tex
        % LaTeXParser-Off
        ...
        % LaTeXParser-On
        ```

    * The option `#!wl "SkipType"` allows typed magic comments and accepts `#!wl Automatic|_String|{__String}`, where `#!wl Automatic` for non-typed ones.

        For example, the magic comment `#!tex % LaTeXParser-MathJax-Skip` will be triggered by setting the option as `#!wl "SkipType"->"MathJax"`.

* `#!wl MathJaxJSOverwrite[macro_][file_]` - overwrite the macros in JSON files used by MathJax.

    * The matching is hinted by the magic comments:

        ``` js
        // MathJaxJSOverwrite-Macro-Begin
        macros: {
            ...
        },
        // MathJaxJSOverwrite-Macro-End
        ```

* `#!wl MarkdownFormat[opts_][file_]` - format the Markdown file.

    The file will be firstly formatted by [AutoCorrect](https://github.com/huacnlee/autocorrect) and then successively by the steps controlled by the following options.

    * `#!wl "SurroundInlineEquationWithBlank"->True`

        * surround inline equations with blank;

        * accepts `#!wl True` of `#!wl False`;

        * skip inline equations surrounded by the magic comments

            ``` markdown
            <!-- MarkdownFormat-IEB-Off -->
            ...
            <!-- MarkdownFormat-IEB-Off -->
            ```

        * Example:

            === "After"

                ``` markdown
                测试，$a$ 测试
                ```

            === "Before"

                ``` markdown
                测试，$a$测试
                ```

    * `#!wl "SurroundBlockEquationWithEmptyLine"->True`

        * surround block equations with empty line;

        * accepts `#!wl True` of `#!wl False`;

        * Example:

            === "After"

                ``` markdown
                测试

                \begin{equation}
                    a+b
                \end{equation}

                测试
                ```

            === "Before"

                ``` markdown
                测试
                \begin{equation}
                    a+b
                \end{equation}
                测试
                ```

## To-do

* The parser of `#!tex \newenvironment` has not been implemented.
