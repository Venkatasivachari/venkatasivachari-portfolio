import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaCode, 
  FaRobot, 
  FaFileAlt, 
  FaPalette, 
  FaGraduationCap,
  FaLightbulb,
  FaRocket,
  FaCogs,
  FaChartLine,
  FaUsers
} from 'react-icons/fa';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Full-stack web applications using modern technologies like React, Node.js, and Python.',
      features: ['Responsive Design', 'API Integration', 'Database Management', 'Performance Optimization'],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    },
    {
      icon: FaRobot,
      title: 'AI Chatbot Creation',
      description: 'Intelligent chatbots and AI assistants for customer service and automation.',
      features: ['Natural Language Processing', 'Machine Learning', 'API Integration', 'Custom Training'],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20'
    },
    {
      icon: FaFileAlt,
      title: 'Resume Building',
      description: 'Professional resume creation and optimization for better job opportunities.',
      features: ['ATS Optimization', 'Multiple Formats', 'Industry-Specific', 'Professional Templates'],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: FaPalette,
      title: 'Portfolio Design',
      description: 'Stunning portfolio websites that showcase your work and attract opportunities.',
      features: ['Modern Design', 'Interactive Elements', 'SEO Optimized', 'Mobile Responsive'],
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20'
    },
    {
      icon: FaGraduationCap,
      title: 'Career Guidance',
      description: 'Personalized career advice and mentorship for tech professionals.',
      features: ['Skill Assessment', 'Career Planning', 'Interview Prep', 'Industry Insights'],
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
    },
    {
      icon: FaLightbulb,
      title: 'Tech Consulting',
      description: 'Strategic technology consulting for businesses and startups.',
      features: ['Technology Stack', 'Architecture Design', 'Process Optimization', 'Digital Transformation'],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'Understanding your requirements and goals',
      icon: FaRocket
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Creating a detailed project roadmap',
      icon: FaCogs
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution with best practices',
      icon: FaCode
    },
    {
      step: '04',
      title: 'Delivery',
      description: 'Testing, deployment, and ongoing support',
      icon: FaChartLine
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Services I Offer</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions to help you succeed in the digital world
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className={`${service.bgColor} rounded-xl p-8 h-full transition-all duration-300 group-hover:shadow-xl`}>
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">What's Included:</h4>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full`}></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg`}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              My Working Process
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-sm font-bold text-gray-800">
                    {step.step}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {step.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Get Free Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                View My Work
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
