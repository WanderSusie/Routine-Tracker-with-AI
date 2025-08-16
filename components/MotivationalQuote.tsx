
import React, { useState, useEffect } from 'react';
import { fetchMotivationalQuote } from '../services/geminiService';

const MotivationalQuote: React.FC = () => {
  const [quote, setQuote] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getQuote = async () => {
      setLoading(true);
      const today = new Date().toISOString().split('T')[0];
      const storedQuoteData = localStorage.getItem('dailyQuote');
      if (storedQuoteData) {
        const { date, quote } = JSON.parse(storedQuoteData);
        if (date === today) {
          setQuote(quote);
          setLoading(false);
          return;
        }
      }

      const newQuote = await fetchMotivationalQuote();
      setQuote(newQuote);
      localStorage.setItem('dailyQuote', JSON.stringify({ date: today, quote: newQuote }));
      setLoading(false);
    };

    getQuote();
  }, []);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">Quote of the Day</h2>
      <div className="mt-3 min-h-[56px] flex items-center">
        {loading ? (
          <div className="w-full h-4 bg-gray-700 rounded-full animate-pulse"></div>
        ) : (
          <p className="text-xl md:text-2xl italic text-gray-200">"{quote}"</p>
        )}
      </div>
    </div>
  );
};

export default MotivationalQuote;
