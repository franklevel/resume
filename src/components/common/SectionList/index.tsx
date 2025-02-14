'use client';

import React from 'react';
import type { ResumeData } from '@/types/resume';

interface SectionListProps {
  readonly language: string;
  readonly resumeData: ResumeData;
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
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{exp.company}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{exp.period}</p>
            <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
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
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{edu.school}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{edu.details}</p>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {language === 'es' ? 'Habilidades' : 'Skills'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.category}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          {language === 'es' ? 'Proyectos' : 'Projects'}
        </h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{project.technologies}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SectionList;
