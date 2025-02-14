'use client';

import React from 'react';

interface SectionListProps {
  language: string;
  resumeData: any; // Replace with proper type when available
}

const SectionList: React.FC<SectionListProps> = ({ language, resumeData }) => {
  return (
    <div className="space-y-12">
      {/* Profile Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {language === 'es' ? 'Perfil' : 'Profile'}
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <p className="text-gray-700 dark:text-gray-300">
              {resumeData.profile.description}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {language === 'es' ? 'Experiencia' : 'Experience'}
        </h2>
        {resumeData.experience.map((exp: any, index: number) => (
          <div key={index} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{exp.period}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              {exp.responsibilities.map((resp: string, idx: number) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {language === 'es' ? 'Educación' : 'Education'}
        </h2>
        <div className="space-y-4">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-400">{edu.school} • {edu.period}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {language === 'es' ? 'Habilidades' : 'Skills'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">{skill.category}</h3>
              <p className="text-gray-700 dark:text-gray-300">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="portfolio">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {language === 'es' ? 'Proyectos' : 'Projects'}
        </h2>
        <div className="space-y-6">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.technologies}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionList;
