'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PersonalStory() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative">
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-black dark:text-white mb-6 leading-tight">
              A Letter from Me!
            </h2>
            <div className="w-24 h-1 bg-black dark:bg-white mx-auto"></div>
          </motion.div>

          {/* Letter content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white dark:bg-black border-2 border-black dark:border-white p-8 md:p-12 shadow-lg font-serif text-lg leading-relaxed [&_strong]:text-black [&_strong]:dark:text-white">
              <p className="text-xl font-bold text-black dark:text-white mb-6">
                "Greetings from Giza!"
              </p>
              
              <p className="mb-6 dark:text-gray-300">
                My name is <strong>Yaseen Saad-Eldin Mohamed-Sabry Mohamed-Abdelal</strong>, but you can call me Yasoo. 
                I'm an 18-year-old student with a universe-sized curiosity, currently navigating the academic 
                boarding school —or as I call it "the jungle"— known as the{' '}
                <a href="https://www.stemegypt.net/" className="text-black dark:text-white underline hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
                  STEM High School for Boys - 6th of October
                </a>. 
                Let's just say the entrance exam was a battle royale, and I'm proud to say I emerged victorious, 
                landing in the <strong>top 0.2% of applicants</strong>.
              </p>

              <p className="mb-6 dark:text-gray-300">
                My passions lie in the realms of <strong>physics and computer science</strong>. I spend my days 
                dissecting the mysteries of the universe, from the intricacies of quantum mechanics to the 
                elegance of astrophysics —I am lying I just know mechanics. When I'm not battling equations, 
                you can usually find me buried in code, exploring the digital frontier.
              </p>

              <p className="mb-6 dark:text-gray-300">
                I'm a bit of a competitive spirit, having achieved a <strong>5th-place (gold medal) global ranking 
                at the International Physics Realm (IPhR)</strong> and the prestigious title of the <strong>top Ambassador</strong> 
                —I got 85+ other peers to participate. I've also secured <strong>1st place in Category C of Physics Brawl 2023</strong> and{' '}
                <strong>1st place in Africa and 34th globally in Category B of 2024</strong>, breaking the record for the 
                highest score by an African participant. My competitive spirit extends beyond physics. I've achieved an{' '}
                <strong>8th-place ranking in the Logarythm Mathematics Competition</strong> and a remarkable{' '}
                <strong>score of 55 on the TOFAS Test</strong>.
              </p>

              <p className="mb-6 dark:text-gray-300">
                Beyond the classroom, I'm deeply involved in the <strong>DIGITAL EGYPT CUBS INITIATIVE</strong>, where I'm 
                among the select few students chosen for the highest level of training. This program has provided me 
                with invaluable opportunities to hone my coding skills, culminating in a <strong>first-place victory at 
                the DECI GEEKS Competition</strong> and qualification for the <strong>second round of the ECPC in both 2023 and 2024</strong>.
              </p>

              <p className="mb-6 dark:text-gray-300">
                I'm a member of <strong>16 out of the 21 clubs in school</strong> (Medicine Related clubs? Not so much.), 
                and I'm currently vying for the presidency of both the <strong>Physics and Computer Science clubs</strong>.
              </p>

              <p className="mb-8 dark:text-gray-300">
                Welcome to my corner of the internet. Explore, learn, and feel free to reach out if you have any 
                questions about physics, coding, or how to survive high school.
              </p>

              <p className="text-right font-bold dark:text-white">
                Best regards,<br />
                <span className="text-2xl font-display">Yaseen Saad-Eldin</span>
              </p>
            </div>
          </motion.div>

          {/* Fun facts */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 bg-black dark:bg-white text-white dark:text-black p-8 border-2 border-black dark:border-white"
          >
            <h3 className="text-2xl font-display font-bold mb-6 text-center">
              Random Facts About Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-2">• Full Name:</h4>
                <p className="text-sm">Yaseen Saad-Eldin Mohamed-Sabry Mohamed-Abdelal</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">• Current Location:</h4>
                <p className="text-sm">The Jungle (STEM School), 6th of October, Giza</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">• Club Memberships:</h4>
                <p className="text-sm">16 out of 21 school clubs (except medicine-related ones)</p>
              </div>
              <div>
                <h4 className="font-bold mb-2">• Survival Skill:</h4>
                <p className="text-sm">How to survive high school and quantum mechanics</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
