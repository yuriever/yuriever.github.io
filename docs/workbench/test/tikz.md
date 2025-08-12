# TikZ test

This method is reused.


If $B\simeq A\times C$, it is called a trivial extension. A central extension is trivial if and only if it splits: $\exists \sigma:C\to B, \, \pi\cdot \sigma=\id_{C}$,
<script type="text/tikz">
\usepackage{tikz-cd}
\begin{document}
    \begin{tikzcd}
        1 \arrow[r] & A \arrow[r, "\iota"] & B \arrow[r, "\pi"] & C \arrow[r] \arrow[l, "\sigma", bend left] & 1
    \end{tikzcd}
\end{document}
</script>
The isomorphism $A\times C\to B$ is defined by $(a,c)\mapsto\iota(a) \sigma(c)$ since $\iota(A)$ is in the center of $B$, we get the equivalence of $B\simeq A\times C$. Geometrically, $\sigma$ is a global section and the bundle $B$ is trivial.
