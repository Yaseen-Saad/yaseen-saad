'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrophyIcon, 
  UserGroupIcon, 
  HeartIcon, 
  SparklesIcon,
  AcademicCapIcon,
  StarIcon,
  CalendarIcon,
  MapPinIcon,
  GiftIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'

const awards = [
  {
    title: "International Physics Realm (IPhR)",
    achievement: "5th Place Globally & Gold Medal",
    date: "2024",
    organization: "International Physics Realm",
    description: "Competed against thousands of physics enthusiasts worldwide",
    impact: "Top Ambassador - recruited 85+ participants",
    image: "/api/placeholder/400/300",
    imageAlt: "Physics competition certificate and medal"
  },
  {
    title: "Physics Brawl Africa",
    achievement: "1st Place Africa, 34th Globally",
    date: "2024",
    organization: "Physics Brawl",
    description: "Highest score ever achieved by an African participant",
    impact: "Set a new continental record",
    image: "/api/placeholder/400/300",
    imageAlt: "Physics Brawl competition screenshot"
  },
  {
    title: "DECI GEEKS Competition",
    achievement: "1st Place Winner",
    date: "2024",
    organization: "Digital Egypt Cubs Initiative",
    description: "Competitive programming excellence",
    impact: "Among top students in Egypt's digital initiative",
    image: "/api/placeholder/400/300",
    imageAlt: "Programming competition award ceremony"
  },
  {
    title: "STEM High School Entrance",
    achievement: "Top 0.2% of Applicants",
    date: "2023",
    organization: "STEM High School - 6th of October",
    description: "Elite entrance exam performance",
    impact: "Earned place in Egypt's premier STEM institution",
    image: "/api/placeholder/400/300",
    imageAlt: "STEM school entrance and acceptance letter"
  },
  {
    title: "ECPC Qualification",
    achievement: "2nd Round Qualifier (2023 & 2024)",
    date: "2023-2024",
    organization: "Egyptian Collegiate Programming Contest",
    description: "Consistent competitive programming excellence",
    impact: "Two consecutive years of advancement",
    image: "/api/placeholder/400/300",
    imageAlt: "ECPC programming contest participation"
  }
]

const extracurriculars = [
  {
    title: "Physics Club President (Candidate)",
    role: "Leadership & Education",
    duration: "2024 - Present",
    description: "Campaigning for presidency to expand physics education outreach",
    achievements: ["Organized study groups", "Peer tutoring program", "Competition prep sessions"],
    image: "/api/placeholder/300/200",
    imageAlt: "Physics club meeting and study session"
  },
  {
    title: "Computer Science Club President (Candidate)", 
    role: "Technology & Innovation",
    duration: "2024 - Present",
    description: "Running for leadership to bridge CS theory and practical applications",
    achievements: ["Coding workshops", "Project collaborations", "Tech mentorship"],
    image: "/api/placeholder/300/200",
    imageAlt: "CS club coding workshop in progress"
  },
  {
    title: "16 School Clubs Member",
    role: "Active Participant",
    duration: "2023 - Present", 
    description: "Engaged in 16 out of 21 available school clubs (excluding medicine-related)",
    achievements: ["Cross-disciplinary learning", "Community building", "Leadership development"],
    image: "/api/placeholder/300/200",
    imageAlt: "Various school club activities collage"
  },
  {
    title: "Digital Egypt Cubs Initiative",
    role: "Top-Level Trainee",
    duration: "2023 - Present",
    description: "Selected for highest level of programming training in national initiative",
    achievements: ["Advanced coding curriculum", "National competition participation", "Peer mentorship"],
    image: "/api/placeholder/300/200",
    imageAlt: "Digital Egypt Cubs training session"
  }
]

const personalInterests = [
  {
    title: "Late-Night Physics Podcasts",
    icon: <BookOpenIcon className="w-6 h-6" />,
    description: "Sean Carroll's Mindscape is my guilty pleasure"
  },
  {
    title: "Mechanical Keyboard Enthusiast", 
    icon: <SparklesIcon className="w-6 h-6" />,
    description: "The satisfying click-clack of productivity"
  },
  {
    title: "Philosophy YouTube Deep Dives",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    description: "3am existential crisis fuel"
  },
  {
    title: "Code Golf Challenges",
    icon: <TrophyIcon className="w-6 h-6" />,
    description: "Writing the most elegant solutions possible"
  },
  {
    title: "Space Documentation Binge",
    icon: <StarIcon className="w-6 h-6" />,
    description: "NASA's YouTube channel has consumed my soul"
  },
  {
    title: "Board Game Strategy",
    icon: <GiftIcon className="w-6 h-6" />,
    description: "Chess, Go, and anything that requires deep thinking"
  }
]

export default function YaseenversePage() {
  const [activeTab, setActiveTab] = useState('awards')

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/api/placeholder/200/200" 
                alt="Yaseen in STEM school uniform with physics equipment"
                className="w-32 h-32 rounded-full border-4 border-black dark:border-white object-cover"
              />
              <div className="absolute -top-2 -right-2 bg-yellow-500 text-white p-2 rounded-full">
                <TrophyIcon className="w-6 h-6" />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 text-black dark:text-white">
            The Yaseenverse
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Welcome to my universe! Awards that made me proud, activities that shaped me, 
            and the random obsessions that make me... well, me. This is where accomplishments 
            meet authentic personality.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
            {[
              { id: 'awards', label: 'Awards & Honors', icon: <TrophyIcon className="w-5 h-5" /> },
              { id: 'activities', label: 'Activities & Leadership', icon: <UserGroupIcon className="w-5 h-5" /> },
              { id: 'interests', label: 'Personal Interests', icon: <HeartIcon className="w-5 h-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-black dark:bg-white text-white dark:text-black'
                    : 'text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
              >
                {tab.icon}
                <span className="hidden sm:block">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'awards' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
                🏆 Awards & Honors
              </h2>
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-black dark:hover:border-white transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={award.image}
                        alt={award.imageAlt}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-2/3">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{award.title}</h3>
                          <p className="text-xl text-yellow-600 dark:text-yellow-400 font-semibold mb-2">{award.achievement}</p>
                          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                              <CalendarIcon className="w-4 h-4" />
                              {award.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPinIcon className="w-4 h-4" />
                              {award.organization}
                            </div>
                          </div>
                        </div>
                        <TrophyIcon className="w-12 h-12 text-yellow-500" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{award.description}</p>
                      <div className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-lg">
                        <strong>Impact:</strong> {award.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'activities' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
                Leadership & Activities
              </h2>
              {extracurriculars.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-black dark:hover:border-white transition-all duration-300"
                >
                  <div className="md:flex">
                    <div className="md:w-1/4">
                      <img 
                        src={activity.image}
                        alt={activity.imageAlt}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-3/4">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{activity.title}</h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">{activity.role}</p>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                            <CalendarIcon className="w-4 h-4" />
                            {activity.duration}
                          </div>
                        </div>
                        <UserGroupIcon className="w-12 h-12 text-blue-500" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{activity.description}</p>
                      <div>
                        <h4 className="font-bold text-black dark:text-white mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {activity.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                              <StarIcon className="w-4 h-4 text-yellow-500" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {activeTab === 'interests' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-black dark:text-white mb-8 text-center">
                ❤️ What Makes Me Tick
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalInterests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-black dark:hover:border-white transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-lg">
                        {interest.icon}
                      </div>
                      <h3 className="font-bold text-black dark:text-white">{interest.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Fun Personal Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center bg-purple-500 text-white p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">3AM</div>
                  <div className="text-sm font-mono uppercase tracking-wider">Peak Thinking Hours</div>
                </div>
                <div className="text-center bg-green-500 text-white p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-sm font-mono uppercase tracking-wider">Coffee Cups/Day</div>
                </div>
                <div className="text-center bg-blue-500 text-white p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">42</div>
                  <div className="text-sm font-mono uppercase tracking-wider">Answer to Everything</div>
                </div>
                <div className="text-center bg-orange-500 text-white p-6 rounded-lg">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm font-mono uppercase tracking-wider">Curiosity Level</div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Personal Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg p-8 max-w-2xl mx-auto">
            <SparklesIcon className="w-12 h-12 mx-auto mb-4" />
            <blockquote className="text-xl font-serif italic mb-4">
              "I don't just want to understand the universe—I want to build tools that help others understand it too. 
              Every award, every activity, every late-night coding session is a step toward that goal."
            </blockquote>
            <p className="font-bold">— Yaseen, probably at 3AM with too much coffee ☕</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
