'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon, BookOpenIcon, LightBulbIcon, SparklesIcon } from '@heroicons/react/24/outline'

const philosophicalTopics = [
  {
    id: 'purpose',
    title: 'Purpose & Meaning',
    icon: <LightBulbIcon className="w-6 h-6" />,
    quote: '"The unexamined life is not worth living."',
    author: 'Socrates',
    thoughts: 'I often wonder about the intersection of physics and purpose. Does understanding the universe give our lives more meaning, or does it humble us into realizing how small we are? I think both, and that\'s beautiful.',
    questions: [
      'What drives us to seek knowledge?',
      'Can science and spirituality coexist?',
      'How do we find purpose in an infinite universe?'
    ]
  },
  {
    id: 'consciousness',
    title: 'Consciousness & Reality',
    icon: <SparklesIcon className="w-6 h-6" />,
    quote: '"Reality is that which, when you stop believing in it, doesn\'t go away."',
    author: 'Philip K. Dick',
    thoughts: 'The hard problem of consciousness fascinates me. Are we just complex arrangements of atoms, or is there something more? When I code, I sometimes wonder if consciousness could emerge from sufficiently complex algorithms.',
    questions: [
      'What makes us conscious?',
      'Is free will an illusion?',
      'Could AI ever be truly conscious?'
    ]
  },
  {
    id: 'time',
    title: 'Time & Existence',
    icon: <BookOpenIcon className="w-6 h-6" />,
    quote: '"Time is an illusion. Lunchtime doubly so."',
    author: 'Douglas Adams',
    thoughts: 'Einstein showed us time is relative, but what does that mean for how we live? Sometimes I feel like I\'m racing against time, other times I feel suspended in it. Maybe the key is finding moments that feel eternal.',
    questions: [
      'Does time exist without observers?',
      'How should temporal relativity change how we live?',
      'What would immortality really be like?'
    ]
  },
  {
    id: 'knowledge',
    title: 'Knowledge & Ignorance',
    icon: <LightBulbIcon className="w-6 h-6" />,
    quote: '"The more I learn, the more I realize how much I don\'t know."',
    author: 'Einstein',
    thoughts: 'Every physics equation I learn opens ten new questions. Every line of code I write reveals the complexity I haven\'t grasped yet. This isn\'t frustrating—it\'s exhilarating. Ignorance isn\'t the enemy; complacency is.',
    questions: [
      'Is absolute knowledge possible?',
      'How do we balance confidence with humility?',
      'What\'s the relationship between wisdom and intelligence?'
    ]
  }
]

export default function PhilosophyCorner() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
            Philosophy Corner
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Where physics meets metaphysics, and curiosity knows no bounds. 
            Some thoughts that keep me up at night (in the best way possible).
          </p>
        </motion.div>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {philosophicalTopics.map((topic, index) => (
            <motion.button
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedTopic(selectedTopic === topic.id ? null : topic.id)}
              className={`p-6 rounded-lg border-2 text-left transition-all duration-300 ${
                selectedTopic === topic.id
                  ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black'
                  : 'border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white bg-white dark:bg-black'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                {topic.icon}
                <h3 className="font-semibold">{topic.title}</h3>
              </div>
              <p className={`text-sm ${
                selectedTopic === topic.id ? 'text-gray-300 dark:text-gray-700' : 'text-gray-600 dark:text-gray-400'
              }`}>
                {topic.quote}
              </p>
              <p className={`text-xs mt-1 ${
                selectedTopic === topic.id ? 'text-gray-400 dark:text-gray-600' : 'text-gray-500 dark:text-gray-500'
              }`}>
                — {topic.author}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Expanded Topic */}
        <AnimatePresence>
          {selectedTopic && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              {philosophicalTopics
                .filter(topic => topic.id === selectedTopic)
                .map(topic => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-800"
                  >
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-xl font-semibold mb-4">My Thoughts</h4>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                          {topic.thoughts}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-4">Questions I Ponder</h4>
                        <ul className="space-y-3">
                          {topic.questions.map((question, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <ChevronRightIcon className="w-4 h-4 mt-1 flex-shrink-0" />
                              <span className="text-gray-700 dark:text-gray-300">{question}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>

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
