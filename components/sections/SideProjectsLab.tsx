'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BeakerIcon, 
  RocketLaunchIcon, 
  CodeBracketIcon, 
  LightBulbIcon,
  CpuChipIcon,
  SparklesIcon,
  ArrowTopRightOnSquareIcon,
  HeartIcon
} from '@heroicons/react/24/outline'

const sideProjects = [
  {
    id: 'study-buddy',
    title: 'StudyBuddy AI',
    subtitle: 'Because studying alone is overrated',
    description: 'A smart study companion that creates personalized quizzes, tracks progress, and sends motivational quotes when you need them most.',
    status: 'Prototype',
    tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
    inspiration: 'Born from my own struggle to stay motivated during long study sessions',
    features: [
      'AI-generated practice questions based on your notes',
      'Spaced repetition algorithm for optimal memory retention',
      'Study streak tracking with achievement badges',
      'Pomodoro timer with physics facts during breaks'
    ],
    funFact: 'The AI sometimes generates questions so hard that even I can\'t answer them!',
    icon: <LightBulbIcon className="w-8 h-8" />,
    color: 'bg-gray-700',
    github: 'https://github.com/Yaseen-Saad/study-buddy-ai',
    demo: null
  },
  {
    id: 'physics-visualizer',
    title: 'Physics Playground',
    subtitle: 'Making abstract concepts tangible',
    description: 'Interactive visualizations of physics concepts that helped me (and my classmates) actually understand what equations mean.',
    status: 'Live',
    tech: ['React', 'Three.js', 'WebGL', 'TypeScript'],
    inspiration: 'Tired of memorizing formulas without understanding the beauty behind them',
    features: [
      'Real-time wave interference simulations',
      'Gravity well visualizer for general relativity',
      'Particle collision animations',
      'Interactive pendulum with adjustable parameters'
    ],
    funFact: 'My physics teacher now uses this in class instead of static diagrams!',
    icon: <SparklesIcon className="w-8 h-8" />,
    color: 'bg-gray-600',
    github: 'https://github.com/Yaseen-Saad/physics-playground',
    demo: 'https://physics-playground.yasoo.me'
  },
  {
    id: 'code-mentor',
    title: 'CodeMentor Bot',
    subtitle: 'Your 24/7 programming buddy',
    description: 'A Discord bot that helps fellow students with coding problems, provides hints without giving away answers, and celebrates coding achievements.',
    status: 'Active',
    tech: ['Python', 'Discord.py', 'SQLite', 'GitHub API'],
    inspiration: 'Wanting to help classmates without doing their homework for them',
    features: [
      'Code review with gentle suggestions',
      'Debugging hints that guide rather than solve',
      'Coding challenge of the day',
      'Progress tracking and celebration'
    ],
    funFact: 'Used by 200+ students in our school Discord server!',
    icon: <CodeBracketIcon className="w-8 h-8" />,
    color: 'bg-gray-800',
    github: 'https://github.com/Yaseen-Saad/code-mentor-bot',
    demo: null
  },
  {
    id: 'dream-tracker',
    title: 'DreamTracker',
    subtitle: 'Goals with gamification',
    description: 'A goal-tracking app with RPG elements. Level up by completing tasks, unlock achievements, and build your ideal future one quest at a time.',
    status: 'Beta',
    tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
    inspiration: 'Turning my college prep into an RPG made it way more fun',
    features: [
      'XP system for completed goals',
      'Achievement badges for milestones',
      'Daily quests and weekly challenges',
      'Progress visualization with beautiful charts'
    ],
    funFact: 'I\'m currently Level 47 in "College Application Preparation"!',
    icon: <RocketLaunchIcon className="w-8 h-8" />,
    color: 'bg-black',
    github: 'https://github.com/Yaseen-Saad/dream-tracker',
    demo: 'https://dreamtracker.yasoo.me'
  },
  {
    id: 'brain-dump',
    title: 'BrainDump',
    subtitle: 'Thoughts to organized knowledge',
    description: 'A note-taking app that automatically organizes random thoughts into structured knowledge graphs using AI.',
    status: 'Experimental',
    tech: ['Next.js', 'OpenAI', 'Neo4j', 'Tailwind'],
    inspiration: 'My brain generates ideas faster than I can organize them',
    features: [
      'Voice-to-text note capture',
      'AI-powered topic extraction and linking',
      'Visual knowledge graph',
      'Smart search across all notes'
    ],
    funFact: 'It once connected my physics homework to a random thought about pizza. Surprisingly insightful!',
    icon: <CpuChipIcon className="w-8 h-8" />,
    color: 'bg-gray-500',
    github: 'https://github.com/Yaseen-Saad/brain-dump',
    demo: null
  },
  {
    id: 'habit-stack',
    title: 'HabitStack',
    subtitle: 'Tiny habits, big changes',
    description: 'Micro-habit tracker based on atomic habits principles. Build life-changing routines one 2-minute habit at a time.',
    status: 'Planning',
    tech: ['Flutter', 'SQLite', 'Provider', 'Charts'],
    inspiration: 'Reading "Atomic Habits" and wanting to build the tracker I wish existed',
    features: [
      'Habit stacking suggestions',
      'Minimum viable habits (2-minute rule)',
      'Streak visualization',
      'Habit impact analytics'
    ],
    funFact: 'The app that will help me maintain good habits... if I can develop the habit of building it!',
    icon: <BeakerIcon className="w-8 h-8" />,
    color: 'bg-gray-400',
    github: null,
    demo: null
  }
]

type StatusType = 'Live' | 'Active' | 'Beta' | 'Prototype' | 'Experimental' | 'Planning';

const statusColors: Record<StatusType, string> = {
  'Live': 'bg-black',
  'Active': 'bg-gray-800',
  'Beta': 'bg-gray-600',
  'Prototype': 'bg-gray-700',
  'Experimental': 'bg-gray-500',
  'Planning': 'bg-gray-400'
}

export default function SideProjectsLab() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

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
          <h2 className="text-4xl md:text-6xl font-bold font-crimson mb-6 text-black dark:text-white">
            Side Projects Lab
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Welcome to my digital workshop! These are the passion projects born from late-night ideas, 
            everyday problems, and the irresistible urge to build solutions. Each one taught me something 
            new and solved a real problem (usually my own). 🧪
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sideProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden cursor-pointer hover:border-black dark:hover:border-white transition-all duration-300"
            >
              {/* Project Header */}
              <div className={`${project.color} text-white p-6`}>
                <div className="flex items-center justify-between mb-4">
                  {project.icon}
                  <span className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider ${statusColors[project.status]} text-white`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm opacity-90">{project.subtitle}</p>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <CodeBracketIcon className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                </div>

                {/* Expanded Details */}
                {selectedProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800"
                  >
                    <div className="space-y-4">
                      <div>
                        <h5 className="font-bold text-black dark:text-white mb-2">
                          <LightBulbIcon className="w-5 h-5 inline mr-2" />
                          Inspiration:
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{project.inspiration}</p>
                      </div>
                      
                      <div>
                        <h5 className="font-bold text-black dark:text-white mb-2">
                          <SparklesIcon className="w-5 h-5 inline mr-2" />
                          Key Features:
                        </h5>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                              <span className="text-black dark:text-white mt-0.5">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 dark:bg-gray-800 p-3 rounded">
                        <h5 className="font-bold text-black dark:text-white mb-1">
                          <HeartIcon className="w-5 h-5 inline mr-2" />
                          Fun Fact:
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400 italic">{project.funFact}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lab Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <BeakerIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">6</div>
            <div className="text-sm font-mono uppercase tracking-wider">Active Experiments</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <RocketLaunchIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">3</div>
            <div className="text-sm font-mono uppercase tracking-wider">Live Projects</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <HeartIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">200+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Users Helped</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <LightBulbIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">∞</div>
            <div className="text-sm font-mono uppercase tracking-wider">Ideas in Queue</div>
          </div>
        </motion.div>

        {/* Lab Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
            <BeakerIcon className="w-12 h-12 mx-auto mb-4 text-black dark:text-white" />
            <h3 className="text-2xl font-bold mb-4 text-black dark:text-white">Lab Philosophy</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Every project in this lab starts with a real problem I've faced. I don't build things 
              just to build them—I build them because they solve something meaningful, even if it's 
              just making my own life 1% better.
            </p>
            <p className="text-black dark:text-white font-semibold">
              "Code with purpose, experiment with passion, ship with pride."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
