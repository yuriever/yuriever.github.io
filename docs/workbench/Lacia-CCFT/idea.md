# Designing idea

## 张量表达式

### 指标型张量

* 张量表达式：

    * 张量的线性组合

    * 用指标表示张量积与缩并

* 表达式树的节点:

    * `#!wl _Plus`

    * `#!wl _Times`

    * 张量节点：

        * `#!wl vec[vector_,index_]` - 矢量

        * `#!wl dot[vector1_,vector2_]` - 矢量点积

        * `#!wl met[index1_,index2_]` - 度规张量

* 张量节点：

    * 原子化，内部不可直接访问

    * `#!wl vector` 代表抽象矢量

### 抽象矢量

* 可为任意不含张量节点的表达式

* 除去默认定义的矢量外，由函数 `#!wl vectorSet|vectorUnset` 来定义

* 封装在 `#!wl vec|dot|dotcomp` 等中，可由 `#!wl vectorReplace` 等函数访问

### 分量型张量

## 函数

* `#!wl scalarFreeze|scalarFocus` - 用以处理下述问题：对于形如表达式 `#!wl ((a+b)^2*_vec+_vec)*_vec`，仅展开乘积而保持标量系数 `#!wl (a+b)^2` 不变，或仅对标量系数进行特定操作。

## 文件结构
