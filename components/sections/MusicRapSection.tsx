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
    name: 'El Koker',
    genre: 'Egyptian Rap',
    topSongs: ['Hamesh El Samt', 'Fasla', 'Enfsam 7ad', 'Enfsam 7ad II', 'El Ra2sa El Akhira', 'Nafs El 7aga', 'Ezdwageyit El Ma3ayier', '24 2irat', 'Symphonia', 'Sokan El Leel', 'Forsa Tania'],
    description: 'The king of story telling and phylosphy, this man\'s bars ain\'t understandable at all.',
    color: 'from-gray-500 to-gray-700',
    icon: <SpeakerWaveIcon className="w-6 h-6" />
  },
  {
    name: 'Legy-ce',
    genre: 'Egyptian Rap',
    topSongs: [
      'El 3alam El Sefly',
      'El 7ob El 7aqiqi',
      'El 7ob El 3azaly',
      'El 7ob El 3azaly II',
      'El 7ob El 3azaly III',
      'El 7ob El 3azaly IV',
      'El 7ob El 3azaly V',
      'El 7ob El 3azaly VI',
      'El 7ob El 3azaly VII',
      'El 7ob El 3azaly VIII',
      'El 7ob El 3azaly IX',
      'El 7ob El 3azaly X',
      'El 7ob El 3azaly XI',
      'El 7ob El 3azaly XII',
      'El 7ob El 3azaly XIII',
      'El 7ob El 3azaly XIV',
      'El 7ob El 3azaly XV',
      'El 7ob El 3azaly XVI',
      'El 7ob El 3azaly XVII',
      'El 7ob El 3azaly XVIII',
      'El 7ob El 3azaly XIX',
      'El 7ob El 3azaly XX',
      'El 7ob El 3azaly XXI',
      'El 7ob El 3azaly XXII',
      'El 7ob El 3azaly XXIII',
      'El 7ob El 3azaly XXIV',
      'El 7ob El 3azaly XXV',
      'El 7ob El 3azaly XXVI',
      'El 7ob El 3azaly XXVII',
      'El 7ob El 3azaly XXVIII',
      'El 7ob El 3azaly XXIX',
      'El 7ob El 3azaly XXX',
      'El 7ob El 3azaly XXXI',
      'El 7ob El 3azaly XXXII',
      'El 7ob El 3azaly XXXIII',
      'El 7ob El 3azaly XXXIV',
      'El 7ob El 3azaly XXXV',
      'El 7ob El 3azaly XXXVI',
      'El 7ob El 3azaly XXXVII',
      'El 7ob El 3azaly XXXVIII',
      'El 7ob El 3azaly XXXIX',
      'El 7ob El 3azaly XL',
      'El 7ob El 3azaly XLI',
      'El 7ob El 3azaly XLII',
      'El 7ob El 3azaly XLIII',
      'El 7ob El 3azaly XLIV',
      'El 7ob El 3azaly XLV',
      'El 7ob El 3azaly XLVI',
      'El 7ob El 3azaly XLVII',
      'El 7ob El 3azaly XLVIII',
      'El 7ob El 3azaly XLIX',
      'El 7ob El 3azaly L',
      'El 7ob El 3azaly LI',
      'El 7ob El 3azaly LII',
      'El 7ob El 3azaly LIII',
      'El 7ob El 3azaly LIV',
      'El 7ob El 3azaly LV',
      'El 7ob El 3azaly LVI',
      'El 7ob El 3azaly LVII',
      'El 7ob El 3azaly LVIII',
      'El 7ob El 3azaly LIX',
      'El 7ob El 3azaly LX',
      'El 7ob El 3azaly LXI',
      'El 7ob El 3azaly LXII',
      'El 7ob El 3azaly LXIII',
      'El 7ob El 3azaly LXIV',
      'El 7ob El 3azaly LXV',
      'El 7ob El 3azaly LXVI',
      'El 7ob El 3azaly LXVII',
      'El 7ob El 3azaly LXVIII',
      'El 7ob El 3azaly LXIX',
      'El 7ob El 3azaly LXX',
      'El 7ob El 3azaly LXXI',
      'El 7ob El 3azaly LXXII',
      'El 7ob El 3azaly LXXIII',
      'El 7ob El 3azaly LXXIV',
      'El 7ob El 3azaly LXXV',
      'El 7ob El 3azaly LXXVI',
      'El 7ob El 3azaly LXXVII',
      'El 7ob El 3azaly LXXVIII',
      'El 7ob El 3azaly LXXIX',
      'El 7ob El 3azaly LXXX',
      'El 7ob El 3azaly LXXXI',
      'El 7ob El 3azaly LXXXII',
      'El 7ob El 3azaly LXXXIII',
      'El 7ob El 3azaly LXXXIV',
      'El 7ob El 3azaly LXXXV',
      'El 7ob El 3azaly LXXXVI',
      'El 7ob El 3azaly LXXXVII',
      'El 7ob El 3azaly LXXXVIII',
      'El 7ob El 3azaly LXXXIX',
      'El 7ob El 3azaly XC',
      'El 7ob El 3azaly XCI',
      'El 7ob El 3azaly XCII',
      'El 7ob El 3azaly XCIII',
      'El 7ob El 3azaly XCIV',
      'El 7ob El 3azaly XCV',
      'El 7ob El 3azaly XCVI',
      'El 7ob El 3azaly XCVII',
      'El 7ob El 3azaly XCVIII',
      'El 7ob El 3azaly XCIX',
      'El 7ob El 3azaly C',
      'El 7ob El 3azaly CI',
      'El 7ob El 3azaly CII',
      'El 7ob El 3azaly CIII',
      'El 7ob El 3azaly CIV',
      'El 7ob El 3azaly CV',
      'El 7ob El 3azaly CVI',
      'El 7ob El 3azaly CVII',
      'El 7ob El 3azaly CVIII',
      'El 7ob El 3azaly CIX',
      'El 7ob El 3azaly CX',
      'El 7ob El 3azaly CXI',
      'El 7ob El 3azaly CXII',
      'El 7ob El 3azaly CXIII',
      'El 7ob El 3azaly CXIV',
      'El 7ob El 3azaly CXV',
      'El 7ob El 3azaly CXVI',
      'El 7ob El 3azaly CXVII',
      'El 7ob El 3azaly CXVIII',
      'El 7ob El 3azaly CXIX',
      'El 7ob El 3azaly CXX',
      'El 7ob El 3azaly CXXI',
      'El 7ob El 3azaly CXXII',
      'El 7ob El 3azaly CXXIII',
      'El 7ob El 3azaly CXXIV',
      'El 7ob El 3azaly CXXV',
      'El 7ob El 3azaly CXXVI',
      'El 7ob El 3azaly CXXVII',
      'El 7ob El 3azaly CXXVIII',
      'El 7ob El 3azaly CXXIX',
      'El 7ob El 3azaly CXXX',
      'El 7ob El 3azaly CXXXI',
      'El 7ob El 3azaly CXXXII',
      'El 7ob El 3azaly CXXXIII',
      'El 7ob El 3azaly CXXXIV',
      'El 7ob El 3azaly CXXXV',
      'El 7ob El 3azaly CXXXVI',
      'El 7ob El 3azaly CXXXVII',
      'El 7ob El 3azaly CXXXVIII',
      'El 7ob El 3azaly CXXXIX',
      'El 7ob El 3azaly CXL',
      'El 7ob El 3azaly CXLI',
      'El 7ob El 3azaly CXLII',
      'El 7ob El 3azaly CXLIII',
      'El 7ob El 3azaly CXLIV',
      'El 7ob El 3azaly CXLV',
      'El 7ob El 3azaly CXLVI',
      'El 7ob El 3azaly CXLVII',
      'El 7ob El 3azaly CXLVIII',
      'El 7ob El 3azaly CXLIX',
      'El 7ob El 3azaly CL',
      'El 7ob El 3azaly CLI',
      'El 7ob El 3azaly CLII',
      'El 7ob El 3azaly CLIII',
      'El 7ob El 3azaly CLIV',
      'El 7ob El 3azaly CLV',
      'El 7ob El 3azaly CLVI',
      'El 7ob El 3azaly CLVII',
      'El 7ob El 3azaly CLVIII',
      'El 7ob El 3azaly CLIX',
      'El 7ob El 3azaly CLX',
      'El 7ob El 3azaly CLXI',
      'El 7ob El 3azaly CLXII',
      'El 7ob El 3azaly CLXIII',
      'El 7ob El 3azaly CLXIV',
      'El 7ob El 3azaly CLXV',
      'El 7ob El 3azaly CLXVI',
      'El 7ob El 3azaly CLXVII',
      'El 7ob El 3azaly CLXVIII',
      'El 7ob El 3azaly CLXIX',
      'El 7ob El 3azaly CLXX',
      'El 7ob El 3azaly CLXXI',
      'El 7ob El 3azaly CLXXII',
      'El 7ob El 3azaly CLXXIII',
      'El 7ob El 3azaly CLXXIV',
      'El 7ob El 3azaly CLXXV',
      'El 7ob El 3azaly CLXXVI',
      'El 7ob El 3azaly CLXXVII',
      'El 7ob El 3azaly CLXXVIII',
      'El 7ob El 3azaly CLXXIX',
      'El 7ob El 3azaly CLXXX',
      'El 7ob El 3azaly CLXXXI',
      'El 7ob El 3azaly CLXXXII',
      'El 7ob El 3azaly CLXXXIII',
      'El 7ob El 3azaly CLXXXIV',
      'El 7ob El 3azaly CLXXXV',
      'El 7ob El 3azaly CLXXXVI',
      'El 7ob El 3azaly CLXXXVII',
      'El 7ob El 3azaly CLXXXVIII',
      'El 7ob El 3azaly CLXXXIX',
      'El 7ob El 3azaly CXC',
      'El 7ob El 3azaly CXCI',
      'El 7ob El 3azaly CXCII',
      'El 7ob El 3azaly CXCIII',
      'El 7ob El 3azaly CXCIV',
      'El 7ob El 3azaly CXCV',
      'El 7ob El 3azaly CXCVI',
      'El 7ob El 3azaly CXCVII',
      'El 7ob El 3azaly CXCVIII',
      'El 7ob El 3azaly CXCIX',
      'El 7ob El 3azaly CC',
      'El 7ob El 3azaly CCI',
      'El 7ob El 3azaly CCII',
      'El 7ob El 3azaly CCIII',
      'El 7ob El 3azaly CCIV',
      'El 7ob El 3azaly CCV',
      'El 7ob El 3azaly CCVI',
      'El 7ob El 3azaly CCVII',
      'El 7ob El 3azaly CCVIII',
      'El 7ob El 3azaly CCIX',
      'El 7ob El 3azaly CCX',
      'El 7ob El 3azaly CCXI',
      'El 7ob El 3azaly CCXII',
      'El 7ob El 3azaly CCXIII',
      'El 7ob El 3azaly CCXIV',
      'El 7ob El 3azaly CCXV',
      'El 7ob El 3azaly CCXVI',
      'El 7ob El 3azaly CCXVII',
      'El 7ob El 3azaly CCXVIII',
      'El 7ob El 3azaly CCXIX',
      'El 7ob El 3azaly CCXX',
      'El 7ob El 3azaly CCXXI',
      'El 7ob El 3azaly CCXXII',
      'El 7ob El 3azaly CCXXIII',
      'El 7ob El 3azaly CCXXIV',
      'El 7ob El 3azaly CCXXV',
      'El 7ob El 3azaly CCXXVI',
      'El 7ob El 3azaly CCXXVII',
      'El 7ob El 3azaly CCXXVIII',
      'El 7ob El 3azaly CCXXIX',
      'El 7ob El 3azaly CCXXX',
      'El 7ob El 3azaly CCXXXI',
      'El 7ob El 3azaly CCXXXII',
      'El 7ob El 3azaly CCXXXIII',
      'El 7ob El 3azaly CCXXXIV',
      'El 7ob El 3azaly CCXXXV',
      'El 7ob El 3azaly CCXXXVI',
      'El 7ob El 3azaly CCXXXVII',
      'El 7ob El 3azaly CCXXXVIII',
      'El 7ob El 3azaly CCXXXIX',
      'El 7ob El 3azaly CCXL',
      'El 7ob El 3azaly CCXLI',
      'El 7ob El 3azaly CCXLII',
      'El 7ob El 3azaly CCXLIII',
      'El 7ob El 3azaly CCXLIV',
      'El 7ob El 3azaly CCXLV',
      'El 7ob El 3azaly CCXLVI',
      'El 7ob El 3azaly CCXLVII',
      'El 7ob El 3azaly CCXLVIII',
      'El 7ob El 3azaly CCXLIX',
      'El 7ob El 3azaly CCL',
      'El 7ob El 3azaly CCLI',
      'El 7ob El 3azaly CCLII',
      'El 7ob El 3azaly CCLIII',
      'El 7ob El 3azaly CCLIV',
      'El 7ob El 3azaly CCLV',
      'El 7ob El 3azaly CCLVI',
      'El 7ob El 3azaly CCLVII',
      'El 7ob El 3azaly CCLVIII',
      'El 7ob El 3azaly CCLIX',
      'El 7ob El 3azaly CCLX',
      'El 7ob El 3azaly CCLXI',
      'El 7ob El 3azaly CCLXII',
      'El 7ob El 3azaly CCLXIII',
      'El 7ob El 3azaly CCLXIV',
      'El 7ob El 3azaly CCLXV',
      'El 7ob El 3azaly CCLXVI',
      'El 7ob El 3azaly CCLXVII',
      'El 7ob El 3azaly CCLXVIII',
      'El 7ob El 3azaly CCLXIX',
      'El 7ob El 3azaly CCLXX',
      'El 7ob El 3azaly CCLXXI',
      'El 7ob El 3azaly CCLXXII',
      'El 7ob El 3azaly CCLXXIII',
      'El 7ob El 3azaly CCLXXIV',
      'El 7ob El 3azaly CCLXXV',
      'El 7ob El 3azaly CCLXXVI',
      'El 7ob El 3azaly CCLXXVII',
      'El 7ob El 3azaly CCLXXVIII',
      'El 7ob El 3azaly CCLXXIX',
      'El 7ob El 3azaly CCLXXX',
      'El 7ob El 3azaly CCLXXXI',
      'El 7ob El 3azaly CCLXXXII',
      'El 7ob El 3azaly CCLXXXIII',
      'El 7ob El 3azaly CCLXXXIV',
      'El 7ob El 3azaly CCLXXXV',
      'El 7ob El 3azaly CCLXXXVI',
      'El 7ob El 3azaly CCLXXXVII',
      'El 7ob El 3azaly CCLXXXVIII',
      'El 7ob El 3azaly CCLXXXIX',
      'El 7ob El 3azaly CCXC',
      'El 7ob El 3azaly CCXCI',
      'El 7ob El 3azaly CCXCII',
      'El 7ob El 3azaly CCXCIII',
      'El 7ob El 3azaly CCXCIV',
      'El 7ob El 3azaly CCXCV',
      'El 7ob El 3azaly CCXCVI',
      'El 7ob El 3azaly CCXCVII',
      'El 7ob El 3azaly CCXCVIII',
      'El 7ob El 3azaly CCXCIX',
      'El 7ob El 3azaly CCC',
    ],
    description: 'The legend of Legy-ce, his discography is endless and his style is unique. The man with the most songs in the Egyptian rap scene.',
    color: 'from-gray-800 to-black',
    icon: <StarIcon className="w-6 h-6" />
  },
]

const currentPlaylist = [
  { song: 'Marwan Pablo - Ghaba', mood: 'Creative Burst', time: '3:58' },
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
