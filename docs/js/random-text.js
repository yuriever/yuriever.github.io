document.addEventListener("DOMContentLoaded", function () {
    let sora_subtitle_list = [
        { text: "In solitude where we are least alone." },
        { text: "The music is not in the notes, but in the silence between." }
    ];

    function getRandomFromList(list) {
        return list[Math.floor(Math.random() * list.length)];
    }

    const subtitleElement = document.getElementById("sora_subtitle");
    if (subtitleElement) {
        subtitleElement.innerHTML = getRandomFromList(sora_subtitle_list).text;
    }
});