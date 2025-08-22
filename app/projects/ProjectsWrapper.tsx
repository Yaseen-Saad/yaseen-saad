'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  GlobeAltIcon, 
  BeakerIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  AcademicCapIcon,
  ChartBarIcon,
  LightBulbIcon,
  StarIcon,
  CalendarIcon,
  UsersIcon,
  TrophyIcon,
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    title: 'Egyptian Physics Olympiad (EPhO) Platform',
    subtitle: 'Revolutionizing Physics Competitions in Egypt',
    category: 'Education & Competitions',
    status: 'Live',
    date: '2024',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma', 'Socket.io'],
    description: 'A comprehensive platform that transformed physics competitions in Egypt, featuring real-time scoring, automated grading, interactive problem sets, and live leaderboards. Successfully hosted multiple national competitions.',
    features: [
      'Real-time competition system with live scoring',
      'Automated grading with partial credit support',
      'Interactive physics problem builder',
      'Multi-format question types (MCQ, numerical, theoretical)',
      'Live leaderboards and analytics dashboard',
      'Team management and registration system',
      'Scalable infrastructure supporting 1000+ concurrent users'
    ],
    impact: {
      users: '2,500+ students',
      competitions: '15+ national events',
      uptime: '99.8% reliability',
      growth: '300% participation increase'
    },
    links: {
      demo: 'https://epho.egystu.com',
      details: 'Private repository - Educational institution project'
    },
    icon: TrophyIcon,
    color: 'from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950',
    accentColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 2,
    title: 'Stellar Evolution Prediction Model',
    subtitle: 'Machine Learning Meets Astrophysics',
    category: 'AI & Astrophysics',
    status: 'Research',
    date: '2024',
    tech: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib', 'Astronomy APIs'],
    description: 'Advanced machine learning model that predicts stellar evolution phases and lifespans using observational data. Combines deep learning with astrophysical modeling for unprecedented accuracy.',
    features: [
      'Neural network trained on Hertzsprung-Russell diagram data',
      'Multi-parameter stellar classification system',
      'Evolutionary timeline prediction algorithms',
      'Integration with astronomical databases (Simbad, VizieR)',
      'Interactive visualization of stellar evolution paths',
      'Statistical analysis of prediction accuracy',
      'Research paper prepared for publication'
    ],
    impact: {
      accuracy: '94.2% prediction accuracy',
      dataset: '50,000+ stellar objects',
      models: '5 different ML architectures',
      research: 'Pending journal submission'
    },
    links: {
      github: 'https://github.com/yaseen-saad/stellar-evolution-ml',
      paper: 'https://arxiv.org/abs/2024.xxxxx'
    },
    icon: BeakerIcon,
    color: 'from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950',
    accentColor: 'text-purple-600 dark:text-purple-400'
  },
  {
    id: 3,
    title: 'Web Development Bootcamp Platform',
    subtitle: 'Teaching 110+ Students to Code',
    category: 'Education & Mentorship',
    status: 'Completed',
    date: '2023-2024',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    description: 'Comprehensive online learning platform that successfully taught web development to 110+ students through interactive lessons, live coding sessions, and project-based learning.',
    features: [
      'Progressive curriculum from HTML basics to full-stack development',
      'Live coding sessions with real-time collaboration',
      'Interactive code editor with syntax highlighting',
      'Project submission and peer review system',
      'Progress tracking and achievement badges',
      'Community forum for student discussions',
      'Mentor dashboard for tracking student progress'
    ],
    impact: {
      students: '110+ active learners',
      completion: '87% course completion rate',
      projects: '340+ student projects',
      satisfaction: '4.8/5 average rating'
    },
    links: {
      demo: 'https://webdev-bootcamp.yasoo.me',
      testimonials: '/testimonials'
    },
    icon: AcademicCapIcon,
    color: 'from-green-50 to-emerald-50 dark:from-green-950 dark:to-emerald-950',
    accentColor: 'text-green-600 dark:text-green-400'
  },
  {
    id: 4,
    title: 'Aura Hunt: Gamified School Event',
    subtitle: 'Engaging 230+ Students Through Technology',
    category: 'Gamification & Events',
    status: 'Completed',
    date: '2024',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'QR Codes', 'PWA'],
    description: 'Revolutionary gamified treasure hunt system that transformed traditional school events into an interactive digital experience, engaging over 230 students in collaborative problem-solving.',
    features: [
      'QR code-based location verification system',
      'Real-time team progress tracking',
      'Multi-stage challenge progression',
      'Live leaderboard with dynamic rankings',
      'Push notifications for game updates',
      'Progressive Web App for offline functionality',
      'Admin panel for event management and monitoring'
    ],
    impact: {
      participants: '230+ active students',
      engagement: '96% participation rate',
      completion: '78% completion rate',
      feedback: '4.9/5 event satisfaction'
    },
    links: {
      case_study: '/projects/aura-hunt-case-study',
      github: 'https://github.com/yaseen-saad/aura-hunt'
    },
    icon: RocketLaunchIcon,
    color: 'from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950',
    accentColor: 'text-orange-600 dark:text-orange-400'
  }
]

export default function ProjectsWrapper() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const categories = ['All', 'Education & Competitions', 'AI & Astrophysics', 'Education & Mentorship', 'Gamification & Events']
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-black dark:text-white">
            Project Universe
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Explore the digital cosmos where physics meets code, education meets innovation, 
            and ideas transform into reality. Each project is a star in my constellation of curiosity.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                  : 'bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-gradient-to-br ${project.color} border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer`}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 bg-white dark:bg-gray-800 rounded-xl ${project.accentColor}`}>
                    <project.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'Live' 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : project.status === 'Research'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{project.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-black dark:text-white">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{project.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Expandable Content */}
              {selectedProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-300 dark:border-gray-600 pt-6 mt-6"
                >
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Metrics */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-black dark:text-white mb-3">Impact & Metrics</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(project.impact).map(([key, value], impactIndex) => (
                        <div key={impactIndex} className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                          <div className="text-lg font-bold text-black dark:text-white">{value}</div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">{key.replace('_', ' ')}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    {Object.entries(project.links).map(([linkType, url], linkIndex) => (
                      <a
                        key={linkIndex}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium"
                      >
                        {linkType.charAt(0).toUpperCase() + linkType.slice(1).replace('_', ' ')}
                        <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-16 p-8 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
            Have an Idea? Let's Build Something Amazing Together
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Whether it's a physics simulation, an educational platform, or the next big innovation - 
            I'm always excited to collaborate on projects that make a difference.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
          >
            Start a Conversation
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}
