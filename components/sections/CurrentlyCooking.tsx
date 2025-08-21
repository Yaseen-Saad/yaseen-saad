'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const currentProjects = [
  {
    title: "EPhO",
    subtitle: "The Egyptian Physics Olympiad",
    description: "Building the platform for Egypt's first-ever Physics Olympiad. Because apparently, Egypt needed someone to organize the chaos of competitive physics.",
    status: "In Development",
    progress: 75,
    link: "https://epho.net",
    tech: ["Next.js", "Firebase", "Competition Platform"],
  },
  {
    title: "Hack Club High Seas Rewards",
    subtitle: "iPad I am on the way",
    description: "Sailing through the High Seas to earn enough doubloons for that sweet iPad. Currently plotting my course to treasure island.",
    status: "Active",
    progress: 60,
    link: "https://highseas.hackclub.com/",
    tech: ["Open Source", "Community", "Hustle"],
  },
  {
    title: "Computational Astrophysics Paper",
    subtitle: "Youth Science Journal (YSJ)",
    description: "Researching star death scenarios and stellar evolution using computational models. Basically trying to understand how stars have existential crises.",
    status: "Research Phase",
    progress: 40,
    link: "https://ys-journal.org/",
    tech: ["Python", "Astrophysics", "Research"],
  },
  {
    title: "This Portfolio Website",
    subtitle: "The one you're looking at right now",
    description: "A black and white, authentic portfolio that shows my personality without looking like every other AI-generated site on the internet.",
    status: "Live & Evolving",
    progress: 90,
    tech: ["Next.js", "Tailwind", "Authenticity"],
  },
];

export default function CurrentlyCooking() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative">
      <div className="absolute inset-0 bg-paper opacity-[0.02]"></div>
      
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-black dark:text-white">
              Currently Cooking
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Projects in the oven, ideas in the pipeline, and chaos in organized form. 
              Welcome to my digital kitchen.
            </p>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mt-8"></div>
          </motion.div>

          {/* Projects grid */}
          <div className="space-y-12">
            {currentProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Project info */}
                <div className="flex-1 space-y-6">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-3xl md:text-4xl font-bold text-black dark:text-white">
                        {project.link ? (
                          <Link 
                            href={project.link} 
                            target="_blank"
                            className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors underline"
                          >
                            {project.title}
                          </Link>
                        ) : (
                          project.title
                        )}
                      </h3>
                      <span className="text-sm font-mono bg-black dark:bg-white text-white dark:text-black px-3 py-1 uppercase tracking-wider">
                        {project.status}
                      </span>
                    </div>
                    <h4 className="text-xl italic text-gray-600 dark:text-gray-400 mb-4">
                      {project.subtitle}
                    </h4>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-mono text-gray-600 dark:text-gray-400">Progress</span>
                      <span className="text-sm font-mono text-black dark:text-white font-bold">{project.progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="h-full bg-black dark:bg-white"
                      />
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs font-mono text-gray-600 dark:text-gray-400 border border-gray-400 dark:border-gray-600 px-2 py-1 uppercase tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual representation */}
                <div className="flex-shrink-0">
                  <div className="w-80 h-64 bg-white dark:bg-black border-2 border-black dark:border-white p-6 flex flex-col justify-center items-center shadow-lg">
                    <div className="text-6xl mb-4 text-black dark:text-white">
                      {index === 0 && <div className="w-16 h-16 border-4 border-current rounded-full flex items-center justify-center text-lg font-bold">1</div>}
                      {index === 1 && <div className="w-16 h-16 border-4 border-current rounded-full flex items-center justify-center text-lg font-bold">2</div>}
                      {index === 2 && <div className="w-16 h-16 border-4 border-current rounded-full flex items-center justify-center text-lg font-bold">3</div>}
                      {index === 3 && <div className="w-16 h-16 border-4 border-current rounded-full flex items-center justify-center text-lg font-bold">4</div>}
                    </div>
                    <div className="text-center">
                      <h5 className="font-bold text-black dark:text-white mb-2">{project.title}</h5>
                      <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 mb-2">
                        <div 
                          className="h-full bg-black dark:bg-white transition-all duration-1000"
                          style={{ width: `${project.progress}%` }}
                        />
                      </div>
                      <p className="text-sm font-mono text-gray-600 dark:text-gray-400">{project.status}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-black dark:bg-white text-white dark:text-black p-8"
          >
            <h3 className="text-2xl font-bold mb-4">
              Want to Cook Something Together?
            </h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              I'm always looking for collaborators who share my passion for building meaningful projects. 
              Whether it's physics, coding, or just having a philosophical discussion about the universe.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-white dark:bg-black text-black dark:text-white px-8 py-4 font-mono text-sm uppercase tracking-wider hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors border-2 border-white dark:border-black hover:border-gray-100 dark:hover:border-gray-900"
            >
              Let's Connect
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
