# Convention

<span hidden> $
\newcommand{\qhat}{\hat{q}}
\newcommand{\phat}{\hat{p}}
\newcommand{\epsilonb}{\bar{\epsilon}}
$ </span>

## Normalization constants

* `#!wl \$signature=1` - the default metric is $(-,+,+,+)$.

* `#!wl \$polar=2` - the default normalization of $2d$ polarization vector is $\epsilon=\pp_{z}\qhat$.

* `#!wl \$CPWFGauge=1` - the default CPWF gauge parameter.

Under the default settings, the components of vectors are

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
    n=\pp_{z}\pp_{\zb}\qhat
    =
    (1,0,0,-1)
    \, ,
    \\
    &
    \epsilon_{0}=y\pp_{y}\phat
    =
    \frac{1}{2y}(-z \bar{z}+y^2-1,-\bar{z}-z,i (z-\bar{z}),z \bar{z}-y^2-1)
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