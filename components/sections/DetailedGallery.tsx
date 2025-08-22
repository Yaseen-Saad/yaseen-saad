'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { 
  PhotoIcon, 
  XMarkIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  CalendarIcon,
  TagIcon 
} from '@heroicons/react/24/outline';

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
}

const photos: Photo[] = [
  {
    id: 1,
    src: '/public/assets/images/Yaseen Saad Eldin Formall.jpg',
    alt: 'Yaseen at formal event',
    title: 'Physics Competition Award Ceremony',
    description: 'Receiving recognition at the International Physics Realm competition where I achieved 5th place globally.',
    date: '2024-03-15',
    category: 'Awards',
    tags: ['physics', 'competition', 'achievement', 'formal']
  },
  {
    id: 2,
    src: '/public/assets/images/physicsbrawl.jpg',
    alt: 'Physics Brawl competition',
    title: 'Physics Brawl 2024 Victory',
    description: 'Celebrating the 1st place win in Africa and 34th globally in Physics Brawl Category B.',
    date: '2024-02-10',
    category: 'Competitions',
    tags: ['physics brawl', 'africa', 'record', 'teamwork']
  },
  {
    id: 3,
    src: '/public/assets/images/firsttoeat.jpg',
    alt: 'First to eat challenge',
    title: 'STEM School Cafeteria Adventures',
    description: 'Life at STEM school isn\'t all about studying - sometimes it\'s about being first to lunch!',
    date: '2023-11-20',
    category: 'School Life',
    tags: ['STEM school', 'friends', 'daily life', 'fun']
  },
  {
    id: 4,
    src: '/public/assets/images/physicsclubexam.jpg',
    alt: 'Physics club exam',
    title: 'Physics Club Examination Day',
    description: 'Intensive physics problem-solving session during club activities and training.',
    date: '2023-10-15',
    category: 'Academic',
    tags: ['physics club', 'exam', 'problem solving', 'concentration']
  },
  {
    id: 5,
    src: '/public/assets/images/56440868230.jpg',
    alt: 'Random moment',
    title: 'Candid Moment',
    description: 'Unguarded moments between competitions and studies.',
    date: '2023-09-05',
    category: 'Personal',
    tags: ['candid', 'personality', 'authentic']
  },
  {
    id: 6,
    src: '/public/assets/images/de.jpg',
    alt: 'Digital Egypt event',
    title: 'Digital Egypt Cubs Initiative',
    description: 'Participating in Egypt\'s premier coding initiative, surrounded by the nation\'s brightest young minds.',
    date: '2024-01-12',
    category: 'Technology',
    tags: ['DECI', 'coding', 'initiative', 'technology']
  }
];

const categories = ['All', 'Awards', 'Competitions', 'School Life', 'Academic', 'Personal', 'Technology'];

export default function DetailedGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (currentPhotoIndex + 1) % filteredPhotos.length;
    setCurrentPhotoIndex(nextIndex);
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    setCurrentPhotoIndex(prevIndex);
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <>
      <section id="gallery" className="py-24 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute inset-0 bg-paper opacity-[0.02]"></div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-display font-bold text-black dark:text-white mb-6 leading-tight">
                Photo Gallery
              </h2>
              <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                A visual journey through competitions, achievements, daily life, and the moments that define my path in physics and technology.
              </p>
            </motion.div>

            {/* Category filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full border-2 font-mono uppercase tracking-wider text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white'
                      : 'bg-white dark:bg-black text-black dark:text-white border-gray-300 dark:border-gray-600 hover:border-black dark:hover:border-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* Photo grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(photo)}
                  className="group relative bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  {/* Photo container */}
                  <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
                      <PhotoIcon className="w-12 h-12" />
                    </div>
                  </div>

                  {/* Photo info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-mono uppercase tracking-wider">
                        {photo.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <CalendarIcon className="w-3 h-3" />
                        {new Date(photo.date).toLocaleDateString()}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {photo.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {photo.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {photo.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-1 bg-black dark:bg-white text-white dark:text-black rounded text-xs"
                        >
                          <TagIcon className="w-2 h-2" />
                          {tag}
                        </span>
                      ))}
                      {photo.tags.length > 3 && (
                        <span className="px-2 py-1 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                          +{photo.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Gallery stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-16 text-center p-8 bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800"
            >
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
                Gallery Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4">
                  <div className="text-3xl font-bold text-black dark:text-white mb-1">
                    {photos.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-mono uppercase tracking-wider">
                    Total Photos
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-black dark:text-white mb-1">
                    {categories.length - 1}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-mono uppercase tracking-wider">
                    Categories
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-black dark:text-white mb-1">
                    3
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-mono uppercase tracking-wider">
                    Years Documented
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-3xl font-bold text-black dark:text-white mb-1">
                    ∞
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-mono uppercase tracking-wider">
                    Memories Made
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full max-h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between text-white mb-4">
              <div className="flex items-center gap-4">
                <span className="text-sm opacity-75">
                  {currentPhotoIndex + 1} of {filteredPhotos.length}
                </span>
                <h3 className="text-xl font-bold">{selectedPhoto.title}</h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 hover:bg-white hover:bg-opacity-10 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Image */}
            <div className="flex-1 relative bg-gray-900 flex items-center justify-center">
              <div className="w-full h-96 bg-gray-800 flex items-center justify-center text-gray-400">
                <PhotoIcon className="w-16 h-16" />
              </div>
              
              {/* Navigation */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full transition-all"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full transition-all"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Info */}
            <div className="text-white mt-4">
              <p className="text-gray-300 mb-2">{selectedPhoto.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>{selectedPhoto.category}</span>
                <span>{new Date(selectedPhoto.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
