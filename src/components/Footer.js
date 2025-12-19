import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaLinkedin, 
  FaGithub, 
  FaTwitter, 
  FaInstagram, 
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaCode,
  FaRocket
} from 'react-icons/fa';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const socialLinks = [
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/venkatasivachari8919/',
      label: 'LinkedIn',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      icon: FaGithub,
      href: 'https://github.com/Venkatasivachari',
      label: 'GitHub',
      color: 'text-gray-600 hover:text-gray-700'
    },
    {
      icon: FaTwitter,
      href: '#',
      label: 'Twitter',
      color: 'text-blue-400 hover:text-blue-500'
    },
    {
      icon: FaInstagram,
      href: '#',
      label: 'Instagram',
      color: 'text-pink-500 hover:text-pink-600'
    },
    {
      icon: FaEnvelope,
      href: 'mailto:sivachari8919@gmail.com',
      label: 'Email',
      color: 'text-green-500 hover:text-green-600'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Vs</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Venkata Siva Chari</h3>
                    <p className="text-gray-400">AI Developer & Tech Enthusiast</p>
                  </div>
                </div>
                
                <p className="text-gray-400 mb-6 max-w-md">
                  Passionate B.Tech student creating innovative solutions with AI and cutting-edge technology. 
                  Building the future, one line of code at a time.
                </p>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-white transition-colors duration-300"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaEnvelope className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-400">sivachari8919@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaCode className="w-4 h-4 text-green-500" />
                    <span className="text-gray-400">Available for projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaRocket className="w-4 h-4 text-purple-500" />
                    <span className="text-gray-400">Open to opportunities</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="border-t border-gray-800 py-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© 2025 Venkata Siva Chari. All rights reserved.</span>
                <span className="hidden md:inline">|</span>
                <span className="hidden md:inline">Made with</span>
                <FaHeart className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="hidden md:inline">in India</span>
              </div>

              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">Last updated: January 2025</span>
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  aria-label="Back to top"
                >
                  <FaArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      </div>
    </footer>
  );
};

export default Footer;
