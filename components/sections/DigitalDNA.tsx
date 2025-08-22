'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  BeakerIcon,
  CodeBracketIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

interface DNAStrand {
  trait: string;
  percentage: number;
  description: string;
  icon: any;
  color: string;
  examples: string[];
}

export default function DigitalDNA() {
  const [selectedStrand, setSelectedStrand] = useState<number | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const dnaStrands: DNAStrand[] = [
    {
      trait: "Curiosity Gene",
      percentage: 98,
      description: "Insatiable hunger for understanding how things work",
      icon: LightBulbIcon,
      color: "from-yellow-400 to-amber-500",
      examples: ["Why does time dilate?", "How do neural networks learn?", "What if we could...?"]
    },
    {
      trait: "Problem Solver DNA",
      percentage: 95,
      description: "Natural ability to break down complex challenges",
      icon: PuzzlePieceIcon,
      color: "from-blue-400 to-indigo-500",
      examples: ["Algorithm optimization", "Physics problem decomposition", "System architecture"]
    },
    {
      trait: "Creative Coding Sequence",
      percentage: 92,
      description: "Turning abstract ideas into functional reality",
      icon: CodeBracketIcon,
      color: "from-green-400 to-emerald-500",
      examples: ["Interactive animations", "Physics simulations", "User experience magic"]
    },
    {
      trait: "Physics Intuition Helix",
      percentage: 89,
      description: "Deep understanding of universal principles",
      icon: BeakerIcon,
      color: "from-purple-400 to-violet-500",
      examples: ["Quantum mechanics", "Thermodynamics", "Astrophysics modeling"]
    },
    {
      trait: "Innovation Catalyst",
      percentage: 87,
      description: "Ability to connect disparate concepts",
      icon: SparklesIcon,
      color: "from-pink-400 to-rose-500",
      examples: ["Cross-disciplinary thinking", "Unexpected solutions", "Novel approaches"]
    },
    {
      trait: "Rapid Learning Protocol",
      percentage: 94,
      description: "Accelerated knowledge acquisition and application",
      icon: BoltIcon,
      color: "from-orange-400 to-red-500",
      examples: ["New frameworks", "Complex theories", "Skill adaptation"]
    },
    {
      trait: "Future Vision Strand",
      percentage: 91,
      description: "Ability to anticipate and prepare for what's next",
      icon: RocketLaunchIcon,
      color: "from-cyan-400 to-blue-500",
      examples: ["Technology trends", "Scientific breakthroughs", "Paradigm shifts"]
    },
    {
      trait: "System Optimization Gene",
      percentage: 88,
      description: "Compulsive need to make things better and more efficient",
      icon: CpuChipIcon,
      color: "from-teal-400 to-green-500",
      examples: ["Code refactoring", "Process improvement", "Performance tuning"]
    }
  ];

  const averageStrength = Math.round(dnaStrands.reduce((acc, strand) => acc + strand.percentage, 0) / dnaStrands.length);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <CpuChipIcon className="w-8 h-8 text-cyan-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              Digital DNA Analysis
            </h2>
            <CpuChipIcon className="w-8 h-8 text-cyan-500" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Decoded genetic markers that make up my intellectual and creative blueprint
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900 dark:to-blue-900 border-2 border-cyan-200 dark:border-cyan-700 rounded-full">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    animationPhase === i ? 'bg-cyan-500 scale-125' : 'bg-gray-400 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-cyan-700 dark:text-cyan-300">
              Genetic Compatibility: {averageStrength}% • Sequence Active
            </span>
          </div>
        </motion.div>

        {/* DNA Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {dnaStrands.map((strand, index) => (
            <motion.div
              key={strand.trait}
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedStrand(selectedStrand === index ? null : index)}
            >
              <div className={`relative bg-gradient-to-br ${strand.color} p-1 rounded-xl`}>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-6 h-full">
                  {/* Icon and Percentage */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 bg-gradient-to-r ${strand.color} rounded-lg`}>
                      <strand.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-black dark:text-white">
                        {strand.percentage}%
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Expression
                      </div>
                    </div>
                  </div>

                  {/* Trait Name */}
                  <h3 className="font-bold text-black dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
                    {strand.trait}
                  </h3>

                  {/* DNA Helix Visualization */}
                  <div className="relative h-20 mb-4 overflow-hidden">
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                        scaleY: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className={`w-full h-1 bg-gradient-to-r ${strand.color} rounded-full opacity-50`}>
                        <div className="relative h-full">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                y: [0, -10, 0],
                                rotate: [0, 180, 360]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2
                              }}
                              className={`absolute w-2 h-2 bg-gradient-to-r ${strand.color} rounded-full`}
                              style={{ left: `${i * 20}%`, top: '-4px' }}
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {strand.description}
                  </p>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedStrand === index && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg z-10"
                >
                  <h4 className="font-semibold text-black dark:text-white mb-2">
                    Expression Examples:
                  </h4>
                  <ul className="space-y-1">
                    {strand.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-start gap-2">
                        <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{example}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Genome Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center p-8 bg-gradient-to-r from-gray-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-cyan-950 dark:to-blue-950 border-2 border-gray-200 dark:border-gray-700 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
            Genome Compatibility Report
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
            This unique combination of genetic markers creates an individual optimized for 
            interdisciplinary problem-solving, continuous learning, and innovative thinking. 
            Highly compatible with complex challenges and collaborative environments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {averageStrength}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Overall Expression
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                8/8
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Active Sequences
              </div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                100%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Mutation Potential
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
