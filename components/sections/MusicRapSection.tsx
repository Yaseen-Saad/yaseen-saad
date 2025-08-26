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
    name: 'Marwan Pablo',
    genre: 'Egyptian Hip-Hop',
    topSongs: ['Lelly Yah', 'FREE', 'El Mabda2', 'Ghaba', 'Aura', 'KAaS', 'El Gemeza', 'Matemshish', 'Al Arba3'],
    description: 'The King of Egyptian Rap, his wordplays, flow, aura are unmatched.',
    color: 'from-gray-600 to-gray-800',
    icon: <MicrophoneIcon className="w-6 h-6" />
  },
  {
    name: 'Abo Elanwar',
    genre: 'Egyptian Rap',
    topSongs: ['Coca', 'El 3abaseya', 'El 5anka', 'Good Vibes', 'El Sob7 Badry', 'Mmmmm Mmmmm'],
    description: 'The king of diss tracks. His flows and the data he put in his diss tracks are wild.',
    color: 'from-gray-700 to-black',
    icon: <MicrophoneIcon className="w-6 h-6" />
  },
  {
      name: 'Abyusif',
    genre: 'Egyptian Rap',
    topSongs: ['Hal Di Kat Hayatak', 'Talata Zayaha', '3azra2eel', 'Mesa', 'Kol 7aga Tamam'],
    description: 'Raw energy and authentic street rap from Cairo.',
    color: 'from-gray-500 to-gray-700',
    icon: <SpeakerWaveIcon className="w-6 h-6" />
  },
  {
    name: 'El Joker',
    genre: 'Egyptian Rap',
    topSongs: ['Hamesh El Samt', 'Fasla', 'Enfsam 7ad', 'Enfsam 7ad II', 'El Ra2sa El Akhira', 'Nafs El 7aga', 'Ezdwageyit El Ma3ayier', '24 2irat', 'Symphonia', 'Sokan El Leel', 'Forsa Tania'],
    description: 'The king of story telling and phylosphy, this man\'s bars ain\'t understandable at all.',
    color: 'from-gray-500 to-gray-700',
    icon: <SpeakerWaveIcon className="w-6 h-6" />
  },
  {
    name: 'Arsenik',
    genre: 'Egyptian Rap',
    topSongs: ['Doos', 'Sekka', 'Skoot','Mayal', 'El 7ob El 3azaly', 'El Tareeq'],
    description: 'Arsenik is known for his deep lyrics and unique style in the Egyptian rap scene.',
    color: 'from-gray-700 to-gray-900',
    icon: <MicrophoneIcon className="w-6 h-6" />
  },
  // {
  //   name: 'Legy-ce',
  //   genre: 'Egyptian Rap',
  //   topSongs: [
  //     'Fatnazia',
  //     'Tharthara',
  //     'Zero',
  //     'FTrouh Lmeen',
  //     'Fe Elgaleed',
  //     'El 3alam El Sefly',
  //     'El 7ob El 3azaly',
  //   ],
  //   description: 'The legend of Legy-ce, his discography is endless and his style is unique. The man with the most songs in the Egyptian rap scene.',
  //   color: 'from-gray-800 to-black',
  //   icon: <StarIcon className="w-6 h-6" />
  // },
  // {
  //   name: 'Karim Osama',
  //   genre: 'Egyptian Rap',
  //   topSongs: [
  //     'El Maseer',
  //     'El 7ob El Akher',
  //     'El 3alam El Sefly',
  //     'El 7ob El 3azaly',
  //     'El Tareeq',
  //   ],
  //   description: 'Karim Osama brings a unique poetic style to Egyptian rap, blending deep lyrics with powerful delivery.',
  //   color: 'from-gray-700 to-gray-900',
  //   icon: <MicrophoneIcon className="w-6 h-6" />
  // },
  // {
  //   name: 'Ahmed Santa',
  //   genre: 'Egyptian Rap',
  //   topSongs: ['Santa Monica', 'El Donya', 'El 7ob', 'El 3alam', 'El Tareeq'],
  //   description: 'Ahmed Santa is a rising star in the Egyptian rap scene, known for his catchy beats and relatable lyrics.',
  //   color: 'from-gray-600 to-gray-800',
  //   icon: <MicrophoneIcon className="w-6 h-6" />
  // },
]

const currentPlaylist = [
  { song: 'Marwan Pablo - Ghaba', mood: 'Creative Burst', time: '3:58' },
]

const myRapLines = [

]

export default function MusicRapSection() {
  const [currentSong, setCurrentSong] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null)
  const [visibleLines, setVisibleLines] = useState(4); // Initially show 4 rap lines

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSong((prev) => (prev + 1) % currentPlaylist.length)
    }, 12000) // Change song every 12 seconds

    return () => clearInterval(interval)
  }, [])

  const handleShowMore = () => {
    setVisibleLines((prev) => prev + 4); // Show 4 more lines each time
  };

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
            Sound of My Life
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Music is my life's fuel! Mostly Arabic rap that keeps me in the zone while debugging,
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
Marawan Pablo - Aura                </div>
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
            <div className="text-2xl font-bold mb-2">30+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Rap Lines Written</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <SpeakerWaveIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">8,420+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Hours of Rap</div>
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
              I literally can't think without music! Whether I'm debugging at 3 AM or solving physics problems,
              there's always a beat in my ears. Arabic rap hits different when you're in the zone.
              The rhythm actually helps me think better!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
