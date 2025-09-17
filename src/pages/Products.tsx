/**
 * Products Page Component
 * 
 * Dedicated page for showcasing digital products and templates.
 * Features expanded product listings with external links.
 */

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { StatusBadge } from '../components/StatusBadge';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';

/**
 * Products page showcasing digital products and templates
 */
export function Products() {
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
            <StatusBadge status="Products" isAvailable={false} />
          </motion.div>

          {/* Page Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Explore My Products
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Some of the digital products that I worked on as side projects, 
              explore and try it now
            </p>
          </motion.div>

          {/* Products Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full" />
              Products
            </h2>

            <div className="space-y-4">
              <ProductCard
                title="Portafo"
                category="Framer Template"
                icon="P"
                href="https://framer.com/templates/portafo"
              />
              <ProductCard
                title="Faktur Invoice"
                category="Framer Template"
                icon="📄"
                href="https://framer.com/templates/invoice"
              />
              <ProductCard
                title="Goven"
                category="Framer Template"
                icon="G"
                href="https://framer.com/templates/goven"
              />
              <ProductCard
                title="Subtle Folio"
                category="Framer Template"
                icon="🎨"
                href="https://framer.com/templates/portfolio"
              />
            </div>
          </motion.div>

          {/* Additional Products */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              More Templates & Tools
            </h3>
            
            <div className="space-y-4">
              <ProductCard
                title="Minimal CV"
                category="Framer Template"
                icon="📋"
                href="https://framer.com/templates/cv"
              />
              <ProductCard
                title="Agency Landing"
                category="Framer Template"
                icon="🏢"
                href="https://framer.com/templates/agency"
              />
              <ProductCard
                title="Design System"
                category="Figma Resource"
                icon="🎯"
                href="https://figma.com/design-system"
              />
              <ProductCard
                title="Icon Pack"
                category="Design Resource"
                icon="⭐"
                href="https://icons.com/pack"
              />
            </div>
          </motion.div>

          {/* Feature Highlight */}
          <motion.div 
            variants={itemVariants}
            className="bg-card border border-border rounded-2xl p-6 text-center space-y-4"
          >
            <h3 className="text-xl font-semibold text-card-foreground">
              🚀 Featured Template
            </h3>
            <p className="text-muted-foreground">
              "Portafo" - A clean and modern portfolio template perfect for designers 
              and developers. Built with responsive design and smooth animations.
            </p>
            <motion.a
              href="https://framer.com/templates/portafo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hire-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Template
            </motion.a>
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