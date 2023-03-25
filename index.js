const quoteText = document.querySelector(".quote");
const author = document.querySelector(".author-name");
const quoteBtn = document.querySelector(".quote-btn");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

function randomQuote() {
    fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => {
            quoteText.innerText = data.content;
            author.innerText = data.author;
            console.log(data)
        })
}

quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
    const voice = new SpeechSynthesisUtterance(quoteText.innerText + ". by" + author.innerText);
    speechSynthesis.speak(voice);
});


twitterBtn.addEventListener("click", () => {
    const url = "https://twitter.com/intent/tweet?url=" + "\"" + quoteText.innerText + "\"" + "  by " + author.innerText;
    window.open(url, "_blank");
});

randomQuote()