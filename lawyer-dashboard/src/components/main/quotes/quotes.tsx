"use client"
import React, { useState, useEffect } from 'react';
import quotesData from './quotesDta'; // Correct the import

const RandomQuote = () => {
  const [randomQuote, setRandomQuote] = useState<{ id: number; quote: string; person: string } | null>(null);

  useEffect(() => {
    // Function to set a random quote
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * quotesData.length);
      setRandomQuote(quotesData[randomIndex]);
    };

    // Set an initial random quote
    getRandomQuote();

    // Update the quote every minute
    const intervalId = setInterval(getRandomQuote, 86400000);

    return () => {
      // Clear the interval when the component is unmounted
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>Quote of the Day</h2>
      {randomQuote && (
 <div style={{ backgroundColor: '#268C7E', width: '70%', padding: '10px', borderRadius: '10px' }}>
          <blockquote>{randomQuote.quote}</blockquote>
          <p>- {randomQuote.person}</p>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;
