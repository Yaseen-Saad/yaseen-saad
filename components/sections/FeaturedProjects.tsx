'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { 
  EyeIcon, 
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  TagIcon
} from '@heroicons/react/24/outline';

// Mock data - this would come from your Firebase/API
const featuredProjects = [
  {
    id: '1',
    title: 'Aura Hunt Game Platform',
    description: 'A complete MERN stack web application for organizing school-wide scavenger hunt games. Features QR code generation, real-time scoring, and participant management.',
    category: 'Web Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
    image: '/images/projects/aura-hunt.jpg',
    featured: true,
    links: {
      live: 'https://aurahunt.quest',
      github: '#',
    },
    stats: {
      participants: '230+',
      prizes: '8,000 EGP',
    },
    dateCompleted: '2024-11-01',
  },
  {
    id: '2',
    title: 'STEM CS Club Website',
    description: 'Complete website ecosystem for STEM CS Club including main site, workshop portal, and member dashboard. Built to support 250+ online members.',
    category: 'Web Development',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    image: '/images/projects/stem-cs-club.jpg',
    featured: true,
    links: {
      live: 'https://stemcsclub.org',
      github: '#',
    },
    stats: {
      members: '250+',
      workshops: '30+',
    },
    dateCompleted: '2024-09-15',
  },
  {
    id: '3',
    title: 'Star Death Prediction ML Model',
    description: 'Machine learning model for predicting star death scenarios using computational astrophysics. Addresses literature gap in dynamic factor consideration.',
    category: 'Machine Learning',
    technologies: ['Python', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib'],
    image: '/images/projects/star-death-ml.jpg',
    featured: true,
    links: {
      github: '#',
      paper: '#',
    },
    stats: {
      accuracy: '85%',
      features: '20+',
    },
    dateCompleted: '2024-12-01',
  },
];

export default function FeaturedProjects() {
  const [projects, setProjects] = useState(featuredProjects);
  const [loading, setLoading] = useState(false);

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800">
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
            <EyeIcon className="h-4 w-4 mr-2" />
            Featured Projects
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Building Solutions That Matter
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            From web platforms that engage hundreds of students to ML models advancing 
            astrophysics research, each project represents a step toward meaningful impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/90 text-primary-700">
                      <TagIcon className="h-3 w-3 mr-1" />
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="inline-block bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 dark:bg-dark-800 rounded-lg">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Date */}
                  <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                    <CalendarIcon className="h-3 w-3 mr-1" />
                    Completed {new Date(project.dateCompleted).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short' 
                    })}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-primary-600 hover:bg-primary-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                      >
                        <div className="flex items-center justify-center">
                          <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                          View Live
                        </div>
                      </motion.a>
                    )}
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            These are just a few highlights. Explore my complete portfolio to see more projects 
            across web development, computational science, and community initiatives.
          </p>
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              View All Projects
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
