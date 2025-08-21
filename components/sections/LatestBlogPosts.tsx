'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { 
  ChatBubbleLeftEllipsisIcon, 
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  TagIcon
} from '@heroicons/react/24/outline';

// Mock blog posts data - this would come from your CMS/Firebase
const latestPosts = [
  {
    id: '1',
    title: 'Building Scalable Competition Platforms: Lessons from Aura Hunt',
    slug: 'building-scalable-competition-platforms',
    excerpt: 'How I designed and implemented a real-time competition platform that handled 230+ participants simultaneously, and the technical challenges I overcame.',
    category: 'Web Development',
    tags: ['React', 'Real-time', 'Scalability', 'Competition'],
    publishedDate: new Date('2024-11-15'),
    readTime: '8 min read',
    coverImage: '/images/blog/aura-hunt-platform.jpg',
    featured: true,
  },
  {
    id: '2',
    title: 'From Physics Formulas to Machine Learning: Predicting Star Death',
    slug: 'physics-to-ml-star-death-prediction',
    excerpt: 'My journey into computational astrophysics and how I used machine learning to address gaps in star death scenario prediction models.',
    category: 'Research',
    tags: ['Machine Learning', 'Astrophysics', 'Research', 'Python'],
    publishedDate: new Date('2024-11-08'),
    readTime: '12 min read',
    coverImage: '/images/blog/star-death-research.jpg',
    featured: false,
  },
  {
    id: '3',
    title: 'Leading Through Code: My Experience as CS Club Vice-President',
    slug: 'leading-through-code-cs-club',
    excerpt: 'Reflections on growing a computer science community from 70 to 250+ members and the leadership lessons learned along the way.',
    category: 'Leadership',
    tags: ['Leadership', 'Community', 'Education', 'Mentorship'],
    publishedDate: new Date('2024-10-28'),
    readTime: '6 min read',
    coverImage: '/images/blog/cs-club-leadership.jpg',
    featured: false,
  },
];

const categories = [
  { name: 'All', count: 15 },
  { name: 'Web Development', count: 8 },
  { name: 'Research', count: 4 },
  { name: 'Leadership', count: 3 },
];

export default function LatestBlogPosts() {
  const [posts, setPosts] = useState(latestPosts);
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
            <ChatBubbleLeftEllipsisIcon className="h-4 w-4 mr-2" />
            Latest from the Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
            <span className="gradient-text">Ysntksfst</span> - Yaseen Talks Fast
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Thoughts, insights, and deep dives on technology, physics, education, and personal growth. 
            Where I share what I'm learning and building.
          </p>
        </motion.div>

        {/* Blog Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-6 text-center">
            {categories.map((category) => (
              <div key={category.name} className="bg-white dark:bg-dark-900 rounded-lg px-4 py-2 shadow-sm border border-gray-200 dark:border-dark-700">
                <div className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {category.count}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {category.name} {category.name !== 'All' ? 'Posts' : 'Posts'}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Featured Post */}
        {posts.find(post => post.featured) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {(() => {
              const featuredPost = posts.find(post => post.featured);
              return (
                <div className="bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-dark-700">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Featured Post Image */}
                    <div className="relative h-64 lg:h-auto bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl font-bold text-primary-600 dark:text-primary-400">
                          {featuredPost?.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-600 text-white">
                          Featured
                        </span>
                      </div>
                    </div>

                    {/* Featured Post Content */}
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                          <TagIcon className="h-3 w-3 mr-1" />
                          {featuredPost?.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {featuredPost?.readTime}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-dark-900 dark:text-white mb-4">
                        {featuredPost?.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                        {featuredPost?.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {featuredPost && formatDistanceToNow(featuredPost.publishedDate, { addSuffix: true })}
                        </div>

                        <Link href={`/blog/post/${featuredPost?.slug}`}>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                          >
                            Read Article
                            <ArrowRightIcon className="h-4 w-4 ml-2" />
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {posts.filter(post => !post.featured).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-dark-700 hover:shadow-xl transition-all duration-300"
            >
              {/* Post Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                    {post.title.split(' ').slice(0, 2).map(word => word[0]).join('')}
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                    <TagIcon className="h-3 w-3 mr-1" />
                    {post.category}
                  </span>
                  <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                    <ClockIcon className="h-3 w-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-3 line-clamp-2">
                  <Link href={`/blog/post/${post.slug}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDistanceToNow(post.publishedDate, { addSuffix: true })}
                  </span>
                  <Link 
                    href={`/blog/post/${post.slug}`}
                    className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            These are just the latest posts. Dive deeper into my thoughts on technology, 
            physics, education, and personal growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Visit Ysntksfst Blog
              </motion.button>
            </Link>
            <Link href="/thoughts">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20 px-8 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Raw Thoughts Zone
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
