# TikZ test

This method is reused.

**TODO**

* Automate the generation of TikZ diagrams.

* Add counter to TikZ diagrams.

## Demo

Similarly, we can construct the second cohomology of Lie algebras for classifying central extensions.
An exact sequence of Lie algebras
<center>
<script type="text/tikz">
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
    1 \arrow[r] & A \arrow[r, "\iota"] & B \arrow[r, "\pi"] & C \arrow[r] \arrow[l, "\sigma", bend left] & 1
\end{tikzcd}
\end{document}
</script>
</center>
is call a central extension if $\lie{a}$ is abelian and $[\lie{a},\lie{b}]=0$.
