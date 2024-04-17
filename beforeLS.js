// BEFORE LIVE SESSION
function fetchAndUpdateQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // clean slate
      quoteElement.textContent = "";
      authorElement.textContent = "";

      // create text nodes for quote and author
      const quoteTextNode = document.createTextNode(data.quote);
      const authorTextNode = document.createTextNode("- " + data.author);

      // Append (add) text nodes to their respective elements
      quoteElement.appendChild(quoteTextNode);
      authorElement.appendChild(authorTextNode);

      render();
    });
}

fetchAndUpdateQuote();

// Button that gets random quote
quoteBtn.addEventListener("click", () => fetchAndUpdateQuote());
