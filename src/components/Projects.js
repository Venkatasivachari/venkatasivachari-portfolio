import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket, FaBrain, FaCalculator } from 'react-icons/fa';
import { SiReact, SiPython, SiJavascript, SiMysql, SiMongodb, SiFastapi, SiFlask, SiTailwindcss } from 'react-icons/si';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'CGPA Calculator Web App',
      description: 'A comprehensive web application for calculating CGPA with multiple grading systems, semester management, and detailed analytics.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      technologies: [
        { name: 'React', icon: SiReact, color: 'text-blue-500' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' }
      ],
      features: ['Multi-grading system support', 'Semester management', 'Grade analytics', 'Export functionality'],
      github: 'https://github.com/Venkatasivachari/cgpa_checker',
      demo: 'https://cgpachecker.vercel.app/',
      status: 'Completed',
      category: 'Web Development',
      icon: FaCalculator
    },
    // {
    //   id: 2,
    //   title: 'AI Job Recommendation System',
    //   description: 'An intelligent job recommendation system using machine learning algorithms to match candidates with suitable job opportunities.',
    //   image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600',
    //   technologies: [
    //     { name: 'Python', icon: SiPython, color: 'text-green-500' },
    //     { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-500' },
    //     { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' }
    //   ],
    //   features: ['ML-based matching', 'Real-time recommendations', 'User profiling', 'API integration'],
    //   github: 'https://github.com/venkatasivachary/ai-job-recommender',
    //   demo: 'https://ai-job-recommender.herokuapp.com',
    //   status: 'In Progress',
    //   category: 'AI/ML',
    //   icon: FaBrain
    // },
    // {
    //   id: 3,
    //   title: 'Personal Portfolio Website',
    //   description: 'A modern, responsive portfolio website showcasing projects, skills, and achievements with interactive animations.',
    //   image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600',
    //   technologies: [
    //     { name: 'React', icon: SiReact, color: 'text-blue-500' },
    //     { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    //     { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' }
    //   ],
    //   features: ['Responsive design', 'Dark/Light theme', 'Smooth animations', 'SEO optimized'],
    //   github: 'https://github.com/venkatasivachary/portfolio',
    //   demo: 'https://venkatasivachary.vercel.app',
    //   status: 'Completed',
    //   category: 'Web Development',
    //   icon: FaCode
    // },
    {
      id: 4,
      title: 'Resume Generator AI Tool',
      description: 'An AI-powered resume generator that creates professional resumes based on user input and job requirements.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600',
      technologies: [
        { name: 'Python', icon: SiPython, color: 'text-green-500' },
        { name: 'Flask', icon: SiFlask, color: 'text-gray-500' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' }
      ],
      features: ['AI-powered generation', 'Multiple templates', 'PDF export', 'Skill matching'],
      github: 'https://github.com/venkatasivachary/resume-generator',
      demo: 'https://resume-generator-ai.herokuapp.com',
      status: 'Completed',
      category: 'AI/ML',
      icon: FaRocket
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-yellow-500';
      case 'Planned': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my best work and innovative solutions across different domains
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: hoveredProject === project.id 
                    ? 'rotateY(5deg) rotateX(5deg)' 
                    : 'rotateY(0deg) rotateX(0deg)'
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-white flex items-center space-x-2">
                      <project.icon className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-blue-600/90 to-purple-600/90 flex items-center justify-center"
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <FaGithub className="w-6 h-6" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="w-6 h-6" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center space-x-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                          <tech.icon className={`w-4 h-4 ${tech.color}`} />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-semibold text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold text-center hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
            <div className="text-3xl font-bold mb-2">2+</div>
            <div className="text-blue-100">Projects Completed</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl text-white">
            <div className="text-3xl font-bold mb-2">10+</div>
            <div className="text-green-100">Technologies Used</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-purple-100">Lines of Code</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-xl text-white">
            <div className="text-3xl font-bold mb-2">20+</div>
            <div className="text-yellow-100">GitHub Stars</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

