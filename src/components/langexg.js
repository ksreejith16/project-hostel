  import React, { useState } from 'react';
  import './langexg.css';

  function LanguageExchange() {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('en'); // Default target language is English

    const handleChange = (e) => {
      setText(e.target.value);
    };
    const handleTranslate = async () => {
      if (!text) return;
    
      try {
        const response = await fetch(`https://libretranslate.com/translate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            q: text,
            source: 'en',
            target: targetLanguage,
          }),
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch translation');
        }
    
        const data = await response.json();
        setTranslatedText(data.translatedText);
      } catch (error) {
        console.error('Error translating text:', error);
      }
    };
    

    return (
      <div className="language-exchange-container">
        <h2>Language Exchange</h2>
        <div className="input-container">
          <textarea
            value={text}
            onChange={handleChange}
            placeholder="Enter text to translate"
          ></textarea>
          <select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="te">Telugu</option>
            <option value="hi">Hindi</option>
          </select>
        </div>
        <button onClick={handleTranslate}>Translate</button>
        <div className="translated-text-container">
          {translatedText && (
            <div className="translated-text">
              <h3>Translated Text:</h3>
              <p>{translatedText}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  export default LanguageExchange;
