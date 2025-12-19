import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPython, 
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaCode,
  FaLightbulb,
  FaUsers,
  FaPaintBrush,
  FaGlobe,
  FaLanguage
} from 'react-icons/fa';
import { SiMysql, SiMongodb, SiFastapi, SiFlask, SiPostman } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML5', icon: FaHtml5, level: 95  },
        { name: 'CSS3', icon: FaCss3Alt, level: 90 },
        { name: 'JavaScript', icon: FaJs, level: 85 },
        { name: 'React', icon: FaReact, level: 70 }
      ]
    },
    {
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python', icon: FaPython, level: 90 },
        { name: 'FastAPI', icon: SiFastapi, level: 85 },
        // { name: 'Flask', icon: SiFlask, level: 80 },
        { name: 'Node.js', icon: FaNodeJs, level: 75 }
      ]
    },
    {
      title: 'Database & Tools',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 85 },
        { name: 'MongoDB', icon: SiMongodb, level: 80 },
        { name: 'Git', icon: FaGitAlt, level: 90 },
        { name: 'VS Code', icon: FaCode, level: 95 },
        { name: 'Postman', icon: SiPostman, level: 85 }
      ]
    }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: FaLightbulb, color: 'text-yellow-500' },
    { name: 'Teamwork', icon: FaUsers, color: 'text-blue-500' },
    { name: 'Creativity', icon: FaPaintBrush, color: 'text-purple-500' },
    { name: 'Communication', icon: FaGlobe, color: 'text-green-500' }
  ];

  const languages = [
    { name: 'English', flag: '🇺🇸', level: 'Fluent' },
    { name: 'Telugu', flag: '🇮🇳', level: 'Native' },
    { name: 'Hindi', flag: '🇮🇳', level: 'Conversational' },
    { name:'tamil', flag: '🇮🇳', level: 'Native' }
  ];

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and soft skills that drive my passion for innovation
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 1, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-center">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </span>
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 1, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 1, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Soft Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 1, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  </div>
                </div>
                <h4 className="font-semibold text-gray-800 dark:text-white">{skill.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 1, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white"
        >
          <h3 className="text-3xl font-bold text-center mb-8">
            Languages Known
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 1, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-3">{language.flag}</div>
                <h4 className="text-xl font-semibold mb-2">{language.name}</h4>
                <p className="text-blue-100">{language.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
