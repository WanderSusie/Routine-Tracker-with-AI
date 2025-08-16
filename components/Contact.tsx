import React from 'react';
import { PERSONAL_INFO } from '../constants';
import GitHubIcon from './icons/GitHubIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import MailIcon from './icons/MailIcon';
import InstagramIcon from './icons/InstagramIcon';


const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:brightness-110 transition-all duration-300"
        >
          Say Hello
        </a>

        <div className="mt-12">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center gap-2 text-lg text-text-secondary hover:text-accent transition-colors duration-300">
                <MailIcon className="w-6 h-6" />
                <span>{PERSONAL_INFO.email}</span>
            </a>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="GitHub">
            <GitHubIcon className="w-8 h-8" />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
            <LinkedInIcon className="w-8 h-8" />
          </a>
          <a href={PERSONAL_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent transition-colors duration-300" aria-label="Instagram">
            <InstagramIcon className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;