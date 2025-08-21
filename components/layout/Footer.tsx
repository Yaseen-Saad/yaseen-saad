'use client';

import Link from 'next/link';

const footerLinks = {
  main: [
    { href: '/', label: 'Home' },
    { href: '/thoughts', label: 'Thoughts' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ],
  social: [
    { href: 'https://github.com/yaseen-saad', label: 'GitHub' },
    { href: 'https://linkedin.com/in/yaseen-saad', label: 'LinkedIn' },
    { href: 'mailto:yaseen@yasoo.me', label: 'Email' },
  ],
  quotes: [
    "Everything we hear is an opinion, not a fact.",
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity.",
    "The time you enjoy wasting is not wasted time.",
  ]
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const randomQuote = footerLinks.quotes[Math.floor(Math.random() * footerLinks.quotes.length)];

  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black relative transition-colors duration-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left column - Brand and quote */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-2 font-yasoo">Yasoo</h3>
              <p className="text-gray-300 dark:text-gray-700 font-serif italic">
                A chill guy trying to decode the universe
              </p>
            </div>
            
            <blockquote className="border-l-4 border-white dark:border-black pl-4 text-gray-300 dark:text-gray-700 font-serif italic">
              "{randomQuote}"
            </blockquote>
          </div>

          {/* Middle column - Navigation */}
          <div>
            <h4 className="text-lg font-mono uppercase tracking-wider mb-6">Navigate</h4>
            <ul className="space-y-3">
              {footerLinks.main.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors font-mono text-sm uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Connect */}
          <div>
            <h4 className="text-lg font-mono uppercase tracking-wider mb-6">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black transition-colors font-mono text-sm uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-700 dark:border-gray-300">
              <p className="text-xs font-mono text-gray-400 dark:text-gray-600">
                Based in Giza, Egypt<br />
                STEM High School Student<br />
                Physics • Coding • Philosophy
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-700 dark:border-gray-300 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm font-mono text-gray-400 dark:text-gray-600">
            © {currentYear} Yaseen Saad-Eldin Mohamed-Sabry Mohamed-Abdelal
          </div>
          
          <div className="text-sm font-mono text-gray-400 dark:text-gray-600">
            "Neither a jack of all trades, nor a master of one, but the master of everyone."
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-8 w-px h-16 bg-white dark:bg-black opacity-20"></div>
      <div className="absolute top-0 right-8 w-px h-16 bg-white dark:bg-black opacity-20"></div>
    </footer>
  );
}
