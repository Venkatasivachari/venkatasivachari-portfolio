import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { FaGraduationCap, FaCertificate, FaClock, FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Courses = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const courses = [
    {
      id: 1,
      title: 'Web Development Mastery',
      provider: 'Coursera',
      duration: '6 months',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400',
      description: 'Complete full-stack web development course covering HTML, CSS, JavaScript, React, Node.js, and databases.',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      completed: true
    },
    {
      id: 2,
      title: 'Python for AI',
      provider: 'edX',
      duration: '4 months',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      description: 'Advanced Python programming for artificial intelligence and machine learning applications.',
      skills: ['Python', 'Machine Learning', 'TensorFlow', 'Pandas', 'NumPy'],
      completed: true
    },
    {
      id: 3,
      title: 'Java Programming Foundations',
      provider: 'Udemy',
      duration: '3 months',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400',
      description: 'Comprehensive Java programming course covering OOP concepts, data structures, and algorithms.',
      skills: ['Java', 'OOP', 'Data Structures', 'Algorithms', 'Spring Boot'],
      completed: true
    },
    {
      id: 4,
      title: 'Machine Learning Basics',
      provider: 'Stanford Online',
      duration: '5 months',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400',
      description: 'Introduction to machine learning algorithms, neural networks, and deep learning concepts.',
      skills: ['ML Algorithms', 'Neural Networks', 'Deep Learning', 'Scikit-learn', 'Keras'],
      completed: false
    },
    {
      id: 5,
      title: 'Database Design',
      provider: 'Coursera',
      duration: '2 months',
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400',
      description: 'Database design principles, SQL optimization, and NoSQL database management.',
      skills: ['SQL', 'MySQL', 'MongoDB', 'Database Design', 'Query Optimization'],
      completed: true
    },
    {
      id: 6,
      title: 'React Advanced Patterns',
      provider: 'Frontend Masters',
      duration: '1 month',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400',
      description: 'Advanced React patterns, hooks, context, and performance optimization techniques.',
      skills: ['React Hooks', 'Context API', 'Performance', 'Testing', 'TypeScript'],
      completed: false
    }
  ];

  return (
    <section id="courses" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Courses & Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Continuous learning journey through comprehensive courses and certifications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, EffectCoverflow, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            className="courses-swiper"
          >
            {courses.map((course, index) => (
              <SwiperSlide key={course.id} className="!w-80">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full"
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Completion Badge */}
                    {course.completed && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                          <FaCertificate className="w-4 h-4" />
                          <span>Completed</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                        {course.provider}
                      </span>
                      <div className="flex items-center space-x-1">
                        <FaStar className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 line-clamp-2">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                      {course.description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center space-x-2 mb-4">
                      <FaClock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{course.duration}</span>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {course.skills.slice(0, 3).map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {course.skills.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                            +{course.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${
                        course.completed
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                      }`}
                    >
                      {course.completed ? 'View Certificate' : 'Enroll Now'}
                    </motion.button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Course Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">15+</div>
            <div className="text-gray-600 dark:text-gray-400">Courses Completed</div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">4.8</div>
            <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">Hours of Learning</div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .courses-swiper {
          padding: 50px 0;
        }
        
        .courses-swiper .swiper-slide {
          width: 320px;
          height: auto;
        }
        
        .courses-swiper .swiper-pagination-bullet {
          background: #3b82f6;
        }
        
        .courses-swiper .swiper-pagination-bullet-active {
          background: #8b5cf6;
        }
      `}</style>
    </section>
  );
};

export default Courses;

