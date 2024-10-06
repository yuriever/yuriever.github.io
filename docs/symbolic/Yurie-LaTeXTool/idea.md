# Designing idea

## Magic comment

* `#!wl comment_String` - comment identifier;

* `#!wl type_String` - comment type, and can be omit.

* inline

    ``` wl
    StartOfLine~~Shortest[Except["\n"]...]~~comment_~~"LaTeXTool-"~~type_~~"-Skip"~~EndOfLine
    ```

* block

    ``` wl
    comment_~~"LaTeXTool-"~~type_~~"-Off"~~Shortest[___]~~comment_~~"LaTeXTool-"~~type_~~"-On";
    ```

    ``` wl
    comment_~~"LaTeXTool-"~~type_~~"-Begin"~~Shortest[___]~~comment_~~"LaTeXTool-"~~type_~~"-End";
    ```
