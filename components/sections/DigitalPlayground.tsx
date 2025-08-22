'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BeakerIcon, 
  CommandLineIcon, 
  CubeTransparentIcon,
  SparklesIcon,
  PlayIcon,
  CodeBracketIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'

const experiments = [
  {
    id: 'physics-simulator',
    title: 'Physics Particle Simulator',
    description: 'Interactive particle physics simulation with gravity, collisions, and quantum effects',
    status: 'Live',
    tech: ['Three.js', 'WebGL', 'Physics Engine'],
    icon: <BeakerIcon className="w-6 h-6" />,
    color: 'bg-black dark:bg-white text-white dark:text-black',
    interactive: true
  },
  {
    id: 'code-visualizer',
    title: 'Algorithm Visualizer',
    description: 'Real-time visualization of sorting algorithms, pathfinding, and data structures',
    status: 'In Progress',
    tech: ['React', 'D3.js', 'Canvas API'],
    icon: <CommandLineIcon className="w-6 h-6" />,
    color: 'bg-gray-800 dark:bg-gray-200 text-white dark:text-black',
    interactive: true
  },
  {
    id: 'quantum-lab',
    title: 'Quantum Circuit Designer',
    description: 'Design and simulate quantum circuits with visual quantum gate operations',
    status: 'Concept',
    tech: ['Qiskit', 'Python', 'Quantum Computing'],
    icon: <CubeTransparentIcon className="w-6 h-6" />,
    color: 'bg-gray-700 dark:bg-gray-300 text-white dark:text-black',
    interactive: false
  },
  {
    id: 'ai-playground',
    title: 'Neural Network Playground',
    description: 'Interactive ML model training with real-time visualization of learning',
    status: 'Planning',
    tech: ['TensorFlow.js', 'ML5.js', 'WebGL'],
    icon: <SparklesIcon className="w-6 h-6" />,
    color: 'bg-gray-600 dark:bg-gray-400 text-white dark:text-black',
    interactive: false
  }
]

const ParticleSimulation = () => {
  const [particles, setParticles] = useState<any[]>([])
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setParticles(prev => prev.map(p => ({
          ...p,
          x: (p.x + p.vx + 400) % 400,
          y: (p.y + p.vy + 200) % 200,
          vx: p.vx + (Math.random() - 0.5) * 0.1,
          vy: p.vy + (Math.random() - 0.5) * 0.1
        })))
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isRunning])

  const initializeParticles = () => {
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 350,
      y: Math.random() * 150,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      color: `hsl(${Math.random() * 360}, 70%, 60%)`
    }))
    setParticles(newParticles)
  }

  return (
    <div className="bg-black rounded-lg p-4 relative overflow-hidden h-48">
      <div className="absolute inset-0">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute w-3 h-3 rounded-full"
            style={{
              backgroundColor: particle.color,
              left: particle.x,
              top: particle.y,
              boxShadow: `0 0 10px ${particle.color}`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        ))}
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
        <button
          onClick={() => {
            initializeParticles()
            setIsRunning(true)
          }}
          className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 transition-colors"
        >
          Start
        </button>
        <button
          onClick={() => setIsRunning(false)}
          className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600 transition-colors"
        >
          Stop
        </button>
        <button
          onClick={initializeParticles}
          className="px-3 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default function DigitalPlayground() {
  const [selectedExperiment, setSelectedExperiment] = useState<string | null>(null)

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full mb-6">
            <RocketLaunchIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-mono font-bold text-purple-600 dark:text-purple-400">DIGITAL PLAYGROUND</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Digital Playground
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Where code meets creativity! These are my digital experiments - simulations, 
            and tools that bring abstract concepts to life. Explore my creative coding journey!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiments.map((experiment, index) => (
            <motion.div
              key={experiment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-black dark:hover:border-white transition-all duration-300"
            >
              {/* Header */}
              <div className={`${experiment.color} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {experiment.icon}
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      experiment.status === 'Live' ? 'bg-green-500' :
                      experiment.status === 'In Progress' ? 'bg-yellow-500' :
                      experiment.status === 'Concept' ? 'bg-blue-500' : 'bg-gray-500'
                    }`}>
                      {experiment.status}
                    </span>
                  </div>
                  {experiment.interactive && (
                    <button
                      onClick={() => setSelectedExperiment(
                        selectedExperiment === experiment.id ? null : experiment.id
                      )}
                      className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <PlayIcon className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{experiment.title}</h3>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {experiment.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {experiment.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-xs font-mono rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive Demo */}
                {selectedExperiment === experiment.id && experiment.id === 'physics-simulator' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mb-4"
                  >
                    <ParticleSimulation />
                  </motion.div>
                )}

                {selectedExperiment === experiment.id && experiment.id === 'code-visualizer' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mb-4 bg-gray-900 rounded-lg p-4 h-48 relative overflow-hidden"
                  >
                    <div className="text-green-400 font-mono text-sm space-y-1">
                      <div>// Bubble Sort Visualization</div>
                      <div className="flex gap-1 mt-4">
                        {[64, 34, 25, 12, 22, 11, 90].map((num, i) => (
                          <motion.div
                            key={i}
                            className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                            animate={{ height: `${num / 2}px` }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                          >
                            {num}
                          </motion.div>
                        ))}
                      </div>
                      <div className="text-gray-400 mt-4">
                        <div>Comparing elements...</div>
                        <div>Swapping: 64 ↔ 34</div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
                    <CodeBracketIcon className="w-4 h-4" />
                    View Code
                  </button>
                  {experiment.status === 'Live' && (
                    <button className="flex items-center gap-2 px-4 py-2 border border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors">
                      <PlayIcon className="w-4 h-4" />
                      Try Live
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 text-center"
        >
          <div className="bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">12+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Experiments</div>
          </div>
          <div className="bg-gray-800 dark:bg-gray-200 text-white dark:text-black p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Hours Coded</div>
          </div>
          <div className="bg-gray-600 dark:bg-gray-400 text-white dark:text-black p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">∞</div>
            <div className="text-sm font-mono uppercase tracking-wider">Ideas</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
            <SparklesIcon className="w-12 h-12 mx-auto mb-4 text-purple-500" />
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Got an Idea?</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              I'm always building new experiments and exploring wild ideas. 
              If you have a cool concept or want to collaborate on something crazy, let's make it happen!
            </p>
            <button className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 font-semibold">
              Let's Build Something Cool!
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
