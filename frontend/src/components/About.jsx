import React from 'react';
import { Code, Palette, Rocket, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'MERN Stack',
      description: 'Building robust full-stack applications using MongoDB, Express.js, React.js, and Node.js.',
    },
    {
      icon: Palette,
      title: 'Modern UI/UX',
      description: 'Designing responsive, user-friendly interfaces using Tailwind CSS and Figma-inspired principles.',
    },
    {
      icon: Rocket,
      title: 'Performance Focused',
      description: 'Optimizing frontend and backend performance for smooth and fast user experiences.',
    },
    {
      icon: Users,
      title: 'Collaborative Developer',
      description: 'Working efficiently in teams using Git, GitHub, and tools like Jira and Trello.',
    },
  ];

  return (
    <section id="about" className="py-20 transition-colors duration-300 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            About Me
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            I'm a passionate full-stack web developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js).
            I create scalable and maintainable web applications, with a strong focus on clean code, performance, and responsive design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 bg-gray-800 hover:bg-gray-700 shadow-gray-900/20 shadow-lg hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-blue-600 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {highlight.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
