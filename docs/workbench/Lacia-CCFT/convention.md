# Convention

<span hidden> $
\newcommand{\qhat}{\hat{q}}
\newcommand{\phat}{\hat{p}}
\newcommand{\epsilonb}{\bar{\epsilon}}
$ </span>

## Normalization constants

* `#!wl $signature=1` - the default metric is $(-,+,+,+)$.

* `#!wl $polar=$polarn=$polar0=1` - the default normalization of polarization vectors.

* `#!wl $CPWFGauge=1` - the default CPWF gauge parameter.

Under the default settings, for $d=2$ the components of vectors are

\begin{align}
    &
    \qhat=(z \bar{z}+1,\bar{z}+z,-i (z-\bar{z}),1-z \bar{z})
    \, ,
    \\
    &
    \phat=\frac{1}{2y}(z \bar{z}+y^2+1,\bar{z}+z,-i (z-\bar{z}),-z \bar{z}-y^2+1)
    \, ,
    \\
    &
    \epsilon=\pp_{z}\qhat
    =
    (\bar{z},1,-i,-\bar{z})
    \, ,
    \\
    &
    \epsilonb=\pp_{\zb}\qhat
    =
    (z,1,i,-z)
    \, ,
    \\
    &
    \epsilon_{0}=y\pp_{y}\phat
    =
    \frac{1}{2y}(-z \bar{z}+y^2-1,-\bar{z}-z,i (z-\bar{z}),z \bar{z}-y^2-1)
    \, ,
    \\
    &
    n
    =
    (1,0,0,-1)
    \, .
\end{align}

For higher dimensions, they are

\begin{align}
    &
    \qhat=(| x|^2+1,2 x,1-| x|^2)
    \, ,
    \\
    &
    \phat=\frac{1}{2y}(| x|^2+y^2+1,2 x,-| x|^2-y^2+1)
    \, ,
    \\
    &
    \epsilon_a=\pp_{x_{a}}\qhat
    \textInMath{for}
    1\leq a\leq d
    \, ,
    \\
    &
    \epsilon_{0}=y\pp_{y}\phat
    =
    \frac{1}{2y}(-| x|^2+y^2-1,-2 x,| x|^2-y^2-1)
    \, ,
    \\
    &
    n=
    (1,0,\cdots,0,-1)
    \, .
\end{align}

## Two dimensional polarization

* Massless polarization vectors: $\set{\epsilon,\epsilonb}$ for $J\in\set{1,-1}$.

    * Complete basis: $\epsilon(q)_{a}=\set{\epsilon,\epsilonb,n,\qhat}$ with the inner product

        \begin{equation}
            \epsilon(q)_{a}^{*}\cdot \epsilon(q)_{b}
            =
            \begin{bmatrix}
                2 & 0 & 0 & 0 \\
                0 & 2 & 0 & 0 \\
                0 & 0 & 0 & -2 \\
                0 & 0 & -2 & 0 \\
            \end{bmatrix}
            \, .
        \end{equation}

* Massive polarization vectors: $\set{\epsilon,\epsilonb,\epsilon_{0}}$ for $J\in \set{1,-1,0}$.

    * Complete basis: $\epsilon(p)_{a}=\set{\epsilon,\epsilonb,\epsilon_{0},\phat}$ with the inner product

        \begin{equation}
            \epsilon(p)_{a}^{*}\cdot \epsilon(p)_{b}
            =
            \begin{bmatrix}
                2 & 0 & 0 & 0 \\
                0 & 2 & 0 & 0 \\
                0 & 0 & 1 & 0 \\
                0 & 0 & 0 & -1 \\
            \end{bmatrix}
            \, .
        \end{equation}