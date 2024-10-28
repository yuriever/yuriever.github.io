# 第四周作业讨论

## 问题 1.1

* 一些公式：

    \begin{align}
        &
        \bra{n}x^{2}\ket{n}=\frac{(2 n+1) \hbar }{2 m \omega }
        \, ,
        \\
        &
        \bra{n}p^{2}\ket{n}=\frac{1}{2} m (2 n+1) \omega  \hbar
        \, .
    \end{align}

* 计算上的小技巧：

    * 要尝试利用湮灭算子 $a$ 来杀掉一些项，因为 $a$ 是上三角的；
    * 粒子数算子 $N$ 定义了一个 grading，在计算矩阵元 $\bra{m}\cdots\ket{n}$ 时只需要跟踪 grading 匹配的项。

## 问题 1.2

* 部分同学仅对 harmonic oscillator 验证了该等式。题目要求对任意的（束缚）势进行验证。

* 从坐标空间波函数出发，利用分部积分与 Schrodinger equation 捯饬一下即可。

    \begin{align}
        \rhs
        &=
        \intt{dx}\phi^{*}\phi x\pp V
        =
        -\intt{dx}\pp(\phi^{*}\phi x) V
        =
        -\intt{dx}\pp(\phi^{*}\phi) xV
        -\intt{dx}\phi^{*}\phi V
        \, .
    \end{align}

    对于第二项利用定态 Schrodinger equation $(K+V)\phi=E\phi$ 有

    \begin{equation}
        -\intt{dx}\phi^{*}V\phi
        =\intt{dx}\phi^{*}(K\phi)-E\intt{dx}\phi^{*}\phi
        =\bra{\phi}K\ket{\phi}-E
        \, .
    \end{equation}

    类似的，对于第一项有

    \begin{align}
        &\peq
        -\intt{dx}\pp(\phi^{*}\phi) xV
        \\
        &=
        -\intt{dx}\pp\phi^{*}(V\phi) x
        -\intt{dx}(V\phi^{*})\pp\phi x
        \\
        &=
        (
            \intt{dx}\pp\phi^{*}(K\phi) x
            -
            E\intt{dx}\pp\phi^{*}\phi x
        )+
        (
            \intt{dx}\pp\phi(K\phi^{*}) x
            -
            E\intt{dx}\pp\phi\phi^{*} x
        )
        \, .
    \end{align}

    其中第三行利用了定态 Schrodinger equation 以及其复共轭。接下来：

    * 第二与第四项组合出 $\pp(\phi^{*}\phi)$，分部积分消去 $x$，给出 $E$；
    * 第一与第三项由于 $K=-\pp^{2}$ 组合出 $\pp(\pp\phi^{*}\pp\phi)$，分部积分消去 $x$，再利用分部积分将 $\pp\phi^{*}\pp\phi$ 转化为 $\phi^{*}K\phi$。

* 部分同学尝试利用 Heisenberg equation，且误认为 $\frac{d (xp)_{H}}{dt}=0$。需要注意对不含时的 Hamiltonian，Heisenberg picture 下的算子为 $\cO_{H}=e^{iHt}\cO e^{-iHt}$，另一方面定态 $\ket{\phi}$ 的时间演化是 trivial 的：$e^{-iHt}\ket{\phi}=e^{-iEt}\ket{\phi}$ ，这样才能说明

    \begin{equation}
        0=\bra{\phi}\frac{d(xp)_H}{dt}\ket{\phi}=
        \bra{\phi}i[H,(xp)_{H}]\ket{\phi}
        \, .
    \end{equation}

* 细心的同学可能注意到，这两种方法——分析 vs. 代数——有一点点微妙的不同。原因在于这里默认了出现的算子均为自伴算子，能保证这点的一个充分条件是对势能添加足够的条件，例如是足够好的束缚势。对于自伴算子，分部积分的边界项贡献为零。

## 问题 2

* 一些公式：

    \begin{align}
        &
        (w|z)=e^{w^{*}z}
        \, ,
        \\
        &
        \bra{z}x\ket{z}^{2}=\frac{\hbar  \left(z^*+z\right)^2}{2 m \omega }
        \, ,
        \\
        &
        \bra{z}x^{2}\ket{z}=\frac{\hbar  \left(2 z z^*+\left(z^*\right)^2+z^2+1\right)}{2 m \omega }
        \, ,
        \\
        &
        \bra{z}p\ket{z}^{2}=-\frac{1}{2} m \omega  \hbar  \left(z^*-z\right)^2
        \, ,
        \\
        &
        \bra{z}p^{2}\ket{z}=-\frac{1}{2} m \omega  \hbar  \left(-2 z z^*+\left(z^*\right)^2+z^2-1\right)
        \, .
    \end{align}

* 在验证 coherent state 是湮灭算子的本征态时可以利用 BCH formula，

    \begin{equation}
        e^{t x}ye^{-t x}=y+[x,y]+\frac{1}{2!}[x,[x,y]]+\cdots
        \, ,
    \end{equation}

    它可以视为 Lie algebra 到 formal Lie group 的指数映射。当右边的求和截断时，例如 nilpotent Lie algebra，该公式可以简化计算。
    特别的，在本问题中我们有

    \begin{equation}
        e^{-a^{\dagger}}a e^{a^{\dagger}}=a+z\id
        \, ,
        \implies
        a e^{a^{\dagger}} \vac=e^{a^{\dagger}}(a+z\id)\vac=z e^{a^{\dagger}} \vac
        \, .
    \end{equation}
