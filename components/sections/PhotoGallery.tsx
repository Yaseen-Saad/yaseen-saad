'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

const photoCategories = [
  {
    id: 'competitions',
    title: 'Competitions & Awards',
    photos: [
      {
        id: 1,
        src: '/assets/images/physicsbrawl.jpg',
        alt: 'Physics Brawl competition',
        caption: 'Physics Brawl 2024 - 1st Place Africa Team Competition',
        date: '2024'
      },
      {
        id: 2,
        src: '/assets/images/physicsclubexam.jpg',
        alt: 'Physics club exam',
        caption: 'International Physics Realm - 5th Place Worldwide (Gold Medal)',
        date: '2024'
      },
      {
        id: 3,
        src: '/assets/images/firsttoeat.jpg',
        alt: 'First to eat competition',
        caption: 'DECI Geeks 2023 - 1st Place Egypt National Champions',
        date: '2023'
      }
    ]
  },
  {
    id: 'school',
    title: 'School Life & Projects',
    photos: [
      {
        id: 4,
        src: '/assets/images/Yaseen Saad Eldin Formall.jpg',
        alt: 'Yaseen in formal attire',
        caption: 'STEM High School - Official portrait for college applications',
        date: '2024'
      },
      {
        id: 5,
        src: '/assets/images/ephologoblack.png',
        alt: 'EPHOLO logo',
        caption: 'EPHOLO Physics Club - Logo design and community building',
        date: '2024'
      },
      {
        id: 6,
        src: '/assets/images/LOGO.png',
        alt: 'Project logo',
        caption: 'STEM CS Club - Website development and club branding',
        date: '2024'
      }
    ]
  },
  {
    id: 'coding',
    title: 'Coding & Development',
    photos: [
      {
        id: 7,
        src: '/assets/images/Logo.svg',
        alt: 'SVG logo design',
        caption: 'Youth Science Journal - Platform development with grading system',
        date: '2024'
      },
      {
        id: 8,
        src: '/assets/images/Logoclub.png',
        alt: 'Club logo',
        caption: 'EPhO Competition Platform - Full-stack development with AI anti-cheat',
        date: '2024'
      },
      {
        id: 9,
        src: '/assets/images/219_Animal Friendly_1725032212959.png',
        alt: 'Animal friendly project',
        caption: 'Hack Club High Seas - 15th place globally, 620+ hours logged',
        date: '2024'
      }
    ]
  },
  {
    id: 'personal',
    title: 'Personal & Lifestyle',
    photos: [
      {
        id: 10,
        src: '/assets/images/de.jpg',
        alt: 'Personal moment',
        caption: 'Late night study sessions - Coffee, physics, and contemplation',
        date: '2024'
      },
      {
        id: 11,
        src: '/assets/images/des.jpg',
        alt: 'Casual moment',
        caption: 'Cairo streets exploration - Finding inspiration in my hometown',
        date: '2024'
      },
      {
        id: 12,
        src: '/assets/images/56440868230.jpg',
        alt: 'Random moment',
        caption: 'Music listening session - Arabic rap fueling my coding',
        date: '2024'
      }
    ]
  }
]

const allPhotos = photoCategories.flatMap(category => category.photos)

export default function PhotoGallery() {
  const [selectedCategory, setSelectedCategory] = useState('competitions')
  const [lightboxPhoto, setLightboxPhoto] = useState<number | null>(null)

  const selectedPhotos = photoCategories.find(cat => cat.id === selectedCategory)?.photos || []

  const openLightbox = (photoId: number) => {
    setLightboxPhoto(photoId)
  }

  const closeLightbox = () => {
    setLightboxPhoto(null)
  }

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (lightboxPhoto === null) return
    
    const currentIndex = allPhotos.findIndex(photo => photo.id === lightboxPhoto)
    let newIndex
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : allPhotos.length - 1
    } else {
      newIndex = currentIndex < allPhotos.length - 1 ? currentIndex + 1 : 0
    }
    
    setLightboxPhoto(allPhotos[newIndex].id)
  }

  const currentLightboxPhoto = allPhotos.find(photo => photo.id === lightboxPhoto)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            Visual Stories
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A collection of moments, projects, and memories that capture my journey. 
            Sometimes a picture really is worth a thousand words.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {photoCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2 rounded-lg border-2 transition-all duration-300 font-medium text-sm ${
                selectedCategory === category.id
                  ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                  : 'border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white bg-white dark:bg-black text-black dark:text-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {selectedPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openLightbox(photo.id)}
              className="group cursor-pointer bg-white dark:bg-black border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:border-black dark:hover:border-white transition-all duration-300"
            >
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300 filter grayscale"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
              <div className="p-3">
                <p className="text-xs text-gray-500 dark:text-gray-500 mb-1 font-mono">{photo.date}</p>
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed">{photo.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxPhoto && currentLightboxPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  <XMarkIcon className="w-6 h-6 text-white" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateLightbox('prev')}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  <ChevronLeftIcon className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={() => navigateLightbox('next')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
                >
                  <ChevronRightIcon className="w-6 h-6 text-white" />
                </button>

                {/* Image */}
                <div className="relative">
                  <Image
                    src={currentLightboxPhoto.src}
                    alt={currentLightboxPhoto.alt}
                    width={800}
                    height={600}
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-6">
                    <p className="text-white text-lg font-semibold mb-2">{currentLightboxPhoto.caption}</p>
                    <p className="text-gray-300 text-sm">{currentLightboxPhoto.date}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Behind Every Photo</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Each image here tells a story of growth, curiosity, and the incredible people I've met along the way. 
              From formal photos to project screenshots, they're all pieces of my journey toward understanding 
              the universe and building things that matter.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
