"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WiseQuotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.realinspire.tech/v1/quotes/random');
      setQuote(response.data[0].content);
      setAuthor(response.data[0].author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="h-screen w-1/2 bg-gradient-to-r from-green-200 to-green-400">
      <p className="text-lg italic font-semibold">{quote}</p>
      <p className="mt-4 text-sm  text-right">- {author}</p>
    </div>
  );
};

export default WiseQuotes;
