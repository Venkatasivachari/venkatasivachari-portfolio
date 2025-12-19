import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTrophy, FaMedal, FaCertificate, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Participation = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const participations = [
    {
      id: 1,
      title: 'Hackathon 2025',
      description: 'Built an AI Resume Generator Project that helps job seekers create professional resumes using AI technology.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
      date: 'January 2025',
      type: 'Hackathon',
      achievement: 'Winner',
      category: 'AI/ML',
      team: 'Solo Project',
      technologies: ['Python', 'FastAPI', 'Machine Learning', 'React'],
      icon: FaTrophy,
      color: 'text-yellow-500'
    },
    {
      id: 2,
      title: 'Tech Workshop 2024',
      description: 'Attended comprehensive workshop on Full Stack Development covering modern web technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600',
      date: 'December 2024',
      type: 'Workshop',
      achievement: 'Certificate',
      category: 'Web Development',
      team: 'Individual',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      icon: FaCertificate,
      color: 'text-blue-500'
    },
    {
      id: 3,
      title: 'AI Conference 2024',
      description: 'Presented research paper on "Machine Learning Applications in Web Development" at the annual AI conference.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600',
      date: 'November 2024',
      type: 'Conference',
      achievement: 'Speaker',
      category: 'AI/ML',
      team: 'Research Team',
      technologies: ['Machine Learning', 'Python', 'TensorFlow', 'Research'],
      icon: FaMedal,
      color: 'text-purple-500'
    },
    {
      id: 4,
      title: 'Coding Bootcamp',
      description: 'Intensive 3-month coding bootcamp focusing on modern web development and software engineering principles.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
      date: 'September 2024',
      type: 'Bootcamp',
      achievement: 'Graduate',
      category: 'Web Development',
      team: 'Cohort',
      technologies: ['JavaScript', 'React', 'Node.js', 'SQL'],
      icon: FaCertificate,
      color: 'text-green-500'
    },
    {
      id: 5,
      title: 'Startup Weekend',
      description: 'Participated in 54-hour startup weekend event, built a prototype for a job recommendation platform.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600',
      date: 'August 2024',
      type: 'Startup Event',
      achievement: 'Finalist',
      category: 'Entrepreneurship',
      team: 'Team of 4',
      technologies: ['React', 'Python', 'FastAPI', 'PostgreSQL'],
      icon: FaTrophy,
      color: 'text-orange-500'
    },
    {
      id: 6,
      title: 'Tech Meetup',
      description: 'Organized and spoke at local tech meetup about "The Future of AI in Web Development".',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600',
      date: 'July 2024',
      type: 'Meetup',
      achievement: 'Organizer',
      category: 'Community',
      team: 'Solo',
      technologies: ['Public Speaking', 'AI', 'Web Development', 'Community'],
      icon: FaMedal,
      color: 'text-cyan-500'
    }
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedImage(participations[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % participations.length);
    setSelectedImage(participations[(currentIndex + 1) % participations.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + participations.length) % participations.length);
    setSelectedImage(participations[(currentIndex - 1 + participations.length) % participations.length]);
  };

  return (
    <section id="participation" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Participation & Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my active participation in tech events, hackathons, and community activities
          </p>
        </motion.div>

        {/* Participation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {participations.map((participation, index) => (
            <motion.div
              key={participation.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => openModal(index)}
              className="group cursor-pointer"
            >
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={participation.image}
                    alt={participation.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Achievement Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`flex items-center space-x-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white`}>
                      <participation.icon className={`w-4 h-4 ${participation.color}`} />
                      <span className="text-sm font-semibold">{participation.achievement}</span>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                      {participation.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {participation.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {participation.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{participation.date}</span>
                    <span>{participation.team}</span>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {participation.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {participation.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                        +{participation.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-white">
            <div className="text-3xl font-bold mb-2">6+</div>
            <div className="text-yellow-100">Events Participated</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
            <div className="text-3xl font-bold mb-2">3</div>
            <div className="text-blue-100">Awards Won</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-purple-100">Technologies Used</div>
          </div>
          
          <div className="text-center p-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl text-white">
            <div className="text-3xl font-bold mb-2">100+</div>
            <div className="text-green-100">Hours Invested</div>
          </div>
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white dark:bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                  
                  {/* Navigation */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <FaChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <FaChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                      {selectedImage.title}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <selectedImage.icon className={`w-6 h-6 ${selectedImage.color}`} />
                      <span className="text-lg font-semibold text-gray-600 dark:text-gray-400">
                        {selectedImage.achievement}
                      </span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Event Details:</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Type:</strong> {selectedImage.type}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Date:</strong> {selectedImage.date}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        <strong>Team:</strong> {selectedImage.team}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        <strong>Category:</strong> {selectedImage.category}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedImage.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Description:</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {selectedImage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Participation;