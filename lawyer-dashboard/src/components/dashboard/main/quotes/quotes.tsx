// "use client"
// import React, { useState, useEffect } from 'react';
// import quotesData from './quotesDta'; // Correct the import
// import { useTranslations } from 'next-intl';
// import { Stack } from '@mui/material';



// const RandomQuote = () => {
//   const t=useTranslations('mainPage')
//   const [randomQuote, setRandomQuote] = useState<{ id: number; quote: string; person: string } | null>(null);

//   useEffect(() => {
//     // Function to set a random quote
//     const getRandomQuote = () => {
//       const randomIndex = Math.floor(Math.random() * quotesData.length);
//       setRandomQuote(quotesData[randomIndex]);
//     };

//     // Set an initial random quote
//     getRandomQuote();

//     // Update the quote every minute
//     const intervalId = setInterval(getRandomQuote, 86400000);

//     return () => {
//       // Clear the interval when the component is unmounted
//       clearInterval(intervalId);
//     };
//   }, []);

//   return (
//     <Stack  direction="row" spacing={2}> 
    
//     <div style={{ textAlign: 'center' }}>

//   <h1>{t('quote')}</h1>
//       {randomQuote && (
//  <div style={{ backgroundColor: '#268C7E', width: '70%', padding: '10px', borderRadius: '10px' }}>
//           <blockquote>{randomQuote.quote}</blockquote>
//           <p>- {randomQuote.person}</p>
//         </div>
//       )}
//       </div>
//       </Stack>
//   );
// };

// export default RandomQuote;
