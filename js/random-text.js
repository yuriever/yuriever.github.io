let sora_subtitle_list = [
    {
        text: "In solitude where we are least alone."
    },
    {
        text: "The music is not in the notes, but in the silence between."
    }
];

function getRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)]
};

(function () {
    document.getElementById("sora_subtitle").innerHTML = getRandomFromList(sora_subtitle_list).text
})();

// (function () {
//     document.getElementById("sora_subtitle").innerHTML = sora_subtitle_list[0].text
// })();