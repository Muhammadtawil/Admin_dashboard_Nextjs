"use client"
import  { useEffect, useState } from 'react'
import styles from './quote.module.scss';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import { Translator } from 'google-translate-api-x';
import arabicQuotesData from './arabic-quotesDta';
import { englishQuotesData } from './english-quoteData';

export default function QuoteGenerator() {
    const [quote, setQuote] = useState('');

    const [author, setAuthor] = useState('');
    const [copied, setCopied] = useState(false);
    const t=useTranslations('mainPage')
    const path = usePathname();
    
const locale=useLocale()
    const generateQuote = async () => {
        try {
    
            const quoteList = locale=='ar'
             ? arabicQuotesData : englishQuotesData;
          if (!quoteList || quoteList.length === 0) {
            console.error('Empty or invalid response from the API');
            return;
          }
      
          const randomIdx = Math.floor(Math.random() * quoteList.length);
          const quoteText = quoteList[randomIdx].text;
          const auth = quoteList[randomIdx].author || 'Anonymous';
 
          setQuote(quoteText);

            setAuthor('~ ' + auth);

        } catch (error) {
          console.error('Error fetching or translating quote:', error);
        }
      };
      
 
    useEffect(() => {
        generateQuote();
    }, []);
 
    const copyToClipboard = () => {
        const textArea = document.createElement('textarea');
        textArea.value = quote;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopied(true);
 
        setTimeout(() => setCopied(false), 2000);
    };
    return (
       <div className={`${styles.quoteStyle}`}>
            
        <div className='container'>
            
    <div className='boxSize'>
    <h1 className='QuoteText'>{quote}</h1>
        <p className='author' id="author">
            {author}
        </p>
        <hr />
        <div className='QuoteBtn'>
            <button
                className='copyButton'
                onClick={copyToClipboard}
                disabled={copied}
            >
                {copied ? t('coppied') : t('copy')}
            </button>
            <button 
                className='GenerateQuote_next' 
                onClick={generateQuote}>
           {t('nextQuote')}
            </button>
        </div>
    </div>
            </div>

       </div>
            
  )
}
