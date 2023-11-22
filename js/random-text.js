let sora_subtitle_list = [
    {
        text: "In solitude where we are least alone."
    },
    {
        text: "The music is not in the notes, but in the silence between. -- Mozart"
    },
    {
        text: "芳草萋萋，幽兰猗猗"
    },
    {
        text: "命名是存在的猜想，边界是存在的证明"
    },
    {
        text: "Our imagination is stretched to the utmost, not, as in fiction, to imagine things which are not really there, but just to comprehend those things which are. -- Feynman"
    }
];

function getRandomFromList(list) {
    return list[Math.floor(Math.random() * list.length)]
};

// (function () {
//     document.getElementById("sora_subtitle").innerHTML = getRandomFromList(sora_subtitle_list).text
// })();

(function () {
    document.getElementById("sora_subtitle").innerHTML = sora_subtitle_list[0].text
})();