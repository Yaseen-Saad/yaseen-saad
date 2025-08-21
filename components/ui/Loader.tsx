'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const loadingTexts = [
  "Initializing quantum processors...",
  "Calibrating neural networks...", 
  "Parsing the cosmos...",
  "Loading stellar databases...",
  "Synchronizing with Cairo time...",
  "Compiling physics equations...",
  "Establishing universe connection...",
  "Decoding the infinite...",
  "Ready to explore the Yaseenverse"
]

export default function Loader({ isLoading }: { isLoading: boolean }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) return

    const textInterval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % loadingTexts.length)
    }, 800)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + Math.random() * 15
      })
    }, 200)

    return () => {
      clearInterval(textInterval)
      clearInterval(progressInterval)
    }
  }, [isLoading])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center"
        >
          <div className="text-center max-w-md mx-auto px-8">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-12"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 mx-auto mb-6 border-4 border-gray-200 dark:border-gray-800 rounded-full"
                >
                  <div className="w-full h-full border-t-4 border-black dark:border-white rounded-full" />
                </motion.div>
                
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-3xl font-bold text-black dark:text-white"
                >
                  &lt; Yasoo /&gt;
                </motion.h1>
              </div>
            </motion.div>

            {/* Dynamic Loading Text */}
            <motion.div
              key={currentTextIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <p className="text-lg text-gray-600 dark:text-gray-400 font-mono">
                {loadingTexts[currentTextIndex]}
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
                className="bg-black dark:bg-white h-2 rounded-full"
              />
            </div>

            {/* Progress Percentage */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-gray-500 dark:text-gray-500 font-mono"
            >
              {Math.min(Math.round(progress), 100)}% complete
            </motion.p>

            {/* Quantum Dots Animation */}
            <div className="flex justify-center space-x-2 mt-8">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-black dark:bg-white rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
