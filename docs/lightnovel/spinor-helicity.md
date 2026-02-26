# Spinor helicity formalism

<span hidden> $\newcommand{\dota}{\dot{a}}
\newcommand{\dotb}{\dot{b}}
\newcommand{\dotc}{\dot{c}}
\newcommand{\sigmab}{\bar{\sigma}}
\newcommand{\epsilonb}{\bar{\epsilon}}
\newcommand{\polar}{{\color{red}n}}
\newcommand{\inout}[1]{e_{#1}}$ </span>

## Conventions

本文旨在梳理旋量螺旋度方法 (spinor helicity formalism) 中的约定，主要遵循 [@Wess:2020] [@SAGEX1]。

* 尽管对于物理观测量而言，约定的选择是一种“规范”，但它会沿着计算过程传播。从编程视角看，这是一种非局域效应，应当被封装在独立的模块中。

<!-- It is noteworthy that while the choice of convention for physical observables is purely a "gauge", it propagates along computations. From the perspective of programming, this is actually a nonlocal effect that should be encapsulated within different modules. -->

* 任意动量记为 $P$，有质量的记为 $p$，无质量的记为 $q$。无质量动量的参数化为
    \begin{equation*}
        q=\omega(
            1+z \bar{z},z+\bar{z},-i (z-\bar{z}),1-z \bar{z}
        )
        \, ,
        \textInMath{for}
        \omega>0,z\in\CC
        \, .
    \end{equation*}

### Metric

度规号差记为
\begin{equation}
    \tag{Signature}
    \signature=
    \begin{cases}
        +1
        \, , \quad (-,+,+,+)\, ,\\
        -1
        \, , \quad (+,-,-,-)\, .\\
    \end{cases}
\end{equation}

若要变更度规号差，需要翻转 $g_{\mu\nu}, g^{\mu\nu}$ 以及相关物理量的符号，例如带下指标的动量 $P_{\mu}$ 与带上指标的导数 $\pp^{\mu}$。

采用度规 $(-,+,+,+)$ 的文献示例如下：

* Wess & Bagger [@Wess:2020] *Supersymmetry and Supergravity*

* Srednicki [@Srednicki:2007qs] *Quantum Field Theory*

* Elvang & Huang [@Elvang:2015rqa] *Scattering Amplitudes in Gauge Theory and Gravity*

采用度规 $(+,-,-,-)$ 的文献示例如下：

* SAGEX [@SAGEX1] *The SAGEX Review on Scattering Amplitudes Chapter 1*

* Schwartz [@Schwartz:2014sze] *Quantum Field Theory and the Standard Model*

* Badger et al. [@Badger:2023] *Scattering Amplitudes in Quantum Field Theory*

* Dixon [@Dixon:2013uaa] *A brief introduction to modern amplitude methods*

* Taylor [@Taylor:2017sph] *A Course in Amplitudes*

* Cheung [@Cheung:2017pzi] *TASI lectures on scattering amplitudes*

### Pauli matrices

Pauli 矩阵的定义是约定差异的主要来源之一，有如下两种：
\begin{equation*}
    \sigma_{\mu}\sim(\id,\sigma^{i})
    \, ,
    \textInMath{vs.}
    \sigma^{\mu}\sim(\id,\sigma^{i})
    \, .
\end{equation*}

不同文献的选择示例如下：

* Wess & Bagger [@Wess:2020] 采用了前者，见 [@Wess:2020, Appendix A & B]。与之适配的旋量缩并为
    \begin{equation*}
        \psi\chi=\psi^{a}\chi_{a}
        \, ,
        \quad
        \psib\chib=\psib_{\dota}\chib^{\dota}
        \, .
    \end{equation*}

* SAGEX [@SAGEX1] 与 Dixon [@Dixon:2013uaa] 采用了前者。尖旋量 $\ketA{q}_{a}$ 的指标为不带点的，旋量缩并与 Wess & Bagger 相同，见 [@SAGEX1, Appendix A] 与 [@Dixon:2013uaa, Equation 3.6]。

* Srednicki [@Srednicki:2007qs] 与 Elvang & Huang [@Elvang:2015rqa] 采用了后者。尖旋量 $\braA{q}_{\dota}$ 的指标为带点的，旋量缩并与 Wess & Bagger 相同，见 [@Srednicki:2007qs, Section 35] 与 [@Elvang:2015rqa, Appendix A]。

* Schwartz [@Schwartz:2014sze] 采用了后者。尖旋量 $\ketA{q}_{a}$ 的指标为不带点的，旋量缩并与 Wess & Bagger 相反，见 [@Schwartz:2014sze, Section 10.6.2]。

尽管存在这些差异，通常会保证旋量内积 $\braketA{q_{1}q_{2}}\sim z_{1}-z_{2}$ 是全纯的。

此外，在 twistor 理论的相关文献中，Pauli 矩阵往往带有归一化因子 $\frac{1}{\sqrt{2}}$。

### Spinor inner product

旋量内积是另一类正负号差异的来源：其一是等变映射 $\varepsilon^{ab}, \varepsilon^{\dota\dotb}$ 的分量的选取，其二是旋量内积与自然配对的相对符号 $\braketA{q_{1}q_{2}}= \pm\braA{q_{1}}^{a}\ketA{q_{2}}_{a}$。

需注意的差异是 Mandelstam 变量与旋量内积的关系
\begin{equation*}
    s_{12}=\pm \braketA{12}\braketS{12}
    \, .
\end{equation*}
在粒子物理领域的相关文献中，多数为负号。

### Incoming/Outgoing

出入态的转换对应于能量的解析研拓 $\omega\to -\omega$。通常有两种约定：例如文献 [@SAGEX1] [@Srednicki:2007qs] [@Badger:2023] 把负号分配到两种旋量中，
\begin{equation*}
    \ketA{-q}=i\ketA{q}
    \, ,
    \quad
    \braS{-q}=i\braS{q}
    \, ,
\end{equation*}
此时有 $\ketA{-(-q)}=-\ketA{q}$。而例如文献 [@Elvang:2015rqa] 把负号吸收到尖旋量中，
\begin{align*}
    \ketA{-q}=-\ketA{q}
    \, ,
    \quad
    \braS{-q}=\braS{q}
    \, ,
\end{align*}
此时有 $\ketA{-(-q)}=\ketA{q}$。

### Polarization

    Lacia-TimeStamp-2025-06-24-07:07:04

* 极化矢量的归一化为
    \begin{equation*}
        \epsilon_{+}\cdot\epsilon_{-}=2\signature\polar^{2}
        \, .
    \end{equation*}

* 极化矢量的类型

## Basic ingredients

### Helicity spinor

螺旋度旋量 (helicity spinor) 是一类特殊的玻色型 Weyl 旋量，它解开了无质量 Weyl 方程的约束。

#### Angle spinor

与复化的无质量动量 $q\in\CC^{4}$ 相关联的旋量称为尖右矢 (angle ket) $\ketA{q}_{a}$，它处于 $\slgroup(2,\CC)$ 的基本表示 $(\half,0)$ 中。而处于对偶表示 $(\half,0)^{\dual}$ 中的称为尖左矢 (angle bra) $\braA{q}^{a}$。两者的变换关系为
\begin{equation*}
    \ketA{q}_{a} \to M^{b}_{a} \ketA{q}_{b}
    \, ,
    \quad
    \braA{q}^{a} \to (M^{-\tp})^{a}_{b} \braA{q}^{b}
    \, .
\end{equation*}
其自然配对称为尖括号 (angle braket)，
\begin{equation}
    \label{eq: pairing A}
    \braketA{q_{1}q_{2}}\eqq \braA{q_{1}}^{a} \ketA{q_{2}}_{a}
    \, .
\end{equation}
两者实际上是同构的，
\begin{equation}
    \label{eq: raising lowering A}
    \braA{q}^{a}=\varepsilon^{ab}\ketA{q}_{b}
    \, ,
    \quad
    \ketA{q}_{a}=\varepsilon_{ab}\braA{q}^{b}
    \, ,
\end{equation}
其中 $\varepsilon$ 为可逆等变映射，分量可取为
\begin{equation}
    \label{eq: varepsilon tensor A}
    \varepsilon^{ab}=-\varepsilon_{ab}=
    \begin{pmatrix}
        0 & 1 \\ -1 & 0
    \end{pmatrix}
    \, ,
    \quad
    \varepsilon^{ab}\varepsilon_{bc}=\delta^{a}_{b}
    \, .
\end{equation}
等价的，$\varepsilon$ 诱导了 $(\half,0)$ 或 $(\half,0)^{\dual}$ 上的反对称不变内积。

#### Square spinor

将前述讨论应用于复共轭表示 $(0,\half)$ 及其对偶表示 $(0,\half)^{\dual}$，方左矢 (square bra) 和方右矢 (square ket) 的变换关系为
\begin{equation*}
    \braS{q}_{\dota} \to (M^{*})_{\dota}^{\dotb}\braS{q}_{\dotb}
    \, ,
    \quad
    \ketS{q}^{\dota} \to (M^{-\dagger})^{\dota}_{\dotb}\ketS{q}^{\dotb}
    \, .
\end{equation*}
两者的自然配对记为方括号 (square braket)，
\begin{equation}
    \label{eq: pairing S}
    \braketS{q_{1}q_{2}} \eqq \braS{q_{1}}_{\dota}\ketS{q_{2}}^{\dota}
    \, .
\end{equation}
采用与复共轭交换的等变映射，
\begin{equation}
    \label{eq: varepsilon tensor S}
    \varepsilon^{\dota \dotb}=-\varepsilon_{\dota \dotb}=
    \begin{pmatrix}
        0 & 1 \\ -1 & 0
    \end{pmatrix}
    \, ,
    \quad
    \varepsilon^{\dota \dotb}\varepsilon_{\dotb \dotc}=\delta^{\dota}_{\dotb}
    \, ,
\end{equation}
可得指标的升降关系：
\begin{equation}
    \label{eq: raising lowering S}
    \ketS{q}^{\dota}=\varepsilon^{\dota \dotb}\braS{q}_{\dotb}
    \, ,
    \quad
    \braS{q}_{\dota}=\varepsilon_{\dota \dotb}\ketS{q}^{\dotb}
    \, .
\end{equation}

### Momentum bispinor

在群同态 $\sugroup(2)\to \sogroup(3,\RR)$ 下，Pauli 矩阵 $\vec\sigma$ 是从 $\sugroup(2)$ 的表示 $1\in \half\ox\half$ 到 $\sogroup(3,\RR)$ 的矢量表示的可逆等变映射。通常选为
\begin{equation*}
    \sigma_{1}=
    \begin{pmatrix}
        0 & 1 \\
        1 & 0
    \end{pmatrix}
    \, ,
    \quad
    \sigma_{2}=
    \begin{pmatrix}
        0 & -i \\
        i & 0
    \end{pmatrix}
    \, ,
    \quad
    \sigma_{3}=
    \begin{pmatrix}
        1 & 0 \\
        0 & -1
    \end{pmatrix}
    \, .
\end{equation*}
类似的，在群同态 $\slgroup(2,\CC) \to \sogroup(3,1,\RR)$ 下，四分量 Pauli 矩阵 $\sigma$ 是从 $\slgroup(2,\CC)$ 的表示 $(\half,\half)$ 到 $\sogroup(3,1,\RR)$ 的复矢量表示 $V\iso \CC^{4}$ 的可逆等变映射，可选为
\begin{equation}
    \label{eq: Pauli matrix}
    \sigma_{\mu,a \dota}=(\id,\vec\sigma)
    \, ,
    \quad
    \sigmab_{\mu}^{\dota a}
    =
    (\id,-\vec\sigma)
    \, .
\end{equation}
在此同构下，$V$ 上的不变内积 $g_{\mu\nu}$ 对应为 $(\half,\half)$ 上的 $\epsilon_{ab}\epsilon_{\dota\dotb}$，有
\begin{equation}
    \label{eq: Pauli matrix and epsilon tensor}
    g_{\mu\nu}\sigma^{\mu}_{a\dota}\sigma^{\nu}_{b\dotb}
    =
    - 2 \signature \epsilon_{ab}\epsilon_{\dota\dotb}
    \, ,
    \quad
    \epsilon^{ab}\epsilon^{\dota\dotb}\sigma^{\mu}_{a\dota}\sigma^{\nu}_{b\dotb}
    =
    - 2 \signature g^{\mu\nu}
    \, .
\end{equation}

矢量 $P^{\mu}$ 可以被重写为双旋量 (bispinor)
\begin{equation}
    \label{eq: momentum bispinor}
    \begin{aligned}
        &
        P_{a\dota}
        \eqq
        P^{\mu}\sigma_{\mu,a\dota}
        =
        \begin{pmatrix}
            P^0+P^3 & P^1-i P^2 \\
            P^1+i P^2 & P^0-P^3 \\
        \end{pmatrix}
        \, ,
        \\
        &
        P^{\dota a}
        \eqq
        P^{\mu}\sigmab_{\mu}^{\dota a}
        =
        \begin{pmatrix}
            P^0-P^3 & -P^1+i P^2 \\
            -P^1-i P^2 & P^0+P^3 \\
        \end{pmatrix}
        \, ,
    \end{aligned}
\end{equation}
且 $\det P = - \signature P^{2}$。

对于无质量动量 $q^{2}=0$，该双旋量因子化为两个螺旋度旋量
\begin{equation}
    \label{eq: helicity spinor}
    q_{a\dota}=\ketA{q}_{a}\braS{q}_{\dota}
    \, ,
    \quad
    q^{\dota a}=\ketS{q}^{\dota}\braA{q}^{a}
    \, .
\end{equation}
它们分别满足无质量 Weyl 方程
\begin{equation}
    \label{eq: Weyl equation}
    \braA{q}^{a} q_{a\dota}=0
    \, ,
    \quad
    q_{a\dota}\ketS{q}^{\dota}=0
    \, ,
    \quad
    \braS{q}_{\dota} q^{\dota a}=0
    \, ,
    \quad
    q^{\dota a}\ketA{q}_{a}=0
    \, .
\end{equation}

#### Real momentum

对于复的无质量动量 $q$，尖旋量和方旋量是独立的。方程 \eqref{eq: helicity spinor} 的左边维数为 $\dim_{\CC}=3$，而右边维数为 $\dim_{\CC}=4$，不匹配的原因是因子化可以相差一个标度变换
\begin{equation*}
    \ketA{q} \to \lambda \ketA{q}
    \, ,
    \quad
    \ketS{q} \to \lambda^{-1} \ketS{q}
    \, ,
\end{equation*}
这正是复化的小群变换，通常称为小群标度变换 (little group rescaling)。

对于实动量，尖旋量和方旋量互为复共轭。此时方程 \eqref{eq: helicity spinor} 的左边维数为 $\dim_{\RR}=3$，右边维数为 $\dim_{\RR}=4$。
小群标度变换为 $\sogroup(2,\RR)$ 的相位变换。
此外，我们还需要区分 $q^{0}<0$ 的入态和 $q^{0}>0$ 的出态 $(+)$，用 $\inout{q}$ 表示出入态的符号
\begin{equation}
    \tag{InOut}
    \inout{q}=\cases{
        +1 \quad \text{for outgoing}
        \\
        -1 \quad \text{for incoming}
    }
    \, .
\end{equation}
对于出入态和复共轭，我们采用如下约定：
\begin{align}
    \label{eq: incoming}
    \ketA{-q}=-\ketA{q}
    \, ,
    \quad
    \braS{-q}=\braS{q}
    \, ,
\end{align}
\begin{align}
    \label{eq: conjugate}
    \ketA{q}^{*}=\inout{q} \braS{q}
    \, ,
    \quad
    \braS{q}^{*}=\inout{q}\ketA{q}
    \, .
\end{align}
因此对于旋量内积有
\begin{equation}
    \label{eq: conjugate braket}
    \braketA{q_{1}q_{2}}^{*}
    =
    -\inout{q_{1}}\inout{q_{2}}
    \braketS{q_{1}q_{2}}
    \, .
\end{equation}

??? proof "\eqref{eq: incoming}, \eqref{eq: conjugate}"

    Since the intertwiner $\varepsilon$ commutes with complex conjugate, we only need to consider $\ketA{q}$ and $\braS{q}$,
    \begin{equation*}
        \ketA{q}^{*}=\alpha(q) \braS{q}
        \, ,
        \quad
        \braS{q}^{*}=\alpha^{-*}(q)\ketA{q}
        \, ,
    \end{equation*}
    and from \eqref{eq: helicity spinor} we have
    \begin{equation*}
        \alpha(q)=\alpha^{*}(q) \in \RR
        \, .
    \end{equation*}

    Continuing $q$ to $-q$, there is only one minus sign in \eqref{eq: helicity spinor}, so we need to absorb it either in both of $\ketA{q}$ and $\braS{q}$ or in one of them. Starting from the ansatz
    \begin{equation*}
        \ketA{-q}=\beta(q) \ketA{q}
        \, ,
        \quad
        \braS{-q}=-\beta^{-1}(q) \braS{q}
        \, ,
    \end{equation*}
    and then by the compatibility of complex conjugate, we have
    \begin{align*}
        \ketA{-q}^{*}
        &=\beta^{*}(q) \ketA{q}^{*}
        =\beta^{*}(q) \alpha(q) \braS{q}
        \\
        &=\alpha(-q)\braS{-q}=-\alpha(-q)\beta^{-1}(q)\braS{q}
        \, ,
    \end{align*}
    which implies
    \begin{equation*}
        \beta(q)\beta^{*}(q)=-\alpha(-q)\alpha^{-1}(q)>0
        \, .
    \end{equation*}

    Furthermore, to make the angle/square brakets balanced
    \begin{equation*}
        \braketA{q_{1}q_{2}}^{*}
        =-\alpha(q_{1})\alpha(q_{2})\braketS{q_{1}q_{2}}
        \, ,
    \end{equation*}
    a natural choice of $\alpha(q)$ would be
    \begin{equation*}
        \alpha(q)=\inout{q}
        \, .
    \end{equation*}
    Then from $\abs{\beta(q)}=1$ we can choose
    \begin{equation*}
        \beta(q)=\pm1 \textInMath{or} i
        \, .
    \end{equation*}

### Polarization

    Lacia-TimeStamp-2025-05-10-04:25:04

<!--
\begin{equation}
    \label{eq: polarization}
    \epsilon^{\mu}_{+}(q,q')=\frac{\braketSA{q}{\sigma^{\mu} \lor \gamma^{\mu}}{q'}}{\braketA{qq'}}
    \, ,
    \quad
    \epsilon^{\mu}_{-}(q,q')=\frac{\braketAS{q}{\sigmab^{\mu} \lor \gamma^{\mu}}{q'}}{\braketS{qq'}}
    \, ,
\end{equation}
for the reference momentum $q'$. -->

## Useful properties

对于无质量动量，$q$ 通常会被省略，例如
\begin{equation*}
    \braketS{12}\eqq \braketS{q_{1}q_{2}}
    \, .
\end{equation*}
Pauli/Dirac 矩阵与动量旋量的缩并指标也会被省略，例如
\begin{equation*}
    \braketAS{1}{P}{2}
    \eqq
    \braA{1}^{a}P_{a \dota}\ketS{2}^{\dota}
    =
    P^{\mu}
    \braA{1}^{a}\sigma_{\mu,a\dota}\ketS{2}^{\dota}
    \, .
\end{equation*}

### Property

Mandelstam 变量：
\begin{equation}
    \label{eq: momentum squared}
    \braketS{12}\braketA{12}
    =
    2\signature q_{1} \cdot q_{2}
    =\signature (q_{1}+q_{2})^{2}
    \, .
\end{equation}

双旋量缩并：
\begin{equation}
    \label{eq: bispinor contraction}
    \begin{aligned}
        &\braketAS{1}{P \lor \sigma^{\mu} \lor \gamma^{\mu}}{2}=\braketSA{2}{P \lor \sigmab^{\mu} \lor \gamma^{\mu}}{1}
        \, ,
        \\
        &\braketAS{1}{2}{3}=\braketA{12}\braketS{23}
        \, ,
        \\
        &\braketSA{1}{2}{3}=\braketS{12}\braketA{23}
        \, .
    \end{aligned}
\end{equation}

Fierz 恒等式：
\begin{equation}
\label{eq Fierz identity}
\begin{aligned}
    &
    \braA{1}\sigma^{\mu}\lor\gamma^{\mu}\ketS{2}
    \braA{3}\sigma_{\mu}\lor\gamma_{\mu}\ketS{4}
    =
    2\signature\braketA{13}\braketS{24}
    \, ,
    \\
    &
    \braS{1}\sigmab^{\mu}\lor\gamma^{\mu}\ketA{2}
    \braS{3}\sigmab_{\mu}\lor\gamma_{\mu}\ketA{4}
    =
    2\signature\braketS{13}\braketA{24}
    \, .
\end{aligned}
\end{equation}

### Little group scaling

在小群标度变换下，各对象的权为

| Object                          | Weight |
| :------------------------------ | :----: |
| angle bra/ket                   |  $-1$  |
| square bra/ket                  |  $1$   |
| wavefunction with helicity $J$  |  $2J$  |
| amplitude with helicities $J_i$ | $2J_i$ |

    Lacia-TimeStamp-2025-06-24-10:11:13

## Component

无质量动量 $q$ 可以用能量 $E$ 和角坐标 $(\theta,\phi)$ 参数化为
\begin{equation*}
    q=E(1,\sin \theta  \cos \phi ,\sin \theta  \sin \phi ,\cos \theta )
    \, .
\end{equation*}
在天穹 CFT 领域的相关文献中，更常用的是
\begin{equation*}
    q=\omega(
        1+z \bar{z},z+\bar{z},-i (z-\bar{z}),1-z \bar{z}
    )
    \, .
\end{equation*}
两者的关系由球极投影给出：

\begin{equation*}
    \omega= E \cos^2\frac{\theta}{2}
    \, ,
    \quad
    z= e^{i \phi} \tan \frac{\theta}{2}
    \, ,
\end{equation*}
其中北极被映射到原点。

螺旋度旋量为
\begin{equation}
    \label{eq: bra ket parametrization}
    \begin{alignedat}{2}
        &
        \ketA{q}=\inout{q}\sqrt{2\omega}(1,z)
        \, ,
        \qquad
        &&
        \braS{q}=\sqrt{2\omega}(1,\bar{z})
        \, ,
        \\
        &
        \braA{q}=\inout{q}\sqrt{2\omega}(z,-1)
        \, ,
        &&
        \ketS{q}=\sqrt{2\omega}(\bar{z},-1)
        \, .
    \end{alignedat}
\end{equation}
相应的，旋量内积为
\begin{equation}
    \label{eq: braket parametrization}
    \braketA{12}=2\inout{1}\inout{2}\sqrt{\omega_{1}\omega_{2}}z_{1,2}
    \, ,
    \quad
    \braketS{12}=-2\sqrt{\omega_{1}\omega_{2}}\bar{z}_{1,2}
    \, .
\end{equation}

    Lacia-TimeStamp-2025-06-24-11:13:12

<!-- 对于无质量自旋 1 粒子，极化矢量为 $\epsilon_{\pm}=\pp_{\pm}\qhat$，其中 $\pp_{+}=\pp_{z}$，$\pp_{-}=\pp_{\zb}$，可参数化为
\begin{equation}
    \label{eq: polarization component}
    \begin{aligned}
        &\epsilon_{+}=(\zb,1,-i,-\zb)
        \, ,
        \\
        &\epsilon_{-}=(z,1,i,-z)
        \, .
    \end{aligned}
\end{equation}
 -->

## Verification test

Directory: `~/TestSource/SpinorHelicity/`

| Test                          | Equation(s)                                                                                                                   |
| :---------------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| `bispinor-contraction.wlt`    | \eqref{eq: bispinor contraction}                                                                                              |
| `bispinor.wlt`                | \eqref{eq: momentum bispinor} \eqref{eq: helicity spinor}                                                                     |
| `epsilon-tensor.wlt`          | \eqref{eq: raising lowering A} \eqref{eq: varepsilon tensor A} \eqref{eq: varepsilon tensor S} \eqref{eq: raising lowering S} |
| `Fierz-identity.wlt`          | \eqref{eq Fierz identity}                                                                                                     |
| `incoming-outgoing.wlt`       | \eqref{eq: incoming}                                                                                                          |
| `momentum-squared.wlt`        | \eqref{eq: momentum squared}                                                                                                  |
| `Pauli-Dirac-matrix.wlt`      | \eqref{eq: Pauli matrix} \eqref{eq: Pauli matrix and epsilon tensor}                                                          |
| `spinor-component-2-vs-4.wlt` |                                                                                                                               |
| `spinor-component.wlt`        | \eqref{eq: bra ket parametrization} \eqref{eq: braket parametrization}                                                        |
| `spinor-conjugate.wlt`        | \eqref{eq: conjugate} \eqref{eq: conjugate braket}                                                                            |
| `spinor-pairing.wlt`          | \eqref{eq: pairing A} \eqref{eq: pairing S}                                                                                   |
| `Weyl-equation.wlt`           | \eqref{eq: Weyl equation}                                                                                                     |

---