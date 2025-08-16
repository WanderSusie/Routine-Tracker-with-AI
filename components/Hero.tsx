import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32 animate-fade-in-up">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-2">
            Hi, I'm {PERSONAL_INFO.name}
          </h1>
          {PERSONAL_INFO.title && (
             <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
               {PERSONAL_INFO.title}
             </h2>
          )}
          {PERSONAL_INFO.bio && (
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto md:mx-0">
              {PERSONAL_INFO.bio}
            </p>
          )}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-lg text-lg hover:brightness-110 transition-all duration-300"
            >
              Get In Touch
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary text-text-primary font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-all duration-300 border border-gray-300"
            >
              View GitHub
            </a>
          </div>
        </div>
        <div className="md:w-2/5 flex justify-center">
            <img 
                src={PERSONAL_INFO.profileImage} 
                alt={`Profile picture of ${PERSONAL_INFO.name}`}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-accent"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;