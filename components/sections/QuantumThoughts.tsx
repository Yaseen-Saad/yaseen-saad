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
    category: 'Physics Musings',
    thought: "If every decision creates a parallel universe, there's a version of me who actually understood quantum mechanics on the first try.",
    depth: 'Deep',
    field: 'Quantum Physics',
    date: '2024-12-17',
    icon: <ArrowPathIcon className="w-5 h-5" />,
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'code-consciousness',
    category: 'Tech Philosophy',
    thought: "Every line of code is a thought crystallized. Programming isn't just problem-solving; it's externalized thinking.",
    depth: 'Medium',
    field: 'Computer Science',
    date: '2024-12-15',
    icon: <LightBulbIcon className="w-5 h-5" />,
    color: 'from-green-500 to-teal-600'
  },
  {
    id: 'universe-debug',
    category: 'Cosmic Debugging',
    thought: "What if dark matter is just the universe's equivalent of commented-out code that nobody wants to delete?",
    depth: 'Shower Thought',
    field: 'Astrophysics',
    date: '2024-12-10',
    icon: <BeakerIcon className="w-5 h-5" />,
    color: 'from-purple-500 to-pink-600'
  },
  {
    id: 'ai-consciousness',
    category: 'AI Ethics',
    thought: "If AI becomes conscious, will it experience imposter syndrome when it realizes it's 'just' pattern matching?",
    depth: 'Deep',
    field: 'Artificial Intelligence',
    date: '2024-12-08',
    icon: <QuestionMarkCircleIcon className="w-5 h-5" />,
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'learning-paradox',
    category: 'Education Philosophy',
    thought: "The more I learn, the more I realize how little I know. But that's not discouraging—it's exhilarating!",
    depth: 'Reflective',
    field: 'Learning',
    date: '2024-12-05',
    icon: <BookOpenIcon className="w-5 h-5" />,
    color: 'from-teal-500 to-blue-600'
  },
  {
    id: 'time-coding',
    category: 'Time Perception',
    thought: "Time moves differently when coding. 5 minutes debugging feels like 5 hours, but 5 hours building something cool feels like 5 minutes.",
    depth: 'Relatable',
    field: 'Programming',
    date: '2024-12-03',
    icon: <PuzzlePieceIcon className="w-5 h-5" />,
    color: 'from-indigo-500 to-purple-600'
  }
]

const thoughtCategories = [
  'All Thoughts',
  'Physics Musings', 
  'Tech Philosophy', 
  'Cosmic Debugging', 
  'AI Ethics', 
  'Education Philosophy',
  'Time Perception'
]

const RandomThoughtGenerator = () => {
  const [currentThought, setCurrentThought] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)

  const randomThoughts = [
    "What if electrons have social media accounts?",
    "Is debugging just applied philosophy?",
    "Do quantum particles procrastinate?",
    "Can you recursively think about recursion?",
    "Is the speed of light just universe's bandwidth limit?",
    "Do black holes have error logs?",
    "Is consciousness just an emergent property of complex enough if-else statements?",
    "What if prime numbers are the universe's way of keeping secrets?"
  ]

  const generateRandomThought = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setCurrentThought(Math.floor(Math.random() * randomThoughts.length))
      setIsGenerating(false)
    }, 1000)
  }

  return (
    <div className="bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg border border-gray-800 dark:border-gray-200">
      <div className="text-center">
        <SparklesIcon className="w-8 h-8 mx-auto mb-4" />
        <h4 className="font-bold mb-4">Random Thought Generator</h4>
        <motion.div
          key={currentThought}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 dark:bg-gray-100 rounded-lg p-4 mb-4 min-h-[80px] flex items-center justify-center"
        >
          {isGenerating ? (
            <div className="animate-spin">
              <BeakerIcon className="w-6 h-6" />
            </div>
          ) : (
            <p className="text-center italic text-sm">"{randomThoughts[currentThought]}"</p>
          )}
        </motion.div>
        <button
          onClick={generateRandomThought}
          disabled={isGenerating}
          className="px-4 py-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black rounded-lg hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors disabled:opacity-50 text-sm"
        >
          {isGenerating ? 'Generating...' : 'Generate Random Thought'}
        </button>
      </div>
    </div>
  )
}

export default function QuantumThoughts() {
  const [selectedCategory, setSelectedCategory] = useState('All Thoughts')
  const [selectedThought, setSelectedThought] = useState<string | null>(null)

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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-6">
            <LightBulbIcon className="w-5 h-5 text-black dark:text-white" />
            <span className="text-sm font-mono font-bold text-black dark:text-white">QUANTUM THOUGHTS</span>
          </div>
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
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm ${
                selectedCategory === category
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
                onClick={() => setSelectedThought(selectedThought === thought.id ? null : thought.id)}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden cursor-pointer hover:border-black dark:hover:border-white transition-all duration-300"
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

                  {selectedThought === thought.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-800"
                    >
                      <div className="space-y-2 text-xs text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <StarIcon className="w-3 h-3" />
                          <span>Related concepts: {thought.field}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BookOpenIcon className="w-3 h-3" />
                          <span>Thought triggered by: Late night coding session</span>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black rounded text-xs hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                            Share Thought
                          </button>
                          <button className="px-2 py-1 border border-black dark:border-white text-black dark:text-white rounded text-xs hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                            Add Comment
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Random Thought Generator */}
            <RandomThoughtGenerator />

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
              <button className="text-xs font-mono uppercase tracking-wider opacity-80 hover:opacity-100 transition-opacity">
                Random Quote →
              </button>
            </div>
          </div>
        </div>

        {/* Inspiration Sources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-black dark:text-white">
            Where These Thoughts Come From
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <BeakerIcon className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h4 className="font-medium text-black dark:text-white mb-1 text-sm">Shower Time</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Where all the best ideas happen</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <LightBulbIcon className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h4 className="font-medium text-black dark:text-white mb-1 text-sm">Coding Sessions</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">3 AM debugging wisdom</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <BookOpenIcon className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h4 className="font-medium text-black dark:text-white mb-1 text-sm">Reading</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Physics papers & philosophy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                <StarIcon className="w-6 h-6 text-white dark:text-black" />
              </div>
              <h4 className="font-medium text-black dark:text-white mb-1 text-sm">Stargazing</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">Contemplating the cosmos</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
