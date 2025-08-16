import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
