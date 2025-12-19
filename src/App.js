import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Courses from './components/Courses';
import Projects from './components/Projects';
import Services from './components/Services';
import Participation from './components/Participation';
import ResumeGenerator from './components/ResumeGenerator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Helmet>
          <title>Venkata Siva Chari - AI Developer & Tech Enthusiast</title>
          <meta name="description" content="Passionate B.Tech student, AI Developer, and Web Designer creating innovative solutions with cutting-edge technology. Explore my portfolio, projects, and skills." />
          <meta name="keywords" content="AI Developer, Web Developer, Portfolio, React, Python, Machine Learning, Full Stack Developer, Venkata Siva Chary" />
          <meta name="author" content="Venkata Siva Chari" />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://venkatasivachari.vercel.app/" />
          <meta property="og:title" content="Venkata Siva Chary - AI Developer & Tech Enthusiast" />
          <meta property="og:description" content="Passionate B.Tech student, AI Developer, and Web Designer creating innovative solutions with cutting-edge technology." />
          <meta property="og:image" content="https://venkatasivachary.vercel.app/og-image.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://venkatasivachari.vercel.app/" />
          <meta property="twitter:title" content="Venkata Siva Chary - AI Developer & Tech Enthusiast" />
          <meta property="twitter:description" content="Passionate B.Tech student, AI Developer, and Web Designer creating innovative solutions with cutting-edge technology." />
          <meta property="twitter:image" content="https://venkatasivachary.vercel.app/og-image.jpg" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Venkata Siva Chari",
              "jobTitle": "AI Developer & Tech Enthusiast",
              "description": "Passionate B.Tech student, AI Developer, and Web Designer creating innovative solutions with cutting-edge technology.",
              "url": "https://venkatasivachari.vercel.app/",
              "sameAs": [
                "https://www.linkedin.com/in/venkatasivachari8919/",
                "https://github.com/Venkatasivachari"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Web Development",
                "Machine Learning",
                "Python",
                "React",
                "JavaScript"
              ],
              "alumniOf": "B.Tech Student"
            })}
          </script>
        </Helmet>

        {/* Scroll Progress Bar */}
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Courses />
          <Projects />
          <Services />
          <Participation />
          <ResumeGenerator />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Elements */}
        <BackToTop />
        <AIChatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;
