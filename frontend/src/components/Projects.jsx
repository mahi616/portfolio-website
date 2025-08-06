import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Student Portal - Campus Management System',
      description:
        'An all-in-one student portal for managing assignments, timetables, notices, leave applications, and more. Designed to streamline communication between students and administrators. Currently under development.',
      image:
        'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: null,
      demo: null,
    },
    {
      title: 'Blog Website Platform',
      description:
        'A feature-rich blog platform with authentication, blog creation/editing, image upload, profile management, and protected routes. Built using the MERN stack with clean UI and modern design.',
      image:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/mahi616/BlogWebsite',
      demo: 'https://mohit-blog-website.vercel.app/',
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

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-900 text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && project.demo ? (
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-gray-700 text-gray-200 hover:bg-gray-600 transition"
                    >
                      <Github size={18} />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                ) : (
                  <p className="text-sm italic text-gray-400">🚧 Currently Working On It</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Note about free hosting */}
        <div className="mt-12 text-center text-sm text-gray-400">
          ⚠️ Note: Due to using free hosting domains, some project demos may load slowly.
        </div>
      </div>
    </section>
  );
};
