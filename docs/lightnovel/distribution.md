# Distributions

<span hidden> $
\newcommand{\psign}[1]{{\color{orange}#1}}
\newcommand{\deltaMC}{\delta^{(4)}}
\newcommand{\deltaK}{\delta_{\mathrm{K}}}
\newcommand{\deltaComplex}[1]{\delta_{\CC}(#1)}
$ </span>

**Under construction.**

## Tempered distributions

In this section we introduce by examples the regularization and normalization of distributions. For simplicity, we focus on tempered distributions on $\RR$.

A tempered distribution $\phi\in \cS'(\RR)$ acting on the rapidly decreasing test function $f\in \cS(\RR)$ can be formally written as an integral

\begin{equation}
    \label{eq: functional}
    \phi(f)=\intt{d x}\phi(x) f(x)
    \, ,
\end{equation}

with the kernel $\phi(x)$.
It is useful to conceptualize $f$ as a Gaussian wave-packet and $\phi$ as a possibly sharp observable.

### Regularization

When the kernel $\phi(x)$ contains singularities, the integral \eqref{eq: functional} is convergent only for a subspace $V_{\phi}\subset \cS(\RR)$ of test functions.
To extend the domain of $\phi$ from $V_{\phi}$ to $\cS(\RR)$, we need to subtract off the divergences in \eqref{eq: functional} in a systematic way, and this procedure is called regularization of distributions.

The extension is highly nonunique. We are interested in the case where a family of distributions $\phi_{a}(x)$ depends on the parameter $a$ analytically. Then the analyticity of $a$ can help choose a unique regularization of $\phi_{a}(x)$.

### Normalization

If $\phi_{a}(x)$ is meromorphic w.r.t. $a\in U\subset\CC$, we can cancel the poles of $\phi_{a}(x)$ by another meromorphic function $N(a)$ such that the normalized distribution $N(a)\phi_{a}(x)$ is holomorphic in $U$, called normalization of distributions.

### Example: power-type distribution

The power-type distribution in $\cS'(\RRg)$

\begin{equation}
    (x_{\psign{+}}^a,f(x))=\intrange{dx}{0}{\oo}x^a f(x)
    \, ,
\end{equation}

is convergent if $\Re a> -1$ and hence is holomorphic in this region. If $\Re a\leq -1$ the integral is divergent and acquires regularization at $x=0$. Inserting a real-analytic test function $f(x)=\sum_{n=0}^{\oo} \frac{f^{(n)}(0)}{n!} x^n$ and changing the order of integration and summation, we have

\begin{align}
    (x_{\psign{+}}^a,f(x))
    & =\intrange{dx}{1}{\oo}x^a f(x) + \sum_{n=0}^{\oo} \frac{f^{(n)}(0)}{n!}\intrange{dx}{0}{1}x^{a+n}\nn\\
    & =\intrange{dx}{1}{\oo}x^a f(x) + \sum_{n=0}^{\oo} \frac{f^{(n)}(0)}{n!}\frac{1}{a+n+1}
    \, .
\end{align}

The first term is convergent due to the rapid decay of $f(x)$ and is irrelevant to our discussion. The second term implies that $(x_{\psign{+}}^a,f(x))$ as a function of $a$ is meromorphic in $\CC$, with simple poles at $a=-1,-2,\dots$ and residues being

\begin{equation}
    \Res_{a=-n-1} (x_{\psign{+}}^a,f(x)) = \frac{f^{(n)}(0)}{(n)!}
    \, .
\end{equation}

Then using $(\delta^{(n)}(x),f(x))= (-1)^{n} f^{(n)}(0)$ to strip off the test function we find $x_{\psign{+}}^a$ is meromorphic w.r.t. $a\in \CC$, with simple poles at $a=-1,-2,\dots$ and residues being

\begin{equation}
    \Res_{a=-n-1} x_{\psign{+}}^a = \frac{(-1)^{n}}{n!}\delta^{(n)}(x)
    \, .
\end{equation}

The distribution $x_{\psign{+}}^a$ can be normalized as $\frac{1}{\Gamma[a+1]}x_{\psign{+}}^a$, then the values at the removed poles are

\begin{equation}
    \frac{1}{\Gamma[a+1]}x_{\psign{+}}^a\bigg|_{a=-n-1}=\delta^{(n)}(x)
    \, .
\end{equation}

??? remark "Singularity near infinity"

    Concretely, we choose the test function as $f(x)=e^{-x}$, then

    \begin{equation}
        (x_{\psign{+}}^a,e^{-x})=\gm{a+1}
    \end{equation}

    manifests the meromorphicity of $x_{\psign{+}}^a$ and provides the normalization above.

    If choosing the test function as $f(x)=(1+x)^{-1}$ however, there are additional poles appeared:

    \begin{equation}
        (x_{\psign{+}}^a,(1+x)^{-1})=\gm{-a}\,  \gm{a+1}
        \, .
    \end{equation}

    The reason is that this test function is not in $\cS(\RRg)$ and should be divided into two parts:

    * one is in $\cS(\RRg)$ and detects the singularity of $x_{\psign{+}}^a$ at $x=0$, providing the factor $\gm{a+1}$;

    * another is well-behaved as $x\to \oo$ and decays sufficiently fast as $x\to 0$, then detects the singularity of $x_{\psign{+}}^a$ near infinity, providing the factor $\gm{-a}$.

    To see this, we have for example

    \begin{equation}
        (x_{\psign{+}}^a,e^{-1/x})=-\gm{-a-1}
        \, .
    \end{equation}

    Interpreting $x$ as energy,
    in practice the test functions $f(x)$ are not in $\cS'(\RRg)$, and the singularities of $x_{\psign{+}}^a$ at $0$ and $\oo$ convert the IR and UV information of $f(x)$ into analytic behaviors of $a$.
    This is one of the reasons why the Mellin transform is commonly used in physics.

## Homogeneous tempered distributions

In this section we consider distributional solutions to the functional equation

\begin{equation}
    f(\lambda x)=\lambda^{a}f(x)
    \, ,
\end{equation}

for $x\in\RR$, $\lambda>0$. The solutions are called homogeneous tempered distributions.

### Three bases

The $\pm$ basis of solutions is

\begin{align}
    &x_{\psign{+}}^a \eqqq |x|^a \theta(x)
    \, ,
    \\
    &x_{\psign{-}}^a \eqqq |x|^a \theta(-x)
    \, ,
\end{align}

and we can recombine them into the even/odd basis

\begin{align}
    &x_{\psign{0}}^a\eqqq|x|^a= x_{\psign{+}}^a+ x_{\psign{-}}^a
    \, ,
    \\
    &x_{\psign{1}}^a\eqqq|x|^a \sign{x}=x_{\psign{+}}^a- x_{\psign{-}}^a
    \, .
\end{align}

These distributions are meromorphic functions of $a\in\CC$, and the normalized versions are

\begin{equation}
    \frac{1}{\Gamma[a+1]}x_{\psign{+}}^a
    \, , \quad
    \frac{1}{\Gamma[a+1]}x_{\psign{-}}^a
    \, ,  \quad
    \frac{1}{\Gamma[\frac{a+1}{2}]}x_{\psign{0}}^a
    \, ,\quad
    \frac{1}{\Gamma[\frac{a+2}{2}]}x_{\psign{1}}^a
    \, .
\end{equation}

The $i \varepsilon$ basis is

\begin{align}
    &x_{\psign{i}}^a\eqqq \lim_{\varepsilon\to 0}(x+i\varepsilon )^a=x_{\psign{+}}^a+e^{i\pi a}x_{\psign{-}}^a
    \, ,
    \\
    &x_{\psign{-i}}^a\eqqq \lim_{\varepsilon\to 0}(x-i\varepsilon )^a=x_{\psign{+}}^a+e^{-i\pi a}x_{\psign{-}}^a
    \, .
\end{align}

The poles at $a=-1,-2,\dots$ get canceled due to the phase factor, hence $x_{\psign{\pm i}}^a$ is holomorphic w.r.t. $a\in\CC$.

In practice, the $i\varepsilon$ basis is convenient for computation since we can use analytic continuation. The $\pm$ basis is suitable for handling problems over $\RR$.

??? remark "Parity"

    Notice that from the parity property

    \begin{equation}
        (-x)_{\psign{\pm}}^{\lambda}=x_{\psign{\mp}}^{\lambda}
        \, ,
    \end{equation}

    we have

    \begin{equation}
        (-x)_{\psign{\pm i}}^{\lambda}=e^{\pm i\pi \lambda} x_{\psign{\mp i}}^{\lambda}
        \, .
    \end{equation}

    This is consistent with the choice of branch cut for $x^{\lambda}$ at $x\in (-\infty,0)$.

### Fourier transform

The Riemann-Lebesgue lemma asserts that if $f(x)\in L^{1}(\RR^d)$ then the Fourier transform $f(p)$ vanishes at infinity,

\begin{equation}
    f(p)=\int_{\RR^d}d^d x\, f(x) e^{-ip\cdot x}\to 0  \TextInMath{as} |p|\to \oo
    \, .
\end{equation}

The intuition here is that decay properties of distributions are Fourier-transformed into regularity properties.

Under the Fourier transform, the basis $x_{\psign{0,1}}^{a}$ remains invariant due to parity. In particular, the Dirac $\delta$-functions are Fourier transformed into monomials:

\begin{equation}
    \delta^{(n)}(x) =\inttt{\frac{dp}{2\pi}}{\RR}e^{ipx} (ip)^{n}
    \, .
\end{equation}

The bases $x_{\psign{\pm}}^{a}$ and $x_{\psign{\pm i}}^{a}$ are Fourier transform pairs, revealing the Paley-Wiener theorems, which state that support properties of distributions are Fourier-transformed into analytic properties.

### Higher dimensions

We only consider the spherical-symmetric case for simplicity.
In higher dimensions, the solution of $f(\lambda x)=\lambda^{a} f(x)$ for $x\in\RR^{n}$, $\lambda>0$ is $|x|^{a}$, In the spherical coordinates $x=r\hat{x}$ for $\hat{x}\in\sphere{d-1}$, $r>0$, the action of $|x|^{a}$ on a test function is

\begin{equation}
    (|x|^{a},f(x))
    =
    \inttt{d\hat{x}}{\sphere{d-1}}\intt{dr}{r^{a+d-1}}f(r\hat{x})
    \, ,
\end{equation}

hence the possible poles are at $a=-n-d$, $n\in\NN$. Futhermore, the poles for odd $n$-s are absent, since the scalar differential operators constructed from $\frac{\pp}{\pp x^{\mu}}$ are $\square^{n}$.
This implies $\frac{1}{\Gamma[\frac{a+d}{2}]}|x|^{a}$ is holomorphic w.r.t. $a\in\CC$, and the values at the removed poles are

\begin{equation}
    \frac{1}{\Gamma[\frac{a+d}{2}]}|x|^{a}\bigg|_{a=-2n-d}
    =
    \frac{(-1)^{n}\pi^{\halfdim}}{2^{2n}\Gamma[\halfdim+n]}\square^{n}\delta(x)
    \, .
\end{equation}

Especially for $n=0$, we have

\begin{equation}
    \delta^{(d)}(x)
    =
    \lim_{\varepsilon\to 0}
    \frac{\gm{\halfdim}}{\pi^{\halfdim} \gm{\frac{\varepsilon}{2}}}r^{-d+2\varepsilon}
    \, .
\end{equation}

### Two dimension with spin

Lacia-TimeStamp-2025-02-14-18:24:40

### Summary

Table: The three bases of homogeneous distributions on $\RR$.

| $a$                      | $-2$                                                | $(-2,-1)$               | $-1$                                          | $\cdots$ |
| ------------------------ | --------------------------------------------------- | ----------------------- | --------------------------------------------- | -------- |
| parity-even              | $x^{-2}$                                     | $\abs{x}^{a}$           | $\delta(x) = \varepsilon \abs{x}^{-1+2\varepsilon}$ | $\cdots$ |
| parity-odd               | $\delta'(x) = -\varepsilon \abs{x}^{-2+2\varepsilon}_{1}$ | $\abs{x}^{a}\sign x$       | $x^{-1}$                                 | $\cdots$ |
| half-line                | $-$                                                 | $\abs{x}^{a}\theta(x)$, $\abs{x}^{a}\theta(-x)$           | $-$                                           | $\cdots$ |
| $i\varepsilon$-prescription | $(x \pm i\varepsilon)^{-2}$                            | $(x \pm i\varepsilon)^{a}$ | $(x \pm i\varepsilon)^{-1}$                      | $\cdots$ |

Table: The regularized homogeneous distributions, where $n\in \NN$.

| Distributions                                                                         | Values                                                                                            | Removed poles |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------- |
| $\displaystyle \frac{1}{\Gamma[a+1]}x_{\psign{+}}^a$                                        | $\displaystyle \delta^{(n)}(x)$                                                                   | $a = -n-1$    |
| $\displaystyle \frac{1}{\Gamma[a+1]}x_{\psign{-}}^a$                                        | $\displaystyle (-1)^{n}\delta^{(n)}(x)$                                                           | $a = -n-1$    |
| $\displaystyle \frac{1}{\Gamma[\frac{a+1}{2}]}x_{\psign{0}}^{a}$                        | $\displaystyle \frac{(-1)^{n} n!}{(2n)!}\delta^{(2n)}(x)$                                         | $a = -2n-1$   |
| $\displaystyle \frac{1}{\Gamma[\frac{a+2}{2}]}x_{\psign{1}}^{a}$                        | $\displaystyle \frac{(-1)^{n+1} n!}{(2n+1)!}\delta^{(2n+1)}(x)$                                   | $a = -2n-2$   |
| $\displaystyle x_{\psign{i}}^{a}$                                                      | $\displaystyle x^{-n-1}-i\pi \frac{(-1)^{n}}{n!} \delta^{(n)}(x)$                                 | $a = -n-1$    |
| $\displaystyle x_{\psign{-i}}^{a}$                                                      | $\displaystyle x^{-n-1}+i\pi \frac{(-1)^{n}}{n!} \delta^{(n)}(x)$                                 | $a = -n-1$    |
| $\displaystyle \frac{1}{\Gamma[\frac{a+d}{2}]}\abs{x}^{a} \TextInMath{ on } \mathbb{R}^{d}$ | $\displaystyle \frac{(-1)^{n}\pi^{\frac{d}{2}}}{2^{2n}\Gamma[\frac{d}{2}+n]}\square^{n}\delta(x)$ | $a = -2n-d$   |

## Analytic functionals

### Analytic test functions


### Complex $\delta$-function

The $\delta$-function with complex argument $\delta_{\CC}$ is an analytic functional belonging to the Gelfand–Shilov space $Z'$, which is the dual space of analytic test functions.

It is defined as the identity of the Mellin transform

\begin{align}
    \label{eq: complex Delta function and Mellin transform}
    &\intrange{\frac{d\Delta}{2\pi i}}{a-i\infty}{a+i\infty}\deltaComplex{\Delta-\Delta_{0}}f(\Delta)=f(\Delta_{0})
    \, ,
\end{align}

and formally can be written as

\begin{equation}
    \deltaComplex{\Delta-\Delta_{0}}
    =
    \intrange{d\omega}{0}{\oo}\omega^{\Delta_{0}-\Delta-1}
    \, .
\end{equation}

As a generalization of the usual Dirac $\delta$-function, when $\Delta_{0}$ locates on the integration contour $\Delta\in a + i\RR$ in \eqref{eq: complex Delta function and Mellin transform}, $\delta_{\CC}$ reduces to

\begin{equation}
    \deltaComplex{\Delta-\Delta_{0}}
    =
    2\pi \delta\left(\Im(\Delta-\Delta_{0})\right)
    \, ,
    \TextInMath{for} \Re\Delta_{0}=a
    \, .
\end{equation}

When $\Delta_{0}$ leaves off the integration contour, $\delta_{\CC}$ admits the following approximations:

\begin{numcases}{\deltaComplex{\Delta-\Delta_{0}}=}
    \label{eq: complex Delta function approximation a}
    \displaystyle
    \lim_{\varepsilon\to0}
    \gm{\Delta_{0}-\Delta}\varepsilon^{\Delta-\Delta_{0}}
    =
    \lim_{\varepsilon\to0}
    \intrange{d\omega}{0}{\oo}\omega^{\Delta_{0}-\Delta-1}e^{-\varepsilon \omega}
    \, ,
    &
    \TextInMath{for} \Re\Delta_{0}>a
    \, ,
    \\
    \label{eq: complex Delta function approximation b}
    \displaystyle
    \lim_{\varepsilon\to0}
    \gm{\Delta-\Delta_{0}}\varepsilon^{\Delta_{0}-\Delta}
    =
    \lim_{\varepsilon\to0}
    \intrange{d\omega}{0}{\oo}\omega^{\Delta_{0}-\Delta-1}e^{-\varepsilon/\omega}
    \, ,
    &
    \TextInMath{for} \Re\Delta_{0}<a
    \, .
\end{numcases}

??? proof "Equation \eqref{eq: complex Delta function approximation a}"

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

    which justifies the defining property \eqref{eq: complex Delta function and Mellin transform}.

    From the analysis above, we observe that only the term $n = 0$ needs to be dominant. Consequently, the requirement on test functions can be relaxed: it suffices for $f(\Delta)$ to be holomorphic in the strip $a < \Re \Delta < \Re \Delta_{0}$, to be meromorphic or contain branch cuts in the region $\Re \Delta_{0} < \Re \Delta$, and to decay sufficiently fast as $\Delta \to +\infty$.

??? remark "Principal value at $\Re\Delta_{0}=a$"

    Notice that if naively applying the approximation \eqref{eq: complex Delta function approximation a} to the case $\Re\Delta_{0}=a$, there would appear an extra factor $\half$.

    The reason is as follows: in this case the leading pole $\Delta=\Delta_{0}$ lies on the contour, hence the integral is divergent and should be understood as the principal value. When deforming the contour to the right, it is necessary to consider the contribution of a small semicircle $C_{\Delta_{0},\delta}\eqqq\set{\Delta:\Delta=\Delta_{0}+\delta e^{i\theta}, \frac{\pi}{2}<\theta<\frac{3\pi}{2}}$ surrounding the leading pole:

    \begin{align*}
        &\peq
        \lim_{\delta\to 0}
        \inttt{\frac{d\Delta}{2\pi i}}{C_{\Delta_{0},\delta}}
        \gm{\Delta_{0}-\Delta}\varepsilon^{\Delta-\Delta_{0}}
        f(\Delta)
        \\
        &=
        \lim_{\delta\to 0}
        f(\Delta_{0})
        \inttt{\frac{d\Delta}{2\pi i}}{C_{\Delta_{0},\delta}}
        \frac{\varepsilon^{\Delta-\Delta_{0}}}{\Delta_{0}-\Delta}
        \\
        &=
        \lim_{\delta\to 0}
        -f(\Delta_{0})
        \intrange{\frac{d\theta}{2\pi}}{\frac{\pi}{2}}{\frac{3\pi}{2}}
        \varepsilon^{\delta e^{i\theta}}
        \\
        &=
        -\half f(\Delta_{0})
        \, .
    \end{align*}

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

## Hyperfunctions

Hyperfunctions are another type of distributions related to analyticity, and share similar properties with other types of distributions: linearity, existence of derivatives, e.t.c.

Given a pair $(f,g)$ such that $f$ and $g$ are holomorphic on the upper and lower half planes respectively, the formal difference $f-g$ specifies a hyperfunction on $\RR$.
This specification admits redundancy: for any holomorphic function $h$ on the whole complex plane the two pairs $(f,g)\sim (f+h,g+h)$ are equivalent.
