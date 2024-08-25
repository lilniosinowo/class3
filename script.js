var button = document.querySelector(".generate");
var quotes = document.querySelector(".quotes");
var author = document.querySelector(".author");
var category = document.querySelector(".category");

var url = "https://famous-quotes4.p.rapidapi.com/random?category=all&count=";
var options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7b00621d4cmsh2de9d9167d04352p10c8b6jsn98c0fd3e5499",
    "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
  },
};

async function changeContent() {
  var quotesResponse = await fetch(url, options);
  var quote = await quotesResponse.json();
  console.log(quote);
  quotes.textContent = quote[0].text;
  author.textContent = quote[0].author;
  category.textContent = quote[0].category;
}

changeContent();

button.onclick = changeContent;
