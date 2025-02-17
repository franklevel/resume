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
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 glow-effect">
          {language === 'es' ? 'Perfil' : 'Profile'}
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
            <p className="text-gray-700 dark:text-gray-400">
              {resumeData.profile.description}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 glow-effect">
          {language === 'es' ? 'Experiencia' : 'Experience'}
        </h2>
        <div className="space-y-8">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-500">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{exp.period}</p>
              <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-400">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 glow-effect">
          {language === 'es' ? 'Educación' : 'Education'}
        </h2>
        <div className="space-y-8">
          {resumeData.education.map((edu, index) => (
            <div key={index} className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{edu.degree}</h3>
              <p className="text-gray-600 dark:text-gray-500">{edu.school}</p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{edu.period}</p>
              <p className="mt-2 text-gray-700 dark:text-gray-400">{edu.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 glow-effect">
          {language === 'es' ? 'Habilidades' : 'Skills'}
        </h2>
        <div className="space-y-6">
          {resumeData.skills.map((skillGroup, index) => (
            <div key={index} className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 glow-effect">
          {language === 'es' ? 'Proyectos' : 'Projects'}
        </h2>
        <div className="space-y-8">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="border-l-4 border-gray-200 dark:border-gray-700 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
              <div className="flex flex-wrap gap-2 my-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionList;
