'use client';

import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    return theme === 'dark' ? 
      <div className="w-3 h-3 bg-current rounded-full"></div> : 
      <div className="w-3 h-3 border border-current rounded-full"></div>;
  };

  const getTooltip = () => {
    return theme === 'dark' ? 'Dark Mode' : 'Light Mode';
  };

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 group"
      whileTap={{ scale: 0.95 }}
      title={getTooltip()}
    >
      <motion.div
        className="w-6 h-6 bg-black dark:bg-white rounded-full shadow-md flex items-center justify-center text-white dark:text-black"
        animate={{
          x: theme === 'light' ? 0 : 24,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        <motion.div
          animate={{
            rotate: theme === 'dark' ? 180 : 0,
          }}
          transition={{ 
            duration: 0.3,
            ease: 'easeInOut'
          }}
          className="text-xs"
        >
          {getIcon()}
        </motion.div>
      </motion.div>
      
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {getTooltip()}
      </div>
    </motion.button>
  );
}
