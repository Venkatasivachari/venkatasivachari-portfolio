import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaHandshake, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import ParticlesBackground from './Particles';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Venkatasivachari', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/venkatasivachari8919/', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://x.com/venkatasivachari', label: 'Twitter' },
    { icon: FaInstagram, href: 'https://www.instagram.com/venkata_sivachari__mainampati/', label: 'Instagram' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <ParticlesBackground />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{
            left: mousePosition.x / 20,
            top: mousePosition.y / 20,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"
          style={{
            right: mousePosition.x / 30,
            bottom: mousePosition.y / 30,
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                Hello, I'm
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              <span className="gradient-text">Venkata Siva Chari</span>
            </motion.h1>

            {/* Animated Typing Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 h-16 flex items-center justify-center lg:justify-start"
            >
              <ReactTyped
                strings={[
                  'AI Developer | Web Designer | Innovator',
                  'Passionate B.Tech Student',
                  'Full Stack Developer',
                  'Tech Enthusiast'
                  
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
                className="gradient-text font-semibold"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl"
            >
              Passionate about creating innovative solutions with AI and cutting-edge technology. 
              Building the future, one line of code at a time.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center justify-center space-x-2 group"
              >
                <FaDownload className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download Resume</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center space-x-2 group"
              >
                <FaHandshake className="w-5 h-5 group-hover:animate-pulse" />
                <span>Hire Me</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + index * 0.1 }}
                  className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              
              {/* Profile Image Container */}
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                className="relative w-80 h-89 rounded-full overflow-hidden shadow-1xl border-4 border-white dark:border-gray-800"
              >
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  {/* <span className="text-6xl font-bold text-white">VS</span> */}
                  <img src="mypic2.jpg" alt="Logo" className="max-w-full max-h-full" />
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">🚀</span>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-xl">💻</span>
                </motion.div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute top-10 -left-10 w-20 h-20 border-2 border-blue-500 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
              <div className="absolute bottom-10 -right-10 w-16 h-16 border-2 border-purple-500 rounded-full animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
