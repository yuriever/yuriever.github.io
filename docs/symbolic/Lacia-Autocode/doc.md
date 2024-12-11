# [Yurie/Autocode](https://github.com/yuriever/Yurie-Autocode)

Code tools.

## Public

* `#!wl convertNotebookToWLT[dir_,targetDir_]` - convert notebooks in the directory to *.wlt test files.

    * This function will syntactically import cells of type `#!wl "Input"|"Code"|"Output"|"Message"`, then regroup them into `#!wl {"Input"|"Code","Output","Message"}`, and convert the groups into `#!wl VerificationTest`.

    * An input cell with more than one outputs will be reported as an error, since there is no syntactical way to separate the input cell. For example,

        !!! code

            ``` wl
            a
            b
            ```

            ``` wl
            Out[] = a
            Out[] = b
            ```

    * Option:

        * `#!wl "ExcludedFile"->{}` - exclude certain notebooks in the directory.

    * Notice:

        * Currently format definitions cannot be parsed correctly, use the following workaround instead:

            !!! code

                ``` wl
                ToExpression["Format[expr,format]:=expr1;"]
                ```

            **TODO** check the code `#!wl NotebookImport[#,_->"HeldExpression"]&` to see how `#!wl NotebookImport` handles `#!wl Format`.

        * **TODO** Another parser of input cell, controlled by `#!wl (*$reformatCode = False;*)` should be deprecated, since it cannot distinguish `#!wl Power` and `#!wl Superscript`.

---

<!-- AST.wl -->

* `#!wl ASTHierarchy` - return the hierarchical structure of the AST.

* `#!wl ASTHierarchyPrint` - print the hierarchical structure of the AST.

<!-- buildLibrary.wl -->

* `#!wl buildLibrary` - build the library.

<!-- dependency.wl -->

* `#!wl dependency` - symbol dependency from definitions.

* `#!wl dependencyGraph` - symbol dependency graph from definitions.

* `#!wl $dependencyLimit` - the fixed-point limit in dependency*.

* `#!wl $dependencyExclusion` - the excluded contexts in dependency*.

<!-- exportArgumentCompletion.wl -->

* `#!wl exportArgumentCompletion` - export the argument completion data.

* `#!wl $argumentFileName` - default name of the argument completion file.

<!-- exportPublicSymbolUsage.wl -->

* `#!wl exportPublicSymbolUsage` - export the usages of public symbols in the directory.

* `#!wl $usageFileName` - default name of the usage file.

<!-- reportSuspiciousSet.wl -->

* `#!wl reportSuspiciousSet` - report suspicious set in the *.wl files in the directory.

    * **TODO** currently `#!wl Unset` is not supported.

<!-- reportWLT.wl -->

* `#!wl reportWLT` - report the unit test in the directory.