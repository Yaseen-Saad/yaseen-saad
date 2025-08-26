'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PhotoIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const galleryPreviews = [
  {
    id: 1,
    src: '/assets/images/gallery/IMG-20250826-WA0025.jpg',
    alt: 'Yaseen while testing the IPhR\'s Platform',
    caption: 'Testing the IPhR\'s Anti-cheating System'
  },
  {
    id: 2,
    src: '/assets/images/gallery/WhatsApp Image 2025-08-26 at 00.38.26_d86adad3.jpg',
    alt: 'Yaseen with his friend at his old school',
    caption: 'My Friends at my very old school (I am on the left)'
  },
  {
    id: 3,
    src: '/assets/images/gallery/websessionwithgalabia.png',
    alt: 'Yaseen in galabia style',
    caption: 'An Online Session at with the Web Development Track at STEM CSC'
  },
  {
    id: 4,
    src: '/assets/images/gallery/physicsclubexam2024.jpg',
    alt: 'Physics club exam',
    caption: 'Me Eating while Acing the Physics Club\'s Final Exam (I am wearing red at the left)'
  }
];

export default function QuickGallery() {
  return (
    <section className="py-24 bg-white dark:bg-black relative">

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
            <h2 className="text-4xl md:text-5xl font-display font-bold text-black dark:text-white mb-6 leading-tight">
              Quick Glimpses
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Moments captured from random things in my daily life at STEM October school.
            </p>
          </motion.div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {galleryPreviews.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group relative aspect-square bg-gray-200 dark:bg-gray-800 border-2 border-black dark:border-white overflow-hidden cursor-pointer"
              >
                <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={photo.src} alt={photo.alt} />
                <div className="absolute inset-0 bg-black dark:bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 bg-black dark:bg-white bg-opacity-80 dark:bg-opacity-80 text-white dark:text-black p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-xs font-mono">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View all link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              href="/about#gallery"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black dark:bg-white text-white dark:text-black border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all duration-300 font-mono uppercase tracking-wider"
            >
              <PhotoIcon className="w-5 h-5" />
              View Complete Gallery
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
