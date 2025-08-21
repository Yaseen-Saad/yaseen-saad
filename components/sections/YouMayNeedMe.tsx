'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  BeakerIcon, 
  LightBulbIcon,
  AcademicCapIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  SparklesIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline'

const skills = [
  {
    title: "Full-Stack Web Development",
    subtitle: "Building Digital Experiences That Matter",
    description: "I create modern, scalable web applications using Next.js, TypeScript, and cutting-edge technologies. From concept to deployment, I handle the entire development lifecycle.",
    icon: <CodeBracketIcon className="w-8 h-8" />,
    highlights: [
      "500+ users on EPhO Platform",
      "110+ students taught web development",
      "Zero downtime on production apps",
      "Modern tech stack mastery"
    ],
    techStack: ["Next.js", "TypeScript", "React", "Node.js", "Firebase", "Tailwind CSS"],
    gradient: "from-gray-700 to-black"
  },
  {
    title: "Physics Research & AI Integration",
    subtitle: "Where Science Meets Computation",
    description: "I bridge the gap between theoretical physics and practical AI applications, creating models that solve real scientific problems with unprecedented accuracy.",
    icon: <BeakerIcon className="w-8 h-8" />,
    highlights: [
      "96% accuracy in stellar predictions",
      "1000x faster than traditional methods",
      "5th place globally in Physics competitions",
      "Published research contributions"
    ],
    techStack: ["Python", "TensorFlow", "NumPy", "Jupyter", "Astropy", "Machine Learning"],
    gradient: "from-gray-600 to-gray-800"
  }
]

const reasons = [
  {
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    title: "Launch Your Vision",
    description: "I turn complex ideas into working solutions"
  },
  {
    icon: <LightBulbIcon className="w-6 h-6" />,
    title: "Innovative Thinking",
    description: "I approach problems from unique angles"
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: "Proven Leadership",
    description: "I've successfully led teams and projects"
  },
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    title: "Attention to Detail",
    description: "I obsess over quality and user experience"
  }
]

export default function YouMayNeedMe() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            You May Need Me If...
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I specialize in turning complex challenges into elegant solutions. 
            Whether you need cutting-edge development or innovative research, I bring both technical expertise and creative thinking.
          </p>
        </motion.div>

        {/* Main Skills */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-black dark:hover:border-white transition-all duration-300">
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-lg bg-gradient-to-r ${skill.gradient} text-white`}>
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black dark:text-white mb-1">
                      {skill.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 font-medium">
                      {skill.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {skill.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-bold text-black dark:text-white mb-3">Key Achievements:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {skill.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-black dark:bg-white rounded-full" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-bold text-black dark:text-white mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Me */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white mb-8">
            Why Work With Me?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-black dark:hover:border-white transition-all duration-300"
              >
                <div className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-lg inline-block mb-4">
                  {reason.icon}
                </div>
                <h4 className="font-bold text-black dark:text-white mb-2">
                  {reason.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-black dark:bg-white text-white dark:text-black rounded-xl p-8"
        >
          <CpuChipIcon className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            I'm always excited to tackle new challenges and create innovative solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white dark:bg-black text-black dark:text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
          >
            Let's Collaborate
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
