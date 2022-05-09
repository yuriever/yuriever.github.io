# xAct 变分计算

本文以 4 维标量场和电磁场为例介绍 xAct，根据 [xPert 文档](http://www.xact.es/xPert/index.html)，[xTras 文档](http://www.xact.es/xTras/documentation/guide/xTras.html)，[作用量变分实例](https://github.com/xAct-contrib/examples/blob/master/ActionVariation_Metric_Fields.nb)写作。

## 背景

本文考虑的 4 维标量场的作用量为

\[
S=\frac{1}{2}\int\,{d^{d}x}\sqrt{-g}\,( \partial^{a}\phi \partial_{a}\phi + c_s R \phi^2)
\]

选取合适的系数 $c_{s}=\frac{d-2}{12}=\frac{1}{6}$ 后，修正项 $R \phi^2$ 可使作用量在 Weyl 变换下不变，因此能动张量 $T_{ab}=\frac{2}{\sqrt{-g}} \frac{\delta S}{\delta g^{ab}}$ 的迹为零 $\trace{T}=0$，该理论称为 conformal scalar。

电磁场的作用量为

\[
S=\frac{1}{4}\int\,{d^{d}x}\sqrt{-g}\,F_{ab}F^{ab}
\]

且有 $\trace{T}= \frac{d-4}{4}F^{2}=0$。事实上，仅当 $d=4$ 时，自由电磁场具有<font color="red">共形对称性</font>。

## 导言

变分计算问题回到最底层，是遵循一系列规则依照一定次序化简表达式，逐步降低表达式的复杂度，最后抵达目标表达式。

这是一个代数问题，不需要指明场构型在哪一个函数空间中，不需要流形的整体信息，不必明确是何种意义的积分[^1]。我们所需的只是一个坐标卡内的局部结构，例如微分、度规、复结构。这个坐标卡可以是欧氏空间的开集，可以是超空间的开集，或者某种形式几何。

!!! note ""
    say some words on variational bi-complex, formal geometry and BV-BRST.

那么直接的实现方案是利用MMA的核心功能：`Rule` 和 `Replace`，相关介绍可见 [符号计算：非交换代数](noncomm_algebra.md)。如果想重复利用代码，需要明确各个对象/变量之间的派生关系，例如：某张量场是在某坐标卡上的，某联络的某一项是关于某纤维丛的。xAct 提供了相应的完整平台。


我们需要调用的扩展包如下：

```
<< Notation`;

(*隐藏导入时打印的版本信息*)
Block[{Print},
 << xAct`xCore`;
 << xAct`xPerm`;
 << xAct`xTensor`;
 << xAct`xPert`;
 << xAct`xTras`;
 << xAct`xCoba`;]

(*定义某些对象后xAct会打印相关信息，可隐藏*)
$DefInfoQ = False;

(*隐藏局部变量的$符号*)
$PrePrint = ScreenDollarIndices;

(*以前缀运算符的形式打印协变导数*)
$CovDFormat = "Postfix";

tensorSim[x_] := x // ContractMetric // Simplification;
tensorCollect[x_] := Collect[ContractMetric[x], $PerturbationParameter, Simplification];

(*有时计算结果会包含一个delta符号，可用如下规则消除*)
ruled1 = {delta[-LI[1], LI[1]] -> 1};
```

变分计算可以分为三步：写下作用量；对场量变分；分部积分化简表达式。

## 流形与作用量

我们先声明流形、度规和 Levi-Civita 联络，号差为$(-,+,+,...)$，

```
(*声明流形为M4，维数为4，xAct会自动声明切丛以及相关的张量丛*)
(*第三个自变量是指标集，亦可以用函数IndexRange指定*)
DefManifold[M4, 4, {a,b,c,d,e,f,g,h}]

(*第一个变量是度规行列式的符号*)
(*下指标用负号标记，xAct自动定义适配的Levi-Civita联络，SymbolOfCovD和PrintAs是打印规则*)
DefMetric[-1, metric[-a, -b], CD, SymbolOfCovD -> {";", "\[Del]"}, PrintAs -> "g"]
rootMetric = Sqrt[-Detmetric[]];
```

方便起见，这里引入 `rootMetric` 为 $\sqrt{-g}$，其中 `Detmetric[]` 为附着度规名称 `metric` 自动定义的度规行列式。

声明标量场 $\phi$、电磁场 $A_{a}, F_{ab}$，定义作用量，
待定系数 $c_s$ 需用 `DefConstantSymbol` 声明
```
DefConstantSymbol[cs, PrintAs -> "\!\(\*SubscriptBox[\(c\), \(s\)]\)"]
DefTensor[\[Phi][], M4]
DefTensor[A[-a], M4]
DefTensor[F[-a, -b], M4, Antisymmetric[{-a, -b}]]
```

场强和规范势需满足规则 $F_{ab}=\partial_{[a}A_{b]}$ ，xAct 提供了类似 `SetDelayed` 的函数 `IndexSetDelayed`，以及类似 `Rule` 的函数 `MakeRule`，

```
?IndexSetDelayed
?MakeRule
```

> IndexSet[lhs, rhs] defines a relation between indexed expressions lhs and rhs, without evaluating rhs.
>
> MakeRule[{LHS, RHS}] gives a list of delayed rules with left and right hand sides as given by LHS and RHS respectively, but moving indices to consider all possible equivalent rules. See notes for its options PatternIndices, MetricOn, UseSymmetries and TestIndices. MakeRule[{LHS, RHS, conditions}] adds conditions to the rules.

这里我们选用 `MakeRule`，更方便控制计算，

```
(*注意MakeRule不需要使用模式*)
ruleFToA = MakeRule[{F[a, b], CD[a]@A[b] - CD[b]@A[a]}];
```

接下来定义 Lagrangian density，以下混称作用量，

```
actionScalar = 1/2 rootMetric (CD[a]@\[Phi][] CD[-a]@\[Phi][] + cs RicciScalarCD[] \[Phi][]^2 )
actionEM = 1/4 F[-a, -b] F[a, b] rootMetric
```



## 基于 xPert 的度规变分计算

扩展包 xPert 的主要功能为度规微扰。变分函数 `Perturbation` 内置了变分满足的线性性和 Lebniz 规则，例如 `Perturbation@A[-a]` 便是 $\delta A_{a}$，被打印为 $\Delta A_{a}$，例如对电磁场作用量的变分为

```
actionEM // Perturbation
```

对作用量中的三个因子的分别变分，展开给出三项，

<figure align="left" width="1000">
  <img src="../xact_variation1_img/actionEM_Perturbation1.svg" />
</figure>

<!-- ![](../xact_variation1_img/actionEM_Perturbation1.svg) -->

被变分的基本场为规范势 $A$ 而非场强 $F$，因此利用规则 `ruleFToA` 展开 $F$，

```
actionEM /. ruleFToA // tensorSim // Perturbation
```

![](../xact_variation1_img/actionEM_Perturbation2.svg)

注意 $\delta A^{a}$ 隐含度规缩并 $\delta(A_{b}g^{ab})=\delta A_{b} g^{ab}+A_{b}\delta g^{ab}$。需要将 $\delta L$ 展开成 $(\dots )\delta g+(\dots )\delta A_{a}$ 的形式，$\delta A_{a}$ 的系数给出场方程，$\delta g$ 的系数给出能动张量，括号中含有关于变分的协变导数，需要通过分部积分来消除。

函数 `VarD[#1,#2]` 提供了抽取系数以及分部积分的功能，其中第一个自变量表示被变分的场，第二个自变量表示关于 `CD` 进行分部积分。并且在声明度规时已自动定义了度规变分，由此可计算能动张量 $T_{ab}=\frac{2}{\sqrt{-g}} \frac{\delta S}{\delta g^{ab}}$ 以及迹 $\trace{T}$ ，

```
stressTensorEM1 = 2/rootMetric VarD[metric[a, b], CD]@actionEM // tensorSim
stressTensorTraceEM1 = stressTensorEM1 metric[a, b] // tensorSim
stressTensorScalar = 2/rootMetric VarD[metric[a, b], CD]@actionScalar // Collect[#, cs, tensorSim] &
stressTensorTraceScalar = stressTensorScalar metric[a, b] // tensorSim
```

![](../xact_variation1_img/stresstensor.svg)

注意这里无需使用规则 `ruleFToA`，如果提前展开场强为规范势，能动张量的表达式会略显复杂，稍后介绍化简方法。实际上，$\trace{T}= \frac{d-4}{4}F^{2}$，仅当 $d=4$ 时，自由电磁场具有<font color="red">共形对称性</font>。对于标量场，取待定系数 $c_{s}=\frac{d-2}{12}=\frac{1}{6}$ 有，

![](../xact_variation1_img/eomscalar1.svg)

此时迹正比于运动方程，即 $\trace{T}=0$。



在计算运动方程时，如果仅调用扩展包 xPert，需要手动声明其它场对应的变分场

```
DefTensorPerturbation[d\[Phi][LI["order"]], \[Phi][], {M4}]
DefTensorPerturbation[dA[LI["order"], -a], A[-a], {M4}]
DefTensorPerturbation[dF[LI["order"], -a, -b], F[-a, -b], {M4}]
```

```
actionScalar // Perturbation // ExpandPerturbation;
eomScalar = 1/rootMetric VarD[d\[Phi][LI[1]], CD]@Out[] /. ruled1 // tensorSim
actionEM /. ruleFToA // Perturbation // ExpandPerturbation;
eomEM = 1/rootMetric VarD[dA[LI[1], a], CD]@Out[] /. ruled1 // tensorSim
```

其中函数 `ExpandPerturbation` 可化简度规微扰，结果为，

![](../xact_variation1_img/eom.svg)


## 基于 xTras 的实现

在 xPert 的基础上，xTras 封装了关于变分的一系列规则和函数， **无需利用 `DefTensorPerturbation` 定义变分场** ，上一节的计算可以精简为

```
eomEM = 1/rootMetric VarD[A[-a], CD]@(actionEM /. ruleFToA) // tensorSim
stressTensorEM = 2/rootMetric VarD[metric[a, b], CD]@actionEM // tensorSim

eomScalar = 1/rootMetric VarD[s[], CD]@actionScalar // tensorSim
stressTensorScalar = 2/rootMetric VarD[metric[a, b], CD]@actionScalar // tensorSim;
stressTensorTraceScalar = stressTensorScalar metric[a, b] // tensorSim
```


---

[^1]: 甚至积分不必被视为是到复数 $\mathbb{C}$ 的映射，它可以是到 $\mathbb{C}[[\hbar,m,g,\dots ]]$ 的映射，或者是到其他的奇怪的环。