'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  MusicalNoteIcon,
  CalculatorIcon,
  BugAntIcon,
  CodeBracketIcon,
  BookOpenIcon,
  TrophyIcon,
  GlobeAltIcon,
  StarIcon,
  FaceSmileIcon,
  CakeIcon,
  MicrophoneIcon,
  AcademicCapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import CreativeClock from '../ui/CreativeClock';
import Image from 'next/image';

const quotes = [
  "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
  "Be yourself; everyone else is already taken.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "The time you enjoy wasting is not wasted time.",
  "To live is to suffer, to survive is to find some meaning in the suffering.",
  "The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
  "Neither a jack of all trades, nor a master of one, but the master of everyone."
];

const currentActivities = [
  { activity: "Praying", icon: <MusicalNoteIcon className="w-5 h-5" /> },
  { activity: "Listening to Wegz - El Bakht while coding", icon: <MusicalNoteIcon className="w-5 h-5" /> },
  { activity: "Solving quantum mechanics to Marwan Pablo", icon: <CalculatorIcon className="w-5 h-5" /> },
  { activity: "Debugging React with Abyusif beats", icon: <BugAntIcon className="w-5 h-5" /> },
  { activity: "Reading papers with Cairokee playing", icon: <BookOpenIcon className="w-5 h-5" /> },
  { activity: "Sleeping (with soft lo-fi)", icon: <FaceSmileIcon className="w-5 h-5" /> },
  { activity: "Making coffee to Ahmed Mekky's flow", icon: <CakeIcon className="w-5 h-5" /> },
  { activity: "Writing rap lyrics inspired by Pablo", icon: <MicrophoneIcon className="w-5 h-5" /> },
  { activity: "Watching physics lectures with headphones on", icon: <AcademicCapIcon className="w-5 h-5" /> }
];

// Typewriter hook
const useTypewriter = (text: string, delay: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        // Hide cursor after completion
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, delay);

    return () => clearInterval(timer);
  }, [text, delay]);

  return { displayText, showCursor };
};

export default function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showCurrentActivity, setShowCurrentActivity] = useState(false);

  // Get the current activity from environment variable
  const envActivity = process.env.NEXT_PUBLIC_CURRENT_ACTIVITY;
  const mostRecentActivity = {
    activity: envActivity || "Listening to Wegz - El Bakht while coding",
    icon: <MusicalNoteIcon className="w-5 h-5" />
  };

  // Typewriter effect for the name
  const { displayText: nameText, showCursor } = useTypewriter("Yaseen Saad-Eldin", 150);

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(quoteInterval);
      clearInterval(timeInterval);
    };
  }, []);

  const cairoTime = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Cairo',
    hour12: true,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(currentTime);

  const cairoDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Cairo',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(currentTime);

  return (
    <section className="min-h-screen bg-white dark:bg-black relative overflow-hidden mt-16 pt-20 pb-16">
      {/* Subtle noise texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

      {/* Floating Currently Doing Indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.5, duration: 0.5 }}
        className="fixed top-24 right-4 z-40 group"
        onMouseEnter={() => setShowCurrentActivity(true)}
        onMouseLeave={() => setShowCurrentActivity(false)}
      >
        <div className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
          <SparklesIcon className="w-5 h-5" />
        </div>

        {/* Tooltip on hover */}
        {showCurrentActivity && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            className="absolute top-0 right-16 bg-black dark:bg-white text-white dark:text-black px-4 py-3 rounded-lg shadow-xl min-w-[250px] border-2 border-gray-700 dark:border-gray-300"
          >
            <div className="text-xs font-mono uppercase tracking-wider mb-1 opacity-70">
              Currently Doing
            </div>
            <div className="  text-sm font-medium">
              {mostRecentActivity.activity}
            </div>
            <div className="absolute top-3 -right-1 w-2 h-2 bg-black dark:bg-white rotate-45"></div>
          </motion.div>
        )}
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 min-h-[calc(100vh-5rem)] flex items-center justify-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-8">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-black dark:border-white shadow-2xl group-hover:shadow-3xl transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/assets/images/gallery/Yaseen Saad-Eldin.jpg"
                  alt="Yaseen Saad-Eldin"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>
              {/* Floating activity indicator */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full p-2 sm:p-3 shadow-lg"
              >
                <div className="text-black dark:text-white">
                  {mostRecentActivity.icon}
                </div>
              </motion.div>
            </motion.div>

            {/* Name and intro */}
            <div className="text-center lg:text-left flex-1 max-w-2xl">
              {/* Main heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-3 sm:mb-4"
              >
                <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-black dark:text-white leading-[0.9] tracking-tight">
                  <i>Hi there, I am</i>
                </h1>
              </motion.div>

              {/* Name with typewriter effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mb-4 sm:mb-6"
              >
                <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-black dark:text-white leading-[0.8] tracking-tighter">
                  <span className="inline-block">
                    {nameText}
                    {showCursor && (
                      <span className="typewriter-cursor ml-1 text-black dark:text-white">
                        |
                      </span>
                    )}
                  </span>
                </h2>
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="mb-4 sm:mb-6"
              >
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  A chill guy trying to decode the universe
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mt-2 sm:mt-3 font-mono">
                  "High-schooler by day, philosopher by thought, coder by passion, and physicist by curiosity!"
                </p>

                {/* Personal details - now properly responsive */}
                <div className="mt-4 sm:mt-6 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-xs sm:text-sm font-mono text-gray-500 dark:text-gray-500 uppercase tracking-wider">
                    <span className="border-l-2 border-black dark:border-white pl-3 py-1">
                      Just me and my thoughts                    </span>
                    <span className="border-l-2 border-black dark:border-white pl-3 py-1 sm:border-l-0 sm:border-r-2 sm:pr-3 sm:pl-0">
                      Giza, Egypt • STEM School
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Creative Clock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="mb-12 flex justify-center"
          >
            <CreativeClock />
          </motion.div>

          {/* Rotating quotes */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="mb-16 h-24 flex items-center justify-center text-center"
          >
            <motion.blockquote
              key={currentQuote}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.5 }}
              className="text-lg md:text-xl italic text-gray-600 dark:text-gray-400 max-w-4xl mx-auto border-l-4 border-black dark:border-white pl-6 text-left"
            >
              "{quotes[currentQuote]}"
            </motion.blockquote>
          </motion.div>

          {/* Achievement highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center border-t-2 border-black dark:border-white pt-6">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">5th Place</div>
              <div className="text-sm font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                International Physics Realm (Gold Medal)
              </div>
            </div>
            <div className="text-center border-t-2 border-black dark:border-white pt-6">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">Top 0.2%</div>
              <div className="text-sm font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                STEM High School Entrance Exam
              </div>
            </div>
            <div className="text-center border-t-2 border-black dark:border-white pt-6">
              <div className="text-3xl font-bold text-black dark:text-white mb-2">Top 0.16%</div>
              <div className="text-sm font-mono text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Egyptian Chemistry Olympiad 2025
              </div>
            </div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.4, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="text-sm font-mono text-gray-500 dark:text-gray-500 mb-4 uppercase tracking-wider">
              Scroll to explore
            </div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-16 bg-black dark:bg-white"
            ></motion.div>
          </motion.div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-center">
        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <TrophyIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">4.0/4.0</div>
            <div className="text-sm font-mono uppercase tracking-wider">GPA</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <CodeBracketIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">90+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Coding Projects Made</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <GlobeAltIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">220+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Sessions Made</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <StarIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">1500</div>
            <div className="text-sm font-mono uppercase tracking-wider">SAT</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
