# Designing idea

## 指标

指标分为如下类型：

* 标号 `#!wl label_` - 多数物理量均可带有标号，空标号为 `#!wl Null` 或 `#!wl \[FormalO]`。

* 出入态标号 `#!wl IO[label_,sign:1|-1]` - 正号为出态，负号为入态

    * 在特定函数中出入态标号可简化为两类：

        * 非零整数：`#!wl label_Integer|-label_Integer/;label>0`

        * 符号：`#!wl label:_Symbol|-_Symbol`

    * 函数 `#!wl IOLabel|IOSign` 用来访问出入态标号。

* 时空指标 `#!wl index:_Symbol|-_Symbol` - 正号为上指标，负号为下指标。

* 偏振指标 `#!wl polar:_Integer|_Symbol` - 出现在偏振矢量中。
