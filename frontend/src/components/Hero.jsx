import React from 'react';
import { ChevronDown, Github, Linkedin, Download } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl opacity-20 bg-blue-500 animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl opacity-20 bg-purple-500 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl mt-30 md:mt-30 md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent animate-fade-in">
            Mohit Jodhe
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-light text-gray-300 animate-fade-in-delay">
            MERN Stack Developer
          </p>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed text-gray-400 animate-fade-in-delay-2">
            Passionate about building full-stack web apps using MongoDB, Express, React, and Node.js.
            I love crafting interactive user interfaces and solving real-world problems with clean, scalable code.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/25 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View My Work
          </button>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-gray-400 text-gray-300 hover:bg-gray-400 hover:text-gray-900 hover:shadow-lg transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-400 hover:text-white text-xl mb-10">
          <a
            href="https://github.com/mahi616"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohit-jodhe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="/Mohit_Jodhe_Resume.pdf"
            download
            className="hover:text-white transition-colors"
          >
            <Download size={28} />
          </a>
        </div>
      </div>

      {/* Scroll Down Button */}
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white animate-bounce cursor-pointer transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
