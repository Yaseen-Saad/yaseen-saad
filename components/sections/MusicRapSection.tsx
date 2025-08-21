'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  MusicalNoteIcon, 
  PlayIcon,
  SpeakerWaveIcon,
  HeartIcon,
  MicrophoneIcon,
  PauseIcon,
  StarIcon
} from '@heroicons/react/24/outline'

const favoriteArtists = [
  {
    name: 'Wegz',
    genre: 'Egyptian Trap/Rap',
    topSongs: ['El Bakht', 'Adeka', 'Dorak Gai', '3eesh'],
    description: 'The king of Egyptian trap. His flow and wordplay are unmatched.',
    color: 'from-gray-700 to-black',
    icon: <StarIcon className="w-6 h-6" />
  },
  {
    name: 'Marwan Pablo',
    genre: 'Egyptian Hip-Hop',
    topSongs: ['El Gemeza', 'Ghaba', 'Cliche', 'Pablo'],
    description: 'Pioneer of Egyptian rap scene. Deep lyrics and sick beats.',
    color: 'from-gray-600 to-gray-800',
    icon: <MicrophoneIcon className="w-6 h-6" />
  },
  {
    name: 'Abyusif',
    genre: 'Egyptian Rap',
    topSongs: ['Nos Kilo', 'Hagga', 'Kol 7aga Tamam'],
    description: 'Raw energy and authentic street rap from Cairo.',
    color: 'from-gray-500 to-gray-700',
    icon: <SpeakerWaveIcon className="w-6 h-6" />
  },
  {
    name: 'Cairokee',
    genre: 'Egyptian Rock/Alternative',
    topSongs: ['Dinosaur', 'Ya Msafer', 'Ethbet Makanak'],
    description: 'When I need something different from rap. Pure Egyptian soul.',
    color: 'from-gray-400 to-gray-600',
    icon: <MusicalNoteIcon className="w-6 h-6" />
  },
  {
    name: 'Ahmed Mekky',
    genre: 'Egyptian Comedy Rap',
    topSongs: ['Law Mesh Hena', 'Rap Masr', 'Ya Msafer'],
    description: 'The OG of Egyptian rap. Comedy meets clever wordplay.',
    color: 'from-gray-800 to-black',
    icon: <HeartIcon className="w-6 h-6" />
  }
]

const currentPlaylist = [
  { song: 'Wegz - El Bakht', mood: 'Coding Mode', time: '3:45' },
  { song: 'Marwan Pablo - El Gemeza', mood: 'Deep Focus', time: '4:12' },
  { song: 'Abyusif - Nos Kilo', mood: 'Problem Solving', time: '3:28' },
  { song: 'Wegz - Adeka', mood: 'Late Night Study', time: '3:52' },
  { song: 'Cairokee - Dinosaur', mood: 'Philosophical Thinking', time: '4:03' },
  { song: 'Ahmed Mekky - Law Mesh Hena', mood: 'Stress Relief', time: '3:33' },
  { song: 'Marwan Pablo - Ghaba', mood: 'Creative Burst', time: '3:58' },
  { song: 'Wegz - Dorak Gai', mood: 'Debugging Session', time: '4:15' }
]

const myRapLines = [
  {
    line: "Coding through the night, with Wegz in my headphones",
    translation: "Programming late with Egyptian trap as my soundtrack",
    context: "About my late-night coding sessions"
  },
  {
    line: "Physics equations mixed with Egyptian beats",
    translation: "Combining my love for science and music",
    context: "How music helps me study"
  },
  {
    line: "STEM school dreams, Cairo rap scenes",
    translation: "Living between academic excellence and street culture",
    context: "About balancing school and passion"
  },
  {
    line: "From quantum mechanics to Pablo's flow",
    translation: "From complex physics to appreciating rap artistry",
    context: "My diverse interests"
  }
]

export default function MusicRapSection() {
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSong((prev) => (prev + 1) % currentPlaylist.length)
    }, 12000) // Change song every 12 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full mb-6">
            <MusicalNoteIcon className="w-5 h-5 text-black dark:text-white" />
            <span className="text-sm font-mono font-bold text-black dark:text-white">MUSIC & RAP</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-crimson mb-6 text-black dark:text-white">
            Sound of My Code
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Music is my coding fuel! Mostly Arabic rap that keeps me in the zone while debugging, 
            studying physics, or writing algorithms. Here's my sonic universe.
          </p>
        </motion.div>

        {/* Favorite Song */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black dark:bg-white text-white dark:text-black rounded-lg p-8 mb-16"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <HeartIcon className="w-6 h-6" />
              <span className="text-lg font-bold">Favorite Song</span>
            </div>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 bg-white/20 dark:bg-black/20 rounded-full hover:bg-white/30 dark:hover:bg-black/30 transition-colors"
            >
              {isPlaying ? <PauseIcon className="w-5 h-5" /> : <PlayIcon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-700 dark:bg-gray-300 rounded-lg flex items-center justify-center">
                <MusicalNoteIcon className="w-8 h-8 text-white dark:text-black" />
              </div>
              <div>
                <div className="text-xl font-bold mb-1">
                  Wegz - El Bakht
                </div>
                <div className="text-sm opacity-80">
                  The ultimate coding anthem
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-mono">3:45</div>
              <div className="flex items-center gap-2 mt-1">
                {isPlaying && (
                  <>
                    <motion.div
                      animate={{ scaleY: [1, 1.5, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                      className="w-1 h-4 bg-white dark:bg-black rounded"
                    />
                    <motion.div
                      animate={{ scaleY: [1.5, 1, 1.5] }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                      className="w-1 h-6 bg-white dark:bg-black rounded"
                    />
                    <motion.div
                      animate={{ scaleY: [1, 1.8, 1] }}
                      transition={{ duration: 0.4, repeat: Infinity }}
                      className="w-1 h-5 bg-white dark:bg-black rounded"
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Favorite Artists */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-8 text-center">
            My Rap Pantheon
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favoriteArtists.map((artist, index) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedArtist(selectedArtist === index ? null : index)}
                className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden cursor-pointer hover:border-black dark:hover:border-white transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${artist.color} text-white p-6`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-white">{artist.icon}</div>
                    <HeartIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{artist.name}</h4>
                  <p className="text-sm opacity-90">{artist.genre}</p>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed italic">
                    "{artist.description}"
                  </p>

                  {selectedArtist === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-2"
                    >
                      <h5 className="font-semibold text-black dark:text-white mb-2">Top Tracks:</h5>
                      {artist.topSongs.map((song, songIndex) => (
                        <div
                          key={songIndex}
                          className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <PlayIcon className="w-4 h-4" />
                          <span>{song}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* My Rap Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black dark:bg-white text-white dark:text-black rounded-lg p-8"
        >
          <div className="text-center mb-8">
            <MicrophoneIcon className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">My Rap Lines</h3>
            <p className="opacity-80">When inspiration hits during coding sessions...</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {myRapLines.map((rap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 dark:bg-black/10 rounded-lg p-6"
              >
                <div className="text-lg font-mono mb-3 leading-relaxed">
                  "{rap.line}"
                </div>
                <div className="text-sm opacity-70 mb-2">
                  Translation: {rap.translation}
                </div>
                <div className="text-xs opacity-50">
                  Context: {rap.context}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Music Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <MusicalNoteIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">24/7</div>
            <div className="text-sm font-mono uppercase tracking-wider">Music Playing</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <HeartIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">500+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Favorite Songs</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <MicrophoneIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">20+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Rap Lines Written</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <SpeakerWaveIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">95%</div>
            <div className="text-sm font-mono uppercase tracking-wider">Arabic Rap</div>
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
            <SpeakerWaveIcon className="w-12 h-12 mx-auto mb-4 text-black dark:text-white" />
            <h4 className="text-xl font-bold mb-4 text-black dark:text-white">Fun Fact</h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I literally can't code without music! Whether I'm debugging at 3 AM or solving physics problems, 
              there's always a beat in my ears. Arabic rap hits different when you're in the zone. 
              The rhythm actually helps me think better!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
