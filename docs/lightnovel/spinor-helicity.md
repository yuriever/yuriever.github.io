# Spinor helicity formalism

<span hidden> $\newcommand{\dota}{\dot{a}}
\newcommand{\dotb}{\dot{b}}
\newcommand{\dotc}{\dot{c}}
\newcommand{\sigmab}{\bar{\sigma}}
\newcommand{\epsilonb}{\bar{\epsilon}}
\newcommand{\inout}[1]{e_{#1}}$ </span>


## Conventions

本文旨在梳理旋量螺旋度方法 (spinor helicity formalism) 中的约定。尽管对于物理观测量而言，约定的选择是一种“规范”，但它会沿着计算过程传播。从编程视角看，这是一种非局域效应，应当被封装在独立的模块中。

<!-- It is noteworthy that while the choice of convention for physical observables is purely a "gauge", it propagates along computations. From the perspective of programming, this is actually a nonlocal effect that should be encapsulated within different modules. -->

* 任意动量记为 $P$，有质量的记为 $p$，无质量的记为 $q$。无质量动量的参数化为

    \begin{equation}
        q=\omega(
            1+z \bar{z},z+\bar{z},-i (z-\bar{z}),1-z \bar{z}
        )
        \, ,
        \textInMath{for}
        \omega>0,z\in\CC
        \, .
    \end{equation}


### Metric

度规号差记为

\begin{equation}
    \label{eq: signature}
    \signature=
    \begin{cases}
        +1
        \, , \quad (-,+,+,+)\, ,\\
        -1
        \, , \quad (+,-,-,-)\, .\\
    \end{cases}
\end{equation}

若要变更度规号差，需要翻转 $g_{\mu\nu}, g^{\mu\nu}$ 以及相关物理量的符号，例如带下指标的动量 $P_{\mu}$ 与泡利矩阵 $\sigma_{\mu}, \sigmab_{\mu}$，带上指标的导数 $\pp^{\mu}, D^{\mu}$。

 $(-,+,+,+)$

* Srednicki [@Srednicki:2007qs] *Quantum Field Theory*

* Elvang & Huang [@Elvang:2015rqa] *Scattering Amplitudes in Gauge Theory and Gravity*

* Wess & Bagger [@Wess:2020] *Supersymmetry and Supergravity*

 $(+,-,-,-)$

* SAGEX [@SAGEX1] *The SAGEX Review on Scattering Amplitudes Chapter 1*

* Schwartz [@Schwartz:2014sze] *Quantum Field Theory and the Standard Model*

* Badger et al. [@Badger:2023] *Scattering Amplitudes in Quantum Field Theory*

* Dixon [@Dixon:2013uaa] *A brief introduction to modern amplitude methods*

* Taylor [@Taylor:2017sph] *A Course in Amplitudes*

* Cheung [@Cheung:2017pzi] *TASI lectures on scattering amplitudes*


### Pauli matrices

Pauli 矩阵的定义是约定差异的主要来源之一，有如下两种：

\begin{equation}
    \sigma_{\mu}\sim(\id,\sigma^{i})
    \, ,
    \textInMath{vs.}
    \sigma^{\mu}\sim(\id,\sigma^{i})
    \, .
\end{equation}

不同文献的选择示例如下：

* Wess & Bagger [@Wess:2020] 采用了前者，见 Appendix A & B。与之适配的旋量缩并为

    \begin{equation}
        \label{eq: spinor contraction}
        \psi\chi=\psi^{a}\chi_{a}
        \, ,
        \quad
        \psib\chib=\psib_{\dota}\chib^{\dota}
        \, .
    \end{equation}

* Dixon [@Dixon:2013uaa] 与 SAGEX [@SAGEX1] 采用了前者。尖旋量指标为不带点的 $\ketA{q}_{a}$，旋量缩并与 Wess & Bagger 相同，见 [@Dixon:2013uaa] Equation 3.6 与 [@SAGEX1] Appendix A。

* Srednicki [@Srednicki:2007qs] 与 Elvang & Huang [@Elvang:2015rqa] 采用了后者。尖旋量指标为带点的 $\ketA{q}_{\dota}$，旋量缩并与 Wess & Bagger 相同。

* Schwartz [@Schwartz:2014sze] 采用了后者。尖旋量指标为不带点的 $\ketA{q}_{a}$，旋量缩并与 Wess & Bagger 相反，见 Section 10.6.2。

尽管存在这些差异，通常会保证旋量内积 $\braketA{q_{1}q_{2}}\sim z_{1}-z_{2}$ 是全纯的。

此外，在 twistor 理论的相关文献中，Pauli 矩阵往往带有归一化因子 $\frac{1}{\sqrt{2}}$。


### Spinor inner product

旋量内积是另一类正负号差异的来源：其一是等变映射 $\varepsilon$ 的分量的选取，其二是旋量内积与自然配对的相对符号 $\braketA{q_{1}q_{2}}= \pm\braA{q_{1}}^{a}\ketA{q_{2}}_{a}$。

需注意的差异是 Mandelstam 变量与旋量内积的关系

\begin{equation}
    s_{12}=\pm \braketA{12}\braketS{12}
    \, .
\end{equation}

多数文献中为负号，但例如 Cheung [@Cheung:2017pzi] 为正号，见 Equation 2.8。


#### Incoming/Outgoing

* 在 SAGEX 综述的第一章中 [@SAGEX1]，

    * 旋量出入态的约定与本文不同，对比 \eqref{eq: incoming} 与

        \begin{equation}
            \tag{1.17 [SAGEX]}
            \ketA{-q}=i\ketA{q}
            \, ,
            \quad
            \ketS{-q}=i\ketS{q}
            \, .
        \end{equation}


#### 极化矢量

* Srednicki 的书 [@Srednicki:2007qs] 与 Elvang & Huang 的书 [@Elvang:2015rqa]，与本文相比有如下几点不同：

    * 极化矢量的类型亦与本文相反，对比 \eqref{eq: polarization component} 与

        \begin{equation}
            Pass
        \end{equation}

    * 这两者的效应抵消，因此极化矢量的表达式与本文相同


* 极化矢量的归一化为

    \begin{equation}
        \epsilon_{+}\cdot\epsilon_{-}=2\signature\polar^{2}
        \, .
    \end{equation}


## Helicity spinor

螺旋度旋量 (helicity spinor) 是一类特殊的玻色型 Weyl 旋量，它解开了无质量 Weyl 方程的约束。


### Angle spinor

与复化的无质量动量 $q\in\CC^{4}$ 相关联的左手旋量记为尖右矢 (angle ket) $\ketA{q}_{a}$，它处于 $\slgroup(2,\CC)$ 的基本表示 $(\half,0)$ 中。而处于对偶表示 $(\half,0)^{\dual}$ 中的记为尖左矢 (angle bra) $\braA{q}^{a}$。两者的变换关系为

\begin{equation}
    \ketA{q}_{a} \to M^{b}_{a} \ketA{q}_{b}
    \, ,
    \quad
    \braA{q}^{a} \to (M^{-\tp})^{a}_{b} \braA{q}^{b}
    \, .
\end{equation}

其自然配对记为尖括号 (angle braket)，

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
    \, .
\end{equation}

其中 $\varepsilon$ 为可逆的等变映射，分量可取为

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

等价的，$\varepsilon$ 诱导了 $(\half,0)$ 或 $(\half,0)^{\dual}$ 上的反对称的不变内积。


### Square spinor

将前述讨论应用于复共轭表示 $(0,\half)$ 及其对偶表示 $(0,\half)^{\dual}$，方左矢 (square bra) 和方右矢 (square ket) 的变换关系为

\begin{equation}
    \braS{q}_{\dota} \to (M^{*})_{\dota}^{\dotb}\braS{q}_{\dotb}
    \, ,
    \quad
    \ketS{q}^{\dota} \to (M^{-\dagger})^{\dota}_{\dotb}\ketS{q}^{\dotb}
    \, .
\end{equation}

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

可得下列指标的升降关系：

\begin{equation}
    \label{eq: raising lowering S}
    \ketS{q}^{\dota}=\varepsilon^{\dota \dotb}\braS{q}_{\dotb}
    \, ,
    \quad
    \braS{q}_{\dota}=\varepsilon_{\dota \dotb}\ketS{q}^{\dotb}
    \, .
\end{equation}


## Momentum bispinor

在群同态 $\sugroup(2)\to \sogroup(3,\RR)$ 下，Pauli 矩阵 $\vec\sigma$ 是从 $\sugroup(2)$ 的表示 $1\in \half\ox\half$ 到 $\sogroup(3,\RR)$ 的矢量表示的可逆等变映射。通常选为

\begin{equation}
    \sigma^{1}=
    \begin{pmatrix}
        0 & 1 \\
        1 & 0
    \end{pmatrix}
    \, ,
    \quad
    \sigma^{2}=
    \begin{pmatrix}
        0 & -i \\
        i & 0
    \end{pmatrix}
    \, ,
    \quad
    \sigma^{3}=
    \begin{pmatrix}
        1 & 0 \\
        0 & -1
    \end{pmatrix}
    \, .
\end{equation}

类似的，在群同态 $\slgroup(2,\CC) \to \sogroup(3,1,\RR)$ 下，四分量 Pauli 矩阵 $\sigma$ 是从 $\slgroup(2,\CC)$ 的表示 $(\half,\half)$ 到 $\sogroup(3,1,\RR)$ 的复矢量表示 $V\simeq \CC^{4}$ 的可逆等变映射。通常选为

\begin{equation}
    \label{eq: Pauli matrix}
    \sigma^{\mu}_{a \dota}=(\id,\vec\sigma)
    \, ,
    \quad
    \sigmab^{\mu,\dota a}\eqq\epsilon^{ab}\epsilon^{\dota\dotb}\sigma^{\mu}_{b \dotb}=(\id,-\vec\sigma)
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
        - \signature P_{\mu}\sigma^{\mu}_{a\dota}
        =
        \begin{pmatrix}
            P^0-P^3 & -P^1+i P^2 \\
            -P^1-i P^2 & P^0+P^3 \\
        \end{pmatrix}
        \, ,
        \\
        &
        P^{\dota a}
        \eqq
        - \signature
        P_{\mu}\sigmab^{\mu,\dota a}
        =
        \begin{pmatrix}
            P^0+P^3 & P^1-i P^2 \\
            P^1+i P^2 & P^0-P^3 \\
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
    q^{\dota a}\ketA{q}_{a}=0
    \, ,
    \quad
    \braS{q}_{\dota} q^{\dota a}=0
    \, ,
    \quad
    q_{a\dota}\ketS{q}^{\dota}=0
    \, ,
    \quad
    \braA{q}^{a} q_{a\dota}=0
    \, .
\end{equation}


### Real momentum

对于复的无质量动量 $q$，尖旋量和方旋量是独立的。方程 \eqref{eq: helicity spinor} 的左边维数为 $\dim_{\CC}=3$，而右边维数为 $\dim_{\CC}=4$，不匹配的原因是因子化可以相差一个标度变换

\begin{equation}
    \ketA{q} \to \lambda \ketA{q}
    \, ,
    \quad
    \ketS{q} \to \lambda^{-1} \ketS{q}
    \, ,
\end{equation}

这正是复化的小群变换，通常称为小群标度变换 (little group rescaling)。

对于实动量，尖旋量和方旋量通过复共轭相关联。此时方程 \eqref{eq: helicity spinor} 的左边维数为 $\dim_{\RR}=3$，右边维数为 $\dim_{\RR}=4$。
小群标度变换为 $\sogroup(2,\RR)$ 的相位变换。
我们还需要区分能量为负 $q^{0}<0$ 的入态和能量为正 $q^{0}>0$ 的出态 $(+)$，用 $\inout{q}$ 表示出入态的符号

\begin{equation}
    \inout{q}=\cases{
        +1 \quad \text{for outgoing}
        \\
        -1 \quad \text{for incoming}
    }
    \, .
\end{equation}

对于复共轭，我们采用如下约定：

\begin{align}
    \label{eq: conjugate}
    \ketA{q}^{*}=\inout{q} \braS{q}
    \, ,
    \quad
    \braS{q}^{*}=\inout{q}\ketA{q}
    \, ,
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

对于出入态，通常有两种约定：

[@Elvang:2015rqa]

\begin{align}
    \label{eq: incoming}
    \ketA{-q}=\ketA{q}
    \, ,
    \quad
    \braS{-q}=-\braS{q}
    \, .
\end{align}

[@Badger:2023][@SAGEX1][@Srednicki:2007qs]

\begin{equation}
    \ketA{-q}=i\ketA{q}
    \, ,
    \quad
    \braS{-q}=i\braS{q}
    \, .
\end{equation}

For the later choice, one should be careful that $\ketS{-(-q)}=-\ketS{q}$, i.e., $\ketS{q}$ is double-valued in the complex plane of $E$.


!!! proof "\eqref{eq: incoming}, \eqref{eq: conjugate}"

    Since the intertwiner $\varepsilon$ commutes with complex conjugate, we only need to consider $\ketA{q}$ and $\braS{q}$,

    \begin{equation}
        \ketA{q}^{*}=\alpha(q) \braS{q}
        \, ,
        \quad
        \braS{q}^{*}=\alpha^{-*}(q)\ketA{q}
        \, ,
    \end{equation}

    and from \eqref{eq: helicity spinor} we have

    \begin{equation}
        \alpha(q)=\alpha^{*}(q) \in \RR
        \, .
    \end{equation}

    Continuing $q$ to $-q$, there is only one minus sign in \eqref{eq: helicity spinor}, so we need to absorb it either in both of $\ketA{q}$ and $\braS{q}$ or in one of them. Starting from the ansatz

    \begin{equation}
        \ketA{-q}=\beta(q) \ketA{q}
        \, ,
        \quad
        \braS{-q}=-\beta^{-1}(q) \braS{q}
        \, ,
    \end{equation}

    and then by the compatibility of complex conjugate, we have

    \begin{align}
        \ketA{-q}^{*}
        &=\beta^{*}(q) \ketA{q}^{*}
        =\beta^{*}(q) \alpha(q) \braS{q}
        \\
        &=\alpha(-q)\braS{-q}=-\alpha(-q)\beta^{-1}(q)\braS{q}
        \, ,
    \end{align}

    which implies

    \begin{equation}
        \beta(q)\beta^{*}(q)=-\alpha(-q)\alpha^{-1}(q)>0
        \, .
    \end{equation}

    Furthermore, to make the angle/square brakets balanced

    \begin{equation}
        \braketA{q_{1}q_{2}}^{*}
        =-\alpha(q_{1})\alpha(q_{2})\braketS{q_{1}q_{2}}
        \, ,
    \end{equation}

    a natural choice of $\alpha(q)$ would be

    \begin{equation}
        \alpha(q)=\inout{q}
        \, .
    \end{equation}

    Then from $\abs{\beta(q)}=1$ we can choose

    \begin{equation}
        \beta(q)=1
        \, , \textInMath{or} \beta(q)=i\, .
    \end{equation}


## Polarization

    Lacia-TimeStamp-2025-05-10-04:25:04

\begin{equation}
    \label{eq: polarization}
    \epsilon^{\mu}_{+}(q,q')=\frac{\braketSA{q}{\sigma^{\mu} \lor \gamma^{\mu}}{q'}}{\braketA{qq'}}
    \, ,
    \quad
    \epsilon^{\mu}_{-,1}(q,q')=\frac{\braketAS{q}{\sigmab^{\mu} \lor \gamma^{\mu}}{q'}}{\braketS{qq'}}
    \, ,
\end{equation}

for the reference momentum $q'$.


## Useful properties

Lacia-TimeStamp-2025-05-10-04:25:12

For massless momenta, $q$ will be omitted, e.g.

\begin{equation}
    \braketS{12}\eqq \braketS{q_{1}q_{2}}
    \, .
\end{equation}

The contracted indices between Pauli/Dirac matrices and momentum spinors will be omitted, e.g.

\begin{equation}
    \braketSA{1}{P}{2}
    \eqq
    \braS{1}^{a}P_{a \dota}\ketA{2}^{\dota}
    =
    -\signature P_{\mu}\braS{1}^{a}\sigma^{\mu}_{a\dota}\ketA{2}^{\dota}
    \, .
\end{equation}


### Property

Mandelstam variable:

\begin{equation}
    \label{eq: momentum squared}
    \braketS{12}\braketA{12}
    =
    2\signature q_{1} \cdot q_{2}
    =\signature (q_{1}+q_{2})^{2}
    \, .
\end{equation}

Bispinor contraction:

\begin{equation}
    \label{eq: bispinor contraction}
    \begin{aligned}
        &\braketSA{1}{P \lor \sigma^{\mu} \lor \gamma^{\mu}}{2}=\braketAS{2}{P \lor \sigmab^{\mu} \lor \gamma^{\mu}}{1}
        \, ,
        \\
        &\braketAS{1}{2}{3}=\braketA{12}\braketS{23}
        \, ,
        \\
        &\braketSA{1}{2}{3}=\braketS{12}\braketA{23}
        \, .
    \end{aligned}
\end{equation}

Fierz identity:

\begin{equation}
    \label{eq Fierz identity}
    \braA{1}\sigma^{\mu},\gamma^{\mu}\ketS{2}
    \braA{3}\sigma_{\mu},\gamma_{\mu}\ketS{4}
    =
    2\signature\braketA{13}\braketS{24}
    \, .
\end{equation}


### Little group scaling

Under the little group scaling, the weights are

| Object                          | Weight |
| :------------------------------ | :----: |
| square bra/ket                  |  $1$   |
| angle bra/ket                   |  $-1$  |
| wavefunction with helicity $J$  |  $2J$  |
| amplitude with helicities $J_i$ | $2J_i$ |


## Component

The massless momentum can be parametrized by the energy $E$ and angular coordinates $(\theta,\phi)$ as

\begin{equation}
    q=E(1,\sin \theta  \cos \phi ,\sin \theta  \sin \phi ,\cos \theta )
    \, .
\end{equation}

In the celestial CFT literature, we also use the following parametrization:

\begin{equation}
    q=\omega(
        1+z \bar{z},z+\bar{z},-i (z-\bar{z}),1-z \bar{z}
    )
    \, .
\end{equation}

The two are related by the stereographic projection

\begin{equation}
    \omega= E \cos^2\frac{\theta}{2}
    \, ,
    \quad
    z= e^{i \phi} \tan \frac{\theta}{2}
    \, ,
\end{equation}

with the north pole mapped to the origin.

The helicity spinors can be parametrized as

\begin{align}
    \label{eq: bra ket parametrization}
    &
    \braS{q}=\sqrt{2\omega}(1,\bar{z})
    \, ,
    \\
    &
    \ketS{q}=\sqrt{2\omega}(-\bar{z},1)
    \, ,
    \\
    &
    \braA{q}=\inout{q}\sqrt{2\omega}(-z,1)
    \, ,
    \\
    &
    \ketA{q}=\inout{q}\sqrt{2\omega}(1,z)
    \, .
\end{align}

For massless spin-1 particles, the polarization vectors are $\epsilon_{\pm}=\pp_{\pm}\qhat$ where $\pp_{+}=\pp_{z}$ and $\pp_{-}=\pp_{\zb}$, and can be parametrized as

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


## Verification test

Directory: `~/TestSource/SpinorHelicity/`

| Test                          | Equation(s)                                                          |
| :---------------------------- | :------------------------------------------------------------------- |
| `bispinor-contraction.wlt`    | \eqref{eq: bispinor contraction}                                     |
| `bispinor.wlt`                | \eqref{eq: momentum bispinor} \eqref{eq: helicity spinor}            |
| `epsilon-tensor.wlt`          | \eqref{eq: raising lowering A} \eqref{eq: raising lowering S}        |
| `Fierz-identity.wlt`          | \eqref{eq Fierz identity}                                            |
| `incoming-outgoing.wlt`       | \eqref{eq: incoming}                                                 |
| `momentum-squared.wlt`        | \eqref{eq: momentum squared}                                         |
| `Pauli-Dirac-matrix.wlt`      | \eqref{eq: Pauli matrix} \eqref{eq: Pauli matrix and epsilon tensor} |
| `spinor-component-2-vs-4.wlt` |                                                                      |
| `spinor-component.wlt`        | \eqref{eq: bra ket parametrization}                                  |
| `spinor-conjugate.wlt`        | \eqref{eq: conjugate} \eqref{eq: conjugate braket}                   |
| `spinor-pairing.wlt`          | \eqref{eq: pairing A} \eqref{eq: pairing S}                          |
| `Weyl-equation.wlt`           | \eqref{eq: Weyl equation}                                            |

---