'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpenIcon, 
  CodeBracketIcon, 
  AcademicCapIcon, 
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const resourceCategories = [
  {
    id: 'physics',
    title: 'Physics & Math',
    icon: <AcademicCapIcon className="w-6 h-6" />,
    color: 'border-blue-200 dark:border-blue-800',
    resources: [
      {
        name: '3Blue1Brown',
        type: 'YouTube Channel',
        url: 'https://www.youtube.com/@3blue1brown',
        description: 'Visual mathematics that actually makes sense. Grant Sanderson is a wizard.',
        favorite: true
      },
      {
        name: 'Feynman Lectures',
        type: 'Book Series',
        url: 'https://www.feynmanlectures.caltech.edu/',
        description: 'Free online access to the legendary physics lectures. Pure gold.',
        favorite: true
      },
      {
        name: 'Khan Academy Physics',
        type: 'Online Course',
        url: 'https://www.khanacademy.org/science/physics',
        description: 'Solid foundation building. Where I started my physics journey.'
      },
      {
        name: 'MIT OpenCourseWare',
        type: 'University Courses',
        url: 'https://ocw.mit.edu/search/?d=Physics&s=department_course_numbers.sort_coursenum',
        description: 'Free MIT courses. Sometimes I pretend I\'m studying at MIT.'
      }
    ]
  },
  {
    id: 'programming',
    title: 'Programming & CS',
    icon: <CodeBracketIcon className="w-6 h-6" />,
    color: 'border-green-200 dark:border-green-800',
    resources: [
      {
        name: 'The Odin Project',
        type: 'Full Stack Course',
        url: 'https://www.theodinproject.com/',
        description: 'Comprehensive web development curriculum. Taught me everything I know.',
        favorite: true
      },
      {
        name: 'MDN Web Docs',
        type: 'Documentation',
        url: 'https://developer.mozilla.org/',
        description: 'The holy grail of web development documentation.'
      },
      {
        name: 'CS50 Harvard',
        type: 'University Course',
        url: 'https://cs50.harvard.edu/x/',
        description: 'David Malan makes computer science feel like magic.',
        favorite: true
      },
      {
        name: 'React Documentation',
        type: 'Framework Docs',
        url: 'https://react.dev/',
        description: 'My go-to for all things React. Clean and comprehensive.'
      }
    ]
  },
  {
    id: 'philosophy',
    title: 'Philosophy & Thinking',
    icon: <BookOpenIcon className="w-6 h-6" />,
    color: 'border-purple-200 dark:border-purple-800',
    resources: [
      {
        name: 'Stanford Encyclopedia of Philosophy',
        type: 'Reference',
        url: 'https://plato.stanford.edu/',
        description: 'Academic but accessible. Where I go when I want to think deeply.',
        favorite: true
      },
      {
        name: 'The School of Life',
        type: 'YouTube Channel',
        url: 'https://www.youtube.com/@theschooloflifetv',
        description: 'Philosophy for everyday life. Makes ancient wisdom relevant.'
      },
      {
        name: 'Crash Course Philosophy',
        type: 'Educational Series',
        url: 'https://www.youtube.com/playlist?list=PL8dPuuaLjXtNgK6MZucdYldNkMybYIHKR',
        description: 'Quick and engaging philosophy overviews.'
      },
      {
        name: 'Brain Pickings (The Marginalian)',
        type: 'Blog',
        url: 'https://www.themarginalian.org/',
        description: 'Maria Popova\'s brilliant synthesis of ideas across disciplines.'
      }
    ]
  },
  {
    id: 'general',
    title: 'General Learning',
    icon: <GlobeAltIcon className="w-6 h-6" />,
    color: 'border-orange-200 dark:border-orange-800',
    resources: [
      {
        name: 'TED-Ed',
        type: 'Educational Videos',
        url: 'https://ed.ted.com/',
        description: 'Short, animated lessons on literally everything.',
        favorite: true
      },
      {
        name: 'Coursera',
        type: 'Online Platform',
        url: 'https://www.coursera.org/',
        description: 'University-level courses from top institutions.'
      },
      {
        name: 'Wikipedia',
        type: 'Encyclopedia',
        url: 'https://en.wikipedia.org/',
        description: 'Yes, really. The rabbit hole of human knowledge.'
      },
      {
        name: 'ArXiv',
        type: 'Research Papers',
        url: 'https://arxiv.org/',
        description: 'Latest research in physics, math, and CS. When I feel ambitious.'
      }
    ]
  }
]

export default function ResourceLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('physics')

  const selectedResources = resourceCategories.find(cat => cat.id === selectedCategory)?.resources || []

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Resource Library
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            The digital tools, courses, and resources that shaped my learning journey. 
            Consider this my curated collection of intellectual gold mines.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {resourceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                  : 'border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white bg-white dark:bg-black'
              }`}
            >
              {category.icon}
              <span className="font-semibold">{category.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {selectedResources.map((resource, index) => (
            <motion.a
              key={resource.name}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-black dark:hover:border-white transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg group-hover:text-black dark:group-hover:text-white transition-colors">
                    {resource.name}
                  </h3>
                  {resource.favorite && (
                    <HeartIcon className="w-5 h-5 text-black dark:text-white fill-current" />
                  )}
                </div>
                <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              </div>
              
              <div className="mb-3">
                <span className="inline-block bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full text-gray-600 dark:text-gray-400">
                  {resource.type}
                </span>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {resource.description}
              </p>
            </motion.a>
          ))}
        </motion.div>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
            <StarIcon className="w-8 h-8 mx-auto mb-4 text-black dark:text-white" />
            <h3 className="text-xl font-bold mb-4">A Personal Note</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              These resources represent countless hours of curiosity-driven learning. 
              Some I discovered by accident, others were recommended by incredible teachers and mentors. 
              All of them shaped how I think about the world. Happy exploring!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
