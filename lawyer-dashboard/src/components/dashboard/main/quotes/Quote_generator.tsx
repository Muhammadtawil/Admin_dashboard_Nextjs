"use client"
import  { useEffect, useState } from 'react'
import styles from '../../../../styles/Quotes.module.css';
import { useTranslations } from 'next-intl';
export default function QuoteGenerator() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [copied, setCopied] = useState(false);
    const t=useTranslations('mainPage')
 
    const generateQuote = async () => {
        try {
            const response = await fetch(
                'https://type.fit/api/quotes');
            const quoteList = await response.json();
            const randomIdx = Math.floor(
                Math.random() * quoteList.length);
            const quoteText = quoteList[randomIdx].text;
            const auth = 
                quoteList[randomIdx].author || 'Anonymous';
 
            setQuote(quoteText);
            setAuthor('~ ' + auth);
        } catch (error) {
            console.error('Error fetching quote:', error);
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
       <>
            
        <div className={styles.container}>
            
    <div className={styles.boxSize}>
        <h1 className={styles.QuoteText}>{quote}</h1>
        <p className={styles.author} id="author">
            {author}
        </p>
        <hr />
        <div className={styles.QuoteBtn}>
            <button
                className={styles.copyButton}
                onClick={copyToClipboard}
                disabled={copied}
            >
                {copied ? t('coppied') : t('copy')}
            </button>
            <button 
                className={styles.GenerateQuote_next} 
                onClick={generateQuote}>
           {t('nextQuote')}
            </button>
        </div>
    </div>
            </div>

       </>
            
  )
}
