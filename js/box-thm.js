function injectCounters() {
    // Counter for definition, lemma, theorem, corollary
    let sharedCounter = 0;
    // Separate counters for each type
    let exampleCounter = 0;
    let proofCounter = 0;
    let ideaCounter = 0;
    let remarkCounter = 0;
    let factCounter = 0;

    // Mapping of class to labels and counters
    const classToConfig = {
        def: {
            label: "Definition",
            defaultLabel: "Def",
            counter: () => ++sharedCounter
        },
        lem: {
            label: "Lemma",
            defaultLabel: "Lem",
            counter: () => ++sharedCounter
        },
        thm: {
            label: "Theorem",
            defaultLabel: "Thm",
            counter: () => ++sharedCounter
        },
        cor: {
            label: "Corollary",
            defaultLabel: "Cor",
            counter: () => ++sharedCounter
        },
        //
        ex: {
            label: "Example",
            defaultLabel: "Ex",
            counter: () => ++exampleCounter
        },
        proof: {
            label: "Proof",
            defaultLabel: "Proof",
            counter: () => ++proofCounter
        },
        idea: {
            label: "Idea",
            defaultLabel: "Idea",
            counter: () => ++ideaCounter
        },
        remark: {
            label: "Remark",
            defaultLabel: "Remark",
            counter: () => ++remarkCounter
        },
        fact: {
            label: "Fact",
            defaultLabel: "Fact",
            counter: () => ++factCounter
        }
    };

    // Select all relevant elements
    const elements = document.querySelectorAll(
        ".def, .lem, .thm, .cor, .ex, .proof, .idea, .remark, .fact"
    );

    elements.forEach((el) => {
        // Identify the class of the element
        const elementClass = Object.keys(classToConfig).find((cls) =>
            el.classList.contains(cls)
        );

        if (elementClass && !el.dataset.numbered) {
            const { label, defaultLabel, counter } =
                classToConfig[elementClass];
            const count = counter(); // Increment the relevant counter

            // Find the title element
            const title =
                el.querySelector(".admonition-title") ||
                el.querySelector("summary");

            if (title) {
                // If the title is empty, Mkdocs provides a default one, which should be removed
                if (title.textContent === defaultLabel) {
                    title.textContent = "";
                }
                // Prepend the label and counter to the title text
                if (
                    elementClass === "proof" ||
                    elementClass === "idea" ||
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
