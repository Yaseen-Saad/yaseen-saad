'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  CommandLineIcon,
  StarIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

const techCategories = [
  {
    id: 'frontend',
    title: 'Frontend Wizardry',
    icon: <CodeBracketIcon className="w-8 h-8" />,
    description: 'Making pixels dance and users smile',
    technologies: [
      { name: 'HTML', level: 100, color: 'bg-orange-500', years: 7 },
      { name: 'CSS', level: 100, color: 'bg-orange-500', years: 7 },
      { name: 'SASS/SCSS', level: 90, color: 'bg-orange-500', years: 5 },
      { name: 'Bootstrap/Tailwind CSS', level: 95, color: 'bg-cyan-500', years: 2 },
      { name: 'JavaScript', level: 95, color: 'bg-orange-500', years: 6 },
      { name: 'jQuery', level: 80, color: 'bg-blue-700', years: 5 },
      { name: 'TypeScript', level: 80, color: 'bg-blue-600', years: 1 },
      { name: 'three.js', level: 70, color: 'bg-indigo-500', years: 2 },
      { name: 'React', level: 90, color: 'bg-blue-500', years: 2 },
      { name: 'GSAP', level: 40, color: 'bg-orange-500', years: 3 },
      { name: 'Next.js', level: 85, color: 'bg-gray-800', years: 1.5 },
      { name: 'Jest', level: 60, color: 'bg-pink-400', years: 1 },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Sorcery',
    icon: <CpuChipIcon className="w-8 h-8" />,
    description: 'Server-side magic and database dancing',
    technologies: [
      { name: 'Firebase', level: 80, color: 'bg-orange-400', years: 1.5 },
      { name: 'Node.js', level: 85, color: 'bg-green-600', years: 2 },
      { name: 'Express.js', level: 75, color: 'bg-gray-600', years: 1.5 },
      { name: 'MongoDB', level: 70, color: 'bg-green-500', years: 1 },
      { name: 'Vercel', level: 60, color: 'bg-black', years: 1 },
      { name: 'MySQL', level: 60, color: 'bg-blue-300', years: 1 },
      { name: 'Socket.io', level: 65, color: 'bg-yellow-600', years: 1 },
      { name: 'Supabase', level: 60, color: 'bg-green-700', years: 1 },
      { name: 'Prisma', level: 65, color: 'bg-purple-700', years: 1 },
      { name: 'Django', level: 80, color: 'bg-green-700', years: 1 },
      { name: 'Flask', level: 75, color: 'bg-gray-700', years: 1 },
    ]
  },
  {
    id: 'computational-science',
    title: 'Computational Science',
    icon: <AcademicCapIcon className="w-8 h-8" />,
    description: 'Solving scientific problems with code and data.',
    technologies: [
      { name: 'Python', level: 90, color: 'bg-yellow-500', years: 3 },
      { name: 'NumPy', level: 85, color: 'bg-blue-300', years: 2 },
      { name: 'SciPy', level: 80, color: 'bg-blue-400', years: 2 },
      { name: 'SymPy', level: 55, color: 'bg-green-700', years: 1 },
      { name: 'Jupyter', level: 90, color: 'bg-orange-400', years: 2 },
      { name: 'Pandas', level: 80, color: 'bg-green-400', years: 2 },
      { name: 'Matplotlib', level: 85, color: 'bg-red-500', years: 2 },
      { name: 'Wolfram Mathematica', level: 50, color: 'bg-red-700', years: 1 },
      { name: 'LaTeX', level: 70, color: 'bg-green-400', years: 1 },
    ]
  },
  {
    id: 'automations-n8n',
    title: 'Automations with n8n',
    icon: <CloudIcon className="w-8 h-8" />,
    description: 'Automating workflows and integrating AI-driven tasks.',
    technologies: [
      { name: 'n8n', level: 85, color: 'bg-green-600', years: 1 },
      { name: 'Node.js', level: 80, color: 'bg-green-500', years: 2 },
      { name: 'REST APIs', level: 75, color: 'bg-blue-400', years: 2 },
      { name: 'Webhooks', level: 70, color: 'bg-gray-600', years: 1 },
      { name: 'Zapier', level: 30, color: 'bg-yellow-400', years: 1 },
      { name: 'IFTTT', level: 65, color: 'bg-blue-300', years: 1 },
      { name: 'Make.com', level: 65, color: 'bg-blue-300', years: 1 },
      { name: 'Google Apps Script', level: 60, color: 'bg-green-400', years: 1 },
      { name: 'Slack Bots', level: 55, color: 'bg-blue-500', years: 0.5 },
    ]
  },
  {
    id: 'ui-ux',
    title: 'UI/UX',
    icon: <StarIcon className="w-8 h-8" />,
    description: 'Designing beautiful and intuitive user experiences.',
    technologies: [
      { name: 'Figma', level: 85, color: 'bg-purple-400', years: 2 },
      { name: 'Adobe Photoshop', level: 70, color: 'bg-pink-400', years: 1 },
     ]
  }
]

export default function TechStackShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('frontend')
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  const currentCategory = techCategories.find(cat => cat.id === selectedCategory)!

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
            Tech Stack Showcase
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My digital arsenal - the languages, frameworks, and tools I wield to transform
            caffeine into code and ideas into reality. Each skill bar represents countless
            hours of debugging, learning, and occasional triumphant "It works!" moments.
          </p>
        </motion.div>

        {/* Category Selection */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {techCategories.map((category, index) => (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedCategory(category.id)}
              className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${selectedCategory === category.id
                ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                : 'border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white bg-white dark:bg-black'
                }`}
            >
              <div className="flex items-center gap-3 mb-3">
                {category.icon}
                <h3 className="font-bold text-lg">{category.title}</h3>
              </div>
              <p className={`text-sm ${selectedCategory === category.id
                ? 'text-gray-300 dark:text-gray-700'
                : 'text-gray-600 dark:text-gray-400'
                }`}>
                {category.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Tech Skills Display */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {currentCategory.technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
                className="group"
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-black dark:text-white">{tech.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {tech.years} {tech.years === 1 ? 'year' : 'years'}
                    </span>
                    <span className="text-sm font-bold text-black dark:text-white">{tech.level}%</span>
                  </div>
                </div>

                <div className="relative">
                  <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${tech.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className={`h-full ${tech.color} relative`}
                    >
                      {hoveredTech === tech.name && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-white bg-opacity-20"
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Skill level indicators */}
                  <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-500">
                    <span>Beginner</span>
                    <span>Intermediate</span>
                    <span>Advanced</span>
                    <span>Expert</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Hours Coding</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">∞</div>
            <div className="text-sm font-mono uppercase tracking-wider">Stack Overflow Visits</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">20+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Projects Built</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-sm font-mono uppercase tracking-wider">Years Learning</div>
          </div>
        </motion.div>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
            <StarIcon className="w-8 h-8 mx-auto mb-4 text-yellow-500" />
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">The Journey Continues</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Every percentage point represents late nights, debugging sessions, and those magical moments
              when everything finally clicks. I'm not just learning technologies—I'm building the tools
              to change the world, one line of code at a time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
