# Distributions

We review some basic aspects of distributions.

## Analytic continuation of distributions

The analytic continuation of distributions was initiated by Gelfand and his collaborators in [@Gelfand1] [@Gelfand2], and this motivated Bernstein to develop the theory of D-modules [@Bernstein1] [@Bernstein2].
In this work, we only need some simple cases. Following [@Gelfand1] [@Gelfand2], we provide a brief and physics-oriented review.

### Regularization and normalization

For simplicity, we focus on tempered distributions on $\RR$.
A tempered distribution $\phi\in S'(\RR)$ acting on the rapidly decreasing test function $f\in S(\RR)$ can be formally written as an integral

\begin{equation}
    \label{eq: functional}
    (\phi,f)=\intt{d x}\phi(x) f(x)
    \, ,
\end{equation}

with the kernel $\phi(x)$.
It is useful to conceptualize $f$ as a Gaussian wave-packet and $\phi$ as a sharp classical observable.

When the kernel $\phi(x)$ contains singularities, the integral \eqref{eq: functional} is convergent only for a subspace $V_{\phi}\subset S(\RR)$ of test functions.
To extend the domain of $\phi$ from $V_{\phi}$ to $S(\RR)$, we need to subtract off the divergences in \eqref{eq: functional} in a systematic way, and this procedure is called regularization of distributions.
The extension is nonunique, and we are interested in the case where a family of distributions $\phi_{\lambda}(x)$ depends on the parameter $\lambda$ analytically. Then the analyticity of $\lambda$ can help choose a unique regularization of $\phi_{\lambda}(x)$.

If $\phi_{\lambda}(x)$ is meromorphic in $\lambda\in U\subset\CC$, we can cancel the poles of $\phi_{\lambda}(x)$ by another meromorphic function $N(\lambda)$ such that the normalized distribution $N(\lambda)\phi_{\lambda}(x)$ is holomorphic in $U$, called normalization of distributions.

### Homogeneous distributions

The distributional solutions to the following functional equation are called homogeneous distributions: for $x\in\RR$, $\lambda>0$,

\begin{equation}
    f(\lambda x)=\lambda^{a}f(x)
    \, ,
\end{equation}

There are three bases of homogeneous distributions: the plus/minus basis is

\begin{equation}
    x_{\tacp}^\lambda \eqq x^\lambda \theta(x)
    \, ,
    \quad
    x_{\tacm}^\lambda \eqq (-x)^\lambda \theta(-x)
    \, ,
\end{equation}

and the even/odd basis is

\begin{equation}
    x_{\tac{0}}^\lambda \eqq |x|^\lambda= x_{\tacp}^\lambda+ x_{\tacm}^\lambda
    \, ,
    \quad
    x_{\tac{1}}^\lambda \eqq |x|^\lambda \sign(x)=x_{\tacp}^\lambda- x_{\tacm}^\lambda
    \, .
\end{equation}

These four distributions are meromorphic functions in $\lambda\in\CC$, and the normalized versions are

\begin{equation}
    \frac{1}{\gm{\lambda+1}}x_{\tacp}^\lambda
    \, , \quad
    \frac{1}{\gm{\lambda+1}}x_{\tacm}^\lambda
    \, ,  \quad
    \frac{1}{\gm{\frac{\lambda+1}{2}}}x_{\tac{0}}^\lambda
    \, ,\quad
    \frac{1}{\gm{\frac{\lambda+2}{2}}}x_{\tac{1}}^\lambda
    \, .
\end{equation}

The third imaginary basis consists of boundary values of holomorphic functions,

\begin{equation}
    \label{eq: homogeneous distribution - imaginary basis}
    \begin{aligned}
        &x_{\tac{+i}}^\lambda \eqq  \lim_{\varepsilon\to 0}(x+i\varepsilon )^\lambda=x_{\tacp}^\lambda+e^{i\pi \lambda}x_{\tacm}^\lambda
        \, ,
        \\
        &x_{\tac{-i}}^\lambda \eqq  \lim_{\varepsilon\to 0}(x-i\varepsilon )^\lambda=x_{\tacp}^\lambda+e^{-i\pi \lambda}x_{\tacm}^\lambda
        \, .
    \end{aligned}
\end{equation}

The $\lambda$-poles get canceled due to the phase factor, and $x_{\tac{\pm i}}^\lambda$ is holomorphic in $\lambda\in\CC$.

At the removed poles, these six distributions localize to the Dirac delta function and its derivatives. For $n\in\NN$,

\begin{align}
    \label{eq: homogeneous distribution - localization}
    &
    \frac{1}{\gm{\lambda+1}}x_{\tacpm}^\lambda
    =
    \delta^{(n)}(\pm x)
    \, ,
    \textInMath{for} \lambda=-n-1
    \, ,
    \\
    &
    \frac{1}{\gm{\frac{\lambda+1}{2}}}x_{\tac{0}}^{\lambda}
    =
    \frac{(-1)^{n} n!}{(2n)!}\delta^{(2n)}(x)
    \, ,
    \textInMath{for} \lambda=-2n-1
    \, ,
    \\
    &
    \frac{1}{\gm{\frac{\lambda+2}{2}}}x_{\tac{1}}^{\lambda}
    =
    \frac{(-1)^{n+1} n!}{(2n+1)!}\delta^{(2n+1)}(x)
    \, ,
    \textInMath{for} \lambda=-2n-2
    \, ,
    \\
    &
    x_{\tac{\pm i}}^{\lambda}
    =
    x^{-n-1}\mp i\pi \frac{(-1)^{n}}{n!} \delta^{(n)}(x)
    \, ,
    \textInMath{for} \lambda=-n-1
    \, .
\end{align}

!!! remark "Parity symmetry"

    Under the parity change $x\to -x$, the three bases transform as

    \begin{equation}
        \label{eq: homogeneous distribution - parity symmetry}
        (-x)_{\tacpm}^{\lambda}=x_{\tacmp}^{\lambda}
        \, ,
        \quad
        (-x)_{\tac{0|1}}^{\lambda}=(-1)^{0|1}x_{\tac{0|1}}^{\lambda}
        \, ,
        \quad
        (-x)_{\tac{\pm i}}^{\lambda}=e^{\pm i\pi \lambda} x_{\tac{\mp i}}^{\lambda}
        \, .
    \end{equation}

    The last one is useful in computation and is consistent with the branch cut $x\in (-\infty,0)$ of $x^{\lambda}$.

### Analytic structure of $x_{\tacp}^\lambda$

The integral $(x_{\tacp}^\lambda,f(x))=\intrange{dx}{0}{\oo}x^\lambda f(x)$ is convergent and hence is holomorphic for $\Re \lambda> -1$.
For $\Re \lambda\leq -1$ the integral can be divergent and acquires regularization near $x=0$. The easiest way to see $\lambda$-poles in this region is to choose the test function as $e^{-x}$, then $(x_{\tacp}^\lambda,e^{-x})=\gm{\lambda+1}$ manifests the analytic structure of $x_{\tacp}^\lambda$ and provides the normalization.

A finer argument to read off the residues at $\lambda=-n-1$ is as follows.
Given a real-analytic test function, inserting its Taylor expansion and dividing the integration region into $[0,1]$ and $[1,\oo)$, we obtain

\begin{equation}
    (x_{\tacp}^\lambda,f(x))
    =
    \sum_{n=0}^{\oo} \frac{f^{(n)}(0)}{n!}\frac{1}{\lambda+n+1}
    +
    \intrange{dx}{1}{\oo}x^\lambda f(x)
    \, .
\end{equation}

The second term is holomorphic in $\lambda$ by the fast decay. The first term shows the simple poles at $\lambda=-n-1$, and after chopping off the test function, the residues are

\begin{equation}
    \Res_{\lambda=-n-1} x_{\tacp}^\lambda = \frac{(-1)^{n}}{n!}\delta^{(n)}(x)
    \, .
\end{equation}

The distribution $x_{\tacp}^\lambda$ can be normalized as $\frac{1}{\gm{\lambda+1}}x_{\tacp}^\lambda$, then the values at the removed poles are

\begin{equation}
    \eval{\frac{1}{\gm{\lambda+1}}x_{\tacp}^\lambda}{\lambda=-n-1}=\delta^{(n)}(x)
    \, .
\end{equation}

??? remark "Singularity at infinity"

    In practice, the test functions do not decay sufficiently fast as $x\to \oo$, and the singularity at infinity plays an important role.
    For example, choosing the test function as $(1+x)^{-1}$, there are additional poles at nonnegative integers:

    \begin{equation}
        (x_{\tacp}^\lambda,(1+x)^{-1})=\gm{-\lambda}\,  \gm{\lambda+1}
        \, .
    \end{equation}

    In this case the test function is not in $S(\RR)$ and should be divided into two parts: (1) one is in $S(\RR)$ and detects the singularity of $x_{\tacp}^\lambda$ at origin, providing the factor $\gm{\lambda+1}$; (2) another is well-behaved as $x\to \oo$ and decays sufficiently fast as $x\to 0$, then detects the singularity of $x_{\tacp}^\lambda$ at infinity, providing the factor $\gm{-\lambda}$, e.g.

    \begin{equation}
        (x_{\tacp}^\lambda,e^{-1/x})=-\gm{-\lambda-1}
        \, .
    \end{equation}

### Fourier transform

The Riemann-Lebesgue lemma asserts that if $f(x)\in L^{1}(\RR^d)$ then the Fourier transform $f(p)$ vanishes at infinity,

\begin{equation}
    f(p)=\int_{\RR^d}d^d x\, f(x) e^{-ip\cdot x}\to 0  \textInMath{as} |p|\to \oo
    \, .
\end{equation}

The intuition here is that decay properties of distributions are Fourier-transformed into regularity properties.

Under the Fourier transform, the basis $x_{\tac{0|1}}^{\lambda}$ remains invariant due to parity. In particular, the Dirac delta functions are Fourier transformed into monomials:

\begin{equation}
    \delta^{(n)}(x) =\inttt{\frac{dp}{2\pi}}{\RR}e^{ipx} (ip)^{n}
    \, .
\end{equation}

The bases $x_{\tacpm}^{\lambda}$ and $x_{\tac{\pm i}}^{\lambda}$ are Fourier transform pairs, revealing the Paley-Wiener theorems, which state that support properties of distributions are Fourier-transformed into analytic properties.

### Two dimensions

In $2d$, with the complex coordinate $z=r e^{i\theta}$, the homogeneous distributions can be written as

\begin{equation}
    z^{\frac{\delta+j}{2}}\zb^{\frac{\delta-j}{2}}
    \eqq
    r^{\delta}e^{i j \theta}
    \, ,
    \textInMath{for}
    \delta\in\CC
    \, ,
    j\in\ZZ
    \, .
\end{equation}

Similar to the $1d$ case, to read off the analytic structure, we divide the integration region into the disk $r\in[0,1]$ and $r\in[1,\oo)$, then

\begin{equation}
    (z^{\frac{\delta+j}{2}}\zb^{\frac{\delta-j}{2}},f(z,\zb))
    =
    \sum_{n,m=0}^{\oo}
    \frac{f^{(n,m)}(0,0)}{n! m!}
    \frac{2\pi \deltaK{j+n-m}}{\delta+n+m+2}
    +
    \inttt{d^2 z}{r\geq 1}\rest
    \, .
\end{equation}

For fixed $j=m-n$, this exhibits the simple poles at $\delta=-n-m-2$ with residues proportional to $\delta^{(n,m)}(z,\zb)$.
The normalized version and its values at the removed poles are

\begin{equation}
    \label{eq: homogeneous distribution - localization 2d}
    \frac{1}{\gm{\frac{\delta+|j|+2}{2}}}
    z^{\lambda}\zb^{\bar\lambda}
    =
    \frac{\pi(-1)^{\max(n,m)}}{\max(n,m)!}
    \delta^{(n,m)}(z,\bar{z})
    \, .
\end{equation}

### Higher dimensions

In higher dimensions, homogeneous distributions are proportional to the spherical harmonics in the representations of the rotation group.
We only consider the spherical-symmetric case for simplicity.
In higher dimensions, the solution of $f(\lambda x)=\lambda^{a} f(x)$ for $x\in\RR^{n}$, $\lambda>0$ is $|x|^{a}$, In the spherical coordinates $x=r\hat{x}$ for $\hat{x}\in\sphere{d-1}$, $r>0$, the action of $|x|^{a}$ on a test function is

\begin{equation}
    (|x|^{a},f(x))
    =
    \inttt{d\hat{x}}{\sphere{d-1}}\intt{dr}{r^{a+d-1}}f(r\hat{x})
    \, ,
\end{equation}

hence the possible poles are at $a=-n-d$, $n\in\NN$. Futhermore, the poles for odd $n$-s are absent, since the scalar differential operators constructed from $\frac{\pp}{\pp x^{\mu}}$ are $\square^{n}$.
This implies $\frac{1}{\gm{\frac{a+d}{2}}}|x|^{a}$ is holomorphic w.r.t. $a\in\CC$, and the values at the removed poles are

\begin{equation}
    \frac{1}{\gm{\frac{a+d}{2}}}|x|^{a}\bigg|_{a=-2n-d}
    =
    \frac{(-1)^{n}\pi^{\frac{d}{2}}}{2^{2n}\gm{\frac{d}{2}+n}}\square^{n}\delta(x)
    \, .
\end{equation}

Especially for $n=0$, we have

\begin{equation}
    \delta^{(d)}(x)
    =
    \lim_{\varepsilon\to 0}
    \frac{\gm{\frac{d}{2}}}{\pi^{\frac{d}{2}} \gm{\frac{\varepsilon}{2}}}r^{-d+2\varepsilon}
    \, .
\end{equation}

### Summary

Table: The regularized homogeneous distributions, where $n\in \NN$.

| Distribution                                                                         | Value                                                                                            | Removed pole |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------- |
| $\displaystyle \frac{1}{\gm{\lambda+1}}x_{\tac{+}}^\lambda$                                        | $\displaystyle \delta^{(n)}(x)$                                                                   | $\lambda = -n-1$    |
| $\displaystyle \frac{1}{\gm{\lambda+1}}x_{\tac{-}}^\lambda$                                        | $\displaystyle (-1)^{n}\delta^{(n)}(x)$                                                           | $\lambda = -n-1$    |
| $\displaystyle \frac{1}{\gm{\frac{\lambda+1}{2}}}x_{\tac{0}}^{\lambda}$                        | $\displaystyle \frac{(-1)^{n} n!}{(2n)!}\delta^{(2n)}(x)$                                         | $\lambda = -2n-1$   |
| $\displaystyle \frac{1}{\gm{\frac{\lambda+2}{2}}}x_{\tac{1}}^{\lambda}$                        | $\displaystyle \frac{(-1)^{n+1} n!}{(2n+1)!}\delta^{(2n+1)}(x)$                                   | $\lambda = -2n-2$   |
| $\displaystyle x_{\tac{i}}^{\lambda}$                                                      | $\displaystyle x^{-n-1}-i\pi \frac{(-1)^{n}}{n!} \delta^{(n)}(x)$                                 | $\lambda = -n-1$    |
| $\displaystyle x_{\tac{-i}}^{\lambda}$                                                      | $\displaystyle x^{-n-1}+i\pi \frac{(-1)^{n}}{n!} \delta^{(n)}(x)$                                 | $\lambda = -n-1$    |
| $\displaystyle \frac{1}{\gm{\frac{\lambda+d}{2}}}\abs{x}^{\lambda} \textInMath{ on } \mathbb{R}^{d}$ | $\displaystyle \frac{(-1)^{n}\pi^{\frac{d}{2}}}{2^{2n}\gm{\frac{d}{2}+n}}\square^{n}\delta(x)$ | $\lambda = -2n-d$   |

## Analytic functionals

The complex delta function $\delta_{\CC}$ is an analytic functional belonging to the Gelfand-Shilov space $Z'$, which is the dual of the space $Z$ of entire functions of at most exponential growth, see [@Gelfand1] [@Gelfand2].
This distribution is employed in the celestial literature to understand the analytic continuation of $\Delta$, see e.g. [@Donnay:2020guq], and it also appears in the method of brackets for evaluating Feynman integrals, see e.g. [@Gonzalez:2008xm; @Gonzalez:2010nm; @Gonzalez:2021vqh; @Ananthanarayan:2021not].
Following [@Donnay:2020guq], we provide a brief and self-contained introduction here.

The complex delta function is defined as the identity of the Mellin transform,

\begin{equation}
    \label{eq: complex delta function and Mellin transform}
    \intrange{\frac{d\Delta}{2\pi i}}{a-i\infty}{a+i\infty}
    \deltaC{\Delta-\Delta_{0}}f(\Delta)
    =
    f(\Delta_{0})
    \, ,
\end{equation}

and formally can be written as

\begin{equation}
    \label{eq: complex delta function}
    \deltaC{\Delta-\Delta_{0}}
    =
    \intrange{d\omega}{0}{\oo}\omega^{\Delta_{0}-\Delta-1}
    \, .
\end{equation}

As a generalization of the conventional Dirac delta function, when $\Delta_{0}$ locates on the integration contour $\Delta\in a + i\RR$ in \eqref{eq: complex delta function and Mellin transform}, $\delta_{\CC}$ reduces to

\begin{equation}
    \deltaC{\Delta-\Delta_{0}}
    =
    2\pi \delta\left(\Im(\Delta-\Delta_{0})\right)
    \, ,
    \textInMath{for} \Re\Delta_{0}=a
    \, .
\end{equation}

When $\Delta_{0}$ leaves off the integration contour, $\delta_{\CC}$ admits the following approximations:

\begin{equation}
    \label{eq: complex Delta function approximation}
    \deltaC{\Delta-\Delta_{0}}
    =
    \begin{dcases}
        \lim_{\varepsilon\to0}
        \gm{\Delta_{0}-\Delta}\varepsilon^{\Delta-\Delta_{0}}
        =
        \lim_{\varepsilon\to0}
        \intrange{d\omega}{0}{\oo}\omega^{\Delta_{0}-\Delta-1}e^{-\varepsilon \omega}
        \, ,
        &
        \textInMath{for} \Re\Delta_{0}>a
        \, ,
        \\
        \lim_{\varepsilon\to0}
        \gm{\Delta-\Delta_{0}}\varepsilon^{\Delta_{0}-\Delta}
        =
        \lim_{\varepsilon\to0}
        \intrange{d\omega}{0}{\oo}\omega^{\Delta_{0}-\Delta-1}e^{-\varepsilon/\omega}
        \, ,
        &
        \textInMath{for} \Re\Delta_{0}<a
        \, .
    \end{dcases}
\end{equation}

??? proof "Equation \eqref{eq: complex Delta function approximation}"

    This can be shown by a contour deformation argument.
    For $\Re\Delta_{0}>a$, we consider a test function $f(\Delta)$ that is analytic in the region $a<\Re \Delta$ and decays sufficiently fast as $\Delta\to +\oo$.
    As $\varepsilon^{\Delta-\Delta_{0}}\to 0$, we can enclose the contour to the right and pick up the poles at $\Delta=\Delta_{0}+n$, $n\in\NN$, leading to

    \begin{equation}
        \lim_{\varepsilon\to 0}
        \intrange{\frac{d\Delta}{2\pi i}}{a-i\oo}{a+i\oo}
        \gm{\Delta_{0}-\Delta}\varepsilon^{\Delta-\Delta_{0}}
        f(\Delta)
        =
        \lim_{\varepsilon\to 0}\sum_{n=0}^{+\oo}\frac{(-1)^{n}}{n!}\varepsilon^{n}f(\Delta_{0}+n)
        =
        f(\Delta_{0})
        \, ,
    \end{equation}

    which justifies the defining property \eqref{eq: complex delta function and Mellin transform}.

    From the analysis above, we observe that only the term $n = 0$ needs to be dominant. Consequently, the requirement on test functions can be relaxed: it suffices for $f(\Delta)$ to be holomorphic in the strip $a < \Re \Delta < \Re \Delta_{0}$, to be meromorphic or contain branch cuts in the region $\Re \Delta_{0} < \Re \Delta$, and to decay sufficiently fast as $\Delta \to +\infty$.

??? remark "Principal value at $\Re\Delta_{0}=a$"

    Notice that if naively applying the approximation \eqref{eq: complex Delta function approximation} to the case $\Re\Delta_{0}=a$, there would appear an extra factor $\half$.

    The reason is as follows: in this case the leading pole $\Delta=\Delta_{0}$ lies on the contour, hence the integral is divergent and should be understood as the principal value. When deforming the contour to the right, it is necessary to consider the contribution of a small semicircle $C_{\Delta_{0},\delta} = \set{\Delta \given \Delta=\Delta_{0}+\delta e^{i\theta}, \frac{\pi}{2}<\theta<\frac{3\pi}{2}}$ surrounding the leading pole:

    \begin{equation}
        \lim_{\delta\to 0}
        \inttt{\frac{d\Delta}{2\pi i}}{C_{\Delta_{0},\delta}}
        \gm{\Delta_{0}-\Delta}\varepsilon^{\Delta-\Delta_{0}}
        f(\Delta)
        =
        \lim_{\delta\to 0}
        f(\Delta_{0})
        \inttt{\frac{d\Delta}{2\pi i}}{C_{\Delta_{0},\delta}}
        \frac{\varepsilon^{\Delta-\Delta_{0}}}{\Delta_{0}-\Delta}
        \\
        =
        \lim_{\delta\to 0}
        -f(\Delta_{0})
        \intrange{\frac{d\theta}{2\pi}}{\frac{\pi}{2}}{\frac{3\pi}{2}}
        \varepsilon^{\delta e^{i\theta}}
        \\
        =
        -\half f(\Delta_{0})
        \, .
    \end{equation}

## Hyperfunctions

Hyperfunctions are another type of distributions related to analyticity, and share similar properties with other types of distributions: linearity, existence of derivatives, e.t.c.

Given a pair $(f,g)$ such that $f$ and $g$ are holomorphic on the upper and lower half planes respectively, the formal difference $f-g$ specifies a hyperfunction on $\RR$.
This specification admits redundancy: for any holomorphic function $h$ on the whole complex plane the two pairs $(f,g)\sim (f+h,g+h)$ are equivalent.

## Formal distributions

As a formal distribution, the $\delta$-function is

\begin{equation}
    \delta(z-w)
    =
    \sum_{n\in\ZZ}\frac{w^{n}}{z^{n+1}}
    =
    \frac{1}{z-w}\bigg|_{|z|>|w|}-\frac{1}{z-w}\bigg|_{|z|<|w|}
    \, ,
\end{equation}

which simply restates the contour deformation

\begin{equation}
    \inttt{\frac{dz}{z-w}}{C_{w}}
    =
    \inttt{dz}{|z|=|w|+r}\frac{1}{z-w}
    -
    \inttt{dz}{|z|=|w|-r}\frac{1}{z-w}
    \, .
\end{equation}