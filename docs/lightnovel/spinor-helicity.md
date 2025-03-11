# Notes on spinor helicity formalism

<span hidden> $\newcommand{\phat}{\hat{p}}
\newcommand{\qhat}{\hat{q}}
\newcommand{\khat}{\hat{k}}
\newcommand{\dota}{\dot{a}}
\newcommand{\dotb}{\dot{b}}
\newcommand{\dotc}{\dot{c}}
\newcommand{\epsilonb}{\bar{\epsilon}}
\newcommand{\sigmab}{\bar{\sigma}}
\newcommand{\epsilonhat}{\hat{\epsilon}}
\newcommand{\signature}{\operatorname{\color{red}\mathsf{s}}}$ </span>

We set up the conventions of spinor helicity formalism in a signature-independent way.

It is noteworthy that while the choice of convention for physical observables is purely a "gauge", it propagates along computations. From the perspective of programming, this is actually a nonlocal effect that should be encapsulated within different modules.
Therefore, we align our spinor conventions to the particle physics literature, ensuring they remain independent of the metric signature here. [^convention-summary]

The signature is denoted as

\begin{equation}
    \signature=
    \begin{cases}
        +1
        \, , \quad (-,+,+,+)\, ,\\
        -1
        \, , \quad (+,-,-,-)\, ,\\
    \end{cases}
\end{equation}

and when changing signature, we only need to flip the signs of $g_{\mu\nu},\, g^{\mu\nu}$ and the derived objects, e.g. momentum $P_{\mu}$, (covariant) derivative $\pp^{\mu},\, D^{\mu}$, Pauli matrix $\sigma_{\mu},\, \sigmab_{\mu}$.

Here and in the following, we denote a generic momentum as $P$, massive as $p$ and massless as $q$.

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
    \braketS{q_{1}q_{2}}\eqq \sbra{q_{1}}^{a} \sket{q_{2}}_{a}
    \, .
\end{equation}

Due to the intertwiner and its inverse

\begin{equation}
    \epsilon^{ab}=-\epsilon_{ab}=
    \begin{pmatrix}
        0 & 1 \\ -1 & 0
    \end{pmatrix}
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

Equivalently, $\epsilon$ is an invariant bilinear form on $(\half,0)$ or on its dual, and then $\braketS{q_{1}q_{2}}$ is antisymmetric.

[^northwest-to-southeast]:

    The convention to sum undotted indices is from northwest to southeast, and for dotted indices it's from southwest to northeast.

### Angle spinors

Repeating the previous discussion onto the complex conjugate representation $(0,\half)$ and its dual $(0,\half)^{\dual}$, the angle bra, ket and braket satisfy

\begin{equation}
    \abra{q}_{\dota} \to (M^{*})_{\dota}^{\dotb}\abra{q}_{\dotb}
    \, ,
    \quad
    \aket{q}^{\dota} \to (M^{-\dagger})^{\dota}_{\dotb}\aket{q}^{\dotb}
    \, ,
    \quad
    \braketA{q_{1}q_{2}} \eqq \abra{q_{1}}_{\dota}\aket{q_{2}}^{\dota}
    \, .
\end{equation}

The normalization of the intertwiner is chosen to commute with complex conjugation:

\begin{equation}
    \epsilon^{\dota \dotb}=-\epsilon_{\dota \dotb}=
    \begin{pmatrix}
        0 & 1 \\ -1 & 0
    \end{pmatrix}
    \, ,
    \quad
    \epsilon^{\dota \dotb}\epsilon_{\dotb \dotc}=\delta^{\dota}_{\dotb}
    \, ,
\end{equation}

then the indices are lowered/raised as

\begin{equation}
    \aket{q}^{\dota}=\epsilon^{\dota \dotb}\abra{q}_{\dotb}
    \, ,
    \quad
    \abra{q}_{\dota}=\epsilon_{\dota \dotb}\sbra{q}^{\dotb}
    \, .
\end{equation}

### Momentum bispinor

The Pauli matrices $\vec\sigma$ intertwine the action of $\sugroup(2)$ on $1\in \half\ox\half$ and the action of $\sogroup(3,\RR)$ on the vector representation through the group morphism $\sugroup(2)\to \sogroup(3,\RR)$, given by

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

Similarly, the four-component Pauli matrices $\sigma$ intertwine the action of $\slgroup(2,\CC)$ on $(\half,\half)$ and the action of $\sogroup(3,1,\RR)$ on the complex vector representation $V\simeq \CC^{4}$ through the group morphism, given by

\begin{equation}
    \sigma^{\mu}_{a \dota}=(\id,\vec\sigma)
    \, ,
    \quad
    \sigmab^{\mu,\dota a}\eqq\epsilon^{ab}\epsilon^{\dota\dotb}\sigma^{\mu}_{b \dotb}=(\id,-\vec\sigma)
    \, .
\end{equation}

Then the metric $g_{\mu\nu}$, i.e. the invariant bilinear form on $V$ is intertwined by $\sigma$ to the one $\epsilon_{ab}\epsilon_{\dota\dotb}$ on $(\half,\half)$, given by

\begin{equation}
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

With this isomorphism, a generic momentum $P^{\mu}$ can be rewritten into bispinors

\begin{align}
    \label{eq: momentum bispinor}
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
\end{align}

and $\det P = - \signature P^{2}$.

Particularly, when the momentum is massless $q^{2}=0$, the bispinors factorize into two helicity spinors

\begin{equation}
    \label{eq: helicity spinor}
    q_{a\dota}=\sket{q}_{a}\abra{q}_{\dota}
    \, ,
    \quad
    q^{\dota a}=\aket{q}^{\dota}\sbra{q}^{a}
    \, ,
\end{equation}

and then the square and angle spinors satisfy the massless Weyl equations

\begin{equation}
    q^{\dota a}\sket{q}_{a}=0
    \, ,
    \quad
    \abra{q}_{\dota} q^{\dota a}=0
    \, ,
    \quad
    q_{a\dota}\aket{q}^{\dota}=0
    \, ,
    \quad
    \sbra{q}^{a} q_{a\dota}=0
    \, .
\end{equation}

### Real momentum

Let's count the degrees of freedom.
For a complex massless momentum $q$, the square and angle spinors associated to $q$ are independent. The left side of \eqref{eq: helicity spinor} is of $\dim_{\CC}=3$, while the right side is of $\dim_{\CC}=4$.
The reason for this discrepancy is that this factorization is only determined up to a rescaling

\begin{equation}
    \sket{q} \to \lambda \sket{q}
    \, ,
    \quad
    \abra{q} \to \lambda^{-1} \abra{q}
    \, ,
\end{equation}

which turns out to be exactly the action of the complexified little group.

While for real momentum, the square and angle spinors are related by complex conjugate. Then the left side of \eqref{eq: helicity spinor} is of $\dim_{\RR}=3$, the right side is of $\dim_{\RR}=4$, and the little group scaling is a phase factor in $\sogroup(2,\RR)$.
We also need to distinguish incoming $(-)$ for $E<0$ and outgoing $(+)$ for $E>0$. Introducing the sign notation

\begin{equation}
    e_{q}=\cases{
        +1\, \textInMath{for outgoing}
        \\
        -1\, \textInMath{for incoming}
    }
    \, ,
\end{equation}

we adopt the following conventions:

\begin{align}
    \label{eq: conjugate}
    \sket{q}^{*}=e_{q}\abra{q}
    \, ,
    \quad
    \abra{q}^{*}=e_{q} \sket{q}
    \, ,
    \quad
    \braketS{q_{1}q_{2}}^{*}
    =-e_{q_{1}}e_{q_{2}}\braketA{q_{1}q_{2}}
    \, ,
\end{align}

and

\begin{align}
    \label{eq: incoming}
    \sket{-q}=\sket{q}
    \, ,
    \quad
    \abra{-q}=-\abra{q}
    \, .
\end{align}

??? proof "\eqref{eq: conjugate}, \eqref{eq: incoming}"

    Since the intertwiner $\epsilon$ commutes with complex conjugate, we only need to consider $\sket{q}$ and $\abra{q}$,

    \begin{equation}
        \sket{q}^{*}=\alpha(q)\abra{q}
        \, ,
        \quad
        \abra{q}^{*}=\alpha^{-*}(q) \sket{q}
        \, ,
    \end{equation}

    and from \eqref{eq: helicity spinor} we have

    \begin{equation}
        \alpha(q)=\alpha^{*}(q)\in\RR
        \, .
    \end{equation}

    Continuing $q$ to $-q$, there is only one minus sign in \eqref{eq: helicity spinor}, so we need to absorb it either in both of $\sket{q}$ and $\abra{q}$ or in one of them. Starting from the ansatz

    \begin{equation}
        \sket{-q}=\beta(q) \sket{q}
        \, ,
        \quad
        \abra{-q}=-\beta^{-1}(q) \abra{q}
        \, ,
    \end{equation}

    and then by the compatibility of complex conjugate, we have

    \begin{align}
        \sket{-q}^{*}
        &=\beta^{*}(q) \sket{q}^{*}
        =\beta^{*}(q) \alpha(q) \abra{q}
        \\
        &=\alpha(-q)\abra{-q}=-\alpha(-q)\beta^{-1}(q)\abra{q}
        \, ,
    \end{align}

    which implies

    \begin{equation}
        \beta(q)\beta^{*}(q)=-\alpha(-q)\alpha^{-1}(q)>0
        \, .
    \end{equation}

    Furthermore, to make the square/angle brakets balanced

    \begin{equation}
        \braketS{q_{1}q_{2}}^{*}
        =-\alpha(q_{1})\alpha(q_{2})\braketA{q_{1}q_{2}}
        \, ,
    \end{equation}

    a natural choice of $\alpha(q)$ would be

    \begin{equation}
        \alpha(q)=e_{q}
        \, .
    \end{equation}

    Then for $\abs{\beta(q)}=1$ we choose

    \begin{equation}
        \beta(q)=1
        \, .
    \end{equation}

    This is the convention in [@Elvang:2013cua]. While [@srednicki2007quantum] chooses $\beta(q)=i$, then one should be careful that $\sket{-(-q)}=-\sket{q}$, i.e., $\sket{q}$ is double-valued in the complex plane of $E$.

### Useful identities

For massless momenta, $q$ will be omitted, e.g. $\braketS{12}\eqq \braketS{q_{1}q_{2}}$.

\begin{align}
    &\braketS{12}\braketA{12}
    =
    2\signature q_{1} \cdot q_{2}
    \, ,
    \\
    &
    \braketAS{1}{2}{3}=\braketA{12}\braketS{23}
    \, ,
    \\
    &
    \braketSA{1}{2}{3}=\braketS{12}\braketA{23}
    \, ,
    \\
    &
\end{align}

#### Parametrization

The massless momentum can be parametrized by the energy $E$ and angular coordinates $(\theta,\phi)$ as

\begin{equation}
    q=E(1,\sin \theta  \cos \phi ,\sin \theta  \sin \phi ,\cos \theta )
    \, .
\end{equation}

In the celestial CFT literature, we also use the following parametrization:

\begin{equation}
    q=\omega(
        z \bar{z}+1,\bar{z}+z,-i (z-\bar{z}),1-z \bar{z}
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
    &
    \sbra{q}=\sqrt{2\omega}(1,\bar{z})
    \, ,
    \\
    &
    \sket{q}=\sqrt{2\omega}(-\bar{z},1)
    \, ,
    \\
    &
    \abra{q}=e_{q}\sqrt{2\omega}(-z,1)
    \, ,
    \\
    &
    \aket{q}=e_{q}\sqrt{2\omega}(1,z)
    \, ,
\end{align}

## Polarization vectors

%
%
%
%
%
%
%
%
%
%
%
%
%
%
%
%
