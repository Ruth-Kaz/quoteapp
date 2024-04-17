//Get IDs
const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const quoteContainer = document.getElementById("quote-container");
const quoteBtn = document.getElementById("quote-button");

let state = {
  apiData: {
    quote: "",
    author: "",
  },
};

function render() {
  // Clear
  quoteElement.textContent = "";
  authorElement.textContent = "";

  // Display the author immediately
  authorElement.textContent = "- " + state.apiData.author;
}

// Function to implement the typewriter effect
function typewriterEffect(element, text) {
  element.textContent = ""; // Clear the element's content before typing new text

  let index = 0;
  const speed = 40; // Adjust the typing speed (milliseconds per character)

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  // Call the typewriter function initially
  type();
}

// Call the render function initially
render();

function addCrossfade(text, delay) {
  authorElement.textContent = text;
  authorElement.classList.add("hidden");
  setTimeout(function () {
    authorElement.classList.remove("hidden");
  }, delay);
}

// Function to implement the typewriter effect

function fetchAndUpdateQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("data", data);
      state.apiData = data;
      render();
      // Start typing the new quote immediately after rendering
      typewriterEffect(quoteElement, state.apiData.quote);
    });
}

// Call fetchAndUpdateQuote to initially load a quote
fetchAndUpdateQuote();
function typewriterEffect(element, text, onComplete) {
  element.textContent = ""; // Clear the element's content before typing new text

  let index = 0;
  const speed = 35; // Adjust the typing speed (milliseconds per character)

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      // Call onComplete callback when typing is complete
      if (onComplete) {
        onComplete();
      }
    }
  }

  // Call the typewriter function initially
  type();
}
// Button that fetches random quote
quoteBtn.addEventListener("click", () => {
  fetchAndUpdateQuote();
});
