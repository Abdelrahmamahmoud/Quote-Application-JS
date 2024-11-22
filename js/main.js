var arrayOfQuotes = [
  { author: "Frank Zappa", quote: "“So many books, so little time.”" },
  {
    author: "Albert Einstein",
    quote:
      "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  },
  {
    author: "Marcus Tullius Cicero",
    quote: "“A room without books is like a body without a soul.”",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
  },
  {
    author: "Maya Angelou",
    quote:
      "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
  },
  {
    author: "Oscar Wilde",
    quote: "Always forgive your enemies; nothing annoys them so much",
  },
  {
    author: "Ralph Waldo Emerson",
    quote: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
  },
  {
    author: "Andre Gide, Autumn Leaves",
    quote: "“It is better to be hated for what you are than to be loved for what you are not.”",
  },
  {
    author: " H. Jackson Brown Jr., P.S. I Love You",
    quote: "“Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”",
  },
];

function generateQuote() {
  var randomVal = Math.floor(Math.random() * arrayOfQuotes.length );
  document.getElementById(
    "quoteOutput"
  ).textContent = `\"${arrayOfQuotes[randomVal].quote}\"`;
  document.getElementById(
    "authorOutput"
  ).textContent = `${arrayOfQuotes[randomVal].author}`;

  generateQuoteChecker();
}

var  updatedVal = randomVal ;
function generateQuoteChecker() {
 
    if(randomVal == updatedVal){
        updatedVal = Math.floor(Math.random() * arrayOfQuotes.length ) ;
        document.getElementById(
            "quoteOutput"
          ).textContent = `\"${arrayOfQuotes[randomVal].quote}\"`;
          document.getElementById(
            "authorOutput"
          ).textContent = `${arrayOfQuotes[randomVal].author}`;
    }
    else {

    }
}