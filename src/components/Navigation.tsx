/**
 * Navigation Component
 * 
 * Provides the main navigation bar with theme toggle and navigation links.
 * Features a glassmorphism design with backdrop blur effect.
 */

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faUser, 
  faProjectDiagram, 
  faShoppingCart, 
  faSun, 
  faMoon 
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from './ThemeProvider';
import { useLocation, Link } from 'react-router-dom';

/**
 * Main navigation component with glassmorphism effect
 */
export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', icon: faHome, label: 'Home' },
    { path: '/about', icon: faUser, label: 'About' },
    { path: '/projects', icon: faProjectDiagram, label: 'Projects' },
    { path: '/products', icon: faShoppingCart, label: 'Products' },
  ];

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.nav 
        className="nav-container rounded-2xl px-6 py-3"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-6">
        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`p-2 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent'
              }`}
            >
              <FontAwesomeIcon icon={item.icon} className="w-4 h-4" />
              <span className="sr-only">{item.label}</span>
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Toggle theme"
        >
          <FontAwesomeIcon 
            icon={theme === 'light' ? faMoon : faSun} 
            className="w-4 h-4" 
          />
        </button>

        {/* Hire Me Button */}
        <Link to="/contact">
          <motion.button
            className="hire-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Hire Me
          </motion.button>
        </Link>
        </div>
      </motion.nav>
    </div>
  );
}