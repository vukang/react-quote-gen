import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState({
    text: '',
    author: '',
  });

  const tweetString = quote.text.split(' ').join('%20');
  const tweetURL = `https://www.twitter.com/intent/tweet?text=${tweetString}%20–%20${quote.author}`;

  // fetch stoic quotes on first load
  useEffect(() => {
    getRndQuote();
  }, []);

  async function getRndQuote() {
    const data = await fetch('https://stoic-quotes.com/api/quote');
    const response = await data.json();
    setQuote(response);
  }

  return (
    <div className='Wrapper'>
      <div className='App' id='quote-box'>
        <div id='text' className='card-text'>
          {quote.text}
        </div>
        <div id='author' className='card'>
          – {quote.author}
        </div>
        <button id='new-quote' onClick={getRndQuote}>
          New Quote
        </button>
        <a id='tweet-quote' className='twitter-share-button' href={tweetURL}>
          Tweet me!
        </a>
      </div>
    </div>
  );
}

export default App;
