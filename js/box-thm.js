function injectCounters() {
    // Separate counters
    let sharedCounter = 0; // Counter for theorem, definition, lemma
    let equationCounter = 0; // Counter for equation
    let proofCounter = 0; // Counter for proof
    let remarkCounter = 0; // Counter for remark
    let factCounter = 0; // Counter for fact

    // Mapping of class to labels and counters
    const classToConfig = {
        theorem: { label: "Theorem", counter: () => ++sharedCounter },
        definition: { label: "Definition", counter: () => ++sharedCounter },
        lemma: { label: "Lemma", counter: () => ++sharedCounter },
        equation: { label: "Equation", counter: () => ++equationCounter },
        proof: { label: "Proof", counter: () => ++proofCounter },
        remark: { label: "Remark", counter: () => ++remarkCounter },
        fact: { label: "Fact", counter: () => ++factCounter }
    };

    // Select all relevant elements
    const elements = document.querySelectorAll(
        ".theorem, .definition, .lemma, .equation, .proof, .remark, .fact"
    );

    elements.forEach((el) => {
        // Identify the class of the element
        const elementClass = Object.keys(classToConfig).find((cls) =>
            el.classList.contains(cls)
        );

        if (elementClass && !el.dataset.numbered) {
            const { label, counter } = classToConfig[elementClass];
            const count = counter(); // Increment the relevant counter

            // Find the title element
            const title =
                el.querySelector(".admonition-title") ||
                el.querySelector("summary");

            if (title) {
                // If the title is empty, Mkdocs provides a default one, which should be removed
                if (label === title.textContent) {
                    title.textContent = "";
                }
                // Prepend the label and counter to the title text
                if (
                    elementClass === "proof" ||
                    elementClass === "remark" ||
                    elementClass === "fact"
                ) {
                    title.textContent = `${label}. ${title.textContent}`;
                } else {
                    title.textContent = `${label} ${count}. ${title.textContent}`;
                }
            }

            // Mark this element as processed
            el.dataset.numbered = true;
        }
    });
}

// Run the function on page load
document.addEventListener("DOMContentLoaded", injectCounters);

// Optional: Re-run the function if new elements are dynamically added
const observer = new MutationObserver(() => {
    injectCounters();
});
observer.observe(document.body, { childList: true, subtree: true });
