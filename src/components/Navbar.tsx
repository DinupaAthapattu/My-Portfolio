import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['About', 'Skills', 'Projects', 'Contact'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            Dinupa
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
          
        )}
      </AnimatePresence>
    </nav>
  );
}