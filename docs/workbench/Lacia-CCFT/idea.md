# Designing idea

## 指标

指标分为如下类型：

* 标号 `#!wl label_` - 多数物理量均可带有标号，空标号为 `#!wl Null`。

* 出入态标号 `#!wl IO[label_,sign:1|-1]` - 正号为出态，负号为入态

    * 在特定函数中，例如 Spinor helicity formalism，出入态标号可简化为两类：

        * 非零整数：`#!wl label_Integer|-label_Integer/;label>0`

        * 符号：`#!wl label:_Symbol|-_Symbol`

    * 内部函数 `#!wl labelIO|signIO` 用来访问出入态标号。

* 时空指标 `#!wl index:_Symbol|-_Symbol` - 正号为上指标，负号为下指标。

* 偏振指标 `#!wl polar:_Integer|_Symbol` - 出现在偏振矢量中。

## 矢量类型

矢量类型：

* 符号型矢量 `#!wl vecsym[name_,label_]`

* 指标型矢量 `#!wl vec[vecsym_,index_]`

* 分量型矢量 `#!wl veccomp[vecsym_,dim_]`

    * 旋量化的分量型矢量 `#!wl veccompSA|veccompAS[vecsym_]`，其定义为

        \begin{equation}
            q_{a\dot{b}}\eqqq q_{\mu}\sigma^{\mu}_{a\dot{b}}
            \, ,
            \quad
            q^{\dot{a}b}\eqqq q_{\mu}\bar{\sigma}^{\mu,\dot{a}b}
            \, .
        \end{equation}

        * 注意 `#!wl braS|ketS` 均为 undotted 形式，以 S 代表；而 `#!wl braA|ketA` 为 dotted 形式，以 A 代表、

对于特定的矢量，例如动量，可定义：

!!! code

    ``` wl
    p[label_]:=
        vecsym[p,label];

    p[io_IO]:=
        signIO[io]*vecsym[p,labelIO[io]];

    p[label_,index_]:=
        vec[p[label],index];

    veccomp[vecsym[p,label_],dim_]:=
        ...
    ```

此种方案的优势：

* 无需管理符号型矢量的实例；

* 模式匹配简单；

* 可扩展性强。

## 张量表达式

### 符号型矢量

* 符号型矢量表达式：

    * 符号型矢量的线性组合

    * 被封装在 `#!wl _vec|_dot|_dotcomp` 等指标或分量型矢量后，可由 `#!wl vectorReplace` 等函数访问

* 节点：

    * `#!wl _Plus|_Times` - 常规节点

    * `#!wl vecsym[name_,label_]` - 符号型矢量节点

### 指标型张量

* 指标型张量表达式：

    * 张量的线性组合

    * 用指标表示张量积与缩并

* 节点：

    * `#!wl _Plus|_Times` - 常规节点

    * 指标型张量节点：

        * 原子化，内部不可直接访问

        * `#!wl vec[vecsym_,index_]` - 指标型矢量，封装了符号型矢量表达式 `#!wl vecsym` 与指标 `#!wl index`

        * `#!wl dot[vecsym1_,vecsym2_]` - 矢量点积，封装了两个符号型矢量表达式

        * `#!wl met[index1_,index2_]` - 度规张量

### 分量型张量

* 分量型张量表达式

* 节点：

    * `#!wl _Plus|_Times` - 常规节点

    * 分量型张量节点：

        * 依赖于维数与度规号差等常数

        * `#!wl veccomp[vecsym_,dim_]` - 分量型矢量，封装了符号型矢量表达式 `#!wl vecsym`

        * `#!wl dotcomp[vecsym1_,vecsym2_,dim_]` - 矢量点积分量，封装了两个符号型矢量表达式

        * `#!wl metcomp[dim_,signature_]` - 度规分量

## 函数

* `#!wl scalarFreeze|scalarFocus` - 用以处理下述问题：对于形如表达式 `#!wl ((a+b)^2*_vec+_vec)*_vec`，仅展开乘积而保持标量系数 `#!wl (a+b)^2` 不变，或仅对标量系数进行特定操作。

## 文件结构

* 核心功能

    * Constant.wl - 常数

    * Convention.wl - 维数与约定管理

    * Abstract.wl - 符号与指标型张量

    * Component.wl - 分量型张量

    * Conjugate.wl - 共轭

* 扩展功能

    * ConformalKinematics.wl

    * ScatteringAmplitude.wl

    * Conversion.wl

    * Distribution.wl

    * Coefficient.wl

    * SpinorHelicity.wl

    * MCVariety.wl

* 输出格式

    * Box.wl

    * LaTeX.wl

* 其它

    * SysFix.wl - 内置函数修复

    * Deprecation.wl - 兼容老版本

## 讨论
