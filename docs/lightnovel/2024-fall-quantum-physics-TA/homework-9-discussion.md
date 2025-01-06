# 第 9 周作业讨论

Convention: $\hbar=1$.

## 问题 4.2

粒子数 $N=1$ 的态为

\begin{equation}
    v=
    a_3 |0,0,1\rangle
    +a_2 |0,1,0\rangle
    +a_1 |1,0,0\rangle
    \, .
\end{equation}

它们能量相同，因此构成了 $\solie(3)$ 的一个 3 维表示。由

\begin{equation}
    L^{2}v=2v
\end{equation}

可知这是一个 $J=1$ 的不可约表示，所以只需要对角化 $L_{z}$ 即可。若要想确定 $L_{z}$ 三个本征态的相对系数，可利用 $L_{\pm}$ 的矩阵元公式。

具体来说，我们可以先确定最低权态 $v_{-1}$，满足

\begin{equation}
    L_{z}v_{-1}=-v_{-1}
    \, ,
    \quad \implies \quad
    a_2= -i a_1,\, a_3= 0
    \, .
\end{equation}

不妨取 $a_{1}=\frac{1}{\sqrt{2}}$，再利用

\begin{equation}
    v_{0}=\frac{1}{\sqrt{2}} L_{+}v_{-1}
    \, , \quad
    v_{1}=\frac{1}{\sqrt{2}} L_{+}v_{0}
    \, ,
\end{equation}

可得

\begin{align}
    &v_{1}=\frac{
        -i |0,1,0\rangle
        -|1,0,0\rangle
    }{\sqrt{2}}
    \, ,
    \\
    &v_{0}=|0,0,1\rangle
    \, ,
    \\
    &v_{-1}=\frac{
        -i |0,1,0\rangle
        +|1,0,0\rangle
    }{\sqrt{2}}
    \, .
\end{align}

从坐标空间来看，在 Cartesian basis 下 $\ket{i,j,k}$ 的波函数正比于三个 Hermite 多项式的乘积 $H_{1}(x_{1})H_{2}(x_{2})H_{3}(x_{3})$，而上述计算是将其重新组合为调和多项式。

## 问题 4.3

同理，粒子数 $N=2q+J=2$ 的态为

\begin{equation}
    v=a_3 |0,0,2\rangle
    +a_6 |0,1,1\rangle
    +a_2 |0,2,0\rangle
    +a_5 |1,0,1\rangle
    +a_4 |1,1,0\rangle
    +a_1 |2,0,0\rangle
    \, .
\end{equation}

利用角动量公式可知，它们能量相同但角动量不同，因此这是一个 $6=1+5$ 维可约表示。在坐标空间，这对应于将二次多项式分解为 $J=0$ 和 $J=2$ 的调和多项式。

为了挑出平凡表示 $J=0$ 的分量，利用

\begin{equation}
    L^{2}v=0
    \, ,\quad \implies \quad
    a_1+a_2=2 a_3
    \, ,
    a_6=0
    \, ,
    a_1+a_3=2 a_2
    \, ,
    a_5=0
    \, ,
    a_4=0
    \, ,
    2 a_1=a_2+a_3
    \, .
\end{equation}

归一化后可得

\begin{equation}
    v_{0}=\frac{
        |0,0,2\rangle +|0,2,0\rangle +|2,0,0\rangle
    }{\sqrt{3}}
    \, .
\end{equation}
