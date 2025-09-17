/**
 * Home Page Component
 * 
 * The main landing page featuring hero section, project preview, and products showcase.
 * Includes animated elements using Framer Motion and responsive design.
 */

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { StatusBadge } from '../components/StatusBadge';
import { ProjectCard } from '../components/ProjectCard';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import profilePhoto from '../assets/profile-photo.jpg';

/**
 * Main home page with hero section and project previews
 */
export function Home() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('brian.do@email.com');
    // Add toast notification here if desired
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants}>
            <StatusBadge status="Product Designer" />
          </motion.div>

          {/* Hero Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  I'm Brian Do
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Product designer from Jakarta, ID.<br />
                  Currently designing at Rectangle.
                </p>
                
                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <motion.button
                    className="hire-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Hire Me
                  </motion.button>
                  <motion.button
                    className="copy-button flex items-center gap-2"
                    onClick={handleCopyEmail}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FontAwesomeIcon icon={faCopy} className="w-4 h-4" />
                    Copy Email
                  </motion.button>
                </div>
              </div>

              {/* Profile Photo */}
              <motion.div
                className="flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profilePhoto}
                  alt="Brian Do - Product Designer"
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover ring-4 ring-border"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                Projects
              </h2>
              <Link 
                to="/projects" 
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 text-sm"
              >
                View All
                <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
              </Link>
            </div>

            <div className="space-y-3">
              <ProjectCard
                title="Morva labs"
                description="Visual design, Branding"
                icon="M"
                color="morva"
              />
              <ProjectCard
                title="Rectangle"
                description="Product design, Icon design"
                icon="⬜"
                color="rectangle"
              />
              <ProjectCard
                title="Simply"
                description="Landing page, Illustration design"
                icon="⚡"
                color="simply"
              />
            </div>
          </motion.div>

          {/* Products Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              Products
            </h2>

            <div className="space-y-3">
              <ProductCard
                title="Portafo"
                category="Framer Template"
                icon="P"
                href="https://framer.com"
              />
              <ProductCard
                title="Faktur Invoice"
                category="Framer Template"
                icon="📄"
                href="https://framer.com"
              />
              <ProductCard
                title="Goven"
                category="Framer Template"
                icon="G"
                href="https://framer.com"
              />
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants} 
            className="text-center space-y-6 pt-8"
          >
            <h3 className="text-2xl font-bold text-foreground">
              Let's work together.
            </h3>
            <p className="text-muted-foreground">
              Creating user experience and visual appealing design
            </p>
            
            <div className="flex gap-3 justify-center">
              <motion.button
                className="hire-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.button>
              <motion.button
                className="copy-button flex items-center gap-2"
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faCopy} className="w-4 h-4" />
                Copy Email
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}