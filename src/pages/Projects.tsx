/**
 * Projects Page Component
 * 
 * Showcases all projects and work portfolio with detailed descriptions.
 * Features animated project cards and responsive grid layout.
 */

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { StatusBadge } from '../components/StatusBadge';
import { ProjectCard } from '../components/ProjectCard';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

/**
 * Projects page displaying portfolio of work
 */
export function Projects() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText('brian.do@email.com');
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
            <StatusBadge status="Projects" isAvailable={false} />
          </motion.div>

          {/* Page Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              My Works
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Discover my portfolio, where purposeful interfaces meet captivating 
              design. My work strives to enhance experiences and inspire.
            </p>
          </motion.div>

          {/* All Projects */}
          <motion.div variants={itemVariants} className="space-y-4">
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
              <ProjectCard
                title="Glassdoor"
                description="Icon design, Illustration design"
                icon="💎"
                color="glassdoor"
              />
              <ProjectCard
                title="Seven LTD."
                description="Branding, Landing page"
                icon="7"
                color="seven"
              />
            </div>
          </motion.div>

          {/* Explore Products Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Explore My Products
            </h2>
            <p className="text-muted-foreground">
              Some of the digital products that I worked on as side projects, 
              explore them now
            </p>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                Products
              </h3>

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
                <ProductCard
                  title="Subtle Folio"
                  category="Framer Template"
                  icon="🎨"
                  href="https://framer.com"
                />
              </div>
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