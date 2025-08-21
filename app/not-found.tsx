'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
    HomeIcon,
    ArrowLeftIcon,
    ExclamationTriangleIcon,
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import Loader from '@/components/ui/Loader'

const codeQuotes = [
    "404: Page not found, but your curiosity is noted!",
    "Error 404: This page decided to quantum tunnel to another dimension",
    "Error: This page is currently debugging itself",
    "404: Probably got lost in a recursive loop somewhere"
]

const suggestions = [
    { name: 'Home', path: '/', icon: <HomeIcon className="w-5 h-5" />, description: 'Back to the main universe' },
    { name: 'Projects', path: '/projects', icon: <MagnifyingGlassIcon className="w-5 h-5" />, description: 'Explore my coding adventures' },
    { name: 'YSNTKSFST', path: '/YsnTksFst', icon: <MagnifyingGlassIcon className="w-5 h-5" />, description: 'Read my philosophical musings' },
    { name: 'Yaseenverse', path: '/yaseenverse', icon: <MagnifyingGlassIcon className="w-5 h-5" />, description: 'Enter my personal dimension' },
    { name: 'Archive', path: '/archive', icon: <MagnifyingGlassIcon className="w-5 h-5" />, description: 'Browse my digital vault' },
    { name: 'Contact', path: '/contact', icon: <MagnifyingGlassIcon className="w-5 h-5" />, description: 'Get in touch with me' }
]

export default function NotFoundPage() {
    const [currentQuote, setCurrentQuote] = useState(0)
    const [glitchText, setGlitchText] = useState('404')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Loader timer
        const loaderTimer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // 2 seconds for 404 page

        const quoteInterval = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % codeQuotes.length)
        }, 3000)

        const glitchInterval = setInterval(() => {
            const glitchChars = ['4', '0', '4', 'Ø', '₄', '◊', '♦', '♠']
            const randomGlitch = Array.from({ length: 3 }, () =>
                glitchChars[Math.floor(Math.random() * glitchChars.length)]
            ).join('')

            setGlitchText(randomGlitch)

            setTimeout(() => {
                setGlitchText('404')
            }, 150)
        }, 2000)

        return () => {
            clearTimeout(loaderTimer)
            clearInterval(quoteInterval)
            clearInterval(glitchInterval)
        }
    }, [])

    if (isLoading) {
        return <Loader isLoading={isLoading} />
    }

    return (
        <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4 mt-16">
            <div className="max-w-4xl mx-auto text-center">
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="text-center mb-4"
            >
                <div className="font-mono text-sm text-gray-500 dark:text-gray-500">
                    <div>{'> '}<span className="text-green-500">yasoo@universe</span>:{' '}
                        <span className="text-blue-500">~/404</span>$
                        <span className="animate-pulse">▊</span>
                    </div>
                </div>
            </motion.div>
          
                {/* Glitch 404 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8"
                >
                    <motion.h1
                        key={glitchText}
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: 1 }}
                        className="text-8xl md:text-9xl font-mono font-bold text-black dark:text-white mb-4"
                        style={{
                            textShadow: glitchText !== '404' ?
                                '2px 2px 0 #ff0000, -2px -2px 0 #00ff00, 1px -1px 0 #0000ff' :
                                'none'
                        }}
                    >
                        {glitchText}
                    </motion.h1>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
                        <span className="text-xl font-mono text-red-500">PAGE_NOT_FOUND</span>
                        <ExclamationTriangleIcon className="w-6 h-6 text-red-500" />
                    </div>
                </motion.div>

                {/* Dynamic Quotes */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-12"
                >
                    <motion.p
                        key={currentQuote}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed italic"
                    >
                        "{codeQuotes[currentQuote]}"
                    </motion.p>
                </motion.div>

                {/* Navigation Suggestions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mb-12"
                >
                    <h3 className="text-xl font-bold text-black dark:text-white mb-6">
                        Maybe you're looking for these?
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {suggestions.map((suggestion, index) => (
                            <motion.div
                                key={suggestion.path}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link
                                    href={suggestion.path}
                                    className="block p-4 bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg hover:border-black dark:hover:border-white transition-all duration-300 group"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="text-gray-600 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                                            {suggestion.icon}
                                        </div>
                                        <span className="font-semibold text-black dark:text-white">
                                            {suggestion.name}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 text-left">
                                        {suggestion.description}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                 {/* Fun Fact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5 }}
                    className="mt-12 text-center"
                >
                    <div className="bg-black dark:bg-white text-white dark:text-black rounded-lg p-6 max-w-2xl mx-auto">
                        <h4 className="font-bold mb-2">Fun Physics Fact</h4>
                        <p className="text-sm leading-relaxed">
                            Just like this 404 error, about 95% of the universe is "missing" -
                            we call it dark matter and dark energy. Sometimes the most interesting
                            discoveries come from finding what's NOT there!
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
