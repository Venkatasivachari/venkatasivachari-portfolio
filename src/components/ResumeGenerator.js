import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaEye, FaFileAlt, FaUser, FaBriefcase, FaGraduationCap, FaCode, FaMagic } from 'react-icons/fa';
import jsPDF from 'jspdf';

const ResumeGenerator = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    title: '',
    summary: '',
    experience: '',
    education: '',
    skills: '',
    projects: ''
  });

  const [previewMode, setPreviewMode] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateResume = async () => {
    setIsGenerating(true);
    
    try {
      // Simulate API call to backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate PDF using jsPDF
      const doc = new jsPDF();
      
      // Add content to PDF
      doc.setFontSize(20);
      doc.text(formData.name || 'Your Name', 20, 30);
      
      doc.setFontSize(12);
      doc.text(formData.title || 'Your Title', 20, 40);
      doc.text(formData.email || 'your.email@example.com', 20, 50);
      doc.text(formData.phone || 'Your Phone', 20, 60);
      
      // Add sections
      let yPosition = 80;
      
      if (formData.summary) {
        doc.setFontSize(16);
        doc.text('Professional Summary', 20, yPosition);
        yPosition += 10;
        doc.setFontSize(10);
        doc.text(formData.summary, 20, yPosition);
        yPosition += 30;
      }
      
      if (formData.experience) {
        doc.setFontSize(16);
        doc.text('Experience', 20, yPosition);
        yPosition += 10;
        doc.setFontSize(10);
        doc.text(formData.experience, 20, yPosition);
        yPosition += 30;
      }
      
      if (formData.education) {
        doc.setFontSize(16);
        doc.text('Education', 20, yPosition);
        yPosition += 10;
        doc.setFontSize(10);
        doc.text(formData.education, 20, yPosition);
        yPosition += 30;
      }
      
      if (formData.skills) {
        doc.setFontSize(16);
        doc.text('Skills', 20, yPosition);
        yPosition += 10;
        doc.setFontSize(10);
        doc.text(formData.skills, 20, yPosition);
        yPosition += 30;
      }
      
      if (formData.projects) {
        doc.setFontSize(16);
        doc.text('Projects', 20, yPosition);
        yPosition += 10;
        doc.setFontSize(10);
        doc.text(formData.projects, 20, yPosition);
      }
      
      // Save the PDF
      doc.save(`${formData.name || 'resume'}-resume.pdf`);
      
    } catch (error) {
      console.error('Error generating resume:', error);
      alert('Error generating resume. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const jobTemplates = [
    {
      title: 'Software Developer',
      keywords: ['programming', 'development', 'coding', 'software'],
      skills: ['JavaScript', 'Python', 'React', 'Node.js', 'Git']
    },
    {
      title: 'AI/ML Engineer',
      keywords: ['machine learning', 'ai', 'data science', 'neural networks'],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Pandas', 'Scikit-learn']
    },
    {
      title: 'Web Developer',
      keywords: ['web development', 'frontend', 'backend', 'full stack'],
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      title: 'Data Analyst',
      keywords: ['data analysis', 'statistics', 'visualization', 'sql'],
      skills: ['Python', 'SQL', 'Excel', 'Tableau', 'R']
    }
  ];

  const suggestSkills = (jobTitle) => {
    const template = jobTemplates.find(t => 
      t.keywords.some(keyword => 
        jobTitle.toLowerCase().includes(keyword)
      )
    );
    return template ? template.skills : [];
  };

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI Resume Generator</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Create a professional resume tailored to your target job using AI-powered matching
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <FaFileAlt className="w-6 h-6 mr-3 text-blue-500" />
              Resume Information
            </h3>

            <div className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder="e.g., Software Developer, Data Scientist"
                  />
                </div>
              </div>

              {/* Professional Summary */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Professional Summary
                </label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Brief description of your professional background and key achievements..."
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Work Experience
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="List your work experience with company names, positions, and key achievements..."
                />
              </div>

              {/* Education */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Education
                </label>
                <textarea
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Your educational background including degrees, institutions, and graduation years..."
                />
              </div>

              {/* Skills */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Skills
                </label>
                <textarea
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="List your technical and soft skills..."
                />
                {formData.title && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Suggested skills for "{formData.title}":</p>
                    <div className="flex flex-wrap gap-2">
                      {suggestSkills(formData.title).map((skill, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            const currentSkills = formData.skills ? formData.skills.split(', ') : [];
                            if (!currentSkills.includes(skill)) {
                              setFormData(prev => ({
                                ...prev,
                                skills: [...currentSkills, skill].join(', ')
                              }));
                            }
                          }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300"
                        >
                          + {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Projects */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Projects
                </label>
                <textarea
                  name="projects"
                  value={formData.projects}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Describe your key projects, technologies used, and achievements..."
                />
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setPreviewMode(!previewMode)}
                  className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <FaEye className="w-5 h-5" />
                  <span>{previewMode ? 'Hide Preview' : 'Preview'}</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={generateResume}
                  disabled={isGenerating || !formData.name || !formData.email || !formData.title}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isGenerating ? (
                    <>
                      <div className="loading"></div>
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <FaDownload className="w-5 h-5" />
                      <span>Generate PDF</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
              <FaEye className="w-6 h-6 mr-3 text-green-500" />
              Resume Preview
            </h3>

            {previewMode ? (
              <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 min-h-[600px]">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {formData.name || 'Your Name'}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {formData.title || 'Your Job Title'}
                  </p>
                  <div className="flex justify-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>{formData.email || 'your.email@example.com'}</span>
                    <span>{formData.phone || 'Your Phone'}</span>
                  </div>
                </div>

                {formData.summary && (
                  <div className="mb-6">
                    <h5 className="font-bold text-gray-800 dark:text-white mb-2">Professional Summary</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{formData.summary}</p>
                  </div>
                )}

                {formData.experience && (
                  <div className="mb-6">
                    <h5 className="font-bold text-gray-800 dark:text-white mb-2">Experience</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">{formData.experience}</p>
                  </div>
                )}

                {formData.education && (
                  <div className="mb-6">
                    <h5 className="font-bold text-gray-800 dark:text-white mb-2">Education</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">{formData.education}</p>
                  </div>
                )}

                {formData.skills && (
                  <div className="mb-6">
                    <h5 className="font-bold text-gray-800 dark:text-white mb-2">Skills</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{formData.skills}</p>
                  </div>
                )}

                {formData.projects && (
                  <div className="mb-6">
                    <h5 className="font-bold text-gray-800 dark:text-white mb-2">Projects</h5>
                    <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">{formData.projects}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-20">
                <FaMagic className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 dark:text-gray-400">
                  Click "Preview" to see your resume
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <FaMagic className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">AI-Powered Matching</h4>
            <p className="text-gray-600 dark:text-gray-400">Intelligent skill suggestions based on job requirements</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <FaFileAlt className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Professional Templates</h4>
            <p className="text-gray-600 dark:text-gray-400">Multiple resume formats optimized for ATS systems</p>
          </div>
          
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <FaDownload className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Instant PDF Export</h4>
            <p className="text-gray-600 dark:text-gray-400">Download your resume in PDF format immediately</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeGenerator;
