'use client';

import { motion } from 'framer-motion';
import { 
  TrophyIcon, 
  AcademicCapIcon, 
  UsersIcon, 
  CodeBracketIcon,
  StarIcon 
} from '@heroicons/react/24/outline';

const achievements = [
  {
    icon: TrophyIcon,
    title: 'Top 5 International Physics Realm',
    description: 'Ranked 5th out of 1,180+ participants worldwide',
    value: '5th',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
  },
  {
    icon: AcademicCapIcon,
    title: 'DECI Program Top 25',
    description: 'Selected from 14,300+ applicants for Digital Egypt Cubs Initiative',
    value: 'Top 25',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: UsersIcon,
    title: 'Students Mentored',
    description: 'Directly tutored 22+ students, indirectly helped 50+',
    value: '50+',
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: CodeBracketIcon,
    title: 'Projects Completed',
    description: 'Web development and computational science projects',
    value: '25+',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
];

const organizations = [
  'STEM CS Club Vice-President',
  'Youth Science Journal Researcher',
  'Hack Club Verified Developer',
  'STEM October Magazine Founder',
  'Aura Hunt Game Organizer',
];

export default function AchievementsHighlight() {
  return (
    <section id="achievements" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            <StarIcon className="h-4 w-4 mr-2" />
            Key Achievements
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Impact Through Excellence
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From international competitions to community leadership, here are some highlights 
            of my journey in technology, physics, and education.
          </p>
        </motion.div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg ${achievement.bgColor} mb-4`}>
                <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
              </div>
              
              <div className={`text-3xl font-bold ${achievement.color} mb-2`}>
                {achievement.value}
              </div>
              
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                {achievement.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Leadership Roles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Leadership & Community Impact
              </h3>
              <p className="text-lg text-primary-100 mb-6">
                Beyond technical achievements, I'm passionate about building communities 
                and empowering others through education and mentorship.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {organizations.map((org, index) => (
                  <motion.span
                    key={org}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {org}
                  </motion.span>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">8,000 EGP</div>
                <div className="text-primary-100">Worth of prizes raised for Aura Hunt Game</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">230+</div>
                <div className="text-primary-100">Students engaged in school events</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold">6 Tracks</div>
                <div className="text-primary-100">Organizing for STEM CS Club 2025</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to learn more about my journey and projects?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/academics"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View Academic Work
            </motion.a>
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Explore Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
