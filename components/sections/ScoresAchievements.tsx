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
      { name: 'Current GPA', score: '3.9/4.0', detail: '93-97% Average', icon: <AcademicCapIcon className="w-5 h-5" /> },
      { name: 'Grade 11 Average', score: '95%', detail: 'STEM High School', icon: <BookOpenIcon className="w-5 h-5" /> },
      { name: 'Grade 10 Average', score: '94%', detail: 'STEM High School', icon: <BookOpenIcon className="w-5 h-5" /> },
      { name: 'Grade 9 Average', score: '96%', detail: 'STEM High School', icon: <BookOpenIcon className="w-5 h-5" /> }
    ]
  },
  {
    category: 'Standardized Tests',
    items: [
      { name: 'STEM Entrance Exam', score: 'Top 0.2%', detail: '33rd/15,000+ candidates', icon: <StarIcon className="w-5 h-5" /> },
      { name: 'TOFAS Exam', score: '56/60', detail: '93.3% Score', icon: <ChartBarIcon className="w-5 h-5" /> },
      { name: 'SAT (Planned)', score: 'June 2025', detail: 'Target: 1500+', icon: <AcademicCapIcon className="w-5 h-5" /> },
      { name: 'TOEFL (Planned)', score: 'May 2025', detail: 'Target: 110+', icon: <GlobeAltIcon className="w-5 h-5" /> }
    ]
  }
]

const competitions = [
  {
    category: 'Physics Olympiads',
    achievements: [
      { 
        name: 'International Physics Realm (IPhR)', 
        rank: '5th Place Worldwide', 
        detail: 'Gold Medal • 1,180+ participants • Regular category',
        year: '2024',
        color: 'from-yellow-400 to-yellow-600'
      },
      { 
        name: 'Physics Brawl Online', 
        rank: '1st in Africa', 
        detail: 'Category C • 50+ African teams',
        year: '2024',
        color: 'from-green-500 to-emerald-600'
      },
      { 
        name: 'Online Physics Olympiad (OPhO)', 
        rank: 'Top 10%', 
        detail: '1,000+ participants from all grades',
        year: '2024',
        color: 'from-blue-500 to-blue-600'
      }
    ]
  },
  {
    category: 'Programming & Tech',
    achievements: [
      { 
        name: 'DECI Geeks Competition', 
        rank: '1st Place Egypt', 
        detail: 'Digital Egypt Cubs Initiative • National Championship',
        year: '2023',
        color: 'from-purple-500 to-purple-600'
      },
      { 
        name: 'Hack Club High Seas', 
        rank: '15th Globally', 
        detail: 'Most doubloons • Best projects ranking',
        year: '2024',
        color: 'from-cyan-500 to-blue-500'
      },
      { 
        name: 'Hack Club Winter', 
        rank: '1st Daily Hours', 
        detail: '620+ hours logged • Top achiever',
        year: '2024',
        color: 'from-indigo-500 to-purple-500'
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
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 capitalize ${
                selectedCategory === category
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
              School House Performance
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
                   <BookOpenIcon className="w-8 h-8 mx-auto text-orange-500" />}
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

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <TrophyIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">15+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Awards Won</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <AcademicCapIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">3.9</div>
            <div className="text-sm font-mono uppercase tracking-wider">Current GPA</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <GlobeAltIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">1,180+</div>
            <div className="text-sm font-mono uppercase tracking-wider">IPhR Competitors</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <StarIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">Top 0.2%</div>
            <div className="text-sm font-mono uppercase tracking-wider">STEM Entrance</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
