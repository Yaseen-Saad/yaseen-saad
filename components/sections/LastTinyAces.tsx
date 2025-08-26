'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


export default function LastTinyAces() {
  return (
    <section className="py-24 bg-white dark:bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Philosophy quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-700 dark:text-gray-300 max-w-4xl mx-auto border-l-4 border-black dark:border-white pl-8 text-left">
              "Jack of all trades, master of none, but better than a master of one."
            </blockquote>
            <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mt-4 uppercase tracking-wider">
              — My Life Philosophy
            </p>
          </motion.div>

          {/* Stats section
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-black dark:bg-white text-white dark:text-black p-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-display font-bold mb-2">85+</div>
                <div className="text-sm font-mono uppercase tracking-wider">Peers Recruited</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2">16/21</div>
                <div className="text-sm font-mono uppercase tracking-wider">Club Memberships</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2">0.2%</div>
                <div className="text-sm font-mono uppercase tracking-wider">Top Percentile</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold mb-2">∞</div>
                <div className="text-sm font-mono uppercase tracking-wider">Curiosity Level</div>
              </div>
            </div>
          </motion.div>*/}
        </div>
      </div>
    </section>
  );
}
