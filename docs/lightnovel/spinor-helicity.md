# Notes on spinor helicity formalism

<span hidden> $
\newcommand{\phat}{\hat{p}}
\newcommand{\qhat}{\hat{q}}
\newcommand{\khat}{\hat{k}}
\newcommand{\adot}{\dot{a}}
\newcommand{\bdot}{\dot{b}}
\newcommand{\cdot}{\dot{c}}
\newcommand{\epsilonb}{\bar{\epsilon}}
\newcommand{\sigmab}{\bar{\sigma}}
\newcommand{\epsilonhat}{\hat{\epsilon}}
\newcommand{\signature}{\operatorname{\color{red}\mathsf{s}}}
$ </span>

We set up the conventions of spinor helicity formalism in a signature-independent way.

It is noteworthy that while the choice of convention for physical observables is purely a "gauge", it propagates along computations. From the perspective of programming, this is actually a nonlocal effect that should be encapsulated within different modules.
Therefore, we align our spinor conventions to the particle physics literature, ensuring they remain independent of the metric signature. [^convention-summary]

The signature is denoted as

\begin{equation}
    \signature=
    \begin{cases}
        +1\, , \quad (-,+,+,+)\, ,\\
        -1\, , \quad (+,-,-,-)\, ,\\
    \end{cases}
\end{equation}

and when changing signature, we only need to flip the sign of $g_{\mu\nu},\, g^{\mu\nu}$ and the derived objects, e.g. momentum $P_{\mu}$, (covariant) derivative $\pp^{\mu},\, D^{\mu}$, Pauli matrix $\sigma_{\mu},\, \sigmab_{\mu}$.

Here and in the following, we denote a generic momentum as $P$, and massive/massless as $p$/$q$.

[^convention-summary]:

    We mainly follow [@Dreiner:2008tw], where the authors provide both signature versions and a detailed discussion on convention changing.

    In [@Taylor:2017sph,@Cheung:2017pzi] the signature is $(+,-,-,-)$ with the spinor conventions accordingly aligned.
    
    In [@srednicki2007quantum,@Elvang:2013cua] the signature is $(-,+,+,+)$, propagates into momentum bispinors \eqref{eq: momentum bispinor} and stops at the relation between momentum bispinors and helicity spinors \eqref{eq: helicity spinor}.

    In [@Pasterski:2017ylz] the signature is $(-,+,+,+)$ and propagates into helicity spinors \eqref{eq: helicity spinor}.

## Helicity spinors

Helicity spinors are essentially bosonic Weyl spinors that satisfy the massless Weyl equation.

### Square spinors

The square ket $\sket{q}_{a}$, as a left-handed (bosonic) Weyl spinor associated to the complex massless momentum $q\in\CC^{4}$, lies in the fundamental representation $(\half,0)$ of $\slgroup(2,\CC)$, and the square bra $\sbra{q}^{a}$ lies in its dual $(\half,0)^{\dual}$:

\begin{equation}
    \sket{q}_{a} \to M^{b}_{a} \sket{q}_{b}
    \, ,
    \quad
    \sbra{q}^{a} \to (M^{-\tp})^{a}_{b} \sbra{q}^{b}
    \, ,
\end{equation}

then the square braket is the natural pairing [^northwest-to-southeast]

\begin{equation}
    \sbraket{q_{1}q_{2}}\eqq \sbra{q_{1}}^{a} \sket{q_{2}}_{a}
    \, .
\end{equation}

Due to the intertwiner and its inverse

\begin{equation}
    \epsilon^{ab}=-\epsilon_{ab}=
    \begin{bmatrix}
        0 & 1 \\ -1 & 0
    \end{bmatrix}
    \, ,
    \quad
    \epsilon^{ab}\epsilon_{bc}=\delta^{a}_{b}
    \, ,
\end{equation}

the two representations are isomorphic by

\begin{equation}
    \sbra{q}^{a}=\epsilon^{ab}\sket{q}_{b}
    \, ,
    \quad
    \sket{q}_{a}=\epsilon_{ab}\sbra{q}^{b}
    \, .
\end{equation}

Equivalently, $\epsilon$ is an invariant bilinear form on $(\half,0)$ or on its dual, and then $\sbraket{q_{1}q_{2}}$ is antisymmetric.

[^northwest-to-southeast]:

    The convention to sum undotted indices is from northwest to southeast, and for dotted indices it's from southwest to northeast.

### Angle spinors

Repeating the previous discussion onto the complex conjugate representation $(0,\half)$ and its dual $(0,\half)^{\dual}$, the angle bra, ket and braket satisfy

\begin{equation}
    \abra{q}_{\adot} \to (M^{*})_{\adot}^{\bdot}\abra{q}_{\bdot}
    \, ,
    \quad
    \aket{q}^{\adot} \to (M^{-\dagger})^{\adot}_{\bdot}\aket{q}^{\bdot}
    \, ,
    \quad
    \abraket{q_{1}q_{2}} \eqq \abra{q_{1}}_{\adot}\aket{q_{2}}^{\adot}
    \, .
\end{equation}

The normalization of the intertwiner is chosen to commute with complex conjugation:

\begin{equation}
    \epsilon^{\adot \bdot}=-\epsilon_{\adot \bdot}=
    \begin{bmatrix}
        0 & 1 \\ -1 & 0
    \end{bmatrix}
    \, ,
    \quad
    \epsilon^{\adot \bdot}\epsilon_{\bdot \cdot}=\delta^{\adot}_{\bdot}
    \, ,
\end{equation}

then the indices are lowered/raised as

\begin{equation}
    \aket{q}^{\adot}=\epsilon^{\adot \bdot}\abra{q}_{\bdot}
    \, ,
    \quad
    \abra{q}_{\adot}=\epsilon_{\adot \bdot}\sbra{q}^{\bdot}
    \, .
\end{equation}

### Momentum bispinor

The Pauli matrices $\vec\sigma$ intertwine the action of $\sugroup(2)$ on $1\in \half\ox\half$ and the action of $\sogroup(3,\RR)$ on the vector representation through the group morphism $\sugroup(2)\to \sogroup(3,\RR)$, given by

\begin{equation}
    \sigma^{1}=
    \begin{bmatrix}
        0 & 1 \\
        1 & 0
    \end{bmatrix}
    \, ,
    \quad
    \sigma^{2}=
    \begin{bmatrix}
        0 & -i \\
        i & 0
    \end{bmatrix}
    \, ,
    \quad
    \sigma^{3}=
    \begin{bmatrix}
        1 & 0 \\
        0 & -1
    \end{bmatrix}
    \, .
\end{equation}

Similarly, the four-component Pauli matrices $\sigma$ intertwine the action of $\slgroup(2,\CC)$ on $(\half,\half)$ and the action of $\sogroup(3,1,\RR)$ on the complex vector representation $V\simeq \CC^{4}$ or its dual through the group morphism, given by

\begin{equation}
    \sigma^{\mu}_{a \adot}=(\id,\vec\sigma)
    \, ,
    \quad
    \sigmab^{\mu,\adot a}\eqq\epsilon^{ab}\epsilon^{\adot\bdot}\sigma^{\mu}_{b \bdot}=(\id,-\vec\sigma)
    \, .
\end{equation}

Then the metric $g_{\mu\nu}$, i.e. the invariant bilinear form on $V$ is intertwined by $\sigma$ to the one $\epsilon_{ab}\epsilon_{\adot\bdot}$ on $(\half,\half)$, given by

\begin{equation}
    g_{\mu\nu}\sigma^{\mu}_{a\adot}\sigma^{\nu}_{b\bdot}
    =
    - 2 \signature \epsilon_{ab}\epsilon_{\adot\bdot}
    \, ,
    \quad
    \epsilon^{ab}\epsilon^{\adot\bdot}\sigma^{\mu}_{a\adot}\sigma^{\nu}_{b\bdot}
    =
    - 2 \signature g^{\mu\nu}
    \, .
\end{equation}

With this isomorphism, a generic momentum $P^{\mu}$ can be rewritten into bispinors

\begin{equation}
    \label{eq: momentum bispinor}
    P_{a\adot}
    \eqq
    - \signature P_{\mu}\sigma^{\mu}_{a\adot}
    =
    \begin{bmatrix}
        P^0-P^3 & -P^1+i P^2 \\
        -P^1-i P^2 & P^0+P^3 \\
    \end{bmatrix}
    \, ,
    \quad
    P^{\adot a}
    \eqq
    - \signature
    P_{\mu}\sigmab^{\mu,\adot a}
    =
    \begin{bmatrix}
        P^0+P^3 & P^1-i P^2 \\
        P^1+i P^2 & P^0-P^3 \\
    \end{bmatrix}
    \, ,
\end{equation}

and $\det P = - \signature P^{2}$.
Particularly, when the momentum is massless $q^{2}=0$, the bispinors factorize into

\begin{equation}
    \label{eq: helicity spinor}
    q_{a\adot}=\sket{q}_{a}\abra{q}_{\adot}
    \, ,
    \quad
    q^{\adot a}=\aket{q}^{\adot}\sbra{q}^{a}
    \, ,
\end{equation}

and then the square and angle spinors satisfy the massless Weyl equations

\begin{equation}
    q^{\adot a}\sket{q}_{a}=0
    \, ,
    \quad
    \abra{q}_{\adot} q^{\adot a}=0
    \, ,
    \quad
    q_{a\adot}\aket{q}^{\adot}=0
    \, ,
    \quad
    \sbra{q}^{a} q_{a\adot}=0
    \, .
\end{equation}

The physical interpretation is that: the square spinors

### Real momentum

Let's count the degree of freedom.
For complex momentum $q$, the square and angle spinors associated to $q$ are independent. The left side of \eqref{eq: helicity spinor} is of $\dim_{\CC}=3$, while the right side is of $\dim_{\CC}=4$.
The reason for this discrepancy is that this factorization is only determined up to a rescaling

\begin{equation}
    \sket{q} \to \lambda^{-1} \sket{q}
    \, ,
    \quad
    \abra{q} \to \lambda \abra{q}
    \, ,
\end{equation}

which is exactly the semisimple part $\sogroup(2,\CC)$ of the complexified little group of massless momentum.

While for real momentum, the square and angle spinors are related by complex conjugate. Then the left side of \eqref{eq: helicity spinor} is of $\dim_{\RR}=3$, the right side is of $\dim_{\RR}=4$, and the little group scaling is a phase factor in $\sogroup(2,\RR)$.

---

In , the convention for incoming (-) and outgoing (+) is

\begin{equation}
    \sket{-q}=\sket{q}
    \, ,
    \quad
    \aket{-q}=-\aket{q}
    \, .
\end{equation}

This makes the complex conjugation free from signs:

\begin{equation}
    \sbra{q}=\aket{q}^{*}
    \, ,
    \quad
    \abra{q}=\sket{q}^{*}
    \, .
\end{equation}

While in Srednicki's convention, the signs are hidden in the complex conjugation.