'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  TrophyIcon,
  AcademicCapIcon,
  ChartBarIcon,
  StarIcon,
  BookOpenIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  BeakerIcon
} from '@heroicons/react/24/outline'

const academicScores = [
  {
    category: 'GPA & Grades',
    items: [
      { name: 'Current GPA', score: '4.0/4.0', detail: 'STEM High School for Boys 6th of October', icon: <AcademicCapIcon className="w-5 h-5" /> },
      { name: 'Capstone Grade', score: 'A+', detail: 'A+ Grade in all 4 School Research Projects', icon: <AcademicCapIcon className="w-5 h-5" /> },
      { name: 'Peak Grades', score: '4', detail: 'A+ Chemistry, A+ Physics, A+ Mechanics, A+ French', icon: <BookOpenIcon className="w-5 h-5" /> },
      { name: 'Grade 9', score: '98.75%', detail: 'Martyr Mohamed Fawzy El-Hawfy Language School', icon: <BookOpenIcon className="w-5 h-5" /> }
    ]
  },
  {
    category: 'Standardized Tests',
    items: [
      { name: 'STEM Entrance Exam', score: '33rd', detail: 'Out of 15,000+ of Egypt\'s most intelegent candidates', icon: <StarIcon className="w-5 h-5" /> },
      { name: 'TOFAS Exam', score: '56/60', detail: '93.3% Score', icon: <ChartBarIcon className="w-5 h-5" /> },
      { name: 'SAT (Planned)', score: 'October 2025', detail: 'Target: 1500+. Current: 1420', icon: <AcademicCapIcon className="w-5 h-5" /> },
      { name: 'Dulingo English Test (Planned)', score: 'November 2025', detail: 'Target: 130+', icon: <GlobeAltIcon className="w-5 h-5" /> }
    ]
  }
]

const competitions = [
  {
    category: 'Physics Compeitions',
    achievements: [
      {
        name: 'International Physics Realm (IPhR)',
        rank: '5th Place Worldwide',
        detail: 'Gold Medal • 1,180+ participants • Regular category',
        year: '2024',
      },
       {
        name: 'International Physics Realm (IPhR) Best Ambassador',
        rank: 'Top Ambassador (1st)',
        detail: 'Helped 85+ colleagues find their passion in physics and participate in the IPhR securing high positions • Competed over 200+ ambassadors',
        year: '2025',
      },
      {
        name: 'Physics Brawl Online',
        rank: '1st in Africa',
        detail: 'Category C • 50+ African teams',
        year: '2024',
      },
      {
        name: 'Online Physics Olympiad (OPhO)',
        rank: 'Top 10%',
        detail: '1,000+ teams including Undergraduates',
        year: '2024',
      }
    ]
  },
  {
    category: 'Programming & Tech',
    achievements: [
      {
        name: 'DECI Geeks Competition',
        rank: '1st Place Egypt',
        detail: 'Digital Egypt Cubs Initiative • National Championship over 14,000 Participants',
        year: '2022',
      },
      {
        name: 'ECPC',
        rank: '12th Place Egypt',
        detail: 'Egyptian Collegiate Programming Contest Qualifications • National Championship over 750 teams',
        year: '2025',
      },
      {
        name: 'Hack Club High Seas',
        rank: '5th Globally',
        detail: 'Most doubloons • 850+ coding hours in only 3 month • Best projects ranking',
        year: '2024',
      }
    ]
  },
  {
    category: 'Mathematics',
    achievements: [
      {
        name: 'International Math Bowl',
        rank: 'Top 2%',
        detail: '2,188 participants • 52 countries',
        year: '2024',
        color: 'from-red-500 to-pink-500'
      }
    ]
  },
  {
    category: 'Chemistry',
    achievements: [
      {
        name: 'Egyptian Chemistry Olympiad',
        rank: '11th Place Egypt',
        detail: '6,600+ participants • Practical & Theoratical Exams',
        year: '2025',
      },
      {
        name: 'Ultimate Reowned Chemist',
        rank: '5th Place Globally (just a draft, the resutls are not yet out)',
        detail: '1,000+ participants',
        year: '2025',
      }
    ]
  }
]

const schoolhouseScores = [
  { subject: 'Physics', level: 'Advanced', sessions: 45, rating: '4.9/5' },
  { subject: 'Computer Science', level: 'Expert', sessions: 38, rating: '4.8/5' },
  { subject: 'Mathematics', level: 'Advanced', sessions: 25, rating: '4.9/5' },
  { subject: 'Philosophy', level: 'Intermediate', sessions: 12, rating: '4.7/5' }
]

export default function ScoresAchievements() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredCompetitions = selectedCategory === 'all'
    ? competitions
    : competitions.filter(comp => comp.category.toLowerCase().includes(selectedCategory))

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
            <TrophyIcon className="w-5 h-5 text-black dark:text-white" />
            <span className="text-sm font-mono font-bold text-black dark:text-white">SCORES & ACHIEVEMENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Academic Excellence
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive look at my academic performance, standardized test scores,
            and competition achievements that reflect my dedication to STEM excellence.
          </p>
        </motion.div>

        {/* Academic Scores Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {academicScores.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="bg-black dark:bg-white text-white dark:text-black p-6">
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="p-6 space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-between p-4 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="text-gray-600 dark:text-gray-400">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-black dark:text-white">{item.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{item.detail}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-black dark:text-white">{item.score}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competition Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'physics', 'programming', 'mathematics'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 capitalize ${selectedCategory === category
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
            >
              {category} {category === 'all' ? 'competitions' : ''}
            </button>
          ))}
        </div>

        {/* Competition Achievements */}
        <div className="space-y-12 mb-16">
          {filteredCompetitions.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.achievements.map((achievement, achievementIndex) => (
                  <motion.div
                    key={achievementIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: achievementIndex * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden"
                  >
                    <div className="bg-black dark:bg-white text-white dark:text-black p-4">
                      <div className="text-sm font-mono opacity-90 mb-1">{achievement.year}</div>
                      <div className="text-lg font-bold">{achievement.rank}</div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-black dark:text-white mb-2">
                        {achievement.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {achievement.detail}
                      </p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <TrophyIcon className="w-6 h-6 text-white/80" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* School House Scores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
              School House Performance (Draft)
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Khan Academy's peer tutoring platform • Mentee & Mentor roles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {schoolhouseScores.map((subject, index) => (
              <motion.div
                key={subject.subject}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg p-6 text-center"
              >
                <div className="text-2xl mb-3">
                  {subject.subject === 'Physics' ? <BeakerIcon className="w-8 h-8 mx-auto text-black dark:text-white" /> :
                    subject.subject === 'Computer Science' ? <CodeBracketIcon className="w-8 h-8 mx-auto text-black dark:text-white" /> :
                      subject.subject === 'Mathematics' ? <ChartBarIcon className="w-8 h-8 mx-auto text-black dark:text-white" /> :
                        <BookOpenIcon className="w-8 h-8 mx-auto dark:text-white" />}
                </div>
                <h4 className="font-bold text-black dark:text-white mb-2">{subject.subject}</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-600 dark:text-gray-400">Level: {subject.level}</div>
                  <div className="text-gray-600 dark:text-gray-400">{subject.sessions} Sessions</div>
                  <div className="font-semibold text-black dark:text-white">{subject.rating} Rating</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

           </div>
    
    </section>
  )
}
