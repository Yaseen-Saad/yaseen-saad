'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CalendarIcon, 
  MapPinIcon, 
  StarIcon, 
  AcademicCapIcon,
  UserGroupIcon,
  TrophyIcon,
  RocketLaunchIcon,
  HeartIcon,
  GlobeAltIcon,
  BeakerIcon,
  CodeBracketIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const timelineEvents = [
  {
    year: "2007",
    title: "The Big Bang",
    subtitle: "My Universe Begins",
    description: "I was born in Saad Alexandria Hospital — I know it's weird (Saad), and I've taken my first breath in this universe. The irony of being born in a hospital with my own name wasn't lost on future me.",
    location: "Saad Alexandria Hospital, Egypt",
    icon: <SparklesIcon className="w-6 h-6" />,
    type: "life"
  },
  {
    year: "2012",
    title: "First First School Day",
    subtitle: "Beginning of Academic Journey",
    description: "I went to Corona Language School, where I spent a year at K1. First taste of structured learning, making friends, and realizing that naptime was actually pretty great.",
    location: "Corona Language School",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    type: "education"
  },
  {
    year: "2013",
    title: "Second First School Day",
    subtitle: "New Environment, New Friends",
    description: "I then moved to Abdelsalam El-Mahgoub Language School, where I tried to make some friends. Learning the art of adaptation and social navigation at a young age.",
    location: "Abdelsalam El-Mahgoub Language School",
    icon: <UserGroupIcon className="w-6 h-6" />,
    type: "education"
  },
  {
    year: "2014",
    title: "The Big Jump",
    subtitle: "Academic Acceleration",
    description: "I was promoted from K2 to G2 directly without getting G1, yay! Early signs that traditional educational paths might not contain my curiosity and potential.",
    location: "School Administration Decision",
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    type: "achievement"
  },
  {
    year: "2015",
    title: "First Podium Break",
    subtitle: "Academic Excellence Emerges",
    description: "I've ranked in the top 10 of my class of 120+ other students. First taste of academic competition and the realization that hard work pays off.",
    location: "Classroom Rankings",
    icon: <TrophyIcon className="w-6 h-6" />,
    type: "achievement"
  },
  {
    year: "2016",
    title: "Third First School Day",
    subtitle: "Finding My Academic Home",
    description: "I then moved to Mohamed Fawzy El-Hofi Language School, the school I spent most of my formative years. This became the foundation of my educational journey.",
    location: "Mohamed Fawzy El-Hofi Language School",
    icon: <AcademicCapIcon className="w-6 h-6" />,
    type: "education"
  },
  {
    year: "2018",
    title: "Student Council Leadership",
    subtitle: "First Taste of Leadership",
    description: "Joined Student Council and discovered my passion for organizing, leading, and making positive changes in the school community. Early leadership skills development.",
    location: "School Student Council",
    icon: <UserGroupIcon className="w-6 h-6" />,
    type: "leadership"
  },
  {
    year: "2020",
    title: "COVID-19 Era",
    subtitle: "Adaptation and Growth",
    description: "I camped at home for a while, which helped me break into the top 10 again. Learned self-discipline, online learning, and discovered new passions during global uncertainty.",
    location: "Home, Cairo",
    icon: <GlobeAltIcon className="w-6 h-6" />,
    type: "life"
  },
  {
    year: "2021",
    title: "IEEE Journey Begins",
    subtitle: "Youngest Member Recognition",
    description: "Joined IEEE O6U as the youngest member. It was my first time joining a student activity. I was always the early bird, volunteering at the CS committee for that season.",
    location: "IEEE October 6 University Branch",
    icon: <CodeBracketIcon className="w-6 h-6" />,
    type: "technology"
  },
  {
    year: "2022",
    title: "Executive Committee Promotion",
    subtitle: "Leadership and Technical Excellence",
    description: "I was promoted to the executive committee of the branch, where I managed the CS committee and the branch's website. The website is currently off due to the new board, but it was a significant learning experience.",
    location: "IEEE O6U Executive Committee",
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    type: "leadership"
  },
  {
    year: "2022",
    title: "Induction Day Success",
    subtitle: "Organizational Excellence",
    description: "I organized the induction day — the day that the executive committee and best members go to recruit new members to the branch — where I could persuade 80+ university students to join. Major event management achievement.",
    location: "IEEE O6U Campus",
    icon: <UserGroupIcon className="w-6 h-6" />,
    type: "leadership"
  },
  {
    year: "2023",
    title: "STEM School Acceptance",
    subtitle: "Elite Institution Entry",
    description: "Gained acceptance to STEM High School - 6th of October, ranking in the top 0.2% of applicants. This became the launching pad for my serious academic and research pursuits.",
    location: "STEM High School - 6th of October",
    icon: <BeakerIcon className="w-6 h-6" />,
    type: "education"
  },
  {
    year: "2024",
    title: "Physics Competition Excellence",
    subtitle: "Global Recognition",
    description: "Achieved 5th place globally in International Physics Realm and 1st place in Africa for Physics Brawl. These achievements opened doors to international recognition and opportunities.",
    location: "International Competitions",
    icon: <TrophyIcon className="w-6 h-6" />,
    type: "achievement"
  },
  {
    year: "2024",
    title: "Programming Excellence",
    subtitle: "DECI GEEKS Victory",
    description: "Won 1st place in DECI GEEKS Competition under Digital Egypt Cubs Initiative. Validated my programming skills on a national level and opened tech industry connections.",
    location: "Digital Egypt Cubs Initiative",
    icon: <CodeBracketIcon className="w-6 h-6" />,
    type: "technology"
  },
  {
    year: "2024",
    title: "EPhO Platform Launch",
    subtitle: "Creating Educational Impact",
    description: "Launched the Egyptian Physics Olympiad platform, serving 500+ students and revolutionizing physics competitions in Egypt. My largest technical and social impact project to date.",
    location: "Online Platform",
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    type: "technology"
  },
  {
    year: "2024",
    title: "Leadership Growth",
    subtitle: "CS Club Impact",
    description: "As vice president of STEM Computer Science Club, organized coding bootcamps that helped 110+ students build their own websites. Teaching and leadership skills reached new heights.",
    location: "STEM CS Club",
    icon: <UserGroupIcon className="w-6 h-6" />,
    type: "leadership"
  },
  {
    year: "2024",
    title: "College Application Journey",
    subtitle: "Aiming for the Stars",
    description: "Currently navigating US college applications, targeting top institutions with need-based aid. SAT prep, essays, and dreaming of studying physics and computer science at world-class universities.",
    location: "Global Application Process",
    icon: <StarIcon className="w-6 h-6" />,
    type: "life"
  },
  {
    year: "2025",
    title: "The Next Chapter",
    subtitle: "Future Awaits",
    description: "Ready to take on new challenges, whether in college, research, or entrepreneurship. The universe is vast, and I'm just getting started with decoding it.",
    location: "The Future",
    icon: <SparklesIcon className="w-6 h-6" />,
    type: "future"
  }
]

const categories = ['all', 'education', 'achievement', 'leadership', 'technology', 'life', 'future']

export default function Timeline() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredEvents = selectedCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.type === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'education': return <AcademicCapIcon className="w-4 h-4" />
      case 'achievement': return <TrophyIcon className="w-4 h-4" />
      case 'leadership': return <UserGroupIcon className="w-4 h-4" />
      case 'technology': return <CodeBracketIcon className="w-4 h-4" />
      case 'life': return <HeartIcon className="w-4 h-4" />
      case 'future': return <SparklesIcon className="w-4 h-4" />
      default: return <StarIcon className="w-4 h-4" />
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            My Journey Through Time
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From taking my first breath to decoding the universe - every milestone, 
            achievement, and moment that shaped who I am today.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {getCategoryIcon(category)}
              <span className="capitalize">{category}</span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line - responsive positioning */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700" />

          {/* Timeline Events */}
          <div className="space-y-8 sm:space-y-12">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={`${event.year}-${event.title}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12 sm:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2.5 sm:left-6.5 top-6 w-3 h-3 sm:w-5 sm:h-5 rounded-full border-2 sm:border-4 border-white dark:border-black bg-gray-400 dark:bg-gray-600 shadow-lg" />
                
                {/* Year Badge - sticks to timeline */}
                <div className="absolute left-0 sm:left-0 top-4">
                  <div className="bg-black dark:bg-white text-white dark:text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
                    {event.year}
                  </div>
                </div>

                {/* Event Card */}
                <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-4 sm:p-6 hover:border-black dark:hover:border-white transition-all duration-300 ml-2 sm:ml-8">
                  {/* Main content */}
                  <div className="mb-4">
                    <div className="flex items-start gap-3 sm:gap-4 mb-3">
                      <div className="p-2 sm:p-3 rounded-lg bg-black dark:bg-white text-white dark:text-black flex-shrink-0">
                        {event.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white mb-1 break-words">
                          {event.title}
                        </h3>
                        <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-400 font-semibold mb-2 break-words">
                          {event.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    {/* Location - sticks below title, not floating */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-500 mb-4 pl-11 sm:pl-16">
                      <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span className="break-words">{event.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Event Type Badge */}
                  <div className="flex justify-start">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-black dark:bg-white text-white dark:text-black">
                      {getCategoryIcon(event.type)}
                      <span className="capitalize">{event.type}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-4 sm:p-6 rounded-lg">
            <CalendarIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{new Date().getFullYear() - 2007}</div>
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider">Years of Life</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-4 sm:p-6 rounded-lg">
            <TrophyIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{timelineEvents.filter(e => e.type === 'achievement').length}</div>
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider">Major Achievements</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-4 sm:p-6 rounded-lg">
            <AcademicCapIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{timelineEvents.filter(e => e.type === 'education').length}</div>
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider">Educational Milestones</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-4 sm:p-6 rounded-lg">
            <SparklesIcon className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3" />
            <div className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">∞</div>
            <div className="text-xs sm:text-sm font-mono uppercase tracking-wider">Possibilities Ahead</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
