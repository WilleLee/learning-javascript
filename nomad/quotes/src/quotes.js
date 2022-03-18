const quotes = [
  {
    quote: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    quote: "Whereof one cannot speak, thereof one must be silent.",
    author: "Ludwig Wittgenstein"
  },
  {
    quote: "I think, therefore I am.",
    author: "René Descartes"
  },
  {
    quote: "He who thinks great thoughts, often makes great errors.",
    author: "Martin Heidegger"
  },
  {
    quote: "God is dead! He remains dead! And we have killed him.",
    author: "Friedrich Nietzsche"
  },
  {
    quote: "To be is to be perceived.",
    author: "George Berkeley"
  },
  {
    quote: "Happiness is not an ideal of reason but of imagination.",
    author: "Immanuel Kant"
  },
  {
    quote: "No man's knowledge here can go beyond his experience.",
    author: "Socrates"
  },
  {
    quote: "If God did not exist, it would be necessary to invent Him.",
    author: "Voltaire"
  },
];
const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");




//console.log(quotes.length); //9 ( 0 ~ 8 )
//console.log(quotes[8]);

const randomIndex = Math.floor(Math.random() * quotes.length); // 0~8까지 랜덤하게 불러옴
const currentQuote = quotes[randomIndex];

//Math.round(...) : 반올림
//Math.ceil(...) : 올림
//Math.floor(...) : 내림

quote.innerText = currentQuote.quote;
author.innerText = currentQuote.author;