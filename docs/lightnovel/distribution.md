# Distributions

<span hidden> $
\newcommand{\deltaComplex}[1]{\delta_{c}(#1)}
\newcommand{\deltaComplexWithPi}[1]{2\pi\delta\left(i(#1)\right)}
$ </span>

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

If $\phi_{a}(x)$ is meromorphic w.r.t. $a\in\CC$, we can cancel the poles of $\phi_{a}(x)$ by another meromorphic function $N(a)$ such that the normalized distribution $N(a)\phi_{a}(x)$ is holomorphic, called normalization of distributions.

### Example 1: principal value

The principal values of $x^{-1}$ and $x^{-2}$ are

\begin{align}
    &
    (x^{-1},f(x)) \eqqq(|x|^{-1}\sign(x),f(x))=\intrange{dx}{0}{\oo}\frac{f(x)-f(-x)}{x}
    \, ,
    \\
    &
    (x^{-2},f(x)) \eqqq(|x|^{-2},f(x))=\intrange{dx}{0}{\oo}\frac{f(x)+f(-x)-2f(0)}{x^2}
    \, .
\end{align}

Notice that although $x^{-2}$ as a function is positive-definite, as a distribution it is not.

??? wl "Example"

    \begin{equation}
        (x^{-2},\frac{1}{1+x^2})=-\pi<0
        \, .
    \end{equation}

    ``` wl
    f[x_]:=1/(1+x^2);

    Integrate[f[x],{x,-∞,∞}]
    
    Integrate[(f[x]+f[-x]-2f[0])/x^2,{x,0,∞}]
    ```

    ``` wl
    Out[] = π

    Out[] = -π
    ```

### Example 2: Hilbert transform

The regularization of $\phi(x)=\frac{1}{x-y}$ can be chosen as

\begin{equation}
    \label{eq: Hilbert transform}
    \intt{dx}\frac{f(x)}{x-y}\eqqq\lim_{\epsilon\to 0}\inttt{dx}{|x-y|>\epsilon}\frac{f(x)}{x-y}
    \, .
\end{equation}

This regularized distribution defines the Hilbert transform - a unitary operator on $L^2(\RR)$ [^rigged] with two eigenspaces

\begin{equation}
    \label{eq: Hardy spaces}
    L^2(\RR)=H^{2}_{+}(\RR)\oplus H^{2}_{-}(\RR)
    \, ,
\end{equation}

called the Hardy spaces. It is also identified as a specific Knapp-Stein intertwining operator of $\slgroup(2,\RR)$. Consequently the ramified principal series representation at the end-point is reducible, with the decomposition \eqref{eq: Hardy spaces}.

[^rigged]: Recall that $L^2(\RR)$ is canonically embedded into $\cS'(\RR)$, as an example of rigged Hilbert space $\cS(\RR)\subset L^2(\RR)\subset \cS'(\RR)$.

### Example 3: power-type distribution

The power-type distribution

\begin{equation}
    (x_{+}^{a},f(x))=\intrange{dx}{0}{\oo}x^a f(x)
    \, ,
\end{equation}

is convergent if $\Re a> -1$ and hence is holomorphic in this region. If $\Re a\leq -1$ the integral is divergent and acquires regularization at $x=0$. Inserting a real-analytic test function $f(x)=\sum_{n=0}^{\oo} \frac{f^{(n)}(0)}{n!} x^n$ and interchanging the order of integration and summation, we have

\begin{align}
    (x_{+}^{a},f(x))
    & =\intrange{dx}{1}{\oo}x^a f(x) + \sum_{n=0}^{\oo} \frac{f^{(n)}(0)}{n!}\intrange{dx}{0}{1}x^{a+n}\nn\\
    & =\intrange{dx}{1}{\oo}x^a f(x) + \sum_{n=0}^{\oo} \frac{f^{(n)}(0)}{n!}\frac{1}{a+n+1}
    \, .
\end{align}

The first term is well-controlled due to the rapid decay of $f(x)$ and is irrelevant to our discussion. The second term implies that $(x_{+}^{a},f(x))$ as a function of $a$ is meromorphic in $\CC$, with simple poles at $a=-1,-2,\dots$ and residues being

\begin{equation}
    \Res_{a=-n-1} (x_{+}^{a},f(x)) = \frac{f^{(n)}(0)}{(n)!}
    \, .
\end{equation}

Then using $(\delta^{(n)}(x),f(x))= (-1)^{n} f^{(n)}(0)$ to strip off the test function we find $x_{+}^{a}$ is meromorphic w.r.t. $a\in \CC$, with simple poles at $a=-1,-2,\dots$ and residues being

\begin{equation}
    \Res_{a=-n-1} x_{+}^{a} = \frac{(-1)^{n}}{n!}\delta^{(n)}(x)
    \, .
\end{equation}

The distribution $x_{+}^{a}$ can be normalized as $\frac{1}{\Gamma[a+1]}x_{+}^{a}$, then the values at the removed poles are

\begin{equation}
    \frac{1}{\Gamma[a+1]}x_{+}^{a}\bigg|_{a=-n-1}=\delta^{(n)}(x)
    \, .
\end{equation}

## Homogeneous tempered distributions

In this section we consider distributional solutions to the functional equation

\begin{equation}
    f(\lambda x)=\lambda^{a}f(x)
    \, ,
\end{equation}

for $x\in\RR,\, \lambda>0$. These solutions are called homogeneous tempered distributions.

### Different bases

The first basis of solutions is

\begin{align}
    &x_{+}^{a} \eqqq\theta(x) |x|^a
    \, ,
    \\
    &x_{-}^{a} \eqqq\theta(-x) |x|^a
    \, ,
\end{align}

and we can recombine them according to parity as [^signnotation]

\begin{align}
    &|x|^{a}_{0}\eqqq|x|^a= x_{+}^{a}+ x_{-}^{a}
    \, ,
    \\
    &|x|^{a}_{1}\eqqq|x|^a \sign{x}=x_{+}^{a}- x_{-}^{a}
    \, .
\end{align}

These distributions are meromorphic functions of $a\in\CC$, and the normalized versions are

\begin{equation}
    \frac{1}{\Gamma[a+1]}x_{+}^{a}
    \, , \quad
    \frac{1}{\Gamma[a+1]}x_{-}^{a}
    \, ,  \quad
    \frac{1}{\Gamma[\frac{a+1}{2}]}|x|^{a}_{0}
    \, ,\quad
    \frac{1}{\Gamma[\frac{a+2}{2}]}|x|^{a}_{1}
    \, .
\end{equation}

[^signnotation]: The redundant superscript $0$ is to stress the companion of $|x|^{a}_{0}$ to $|x|^{a}_{1}$.

Another basis is $(x \pm i\epsilon )^{a}$, which are boundary values of meromorphic functions. The relations to the previous one are

\begin{align}
    &(x+i\epsilon )^a=x_{+}^{a}+e^{ia\pi}x_{-}^{a}=\frac{1}{2}(1+e^{ia\pi})|x|^{a}_{0}+\frac{1}{2}(1-e^{ia\pi})|x|^{a}_{1}
    \, ,
    \\
    &(x-i\epsilon )^a=x_{+}^{a}+e^{-ia\pi}x_{-}^{a}=\frac{1}{2}(1+e^{-ia\pi})|x|^{a}_{0}+\frac{1}{2}(1-e^{-ia\pi})|x|^{a}_{1}
    \, ,
\end{align}

and the inverse relations are

\begin{align}
    &|x|^{a}_{0}=\frac{(x+i \epsilon )^{a}+e^{i \pi  a} (x-i \epsilon )^{a}}{1+e^{i \pi  a}}
    \, ,
    \\
    &|x|^{a}_{1}=\frac{(x+i \epsilon )^{a}-e^{i \pi  a} (x-i \epsilon )^{a}}{1-e^{i \pi  a}}
    \, .
\end{align}

The poles of $x_{\pm}^{a}$ at $a=-1,-2,\dots$ get canceled due to the phase factor $e^{ia\pi}$, hence $(x \pm i\epsilon)^{a}$ is holomorphic w.r.t. $a\in\CC$.

### Fourier transform

The Riemann-Lebesgue lemma asserts that if $f(x)\in L^{1}(\RR^d)$ then the Fourier transform $f(p)$ vanishes at infinity,

\begin{equation}
    f(p)=\int_{\RR^d}d^d x\, f(x) e^{-ip\cdot x}\to 0  \textInMath{as} |p|\to \oo
    \, .
\end{equation}

The intuition here is that decay properties of distributions are Fourier-transformed into regularity properties.

Under the Fourier transform, the basis $|x|_{\epsilon}^{a}$ remains invariant due to parity. In particular, the Dirac $\delta$-functions are the Fourier transforms of powers

\begin{equation}
    \delta^{(n)}(x) =\inttt{\frac{dp}{2\pi}}{\RR}e^{ipx} (ip)^{n}
    \, .
\end{equation}

The bases $x_{\pm}^{a}$ and $(x\pm i \epsilon)^{a}$ are Fourier transform pairs, revealing the Paley-Wiener type theorems, which state that support properties of distributions are Fourier-transformed into analytic properties.

### Higher dimensions

For higher dimensions, the spherical-symmetric solution of $f(\lambda x)=\lambda^{a} f(x)$ for $x\in\RR^{n},\, \lambda>0$ is $|x|^{a}$. In the spherical coordinates $x=r\hat{x},\, \hat{x}\in\sphere{d-1}$, the action of $|x|^{a}$ on a test function is

\begin{equation}
    (|x|^{a},f(x))
    =
    \inttt{d\hat{x}}{\sphere{d-1}}\intt{dr}{r^{a+d-1}}f(r\hat{x})
    \, ,
\end{equation}

hence the possible poles are at $a=-n-d,\, n\in\NN$. Futhermore, the poles for odd $n$-s are absent, since the scalar differential operators constructed from $\partial_x$ are $\square^{n}$.
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
    \lim_{\epsilon\to 0}
    \frac{\gm{\halfdim}}{\pi^{\halfdim} \gm{\frac{\epsilon}{2}}}|x|^{-d+2\epsilon}
    \, .
\end{equation}

### Summary

The three bases are summarized into the following table.

| $a$                      | $-2$                                                | $(-2,-1)$               | $-1$                                          | $\cdots$ |
| ------------------------ | --------------------------------------------------- | ----------------------- | --------------------------------------------- | -------- |
| parity-even              | $\frac{1}{x^2}$                                     | $\abs{x}^{a}$           | $\delta(x) = \epsilon \abs{x}^{-1+2\epsilon}$ | $\cdots$ |
| parity-odd               | $\delta'(x) = -\epsilon \abs{x}^{-2+2\epsilon}_{1}$ | $\abs{x}^{a}_{1}$       | $\frac{1}{x}$                                 | $\cdots$ |
| half-line                | $-$                                                 | $x_{\pm}^{a}$           | $-$                                           | $\cdots$ |
| $i\epsilon$-prescription | $(x \pm i\epsilon)^{-2}$                            | $(x \pm i\epsilon)^{a}$ | $(x \pm i\epsilon)^{-1}$                      | $\cdots$ |

The regularized homogeneous distributions are summarized into the following table, where $n\in \NN$.

| Distributions                                                                         | Values                                                                                            | Removed poles |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------- |
| $\displaystyle \frac{1}{\Gamma[a+1]}x_{+}^{a}$                                        | $\displaystyle \delta^{(n)}(x)$                                                                   | $a = -n-1$    |
| $\displaystyle \frac{1}{\Gamma[a+1]}x_{-}^{a}$                                        | $\displaystyle (-1)^{n}\delta^{(n)}(x)$                                                           | $a = -n-1$    |
| $\displaystyle \frac{1}{\Gamma[\frac{a+1}{2}]}\abs{x}^{a}_{0}$                        | $\displaystyle \frac{(-1)^{n} n!}{(2n)!}\delta^{(2n)}(x)$                                         | $a = -2n-1$   |
| $\displaystyle \frac{1}{\Gamma[\frac{a+2}{2}]}\abs{x}^{a}_{1}$                        | $\displaystyle \frac{(-1)^{n+1} n!}{(2n+1)!}\delta^{(2n+1)}(x)$                                   | $a = -2n-2$   |
| $\displaystyle (x+i\epsilon )^a$                                                      | $\displaystyle x^{-n-1}-i\pi \frac{(-1)^{n}}{n!} \delta^{(n)}(x)$                                 | $a = -n-1$    |
| $\displaystyle (x-i\epsilon )^a$                                                      | $\displaystyle x^{-n-1}+i\pi \frac{(-1)^{n}}{n!} \delta^{(n)}(x)$                                 | $a = -n-1$    |
| $\displaystyle \frac{1}{\Gamma[\frac{a+d}{2}]}\abs{x}^{a} \textInMath{ on } \mathbb{R}^{d}$ | $\displaystyle \frac{(-1)^{n}\pi^{\frac{d}{2}}}{2^{2n}\Gamma[\frac{d}{2}+n]}\square^{n}\delta(x)$ | $a = -2n-d$   |

## Hyperfunctions

Hyperfunctions are another type of distributions related to analyticity, and share similar properties with other types of distributions: linearity, existence of derivatives, \etc.

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

## Analytic functionals

The $\delta$-function with complex argument $\delta_{c}$ is an analytic functional belonging to the Gelfand–Shilov space $Z'$, which is the dual space of analytic test functions.

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

As a generalization of the usual Dirac $\delta$-function, when $\Delta_{0}$ locates on the integration contour $\Delta\in a + i\RR$ in \eqref{eq: complex Delta function and Mellin transform}, $\delta_{c}$ reduces to

\begin{equation}
    \deltaComplex{\Delta-\Delta_{0}}
    =
    2\pi \delta\left(\Im(\Delta-\Delta_{0})\right)
    \, ,
    \textInMath{for} \Re\Delta_{0}=a
    \, .
\end{equation}

When $\Delta_{0}$ leaves off the integration contour, $\delta_{c}$ admits the following approximations:

\begin{numcases}{\deltaComplex{\Delta-\Delta_{0}}=}
    \label{eq: complex Delta function approximation a}
    \displaystyle
    \lim_{\epsilon\to0}
    \gm{\Delta_{0}-\Delta}\epsilon^{\Delta-\Delta_{0}}
    =
    \lim_{\epsilon\to0}
    \intrange{d\omega}{0}{\oo}\omega^{\Delta_{0}-\Delta-1}e^{-\epsilon \omega}
    \, ,
    &
    \textInMath{for} \Re\Delta_{0}>a
    \, ,
    \\
    \label{eq: complex Delta function approximation b}
    \displaystyle
    \lim_{\epsilon\to0}
    \gm{\Delta-\Delta_{0}}\epsilon^{\Delta_{0}-\Delta}
    =
    \lim_{\epsilon\to0}
    \intrange{d\omega}{0}{\oo}\omega^{\Delta_{0}-\Delta-1}e^{-\epsilon/\omega}
    \, ,
    &
    \textInMath{for} \Re\Delta_{0}<a
    \, .
\end{numcases}

!!! proof "Equation \eqref{eq: complex Delta function approximation a}"

    This can be shown by a contour deformation argument.

    For $\Re\Delta_{0}>a$, we consider a test function $f(\Delta)$ that is analytic in the region $a<\Re \Delta$ and decays sufficiently fast as $\Delta\to +\oo$.
    As $\epsilon^{\Delta-\Delta_{0}}\to 0$, we can enclose the contour to the right and pick up the poles at $\Delta=\Delta_{0}+n,\, n\in\NN$, leading to

    \begin{equation}
        \lim_{\epsilon\to 0}
        \intrange{\frac{d\Delta}{2\pi i}}{a-i\oo}{a+i\oo}
        \gm{\Delta_{0}-\Delta}\epsilon^{\Delta-\Delta_{0}}
        f(\Delta)
        =
        \lim_{\epsilon\to 0}\sum_{n=0}^{+\oo}\frac{(-1)^{n}}{n!}\epsilon^{n}f(\Delta_{0}+n)
        =
        f(\Delta_{0})
        \, ,
    \end{equation}

    which justifies the defining property \eqref{eq: complex Delta function and Mellin transform}.

    From the analysis above, we observe that only the term $n = 0$ needs to be dominant. Consequently, the requirement on test functions can be relaxed: it suffices for $f(\Delta)$ to be holomorphic in the strip $a < \Re \Delta < \Re \Delta_{0}$, to be meromorphic or contain branch cuts in the region $\Re \Delta_{0} < \Re \Delta$, and to decay sufficiently fast as $\Delta \to +\infty$.


!!! remark 

    Notice that if naively applying the approximation \eqref{eq: complex Delta function approximation a} to the case $\Re\Delta_{0}=a$, there would appear an extra factor $\half$.

    The reason is as follows: in this case the leading pole $\Delta=\Delta_{0}$ lies on the contour, hence the integral is divergent and should be understood as the principal value. When deforming the contour to the right, it is necessary to consider the contribution of a small semicircle $C_{\Delta_{0},\delta}\eqqq\set{\Delta:\Delta=\Delta_{0}+\delta e^{i\theta}, \frac{\pi}{2}<\theta<\frac{3\pi}{2}}$ surrounding the leading pole:

    \begin{align*}
        &\peq
        \lim_{\delta\to 0}
        \inttt{\frac{d\Delta}{2\pi i}}{C_{\Delta_{0},\delta}}
        \gm{\Delta_{0}-\Delta}\epsilon^{\Delta-\Delta_{0}}
        f(\Delta)
        \\
        &=
        \lim_{\delta\to 0}
        f(\Delta_{0})
        \inttt{\frac{d\Delta}{2\pi i}}{C_{\Delta_{0},\delta}}
        \frac{\epsilon^{\Delta-\Delta_{0}}}{\Delta_{0}-\Delta}
        \\
        &=
        \lim_{\delta\to 0}
        -f(\Delta_{0})
        \intrange{\frac{d\theta}{2\pi}}{\frac{\pi}{2}}{\frac{3\pi}{2}}
        \epsilon^{\delta e^{i\theta}}
        \\
        &=
        -\half f(\Delta_{0})
        \, .
    \end{align*}
    
### Mellin transform

Lacia-TimeStamp-2025-02-08-01:12:13

Under the Mellin transform, we have the following pairs:

\begin{align}
    &
    f(\omega)
    &&
    \wave{f}(\Delta)
    \\
    &
    \omega^{-\Delta'}
    &&
    \deltaComplex{\Delta-\Delta'}
    \eqqq
    \lim_{\omega_{0}\to 0^{+}}\half \gm{\frac{\Delta'-\Delta}{2}}\omega_{0}^{\Delta-\Delta'}
    \\
    &
    \delta(\omega-\omega_{0})
    &&
    \omega_{0}^{\Delta-1}
    \\
    &
    \delta(\omega)\eqqq \lim_{\omega_{0}\to 0^{+}} \delta(\omega-\omega_{0})
    &&
    \lim_{\omega_{0}\to 0^{+}}\omega_{0}^{\Delta-1}
\end{align}

\begin{equation}
    \lim_{\omega_{0}\to0}\omega_{0}^{\Delta-1}
    \mapsto
    \lim_{\epsilon\to 0}
    \frac{\deltaComplex{\Delta-1+\epsilon}}{\gm{\epsilon}}
\end{equation}

Now we check the consistency of the above Mellin pairs.

## Miscellaneous

The Dirac $\delta$-function admits the following approximations

\begin{align}
    &
    \delta(x)
    =
    \lim_{\epsilon\to 0}\frac{1}{\sqrt{2\pi \epsilon}}e^{-x^2/2\epsilon}
    \, ,
    \\
    &
    \delta(x)
    =
    \lim_{p\to \oo}\frac{1}{\pi}\frac{\sin p x}{x}
    \, ,
    \\
    &
    \delta(x)
    =
    \lim_{\epsilon\to 0}\frac{1}{\pi} \frac{\epsilon}{x^2+\epsilon^2}
    =
    \lim_{\epsilon\to 0}-\frac{1}{\pi}\Im \frac{1}{x+i\epsilon}
    \, ,
    \\
    &
    \delta(x)
    =
    \lim_{\epsilon\to 0} \frac{1}{\gm{\epsilon}} x_{+}^{-1+\epsilon}
    =
    \lim_{\epsilon\to 0}\frac{1}{\gm{\epsilon}} |x|^{-1+2\epsilon}
    \, ,
\end{align}

where $\epsilon>0$ and the following properties

\begin{align}
    &
    \delta^{(n)}(a x)=\frac{\sign(a)}{a^{n+1}}\delta^{(n)}(x)
    \, .
\end{align}

### An identity

We consider the distribution $\theta(z)\delta(i(z-\zb))$ on $\RR^{2}$, which support on the positive real axis.
In the Cartesian and radial coordinates, we have

\begin{align}
    \theta(z)\delta(i(z-\zb))
    =
    \frac{1}{2}\theta(x)\delta(y)
    =
    \frac{1}{2r}\delta(\theta)
    \, .
\end{align}

As a periodic function of $\theta$, we can use the identity

\begin{equation}
    \delta(\theta)=\lim_{N\to\oo}\frac{1}{2\pi}\sum_{n=-N}^{N}e^{i n \theta}
    \, ,
\end{equation}

to obtain

\begin{align}
    \theta(z)\delta(i(z-\zb))
    =
    \frac{1}{4\pi r}\sum_{n=-\oo}^{+\oo}e^{i n \theta}
    =
    \frac{1}{4\pi}\sum_{n=-\oo}^{+\oo}z^{\frac{n-1}{2}}\zb^{-\frac{n+1}{2}}
    \, .
\end{align}

In this way, the distributional behavior of $\theta(z)\delta(i(z-\zb))$ can be understood as a divergent sum of powers of $(z,\zb)$.

### Relation between $\delta$- formal and tempered distributions

The Dirac $\delta$-function satisfies

\begin{equation}
    2\pi i\inttt{dx}{\RR} \delta(x-y)f(x)
    =
    \inttt{dx}{\RR}\left(\frac{1}{x-y-i\epsilon}-\frac{1}{x-y+i\epsilon}\right)f(x)
    \, .
\end{equation}

We show that the two are equivalent.
Without loss of generality for $w>0,r\in(0,w)$, the disk $|z|\leq w+r$ can be map to the upper half plane $\Re x\geq 0$ by the Mobius transformation $z(x)=(w+r) \frac{(r+2 w) (x-y)-i r \epsilon }{(r+2 w) (x-y)+i r \epsilon }$ such that $z(y+i\epsilon)=w$, and similarly the disk $|z|\geq w-r$ can be mapped to the lower half plane $\Re x\leq 0$ by $z(x)=(w-r)\frac{(r-2 w) (x-y)+i r \epsilon }{(r-2 w) (x-y)-i r \epsilon }$ with $z(y-i\epsilon)=w$. Hence we have

\begin{equation}
    \inttt{}{|z|=|w|+r}-\inttt{}{|z|=|w|-r}\frac{dz}{z-w}=
    \inttt{dx}{\RR}\frac{1}{x-y-i\epsilon}-\inttt{dx}{\RR}\frac{1}{x-y+i\epsilon}
    +
    I(\epsilon)
    \, ,
\end{equation}

where the error term

\begin{equation}
    I(\epsilon)=
    \epsilon
    \inttt{dx}{\RR}
    \frac{2 i r^2 }{\left(r^2-4 w^2\right) (x-y)^2+r^2 \epsilon ^2-4 i r w \epsilon  (x-y)}\to 0
    \, ,
    \textInMath{as}
    \epsilon\to 0
    \, .
\end{equation}
