'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CreativeClock() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [cairoTime, setCairoTime] = useState(new Date())

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now)
      
      // Convert to Cairo time (UTC+2)
      const cairoOffset = 3 * 60 // 2 hours in minutes
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000)
      const cairo = new Date(utc + (cairoOffset * 60000))
      setCairoTime(cairo)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const cairoHour = cairoTime.getHours()
  const cairoMinute = cairoTime.getMinutes()
  const cairoSecond = cairoTime.getSeconds()

  // Generate 24 hours starting from 8 AM
  const hours = Array.from({ length: 24 }, (_, i) => (i + 8) % 24)
  
  const formatTime = (time: Date) => {
    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })
  }

  const getActivityForHour = (hour: number) => {
    if (hour >= 6 && hour < 8) return "Early morning contemplation"
    if (hour >= 8 && hour < 12) return "Peak learning hours"
    if (hour >= 12 && hour < 14) return "Midday recharge"
    if (hour >= 14 && hour < 18) return "Productive afternoon"
    if (hour >= 18 && hour < 22) return "Evening projects"
    if (hour >= 22 || hour < 2) return "Late night coding"
    if (hour >= 2 && hour < 6) return "Deep sleep cycle"
    return "Universe decoding time"
  }

  return (
    <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6">
      {/* Current Time Display */}
      <div className="text-center mb-6">
        <motion.div
          key={formatTime(cairoTime)}
          initial={{ scale: 0.95, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-3xl md:text-4xl font-mono font-bold text-black dark:text-white mb-2"
        >
          {formatTime(cairoTime)}
        </motion.div>
        <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
          Cairo Time (UTC+3)
        </p>
        <motion.p
          key={getActivityForHour(cairoHour)}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-gray-500 dark:text-gray-500 mt-2 italic"
        >
          {getActivityForHour(cairoHour)}
        </motion.p>
      </div>

      {/* 24-Hour Visualization */}
      <div className="space-y-1">
       <div className="grid grid-cols-12 gap-1">
          {hours.map((hour, index) => {
            const isCurrentHour = hour === cairoHour
            const isDayTime = hour >= 8 && hour < 20            
            return (
              <motion.div
                key={hour}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className={`relative group cursor-pointer transition-all mb-8 duration-300 ${
                  isCurrentHour 
                    ? 'transform scale-110' 
                    : 'hover:scale-105'
                }`}
              >
                <div
                  className={`h-8 rounded-sm border transition-all duration-300 ${
                    isCurrentHour
                      ? 'bg-black dark:bg-white border-black dark:border-white shadow-lg'
                      : isDayTime
                      ? 'bg-gray-300 dark:bg-gray-600 border-gray-400 dark:border-gray-500 hover:bg-gray-400 dark:hover:bg-gray-500'
                      : 'bg-gray-600 dark:bg-gray-400 border-gray-700 dark:border-gray-300 hover:bg-gray-700 dark:hover:bg-gray-300'
                  }`}
                />
                
                {/* Hour label */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-mono">
                  <span className={`${
                    isCurrentHour 
                      ? 'text-black dark:text-white font-bold' 
                      : 'text-gray-400 dark:text-gray-600'
                  }`}>
                    {hour.toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Tooltip */}
                <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                  {hour}:00 - {isDayTime ? 'Day' : 'Night'}
                  {isCurrentHour && (
                    <div className="text-black dark:text-white">
                      ← NOW
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="flex justify-center items-center gap-6 mt-8 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-300 dark:bg-gray-600 rounded-sm border border-gray-400 dark:border-gray-500" />
            <span className="text-gray-600 dark:text-gray-400 font-mono">Day (8-20)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-600 dark:bg-gray-400 rounded-sm border border-gray-700 dark:border-gray-300" />
            <span className="text-gray-600 dark:text-gray-400 font-mono">Night (20-8)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-black dark:bg-white rounded-sm border border-black dark:border-white" />
            <span className="text-gray-600 dark:text-gray-400 font-mono">Current</span>
          </div>
        </div>
         </div>
    </div>
  )
}
