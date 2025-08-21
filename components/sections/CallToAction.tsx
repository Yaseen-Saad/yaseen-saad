'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRightIcon, 
  EnvelopeIcon, 
  AcademicCapIcon,
  SparklesIcon 
} from '@heroicons/react/24/outline';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 left-10 text-white opacity-40"
          >
            <SparklesIcon className="h-8 w-8" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-20 right-20 text-white opacity-40"
          >
            <AcademicCapIcon className="h-10 w-10" />
          </motion.div>

          <div className="relative z-10 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Let's Build Something Amazing Together
              </h2>
              
              <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto">
                Whether you're interested in collaboration, mentorship, or just want to chat about 
                technology, physics, or the future of computational science, I'd love to hear from you.
              </p>
            </motion.div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <EnvelopeIcon className="h-12 w-12 text-purple-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Get In Touch</h3>
                <p className="text-purple-100 mb-6">
                  Have a project idea or want to collaborate? Let's start a conversation.
                </p>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <AcademicCapIcon className="h-12 w-12 text-purple-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Follow My Journey</h3>
                <p className="text-purple-100 mb-6">
                  Stay updated on my US college applications and research progress.
                </p>
                <Link href="/blog">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200"
                  >
                    Read My Blog
                  </motion.button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
              >
                <SparklesIcon className="h-12 w-12 text-purple-200 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Explore My Work</h3>
                <p className="text-purple-100 mb-6">
                  Dive into my projects, research, and community initiatives.
                </p>
                <Link href="/projects">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 px-6 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200"
                  >
                    View Projects
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* Main CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
                  >
                    Start a Conversation
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </motion.button>
                </Link>
                
                <Link href="/resources">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
                  >
                    Browse Resources
                  </motion.button>
                </Link>
              </div>

              <p className="mt-6 text-purple-200">
                Currently focused on US college applications and computational astrophysics research
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
