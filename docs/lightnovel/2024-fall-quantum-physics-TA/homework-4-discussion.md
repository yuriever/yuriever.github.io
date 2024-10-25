# 第四周作业讨论

## 问题 1

* 一个计算上的小技巧：要尽可能的利用湮灭算子 $a$ 来杀掉一些项，因为 $a$ 是上三角的

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
        \, ,
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
