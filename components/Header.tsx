
import React from 'react';

const Header: React.FC = () => {
  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header className="text-center mb-8 animate-fade-in">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          Routine Task Manager
        </span>
      </h1>
      <p className="mt-2 text-lg text-gray-400">{dateString}</p>
    </header>
  );
};

export default Header;
