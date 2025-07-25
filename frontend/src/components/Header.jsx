import React, { useState } from 'react';
import { Home, User, Code, Briefcase, Mail, Menu, X } from 'lucide-react';

export const Header = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setMenuOpen(false); // Close menu after click
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-white">Portfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-200 focus:outline-none">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-2 space-y-1 bg-gray-800 rounded-lg p-4 shadow-lg">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleNavClick(id)}
                className={`w-full flex items-center space-x-2 px-3 py-2 rounded-md transition-all duration-200 ${
                  activeSection === id
                    ? 'text-blue-400 bg-blue-400/10'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                <Icon size={16} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
