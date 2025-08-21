'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpenIcon, ArrowRightIcon, ClockIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const recentBlogs = [
  {
    title: "The College Application Chaos",
    excerpt: "Navigating US college applications as an Egyptian STEM student...",
    date: "2024-12-17",
    readTime: "8 min",
    href: "/thoughts"
  },
  {
    title: "My Love Affair with Physics and Programming",
    excerpt: "How I discovered that physics and programming are basically the same thing...",
    date: "2024-12-15",
    readTime: "6 min",
    href: "/thoughts"
  },
  {
    title: "Why Arabic Rap is the Perfect Coding Soundtrack",
    excerpt: "Exploring the unexpected connection between Wegz's beats and clean code...",
    date: "2024-12-12",
    readTime: "7 min",
    href: "/thoughts"
  }
]

export default function LastBlogs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-black dark:bg-white text-white dark:text-black p-2 rounded-lg">
                <BookOpenIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-black dark:text-white">Latest Thoughts</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 font-mono">
                  Fresh from my digital journal
                </p>
              </div>
            </div>
            <Link
              href="/thoughts"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Blog List */}
          <div className="space-y-4">
            {recentBlogs.map((blog, index) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  href={blog.href}
                  className="block group"
                >
                  <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:border-black dark:hover:border-white transition-all duration-300 hover:bg-white dark:hover:bg-gray-800">
                    <h4 className="font-semibold text-black dark:text-white text-sm mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors line-clamp-1">
                      {blog.title}
                    </h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                      <span className="font-mono">{blog.date}</span>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-3 h-3" />
                        <span>{blog.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            <Link
              href="/thoughts"
              className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors font-medium"
            >
              View all thoughts
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
