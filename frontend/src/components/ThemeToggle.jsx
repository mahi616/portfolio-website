import React from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = ({ isDark, toggle }) => {
  return (
    <button
      onClick={toggle}
      className={`
        fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 ease-in-out
        ${isDark 
          ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 shadow-yellow-400/25' 
          : 'bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-gray-800/25'
        }
        shadow-lg hover:shadow-xl transform hover:scale-110
      `}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
