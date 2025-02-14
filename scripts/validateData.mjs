import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, '..', 'src');

function validateData(data) {
  // Validate required fields
  if (!data.profile?.description) {
    throw new Error('Profile description is required');
  }

  if (!Array.isArray(data.experience)) {
    throw new Error('Experience must be an array');
  }

  if (!Array.isArray(data.education)) {
    throw new Error('Education must be an array');
  }

  if (!Array.isArray(data.skills)) {
    throw new Error('Skills must be an array');
  }

  if (!Array.isArray(data.projects)) {
    throw new Error('Projects must be an array');
  }

  // Validate experience items
  data.experience.forEach((exp, index) => {
    if (!exp.title || !exp.company || !exp.period || !Array.isArray(exp.achievements)) {
      throw new Error(`Invalid experience item at index ${index}`);
    }
  });

  // Validate education items
  data.education.forEach((edu, index) => {
    if (!edu.degree || !edu.school || !edu.period || !edu.details) {
      throw new Error(`Invalid education item at index ${index}`);
    }
  });

  // Validate skills items
  data.skills.forEach((skill, index) => {
    if (!skill.category || !skill.items) {
      throw new Error(`Invalid skill item at index ${index}`);
    }
  });

  // Validate project items
  data.projects.forEach((project, index) => {
    if (!project.title || !project.technologies || !project.description) {
      throw new Error(`Invalid project item at index ${index}`);
    }
  });
}

try {
  // Load and validate English data
  const enData = JSON.parse(fs.readFileSync(path.join(dataDir, 'data.json'), 'utf8'));
  validateData(enData);
  console.log('✅ English data is valid');

  // Load and validate Spanish data
  const esData = JSON.parse(fs.readFileSync(path.join(dataDir, 'data.es.json'), 'utf8'));
  validateData(esData);
  console.log('✅ Spanish data is valid');

  // Create a pre-validated data file
  const validatedData = {
    en: enData,
    es: esData,
  };

  // Write the pre-validated data
  fs.writeFileSync(
    path.join(dataDir, 'validatedData.json'),
    JSON.stringify(validatedData, null, 2)
  );
  console.log('✅ Created pre-validated data file');

  process.exit(0);
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
