export function showQuotes(lang) {
  getQuote(lang, displayQuote);
}

function getQuote(lang, setFunc) {
  const quotesSrc = "./data/quotes.json";

  fetch(quotesSrc)
    .then((res) => res.json())
    .then((data) => {
      let rndQuote = Math.floor(
        Math.random(data.quotes[lang].length) * data.quotes[lang].length
      );
      setFunc(
        data.quotes[lang][rndQuote].quote,
        data.quotes[lang][rndQuote].author
      );
    });
}

function displayQuote(quote, author) {
  const qutesBlock = document.querySelector(".quotes");
  qutesBlock.querySelector(".author").innerText = author;
  qutesBlock.querySelector(".quote").innerText = quote;
}
// getQuote(appLang, displayQuote);
