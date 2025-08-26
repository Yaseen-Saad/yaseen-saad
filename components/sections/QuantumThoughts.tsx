'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  LightBulbIcon,
  BeakerIcon,
  PuzzlePieceIcon,
  BookOpenIcon,
  StarIcon,
  QuestionMarkCircleIcon,
  SparklesIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

const quantumThoughts = [
  {
    id: 'multiverse-dreams',
    category: 'Science',
    thought: "If every decision creates a parallel universe, there's a version of me who actually understood electromagnetic waves on the first try.",
    depth: 'Deep',
    field: 'Physics',
    date: '2024-10-17',
    icon: <ArrowPathIcon className="w-5 h-5" />,
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'universe-debug',
    category: 'Science',
    thought: "What if dark matter is just the universe's equivalent of commented-out code that nobody wants to delete?",
    depth: 'Shower Thought',
    field: 'Astrophysics',
    date: '2024-12-10',
    icon: <BeakerIcon className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'ai-consciousness',
    category: 'Life',
    thought: "If AI becomes conscious, will it experience imposter syndrome when it realizes it's 'just' pattern matching?",
    depth: 'Deep',
    field: 'Artificial Intelligence',
    date: '2024-12-08',
    icon: <QuestionMarkCircleIcon className="w-5 h-5" />,
    color: 'from-orange-500 to-red-600'
  },
]

const thoughtCategories = [
  'All Thoughts',
  'Science',
  'Religon',
  'STEM Schools',
  'Life',
  'Philosophy',
]

export default function QuantumThoughts() {
  const [selectedCategory, setSelectedCategory] = useState('All Thoughts')

  const filteredThoughts = selectedCategory === 'All Thoughts'
    ? quantumThoughts
    : quantumThoughts.filter(thought => thought.category === selectedCategory)

  const getDepthColor = (depth: string) => {
    switch (depth) {
      case 'Deep': return 'bg-black dark:bg-white text-white dark:text-black'
      case 'Medium': return 'bg-gray-700 dark:bg-gray-300 text-white dark:text-black'
      case 'Shower Thought': return 'bg-gray-500 dark:bg-gray-500 text-white'
      case 'Reflective': return 'bg-gray-600 dark:bg-gray-400 text-white dark:text-black'
      case 'Relatable': return 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black'
      default: return 'bg-gray-400 dark:bg-gray-600 text-white'
    }
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">

            Mind Fragments
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Random thoughts, philosophical musings, and "shower thoughts" about physics,
            programming, and the universe. My brain's debug console, basically.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {thoughtCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${selectedCategory === category
                ? 'bg-black dark:bg-white text-white dark:text-black'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Thoughts Grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
            {filteredThoughts.map((thought, index) => (
              <motion.div
                key={thought.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-black dark:hover:border-white transition-all duration-300"
              >
                {/* Header */}
                <div className="bg-black dark:bg-white text-white dark:text-black p-4">
                  <div className="flex items-center justify-between mb-2">
                    {thought.icon}
                    <span className="text-xs font-mono opacity-80">{thought.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDepthColor(thought.depth)}`}>
                      {thought.depth}
                    </span>
                    <span className="text-xs opacity-80">{thought.field}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h4 className="font-medium text-black dark:text-white mb-2 text-sm">{thought.category}</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic text-sm">
                    "{thought.thought}"
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Thought Stats */}
            <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-4">
              <h4 className="font-bold text-black dark:text-white mb-3 text-sm">Mind Stats</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600 dark:text-gray-400">Total Thoughts</span>
                  <span className="font-mono font-bold text-black dark:text-white">247</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600 dark:text-gray-400">Deep Thoughts</span>
                  <span className="font-mono font-bold text-black dark:text-white">42</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600 dark:text-gray-400">Shower Thoughts</span>
                  <span className="font-mono font-bold text-black dark:text-white">89</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600 dark:text-gray-400">Mind Blown</span>
                  <span className="font-mono font-bold text-black dark:text-white">∞</span>
                </div>
              </div>
            </div>

            {/* Philosophy Corner */}
            <div className="bg-black dark:bg-white text-white dark:text-black rounded-lg p-4">
              <QuestionMarkCircleIcon className="w-6 h-6 mb-3" />
              <h4 className="font-bold mb-2 text-sm">Philosophy Corner</h4>
              <p className="text-xs leading-relaxed mb-3">
                "The real question isn't whether machines think, but whether humans do."
                - B.F. Skinner (but also me, when debugging at 3 AM)
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-black dark:bg-white text-white dark:text-black rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let's Think Together</h3>
            <p className="mb-6 opacity-90">
              Have thoughts on any of these topics? Disagree with my perspectives? 
              I'd love to hear your take and engage in meaningful dialogue.
            </p>
            <motion.a
              href="mailto:yaseen@yasoo.me"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white dark:bg-black text-black dark:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-900"
            >
              Start a Conversation
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
