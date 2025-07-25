import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'EchoChat - Social Media App',
      description: 'A modern MERN-based social media app where users can share posts, stories, like, comment, and manage profiles. Built with a focus on real-time interaction and user engagement.',
      image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Blog Website Platform',
      description: 'A feature-rich blog platform with authentication, blog creation/editing, image upload, profile management, and protected routes. Built using the MERN stack with clean UI and modern design.',
image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: '#',
      demo: '#',
    },

  ];

  return (
   <section id="projects" className="py-20 transition-colors duration-300 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Featured Projects
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 bg-gray-800 shadow-gray-900/50 shadow-lg hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {project.title}
                </h3>
                
                <p className="text-sm leading-relaxed mb-4 text-gray-400">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 text-gray-300 hover:text-white hover:bg-gray-700"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  
                  <a
                    href={project.demo}
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
