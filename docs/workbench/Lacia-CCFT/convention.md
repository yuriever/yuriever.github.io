# Convention

<span hidden> $
\newcommand{\phat}{\hat{p}}
\newcommand{\qhat}{\hat{q}}
\newcommand{\khat}{\hat{k}}
\newcommand{\epsilonb}{\bar{\epsilon}}
\newcommand{\epsilonhat}{\hat{\epsilon}}
$ </span>

## Normalization constants

* `#!wl $signature=1` - the default metric is $(-,+,+,+)$.

* `#!wl $polar=$polarn=$polar0=1` - the default normalization of polarization vectors.

* `#!wl \$CPWFGauge=1` - the default CPWF gauge parameter.

In Klein space, almost everything is preserved except complex conjugation.

## Vectors

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
    \khat=\epsilonhat=y\pp_{y}\phat
    =
    \frac{1}{2y}(-z \bar{z}+y^2-1,-\bar{z}-z,i (z-\bar{z}),z \bar{z}-y^2-1)
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
    n
    =
    (1,0,0,-1)
    \, .
\end{align}

??? remark "Higher dimensions"

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
        \khat=\epsilonhat=y\pp_{y}\phat
        =
        \frac{1}{2y}(-| x|^2+y^2-1,-2 x,| x|^2-y^2-1)
        \, ,
        \\
        &
        \epsilon_a=\pp_{x_{a}}\qhat
        \textInMath{for}
        1\leq a\leq d
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
            \begin{pmatrix}
                2 & 0 & 0 & 0 \\
                0 & 2 & 0 & 0 \\
                0 & 0 & 0 & -2 \\
                0 & 0 & -2 & 0 \\
            \end{pmatrix}
            \, .
        \end{equation}

* Massive polarization vectors: $\set{\epsilon,\epsilonb,\epsilonhat}$ for $J\in \set{1,-1,0}$.

    * Complete basis: $\epsilon(p)_{a}=\set{\epsilon,\epsilonb,\epsilonhat,\phat}$ with the inner product

        \begin{equation}
            \epsilon(p)_{a}^{*}\cdot \epsilon(p)_{b}
            =
            \begin{pmatrix}
                2 & 0 & 0 & 0 \\
                0 & 2 & 0 & 0 \\
                0 & 0 & 1 & 0 \\
                0 & 0 & 0 & -1 \\
            \end{pmatrix}
            \, .
        \end{equation}
