# Spinor helicity formalism

<span hidden> $
\newcommand{\dota}{\dot{a}}
\newcommand{\dotb}{\dot{b}}
\newcommand{\dotc}{\dot{c}}
\newcommand{\sigmab}{\bar{\sigma}}
\newcommand{\epsilonb}{\bar{\epsilon}}
\newcommand{\inout}[1]{e_{#1}}
$ </span>


## Conventions

We set up the conventions of spinor helicity formalism in a signature-independent way, mainly following [@Dreiner:2008tw,@Srednicki:2007qs,@Elvang:2013cua].

It is noteworthy that while the choice of convention for physical observables is purely a "gauge", it propagates along computations. From the perspective of programming, this is actually a nonlocal effect that should be encapsulated within different modules.
Therefore, we align our spinor conventions to the particle physics literature, ensuring they remain independent of the metric signature.

* The signature is denoted as

    \begin{equation}
        \signature=
        \begin{cases}
            +1
            \, , \quad (-,+,+,+)\, ,\\
            -1
            \, , \quad (+,-,-,-)\, .\\
        \end{cases}
    \end{equation}

    When altering the signature, we need to flip the signs of $g_{\mu\nu}$, $g^{\mu\nu}$ and the derived objects, e.g. momentum $P_{\mu}$, (covariant) derivative $\pp^{\mu}$, $D^{\mu}$ and Pauli matrix $\sigma_{\mu}$, $\sigmab_{\mu}$.

* A generic momentum is denoted as $P$, massive as $p$ and massless as $q$.

* The contraction of undotted indices is from northwest to southeast, and for dotted indices it's from southwest to northeast, following Wess&Bagger's convention.


### Comparison

* In [@Dreiner:2008tw], the authors provide both signature versions and a detailed discussion on convention changing.

* In Srednicki's book [@Srednicki:2007qs] and Elvang&Huang's lecture notes [@Elvang:2013cua], the signature is $\signature=1$, propagates into momentum bispinors \eqref{eq: momentum bispinor} and ceases at helicity spinors \eqref{eq: helicity spinor},

    \begin{equation}
        q_{a\dota}=-\ketS{q}_{a}\braA{q}_{\dota}
        \, ,
        \quad
        q^{\dota a}=-\ketA{q}^{\dota}\braS{q}^{a}
        \, .
    \end{equation}

    For incoming/outgoing, the conventions of [@Srednicki:2007qs] and [@Elvang:2013cua] are different. We follow [@Elvang:2013cua], as discussed later.

* In [@Pasterski:2017ylz], the signature is $\signature=1$, but propagates into helicity spinors.

* In Taylor's lecture notes [@Taylor:2017sph], the signature is $\signature=-1$.
    The type of helicity spinors is opposite to ours, see Equation 4.31.
    The type of polarization vectors is also opposite to ours, see Equation 5.7.
    The net effect is that the polarization vectors match ours up to $\sqrt{2}$, see Equation 5.8 and \eqref{eq: polarization}.

* In Schwartz's book [@Schwartz:2014sze] and Cheung's lecture notes [@Cheung:2017pzi], the conventions are basically the same as [@Taylor:2017sph] with minor differences.

    * In [@Schwartz:2014sze], the contraction of spinor indices is opposite to Wess&Bagger's convention, see Section 10.6.2.

    * In [@Cheung:2017pzi], the relation between Mandelstam variables and helicity spinors omits a sign, possibly due to the convention of $\epsilon$ tensors.


## Helicity spinor

Helicity spinors are essentially bosonic Weyl spinors that satisfy the massless Weyl equation.


### Square spinor

The square ket $\ketS{q}_{a}$, as a left-handed (bosonic) Weyl spinor associated to the complex massless momentum $q\in\CC^{4}$, lies in the fundamental representation $(\half,0)$ of $\slgroup(2,\CC)$, and the square bra $\braS{q}^{a}$ lies in its dual $(\half,0)^{\dual}$:

\begin{equation}
    \ketS{q}_{a} \to M^{b}_{a} \ketS{q}_{b}
    \, ,
    \quad
    \braS{q}^{a} \to (M^{-\tp})^{a}_{b} \braS{q}^{b}
    \, ,
\end{equation}

then the square braket is the natural pairing

\begin{equation}
    \label{eq: pairing S}
    \braketS{q_{1}q_{2}}\eqq \braS{q_{1}}^{a} \ketS{q_{2}}_{a}
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
    \label{eq: raising lowering S}
    \braS{q}^{a}=\epsilon^{ab}\ketS{q}_{b}
    \, ,
    \quad
    \ketS{q}_{a}=\epsilon_{ab}\braS{q}^{b}
    \, .
\end{equation}

Equivalently, $\epsilon$ is an invariant bilinear form on $(\half,0)$ or on its dual, and then $\braketS{q_{1}q_{2}}$ is antisymmetric.


### Angle spinor

Repeating the previous discussion onto the complex conjugate representation $(0,\half)$ and its dual $(0,\half)^{\dual}$, the angle bra and ket satisfy

\begin{equation}
    \braA{q}_{\dota} \to (M^{*})_{\dota}^{\dotb}\braA{q}_{\dotb}
    \, ,
    \quad
    \ketA{q}^{\dota} \to (M^{-\dagger})^{\dota}_{\dotb}\ketA{q}^{\dotb}
    \, ,
\end{equation}

and the pairing is

\begin{equation}
    \label{eq: pairing A}
    \braketA{q_{1}q_{2}} \eqq \braA{q_{1}}_{\dota}\ketA{q_{2}}^{\dota}
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
    \label{eq: raising lowering A}
    \ketA{q}^{\dota}=\epsilon^{\dota \dotb}\braA{q}_{\dotb}
    \, ,
    \quad
    \braA{q}_{\dota}=\epsilon_{\dota \dotb}\ketA{q}^{\dotb}
    \, .
\end{equation}


## Momentum bispinor

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
    \label{eq: Pauli matrix}
    \sigma^{\mu}_{a \dota}=(\id,\vec\sigma)
    \, ,
    \quad
    \sigmab^{\mu,\dota a}\eqq\epsilon^{ab}\epsilon^{\dota\dotb}\sigma^{\mu}_{b \dotb}=(\id,-\vec\sigma)
    \, .
\end{equation}

Then the metric $g_{\mu\nu}$, i.e. the invariant bilinear form on $V$ is intertwined by $\sigma$ to the one $\epsilon_{ab}\epsilon_{\dota\dotb}$ on $(\half,\half)$, given by

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

With this isomorphism, a vector $P^{\mu}$ can be rewritten into bispinors

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

and $\det P = - \signature P^{2}$.

Particularly, when the momentum is massless $q^{2}=0$, the bispinors factorize into two helicity spinors

\begin{equation}
    \label{eq: helicity spinor}
    q_{a\dota}=\ketS{q}_{a}\braA{q}_{\dota}
    \, ,
    \quad
    q^{\dota a}=\ketA{q}^{\dota}\braS{q}^{a}
    \, ,
\end{equation}

and then the square and angle spinors satisfy the massless Weyl equations

\begin{equation}
    \label{eq: Weyl equation}
    q^{\dota a}\ketS{q}_{a}=0
    \, ,
    \quad
    \braA{q}_{\dota} q^{\dota a}=0
    \, ,
    \quad
    q_{a\dota}\ketA{q}^{\dota}=0
    \, ,
    \quad
    \braS{q}^{a} q_{a\dota}=0
    \, .
\end{equation}


### Real momentum

Let's count the degrees of freedom.
For a complex massless momentum $q$, the square and angle spinors associated to $q$ are independent. The left side of \eqref{eq: helicity spinor} is of $\dim_{\CC}=3$, while the right side is of $\dim_{\CC}=4$.
The reason for this discrepancy is that this factorization is only determined up to a rescaling

\begin{equation}
    \ketS{q} \to \lambda^{-1} \ketS{q}
    \, ,
    \quad
    \braA{q} \to \lambda \braA{q}
    \, ,
\end{equation}

which turns out to be exactly the action of the complexified little group.

While for real momentum, the square and angle spinors are related by complex conjugate. Then the left side of \eqref{eq: helicity spinor} is of $\dim_{\RR}=3$, the right side is of $\dim_{\RR}=4$, and the little group scaling is a phase factor in $\sogroup(2,\RR)$.
We also need to distinguish incoming $(-)$ for negative energy $E<0$ and outgoing $(+)$ for positive energy $E>0$. Introducing the sign notation

\begin{equation}
    \inout{q}=\cases{
        +1\, , \quad \text{outgoing},
        \\
        -1\, , \quad \text{incoming},
    }
\end{equation}

we adopt the following conventions:

\begin{align}
    \label{eq: incoming}
    \ketS{-q}=\ketS{q}
    \, ,
    \quad
    \braA{-q}=-\braA{q}
    \, ,
\end{align}

and

\begin{align}
    \label{eq: conjugate}
    \ketS{q}^{*}=\inout{q}\braA{q}
    \, ,
    \quad
    \braA{q}^{*}=\inout{q} \ketS{q}
    \, ,
\end{align}

hence

\begin{equation}
    \label{eq: conjugate braket}
    \braketS{q_{1}q_{2}}^{*}
    =-\inout{q_{1}}\inout{q_{2}}\braketA{q_{1}q_{2}}
    \, .
\end{equation}

??? proof "\eqref{eq: conjugate}, \eqref{eq: incoming}"

    Since the intertwiner $\epsilon$ commutes with complex conjugate, we only need to consider $\ketS{q}$ and $\braA{q}$,

    \begin{equation}
        \ketS{q}^{*}=\alpha(q)\braA{q}
        \, ,
        \quad
        \braA{q}^{*}=\alpha^{-*}(q) \ketS{q}
        \, ,
    \end{equation}

    and from \eqref{eq: helicity spinor} we have

    \begin{equation}
        \alpha(q)=\alpha^{*}(q) \in \RR
        \, .
    \end{equation}

    Continuing $q$ to $-q$, there is only one minus sign in \eqref{eq: helicity spinor}, so we need to absorb it either in both of $\ketS{q}$ and $\braA{q}$ or in one of them. Starting from the ansatz

    \begin{equation}
        \ketS{-q}=\beta(q) \ketS{q}
        \, ,
        \quad
        \braA{-q}=-\beta^{-1}(q) \braA{q}
        \, ,
    \end{equation}

    and then by the compatibility of complex conjugate, we have

    \begin{align}
        \ketS{-q}^{*}
        &=\beta^{*}(q) \ketS{q}^{*}
        =\beta^{*}(q) \alpha(q) \braA{q}
        \\
        &=\alpha(-q)\braA{-q}=-\alpha(-q)\beta^{-1}(q)\braA{q}
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
        \alpha(q)=\inout{q}
        \, .
    \end{equation}

    Then for $\abs{\beta(q)}=1$ we choose

    \begin{equation}
        \beta(q)=1
        \, .
    \end{equation}

    This is the convention in [@Elvang:2013cua]. While [@Srednicki:2007qs] chooses $\beta(q)=i$, then one should be careful that $\ketS{-(-q)}=-\ketS{q}$, i.e., $\ketS{q}$ is double-valued in the complex plane of $E$.


## Polarization

Lacia-TimeStamp-2025-05-10-04:25:04

\begin{equation}
    \label{eq: polarization}
    \epsilon^{\mu}_{1}=\frac{\braketSA{1}{\gamma^{\mu}}{2}}{\braketA{12}}
    \, ,
    \quad
    \epsilonb^{\mu}_{1}=\frac{\braketAS{1}{\gamma^{\mu}}{2}}{\braketS{12}}
    \, .
\end{equation}


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
        &\braketSA{1}{P,\sigma^{\mu},\gamma^{\mu}}{2}=\braketAS{2}{P,\sigmab^{\mu},\gamma^{\mu}}{1}
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

| Object                          | Weight  |
| :------------------------------ | :-----: |
| square bra/ket                  |  $1$   |
| angle bra/ket                   |   $-1$   |
| wavefunction with helicity $J$  |  $2J$  |
| amplitude with helicities $J_i$ | $2J_i$ |

---


## Verification test

Directory: `~/TestSource/SpinorHelicity/`

| Test                 | Equation(s)                                                                 |
| :---------------------------- | :-------------------------------------------------------------------------- |
| `bispinor-contraction.wlt`  | $\eqref{eq: bispinor contraction}$ |
| `bispinor.wlt`                | $\eqref{eq: momentum bispinor} \eqref{eq: helicity spinor}$                 |
| `epsilon-tensor.wlt`          | $\eqref{eq: raising lowering S} \eqref{eq: raising lowering A}$             |
| `Fierz-identity.wlt`          | $\eqref{eq Fierz identity} $                                                |
| `incoming-outgoing.wlt`       | $\eqref{eq: incoming} $                                                     |
| `momentum-squared.wlt`        | $\eqref{eq: momentum squared} $                                             |
| `Pauli-Dirac-matrix.wlt`      | $\eqref{eq: Pauli matrix} \eqref{eq: Pauli matrix and epsilon tensor}$                                                 |
| `spinor-component-2-vs-4.wlt` |                                                                             |
| `spinor-component.wlt`        | $\eqref{eq: bra ket parametrization} $                                      |
| `spinor-conjugate.wlt`        | $\eqref{eq: conjugate} \eqref{eq: conjugate braket}$                        |
| `spinor-pairing.wlt`          | $\eqref{eq: pairing S} \eqref{eq: pairing A}$                               |
| `Weyl-equation.wlt`           | $\eqref{eq: Weyl equation} $                                                |

---
