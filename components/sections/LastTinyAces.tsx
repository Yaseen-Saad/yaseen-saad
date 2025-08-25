'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const achievements = [
  {
    title: "Aced The Breakfast Paper",
    description: "Solved complex physics problems before my morning coffee got cold. Because apparently, quantum mechanics waits for no one.",
    date: "2024",
    category: "Life",
  },
  {
    title: "Aced The Physics Club's Final Exam",
    description: "Dominated the final exam while simultaneously planning my presidential campaign for the Physics Club.",
    date: "2024",
    category: "Academic",
  },
  {
    title: "Solved The Differential Equation that Made All of School Mates Cry",
    description: "While everyone else was having an existential crisis over calculus, I was having tea and solving differential equations.",
    date: "2024",
    category: "Academic",
  },
];

export default function LastTinyAces() {
  return (
    <section className="py-24 bg-white dark:bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-black dark:text-white mb-6 leading-tight">
              Last Tiny Things
            </h2>
            <p className="text-xl font-serif text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A collection of moments where I didn't completely embarrass myself. 
              Also known as "achievements" in more serious contexts.
            </p>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mt-8"></div>
          </motion.div>

          {/* Achievements grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Category and date */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 border border-gray-300 dark:border-gray-600">
                      {achievement.category}
                    </span>
                    <span className="text-sm font-mono text-gray-500 dark:text-gray-400">
                      {achievement.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-black dark:text-white mb-3 leading-tight">
                    {achievement.link ? (
                      <Link 
                        href={achievement.link} 
                        target="_blank"
                        className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors underline"
                      >
                        {achievement.title}
                      </Link>
                    ) : (
                      achievement.title
                    )}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 font-serif leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Bottom border animation */}
                  <div className="w-0 h-1 bg-black dark:bg-white mt-4 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Philosophy quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-black dark:border-white pl-8 text-left">
              "Jack of all trades, master of none, but better than a master of one."
            </blockquote>
            <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mt-4 uppercase tracking-wider">
              — My Life Philosophy
            </p>
          </motion.div>

          {/* Stats section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-black dark:bg-white text-white dark:text-black p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-display font-bold mb-2">85+</div>
                <div className="text-sm font-mono uppercase tracking-wider">Peers Recruited</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2">16/21</div>
                <div className="text-sm font-mono uppercase tracking-wider">Club Memberships</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2">0.2%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Top Percentile</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2">∞</div>
                <div className="text-sm font-mono uppercase tracking-wider">Curiosity Level</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
