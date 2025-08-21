'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CodeBracketIcon, 
  BeakerIcon, 
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const skillCategories = [
  {
    id: 'web',
    name: 'Web Development',
    icon: CodeBracketIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    skills: [
      { name: 'React/Next.js', level: 90, years: 3 },
      { name: 'Node.js/Express', level: 85, years: 3 },
      { name: 'TypeScript', level: 80, years: 2 },
      { name: 'Firebase', level: 85, years: 2 },
      { name: 'MongoDB', level: 75, years: 2 },
      { name: 'Tailwind CSS', level: 90, years: 2 },
    ]
  },
  {
    id: 'ml',
    name: 'Data Science & ML',
    icon: ChartBarIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    skills: [
      { name: 'Python', level: 85, years: 4 },
      { name: 'TensorFlow/Keras', level: 70, years: 1 },
      { name: 'Pandas/NumPy', level: 80, years: 2 },
      { name: 'Data Visualization', level: 75, years: 2 },
      { name: 'Statistical Analysis', level: 80, years: 2 },
      { name: 'Jupyter Notebooks', level: 85, years: 2 },
    ]
  },
  {
    id: 'physics',
    name: 'Computational Physics',
    icon: BeakerIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    skills: [
      { name: 'Mathematical Modeling', level: 85, years: 3 },
      { name: 'Simulation Design', level: 80, years: 2 },
      { name: 'Astrophysics Computing', level: 75, years: 1 },
      { name: 'MATLAB/Octave', level: 70, years: 2 },
      { name: 'LaTeX', level: 80, years: 3 },
      { name: 'Research Methods', level: 85, years: 3 },
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Technologies',
    icon: WrenchScrewdriverIcon,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    skills: [
      { name: 'Git/GitHub', level: 90, years: 4 },
      { name: 'VS Code', level: 95, years: 4 },
      { name: 'Docker', level: 60, years: 1 },
      { name: 'Linux/Unix', level: 75, years: 3 },
      { name: 'Figma', level: 70, years: 2 },
      { name: 'Vercel/Netlify', level: 85, years: 2 },
    ]
  },
  {
    id: 'soft',
    name: 'Leadership & Soft Skills',
    icon: AcademicCapIcon,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    skills: [
      { name: 'Team Leadership', level: 90, years: 3 },
      { name: 'Mentoring', level: 85, years: 2 },
      { name: 'Project Management', level: 80, years: 2 },
      { name: 'Public Speaking', level: 75, years: 3 },
      { name: 'Technical Writing', level: 85, years: 3 },
      { name: 'Problem Solving', level: 95, years: 6 },
    ]
  },
];

export default function SkillsOverview() {
  const [activeCategory, setActiveCategory] = useState('web');
  
  const activeSkills = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            <WrenchScrewdriverIcon className="h-4 w-4 mr-2" />
            Technical Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical toolkit spans web development, data science, and computational physics, 
            enabling me to build innovative solutions across disciplines.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="inline-flex rounded-xl border border-gray-200 dark:border-dark-700 p-1 bg-gray-50 dark:bg-dark-800">
            {skillCategories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-dark-700 text-primary-600 dark:text-primary-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{category.name}</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          {/* Category Header */}
          <div className={`text-center mb-8 p-6 rounded-xl ${activeSkills?.bgColor}`}>
            <div className={`inline-flex p-3 rounded-lg bg-white dark:bg-dark-800 ${activeSkills?.color} mb-4`}>
              {activeSkills && <activeSkills.icon className="h-8 w-8" />}
            </div>
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
              {activeSkills?.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {activeCategory === 'web' && 'Building modern, scalable web applications with cutting-edge technologies'}
              {activeCategory === 'ml' && 'Extracting insights from data and building intelligent systems'}
              {activeCategory === 'physics' && 'Applying computational methods to solve complex physics problems'}
              {activeCategory === 'tools' && 'Leveraging industry-standard tools for efficient development workflows'}
              {activeCategory === 'soft' && 'Leading teams and projects while mentoring the next generation'}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSkills?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-800 rounded-lg p-6 border border-gray-200 dark:border-dark-700"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-dark-900 dark:text-white">
                    {skill.name}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{skill.level}%</span>
                    <span>•</span>
                    <span>{skill.years}y</span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 mb-2">
                  <motion.div
                    className={`h-2.5 rounded-full ${
                      activeCategory === 'web' ? 'bg-blue-600' :
                      activeCategory === 'ml' ? 'bg-green-600' :
                      activeCategory === 'physics' ? 'bg-purple-600' :
                      activeCategory === 'tools' ? 'bg-orange-600' :
                      'bg-pink-600'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
                
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {skill.level >= 90 ? 'Expert' : 
                   skill.level >= 80 ? 'Advanced' : 
                   skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              6+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Years Coding
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Technologies
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-green mb-2">
              25+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Projects Built
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-yellow mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              Students Taught
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see these skills in action? Check out my detailed skill breakdown and certifications.
          </p>
          <Link href="/skills">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Explore Full Skill Set
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
