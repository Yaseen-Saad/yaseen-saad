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
  TagIcon
} from '@heroicons/react/24/outline'

const archiveItems = [
  {
    id: 'physics-papers',
    title: 'Physics Research Papers',
    type: 'document',
    category: 'Academic',
    date: '2024',
    description: 'Collection of my physics research papers and computational studies',
    files: [
      { name: 'Computational_Astrophysics_Star_Evolution.pdf', size: '2.3 MB', type: 'PDF' },
      { name: 'Quantum_Mechanics_Problem_Solutions.pdf', size: '1.8 MB', type: 'PDF' },
      { name: 'Physics_Olympiad_Training_Notes.pdf', size: '4.1 MB', type: 'PDF' }
    ],
    icon: <AcademicCapIcon className="w-6 h-6" />,
    color: 'bg-blue-500'
  },
  {
    id: 'coding-projects',
    title: 'Project Source Code Archive',
    type: 'code',
    category: 'Programming',
    date: '2023-2024',
    description: 'Complete source code and documentation for major projects',
    files: [
      { name: 'EPhO_Platform_Source.zip', size: '15.7 MB', type: 'ZIP' },
      { name: 'Physics_Visualizer_React.zip', size: '8.2 MB', type: 'ZIP' },
      { name: 'StudyBuddy_AI_Backend.zip', size: '12.4 MB', type: 'ZIP' },
      { name: 'Portfolio_Website_Source.zip', size: '5.9 MB', type: 'ZIP' }
    ],
    icon: <CodeBracketIcon className="w-6 h-6" />,
    color: 'bg-green-500'
  },
  {
    id: 'certificates',
    title: 'Certificates & Awards',
    type: 'document',
    category: 'Achievements',
    date: '2022-2024',
    description: 'Official certificates and award documents from competitions',
    files: [
      { name: 'Physics_Brawl_2024_Certificate.pdf', size: '1.2 MB', type: 'PDF' },
      { name: 'International_Physics_Realm_Medal.pdf', size: '956 KB', type: 'PDF' },
      { name: 'DECI_GEEKS_Winner_Certificate.pdf', size: '743 KB', type: 'PDF' },
      { name: 'STEM_School_Admission_Letter.pdf', size: '1.1 MB', type: 'PDF' }
    ],
    icon: <AcademicCapIcon className="w-6 h-6" />,
    color: 'bg-yellow-500'
  },
  {
    id: 'presentations',
    title: 'Presentations & Talks',
    type: 'document',
    category: 'Speaking',
    date: '2024',
    description: 'Slides from presentations and talks I\'ve given',
    files: [
      { name: 'Physics_Club_Quantum_Mechanics_Intro.pptx', size: '3.7 MB', type: 'PPTX' },
      { name: 'CS_Club_Web_Development_Workshop.pptx', size: '2.9 MB', type: 'PPTX' },
      { name: 'DECI_Project_Presentation.pptx', size: '4.2 MB', type: 'PPTX' }
    ],
    icon: <DocumentTextIcon className="w-6 h-6" />,
    color: 'bg-purple-500'
  },
  {
    id: 'competition-photos',
    title: 'Competition & Event Photos',
    type: 'image',
    category: 'Memories',
    date: '2023-2024',
    description: 'Photos from competitions, school events, and achievements',
    files: [
      { name: 'Physics_Brawl_Competition_Photos.zip', size: '25.3 MB', type: 'ZIP' },
      { name: 'STEM_School_Club_Activities.zip', size: '18.7 MB', type: 'ZIP' },
      { name: 'Award_Ceremonies_Collection.zip', size: '12.1 MB', type: 'ZIP' }
    ],
    icon: <PhotoIcon className="w-6 h-6" />,
    color: 'bg-pink-500'
  },
  {
    id: 'study-materials',
    title: 'Study Notes & Materials',
    type: 'document',
    category: 'Education',
    date: '2023-2024',
    description: 'Comprehensive study materials and notes from various subjects',
    files: [
      { name: 'Advanced_Physics_Study_Guide.pdf', size: '6.8 MB', type: 'PDF' },
      { name: 'Computer_Science_Algorithms_Notes.pdf', size: '4.3 MB', type: 'PDF' },
      { name: 'Mathematics_Competition_Problems.pdf', size: '3.9 MB', type: 'PDF' },
      { name: 'College_Application_Essays.pdf', size: '1.4 MB', type: 'PDF' }
    ],
    icon: <DocumentTextIcon className="w-6 h-6" />,
    color: 'bg-indigo-500'
  }
]

type CategoryType = 'Academic' | 'Programming' | 'Achievements' | 'Speaking' | 'Memories' | 'Education';

const categoryColors: Record<CategoryType, string> = {
  'Academic': 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  'Programming': 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  'Achievements': 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  'Speaking': 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
  'Memories': 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
  'Education': 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200'
}

export default function ArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const categories = ['all', ...Array.from(new Set(archiveItems.map(item => item.category)))]
  const filteredItems = selectedCategory === 'all' 
    ? archiveItems 
    : archiveItems.filter(item => item.category === selectedCategory)

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
            Archive Vault
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My digital treasure trove! Papers, code, certificates, presentations, and memories 
            from my journey through physics, programming, and academic adventures. 
            Everything organized and ready for download. 📚✨
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 capitalize ${
                selectedCategory === category
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Archive Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
              className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden cursor-pointer hover:border-black dark:hover:border-white transition-all duration-300"
            >
              {/* Item Header */}
              <div className={`${item.color} text-white p-6`}>
                <div className="flex items-center justify-between mb-4">
                  {item.icon}
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[item.category as CategoryType]}`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <CalendarIcon className="w-4 h-4" />
                  {item.date}
                </div>
              </div>

              {/* Item Content */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <FolderIcon className="w-4 h-4" />
                    {item.files.length} files
                  </div>
                  <div className="flex items-center gap-1">
                    <TagIcon className="w-4 h-4" />
                    {item.type}
                  </div>
                </div>

                {/* Expanded File List */}
                {selectedItem === item.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800"
                  >
                    <h4 className="font-bold text-black dark:text-white mb-3">Files in this archive:</h4>
                    <div className="space-y-2">
                      {item.files.map((file, fileIndex) => (
                        <div
                          key={fileIndex}
                          className="flex items-center justify-between p-3 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded"
                        >
                          <div className="flex items-center gap-3">
                            <DocumentTextIcon className="w-5 h-5 text-gray-500" />
                            <div>
                              <p className="font-medium text-black dark:text-white text-sm">{file.name}</p>
                              <p className="text-xs text-gray-500">{file.size} • {file.type}</p>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                              <EyeIcon className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                              <ArrowDownTrayIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Archive Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <DocumentTextIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">25+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Documents</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <CodeBracketIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">50K+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Lines of Code</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <PhotoIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">200+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Photos</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <AcademicCapIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">15+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Certificates</div>
          </div>
        </motion.div>

        {/* Download Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
            <ArrowDownTrayIcon className="w-12 h-12 mx-auto mb-4 text-blue-500" />
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Download & Share</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              All materials in this archive are available for download and sharing for educational purposes. 
              Feel free to use any code, reference any papers, or get inspired by any presentations. 
              Knowledge grows when shared!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}