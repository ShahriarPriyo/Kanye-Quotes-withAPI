const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

const displayQuotes = quotes => {
    const showQuotes = document.getElementById('quote');
    showQuotes.innerText = quotes.quote;

}