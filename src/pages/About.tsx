/**
 * About Page Component
 * 
 * Personal information page with detailed bio, profile photo, and side projects.
 * Features animated sections and responsive layout.
 */

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { StatusBadge } from '../components/StatusBadge';
import { ProductCard } from '../components/ProductCard';
import { Footer } from '../components/Footer';
import profilePhoto from '../assets/profile-photo.jpg';

/**
 * About page with personal information and background
 */
export function About() {
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
            <StatusBadge status="About" isAvailable={false} />
          </motion.div>

          {/* Page Title */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              It's Me Brian
            </h1>
          </motion.div>

          {/* Introduction */}
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm Brian Do, a product designer with over 5 years of experience, 
              currently residing in Jakarta, Indonesia. I have a deep passion for 
              crafting purposeful interfaces and products. My main goal is to bridge 
              the divide between people and technology, transforming intricate challenges 
              into meaningful and seamless experiences.
            </p>
          </motion.div>

          {/* Profile Photo */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={profilePhoto}
                alt="Brian Do - Full Profile Photo"
                className="w-full max-w-xs rounded-2xl object-cover"
              />
            </motion.div>
          </motion.div>

          {/* More About Me Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              More About Me
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Brian Do holds a bachelor's degree in Graphic Design from a prestigious 
                university in the United States and has a relentless drive for staying 
                up-to-date with the latest technologies and design trends. Actively 
                involved in the design community, Brian regularly participates in diverse 
                design conferences and meetups.
              </p>
              
              <p>
                When he's not immersed in design work, he finds solace in playing the 
                guitar and exploring new coffee shops in his local area. Brian firmly 
                believes in maintaining a healthy work-life balance, making sure to take 
                breaks and reenergize his creativity. In his spare time, he also volunteers 
                at a local animal shelter on weekends.
              </p>
            </div>
          </motion.div>

          {/* Side Projects */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              My Side Projects
            </h2>
            <p className="text-muted-foreground">
              I did passion side projects in the weekend, please take a look you will 
              love it (I hope).
            </p>

            <div className="space-y-3">
              <ProductCard
                title="Goven"
                category="Framer Template"
                icon="G"
                href="https://framer.com"
              />
              <ProductCard
                title="Upshift"
                category="Web Design Collections"
                icon="📱"
                href="https://dribbble.com"
              />
              <ProductCard
                title="Subtle Folio"
                category="Framer Template"
                icon="🎨"
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