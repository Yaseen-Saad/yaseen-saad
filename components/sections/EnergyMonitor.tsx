'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BoltIcon, 
  BeakerIcon, 
  CodeBracketIcon, 
  BookOpenIcon,
  CpuChipIcon,
  LightBulbIcon,
  MusicalNoteIcon,
  FireIcon
} from '@heroicons/react/24/outline';

interface EnergyData {
  category: string;
  level: number;
  icon: any;
  color: string;
  activities: string[];
  lastUpdate: string;
}

export default function EnergyMonitor() {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const energyData: EnergyData[] = [
    {
      category: "Physics Curiosity",
      level: 92,
      icon: BeakerIcon,
      color: "from-blue-500 to-purple-600",
      activities: ["Quantum Mechanics Study", "Stellar Evolution Research", "Energy Conservation Problems"],
      lastUpdate: "2 mins ago"
    },
    {
      category: "Coding Flow",
      level: 88,
      icon: CodeBracketIcon,
      color: "from-green-500 to-teal-600",
      activities: ["React Components", "TypeScript Debugging", "Algorithm Optimization"],
      lastUpdate: "5 mins ago"
    },
    {
      category: "Creative Thinking",
      level: 95,
      icon: LightBulbIcon,
      color: "from-yellow-500 to-orange-600",
      activities: ["Portfolio Design", "Project Ideas", "Problem Solving"],
      lastUpdate: "Just now"
    },
    {
      category: "Learning Drive",
      level: 87,
      icon: BookOpenIcon,
      color: "from-red-500 to-pink-600",
      activities: ["New Frameworks", "Physics Papers", "Documentation"],
      lastUpdate: "10 mins ago"
    },
    {
      category: "System Performance",
      level: 94,
      icon: CpuChipIcon,
      color: "from-indigo-500 to-blue-600",
      activities: ["Optimal Brain Function", "Memory Allocated", "Processing Speed"],
      lastUpdate: "Real-time"
    },
    {
      category: "Caffeine Levels",
      level: 73,
      icon: FireIcon,
      color: "from-amber-600 to-orange-700",
      activities: ["Morning Coffee", "Afternoon Tea", "Late Night Coding Fuel"],
      lastUpdate: "1 hour ago"
    }
  ];

  const timeBasedGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 6) return "Late Night Hacking";
    if (hour < 12) return "Morning Exploration";
    if (hour < 18) return "Afternoon Innovation";
    return "Evening Contemplation";
  };

  const averageEnergy = Math.round(energyData.reduce((acc, data) => acc + data.level, 0) / energyData.length);

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
            <BoltIcon className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
              Energy Monitor
            </h2>
            <BoltIcon className="w-8 h-8 text-yellow-500" />
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            Real-time view into my creative and intellectual energy levels
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {timeBasedGreeting()} • Overall Energy: {averageEnergy}%
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {energyData.map((energy, index) => (
            <motion.div
              key={energy.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-gradient-to-r ${energy.color} rounded-lg`}>
                    <energy.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-black dark:text-white">{energy.category}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{energy.lastUpdate}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-black dark:text-white">{energy.level}%</div>
                </div>
              </div>

              {/* Energy Bar */}
              <div className="mb-4">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${energy.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${energy.color} rounded-full relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>

              {/* Current Activities */}
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Current Focus:
                </h4>
                <div className="space-y-1">
                  {energy.activities.map((activity, actIndex) => (
                    <div key={actIndex} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full" />
                      <span className="text-xs text-gray-600 dark:text-gray-400">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center p-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
            System Status: {averageEnergy >= 90 ? "Peak Performance" : averageEnergy >= 75 ? "High Efficiency" : "Optimization Mode"}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Currently operating at {averageEnergy}% capacity. 
            {averageEnergy >= 90 && " Perfect conditions for tackling complex problems!"}
            {averageEnergy >= 75 && averageEnergy < 90 && " Ready for creative challenges and learning."}
            {averageEnergy < 75 && " Time for coffee and a short break to recharge."}
          </p>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {currentTime.toLocaleTimeString('en-US', { 
              timeZone: 'Africa/Cairo',
              hour12: true,
              hour: 'numeric',
              minute: '2-digit',
              second: '2-digit'
            })} Cairo Time
          </div>
        </motion.div>
      </div>
    </section>
  );
}
