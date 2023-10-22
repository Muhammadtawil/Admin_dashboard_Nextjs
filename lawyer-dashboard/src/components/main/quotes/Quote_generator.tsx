"use client"
import React, { useEffect, useState } from 'react'
import styles from '../../../styles/Quotes.module.css';
import { Grid } from '@mui/material';
export default function QuoteGenerator() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [copied, setCopied] = useState(false);
 
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
                {copied ? 'Copied!' : 'Copy'}
            </button>
            <button 
                className={styles.GenerateQuote_next} 
                onClick={generateQuote}>
                Next quote
            </button>
        </div>
    </div>
            </div>
            
  )
}
