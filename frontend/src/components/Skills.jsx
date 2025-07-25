import React from 'react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 92 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML5 & CSS3', level: 97 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB (Mongoose)', level: 89 },
        { name: 'REST APIs', level: 91 },
        { name: 'JWT Authentication', level: 87 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 94 },
        { name: 'VS Code', level: 96 },
        { name: 'Postman', level: 90 },
        { name: 'Vite & Webpack', level: 85 },
        { name: 'Figma', level: 75 },
      ],
    },
  ];

  return (
     <section id="skills" className="py-20 transition-colors duration-300 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Skills & Expertise
          </h2>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed text-gray-300">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="p-8 rounded-2xl transition-all duration-300 bg-gray-900 shadow-gray-900/50 shadow-lg hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center text-white">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-200">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full h-2 rounded-full overflow-hidden bg-gray-700">
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-blue-500 to-purple-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
