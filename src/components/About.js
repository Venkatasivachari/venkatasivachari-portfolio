import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaGraduationCap, FaProjectDiagram, FaYoutube, FaBrain, FaRocket } from 'react-icons/fa';
import AnimatedCounter from './AnimatedCounter';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const stats = [
    { icon: FaGraduationCap, label: 'Years of Learning', value: 3, suffix: '+' },
    { icon: FaProjectDiagram, label: 'Projects Done', value: 5, suffix: '+' },
    { icon: FaCode, label: 'Courses Completed', value: 5, suffix: '+' }
  ];

  const features = [
    {
      icon: FaBrain,
      title: 'AI & Machine Learning',
      description: 'Passionate about artificial intelligence and building intelligent solutions'
    },
    {
      icon: FaCode,
      title: 'Full Stack Development',
      description: 'Expertise in both frontend and backend technologies for complete solutions'
    },
    // {
    //   icon: FaYoutube,
    //   title: 'Content Creation',
    //   description: 'Creating educational content on YouTube to share knowledge with the community'
    // },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Always exploring new technologies and pushing the boundaries of what\'s possible'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate B.Tech student on a journey to revolutionize technology through AI and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
                Hi, I'm Venkata Siva Chari
              </h3>
              
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p className="text-lg leading-relaxed">
                  I'm a passionate B.Tech student with a deep love for technology and innovation. 
                  My journey in the world of programming started with curiosity and has evolved into 
                  a full-fledged passion for creating solutions that make a difference.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Currently, I'm diving deep into <strong className="text-blue-600 dark:text-blue-400">Artificial Intelligence</strong>, 
                  <strong className="text-purple-600 dark:text-purple-400"> Full Stack Development</strong>, and 
                  <strong className="text-green-600 dark:text-green-400"> Java Programming</strong>. 
                  I believe in the power of continuous learning and staying updated with the latest technologies.
                </p>
                
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me creating educational  
                  participating in hackathons, or exploring new AI projects. I'm always excited 
                  to learn something new and share my knowledge with the community.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 1, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 dark:text-white">{feature.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-8">
              My Journey in Numbers
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                  
                  <p className="text-gray-600 dark:text-gray-400 font-medium mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 1, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white"
            >
              <h4 className="text-xl font-bold mb-3">Current Focus</h4>
              <p className="text-blue-100">
                I'm currently working on advanced AI projects, learning new frameworks, 
                and contributing to open-source projects. My goal is to become a leading 
                AI developer and help shape the future of technology.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
