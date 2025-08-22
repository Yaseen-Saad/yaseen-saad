'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  DocumentTextIcon, 
  PhotoIcon, 
  AcademicCapIcon, 
  CodeBracketIcon,
  FolderIcon,
  ArrowDownTrayIcon,
  EyeIcon,
  CalendarIcon,
  TagIcon,
  StarIcon
} from '@heroicons/react/24/outline'

interface ArchiveItem {
  id: number
  title: string
  description: string
  category: string
  date: string
  type: 'paper' | 'code' | 'certificate' | 'presentation' | 'photo' | 'notes'
  tags: string[]
  downloadUrl?: string
  viewUrl?: string
  featured?: boolean
}

type CategoryType = 'all' | 'research' | 'computational' | 'certificates' | 'presentations' | 'photos' | 'notes' | 'projects' | 'publications';

export default function ArchiveWrapper() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const archiveItems: ArchiveItem[] = [
    // Physics Research Papers
    {
      id: 1,
      title: 'Stellar Evolution Prediction Using Machine Learning',
      description: 'A comprehensive study on predicting stellar lifecycles using neural networks and observational data from astronomical databases.',
      category: 'Research Papers',
      date: '2024-01-15',
      type: 'paper',
      tags: ['machine learning', 'astrophysics', 'stellar evolution', 'neural networks'],
      downloadUrl: '/papers/stellar-evolution-ml.pdf',
      viewUrl: '/papers/stellar-evolution-ml-preview',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum State Visualization Techniques',
      description: 'Exploring novel methods for visualizing quantum superposition and entanglement in educational contexts.',
      category: 'Research Papers',
      date: '2023-11-20',
      type: 'paper',
      tags: ['quantum mechanics', 'visualization', 'education', 'physics'],
      downloadUrl: '/papers/quantum-visualization.pdf',
      featured: true
    },
    {
      id: 3,
      title: 'Computational Physics in Educational Platforms',
      description: 'Research on integrating computational physics simulations into online learning environments.',
      category: 'Research Papers',
      date: '2024-03-10',
      type: 'paper',
      tags: ['computational physics', 'education', 'simulation', 'e-learning'],
      downloadUrl: '/papers/computational-education.pdf'
    },
    
    // Computational Experiments
    {
      id: 4,
      title: 'N-Body Gravitational Simulation',
      description: 'High-performance simulation of gravitational interactions between multiple celestial bodies using optimized algorithms.',
      category: 'Computational Experiments',
      date: '2024-02-20',
      type: 'code',
      tags: ['physics simulation', 'n-body problem', 'optimization', 'javascript'],
      viewUrl: 'https://github.com/yaseen-saad/n-body-sim',
      featured: true
    },
    {
      id: 5,
      title: 'Quantum Circuit Simulator',
      description: 'JavaScript implementation of quantum gate operations and circuit simulation with visualization capabilities.',
      category: 'Computational Experiments',
      date: '2024-01-05',
      type: 'code',
      tags: ['quantum computing', 'simulation', 'gates', 'visualization'],
      viewUrl: 'https://github.com/yaseen-saad/quantum-sim'
    },
    {
      id: 6,
      title: 'Machine Learning for Physics Data',
      description: 'Experimental ML models for analyzing physics competition data and predicting student performance.',
      category: 'Computational Experiments',
      date: '2023-12-15',
      type: 'code',
      tags: ['machine learning', 'data analysis', 'physics', 'education'],
      viewUrl: 'https://github.com/yaseen-saad/physics-ml'
    },
    
    // Project Archives
    {
      id: 7,
      title: 'EPhO Platform Complete Source',
      description: 'Full source code for the Egyptian Physics Olympiad platform including frontend, backend, and deployment configurations.',
      category: 'Project Archives',
      date: '2024-02-10',
      type: 'code',
      tags: ['next.js', 'node.js', 'postgresql', 'education platform'],
      viewUrl: 'https://github.com/yaseen-saad/epho-platform',
      featured: true
    },
    {
      id: 8,
      title: 'Youth Science Journal Platform',
      description: 'Complete platform for scientific publication and peer review for young researchers.',
      category: 'Project Archives',
      date: '2023-10-20',
      type: 'code',
      tags: ['scientific publishing', 'peer review', 'web platform', 'science'],
      viewUrl: 'https://github.com/yaseen-saad/science-journal'
    },
    
    // Certificates & Awards
    {
      id: 9,
      title: 'International Physics Realm Gold Medal',
      description: 'Gold medal achievement in the International Physics Realm competition, demonstrating excellence in theoretical physics.',
      category: 'Certificates & Awards',
      date: '2024-03-15',
      type: 'certificate',
      tags: ['physics competition', 'gold medal', 'international', 'achievement'],
      viewUrl: '/certificates/iphr-gold-medal.jpg',
      featured: true
    },
    {
      id: 10,
      title: 'Physics Brawl Africa Champion',
      description: '1st place in Africa and 34th globally in Physics Brawl Category B 2024, breaking African participation records.',
      category: 'Certificates & Awards',
      date: '2024-02-10',
      type: 'certificate',
      tags: ['physics brawl', 'africa champion', 'record breaking', 'competition'],
      viewUrl: '/certificates/physics-brawl-2024.pdf',
      featured: true
    },
    {
      id: 11,
      title: 'DECI GEEKS Competition Winner',
      description: 'First place victory in the Digital Egypt Cubs Initiative programming competition.',
      category: 'Certificates & Awards',
      date: '2023-11-30',
      type: 'certificate',
      tags: ['programming', 'DECI', 'first place', 'coding competition'],
      viewUrl: '/certificates/deci-geeks.pdf'
    },
    
    // Publications & Articles
    {
      id: 12,
      title: 'Physics Education in the Digital Age',
      description: 'Published article on modernizing physics education through technology integration.',
      category: 'Publications & Articles',
      date: '2024-01-25',
      type: 'paper',
      tags: ['physics education', 'technology', 'digital learning', 'publication'],
      downloadUrl: '/publications/physics-digital-age.pdf',
      viewUrl: '/publications/physics-digital-age-preview'
    },
    {
      id: 13,
      title: 'Computational Thinking for Young Scientists',
      description: 'Article series on developing computational thinking skills in science education.',
      category: 'Publications & Articles',
      date: '2023-12-10',
      type: 'paper',
      tags: ['computational thinking', 'science education', 'programming', 'youth'],
      downloadUrl: '/publications/computational-thinking.pdf'
    },
    
    // Presentations & Talks
    {
      id: 14,
      title: 'Machine Learning in Astrophysics',
      description: 'Presentation delivered at the Egyptian Physics Society on applications of ML in astronomical research.',
      category: 'Presentations & Talks',
      date: '2024-01-20',
      type: 'presentation',
      tags: ['machine learning', 'astrophysics', 'presentation', 'research'],
      downloadUrl: '/presentations/ml-astrophysics.pptx',
      viewUrl: '/presentations/ml-astrophysics-preview'
    },
    {
      id: 15,
      title: 'Building Educational Platforms',
      description: 'Tech talk on designing and scaling educational technology platforms for STEM subjects.',
      category: 'Presentations & Talks',
      date: '2023-10-12',
      type: 'presentation',
      tags: ['education technology', 'platform design', 'STEM', 'scalability'],
      downloadUrl: '/presentations/educational-platforms.pdf'
    },
    
    // Competition & Event Photos
    {
      id: 16,
      title: 'Physics Olympiad Training Camp',
      description: 'Collection of photos from intensive physics olympiad preparation sessions and team building activities.',
      category: 'Competition & Event Photos',
      date: '2024-02-28',
      type: 'photo',
      tags: ['physics olympiad', 'training', 'teamwork', 'STEM education'],
      viewUrl: '/gallery/physics-camp-2024'
    },
    {
      id: 17,
      title: 'Hackathon Victory Moments',
      description: 'Photos capturing the excitement of winning multiple hackathons and coding competitions.',
      category: 'Competition & Event Photos',
      date: '2023-09-15',
      type: 'photo',
      tags: ['hackathon', 'coding competition', 'victory', 'programming'],
      viewUrl: '/gallery/hackathon-wins'
    },
    
    // Study Notes & Materials
    {
      id: 18,
      title: 'Advanced Quantum Mechanics Notes',
      description: 'Comprehensive study notes covering advanced topics in quantum mechanics, including original derivations and problem solutions.',
      category: 'Study Notes & Materials',
      date: '2024-01-05',
      type: 'notes',
      tags: ['quantum mechanics', 'study notes', 'physics', 'derivations'],
      downloadUrl: '/notes/quantum-mechanics-advanced.pdf',
      featured: true
    },
    {
      id: 19,
      title: 'Algorithms & Data Structures Cheat Sheet',
      description: 'Personal reference guide for competitive programming, including time complexities and implementation templates.',
      category: 'Study Notes & Materials',
      date: '2023-08-20',
      type: 'notes',
      tags: ['algorithms', 'data structures', 'competitive programming', 'reference'],
      downloadUrl: '/notes/algorithms-cheatsheet.pdf'
    }
  ]

  const categories = [
    { id: 'all', title: 'All Items', icon: FolderIcon },
    { id: 'research', title: 'Research Papers', icon: DocumentTextIcon },
    { id: 'computational', title: 'Computational Experiments', icon: CodeBracketIcon },
    { id: 'certificates', title: 'Certificates & Awards', icon: AcademicCapIcon },
    { id: 'presentations', title: 'Presentations & Talks', icon: DocumentTextIcon },
    { id: 'photos', title: 'Competition & Event Photos', icon: PhotoIcon },
    { id: 'notes', title: 'Study Notes & Materials', icon: DocumentTextIcon },
    { id: 'projects', title: 'Project Archives', icon: CodeBracketIcon },
    { id: 'publications', title: 'Publications & Articles', icon: DocumentTextIcon }
  ]

  const getTypeIcon = (type: string) => {
    const icons = {
      paper: DocumentTextIcon,
      code: CodeBracketIcon,
      certificate: AcademicCapIcon,
      presentation: DocumentTextIcon,
      photo: PhotoIcon,
      notes: DocumentTextIcon
    }
    return icons[type as keyof typeof icons] || DocumentTextIcon
  }

  const filteredItems = archiveItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || 
      (selectedCategory === 'research' && item.category === 'Research Papers') ||
      (selectedCategory === 'computational' && item.category === 'Computational Experiments') ||
      (selectedCategory === 'certificates' && item.category === 'Certificates & Awards') ||
      (selectedCategory === 'presentations' && item.category === 'Presentations & Talks') ||
      (selectedCategory === 'photos' && item.category === 'Competition & Event Photos') ||
      (selectedCategory === 'notes' && item.category === 'Study Notes & Materials') ||
      (selectedCategory === 'projects' && item.category === 'Project Archives') ||
      (selectedCategory === 'publications' && item.category === 'Publications & Articles')
    
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-black dark:text-white">
            Knowledge Archive
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A curated collection of research papers, project documentation, achievements, and learning materials 
            from my journey through physics, computer science, and beyond.
          </p>
          
          {/* Search */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search archive..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent text-black dark:text-white"
            />
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as CategoryType)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                    : 'bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-600 hover:border-gray-500 dark:hover:border-gray-400'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.title}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Archive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const IconComponent = getTypeIcon(item.type)
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium">
                    <StarIcon className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg">
                    <IconComponent className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-black dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <CalendarIcon className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center gap-1 px-2 py-1 text-xs bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded text-gray-600 dark:text-gray-400"
                    >
                      <TagIcon className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {item.viewUrl && (
                    <a
                      href={item.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors text-sm font-medium"
                    >
                      <EyeIcon className="w-4 h-4" />
                      View
                    </a>
                  )}
                  {item.downloadUrl && (
                    <a
                      href={item.downloadUrl}
                      download
                      className="flex items-center gap-1 px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                    >
                      <ArrowDownTrayIcon className="w-4 h-4" />
                      Download
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <FolderIcon className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 dark:text-gray-400 mb-2">
              No items found
            </h3>
            <p className="text-gray-500 dark:text-gray-500">
              Try adjusting your search or category filter.
            </p>
          </motion.div>
        )}

        {/* Archive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center p-8 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
            Archive Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
                {archiveItems.filter(item => item.type === 'paper').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Research Papers</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">
                {archiveItems.filter(item => item.type === 'code').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Code Archives</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400 mb-1">
                {archiveItems.filter(item => item.type === 'certificate').length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Achievements</div>
            </div>
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                {archiveItems.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Items</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
