'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LightBulbIcon,
  BeakerIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  SparklesIcon,
  BookOpenIcon,
  PuzzlePieceIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

interface Thought {
  id: number;
  content: string;
  category: string;
  icon: any;
  timestamp: Date;
  priority: 'low' | 'medium' | 'high' | 'breakthrough';
  tags: string[];
}

export default function ThoughtStream() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [currentThoughtIndex, setCurrentThoughtIndex] = useState(0);
  const [streamSpeed, setStreamSpeed] = useState(3000);

  const thoughtBank = [
    {
      content: "What if we could visualize quantum superposition through interactive web animations?",
      category: "Physics + Code",
      icon: BeakerIcon,
      priority: 'breakthrough' as const,
      tags: ["quantum", "visualization", "web"]
    },
    {
      content: "Building a neural network that predicts stellar evolution based on observational data",
      category: "AI Research",
      icon: RocketLaunchIcon,
      priority: 'high' as const,
      tags: ["ML", "astrophysics", "research"]
    },
    {
      content: "Why do some algorithms feel elegant while others feel clunky? There's aesthetics in code.",
      category: "Philosophy",
      icon: LightBulbIcon,
      priority: 'medium' as const,
      tags: ["algorithms", "aesthetics", "philosophy"]
    },
    {
      content: "React component for physics simulations with real-time parameter adjustment",
      category: "Development",
      icon: CodeBracketIcon,
      priority: 'high' as const,
      tags: ["react", "physics", "simulation"]
    },
    {
      content: "The universe is the ultimate open-source project. We're all just debugging reality.",
      category: "Shower Thoughts",
      icon: SparklesIcon,
      priority: 'medium' as const,
      tags: ["universe", "debugging", "metaphor"]
    },
    {
      content: "Time complexity of human decision-making vs AI: interesting research paper idea",
      category: "Research Idea",
      icon: BookOpenIcon,
      priority: 'high' as const,
      tags: ["time complexity", "AI", "human cognition"]
    },
    {
      content: "Creating an educational game that teaches thermodynamics through interactive puzzles",
      category: "Edtech",
      icon: PuzzlePieceIcon,
      priority: 'high' as const,
      tags: ["education", "game", "thermodynamics"]
    },
    {
      content: "Coffee breaks are actually processing time for background mental computations",
      category: "Life Optimization",
      icon: BoltIcon,
      priority: 'low' as const,
      tags: ["productivity", "breaks", "cognition"]
    },
    {
      content: "Machine learning model to predict optimal study schedules based on energy levels",
      category: "Personal AI",
      icon: BeakerIcon,
      priority: 'medium' as const,
      tags: ["ML", "productivity", "personalization"]
    },
    {
      content: "What if black holes are just cosmic debugging tools cleaning up spacetime errors?",
      category: "Physics Metaphors",
      icon: SparklesIcon,
      priority: 'low' as const,
      tags: ["black holes", "debugging", "spacetime"]
    }
  ];

  useEffect(() => {
    // Initialize with a few thoughts
    const initialThoughts = thoughtBank.slice(0, 3).map((thought, index) => ({
      id: index,
      ...thought,
      timestamp: new Date(Date.now() - (2 - index) * 60000) // Stagger timestamps
    }));
    setThoughts(initialThoughts);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentThoughtIndex < thoughtBank.length - 1) {
        const newThought = {
          id: Date.now(),
          ...thoughtBank[currentThoughtIndex + 3],
          timestamp: new Date()
        };
        
        setThoughts(prev => {
          const updated = [newThought, ...prev];
          return updated.slice(0, 6); // Keep only 6 most recent thoughts
        });
        
        setCurrentThoughtIndex(prev => prev + 1);
      } else {
        setCurrentThoughtIndex(0); // Reset cycle
      }
    }, streamSpeed);

    return () => clearInterval(timer);
  }, [currentThoughtIndex, streamSpeed, thoughtBank]);

  const priorityColors = {
    low: "from-gray-400 to-gray-500",
    medium: "from-blue-400 to-blue-500",
    high: "from-orange-400 to-red-500",
    breakthrough: "from-purple-500 to-pink-500"
  };

  const formatTimeAgo = (timestamp: Date) => {
    const now = new Date();
    const diffInMs = now.getTime() - timestamp.getTime();
    const diffInMins = Math.floor(diffInMs / 60000);
    
    if (diffInMins < 1) return "Just now";
    if (diffInMins < 60) return `${diffInMins}m ago`;
    if (diffInMins < 1440) return `${Math.floor(diffInMins / 60)}h ago`;
    return `${Math.floor(diffInMins / 1440)}d ago`;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative">
              <BoltIcon className="w-8 h-8 text-purple-500" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 w-8 h-8 border-2 border-purple-500 rounded-full"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              Thought Stream
            </h2>
            <div className="relative">
              <BoltIcon className="w-8 h-8 text-purple-500" />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 w-8 h-8 border-2 border-purple-500 rounded-full"
              />
            </div>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Real-time feed from my neural network • Ideas, insights, and random connections
          </p>
          
          {/* Stream Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Live Stream</span>
            </div>
            <div className="text-gray-300 dark:text-gray-600">•</div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Speed:</span>
              <div className="flex gap-1">
                {[1000, 3000, 5000].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setStreamSpeed(speed)}
                    className={`px-2 py-1 text-xs rounded transition-colors ${
                      streamSpeed === speed
                        ? 'bg-purple-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    {speed === 1000 ? 'Fast' : speed === 3000 ? 'Normal' : 'Slow'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {thoughts.map((thought, index) => (
              <motion.div
                key={thought.id}
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 ${
                  index === 0 ? 'ring-2 ring-purple-500 ring-opacity-50' : ''
                }`}
              >
                {/* Priority Indicator */}
                <div className={`absolute top-2 right-2 w-3 h-3 rounded-full bg-gradient-to-r ${priorityColors[thought.priority]}`}>
                  {thought.priority === 'breakthrough' && (
                    <motion.div
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-50"
                    />
                  )}
                </div>

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 bg-gradient-to-r ${priorityColors[thought.priority]} rounded-lg flex-shrink-0`}>
                    <thought.icon className="w-5 h-5 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                        {thought.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {formatTimeAgo(thought.timestamp)}
                      </span>
                    </div>
                    
                    <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-3">
                      {thought.content}
                    </p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {thought.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-gray-600 dark:text-gray-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* New thought indicator */}
                {index === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute -top-1 -left-1 bg-purple-500 text-white text-xs px-2 py-1 rounded-full font-medium"
                  >
                    New
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Stream Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 border-2 border-purple-200 dark:border-purple-800 rounded-xl"
        >
          <h3 className="text-xl font-bold text-black dark:text-white mb-4">
            Neural Activity Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {thoughts.filter(t => t.priority === 'breakthrough').length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Breakthroughs</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-1">
                {thoughts.filter(t => t.priority === 'high').length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">High Priority</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {thoughts.length}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Active Thoughts</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                24/7
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Stream Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
