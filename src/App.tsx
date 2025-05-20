import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './App.css';

// Sliding SVG Component types
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>> | any;

interface IconInfo {
  icon: IconType;
  name: string;
  customIcon?: string; // Path to custom SVG if needed
}

interface SlidingIconsProps {
  icons: IconInfo[];
}

// Custom SVG component
const CustomSvgIcon: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
  return (
    <div className="custom-svg-container">
      <img src={src} alt={alt} className="custom-svg" />
    </div>
  );
};

// SVG icon component using embedded SVGs
const SvgIcon: React.FC<{ id: string, size?: number, className?: string }> = ({
  id,
  size = 24,
  className = ""
}) => {
  return (
    <div className={`svg-icon ${className}`} style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        <use href={`#${id}`} />
      </svg>
    </div>
  );
};

// Sliding SVG Component
const SlidingIcons: React.FC<SlidingIconsProps> = ({ icons }) => {
  return (
    <div className="sliding-icons-container">
      <div className="sliding-icons">
        {icons.map((iconInfo, index) => (
          <div key={index} className="icon-wrapper">
            <div className="icon-with-label">
              {iconInfo.customIcon ? (
                <CustomSvgIcon src={iconInfo.customIcon} alt={iconInfo.name} />
              ) : (
                iconInfo.icon && <img src={iconInfo.icon} alt={iconInfo.name} width={30} height={30} />
              )}
              <span className="icon-label">{iconInfo.name}</span>
            </div>
          </div>
        ))}
        {icons.map((iconInfo, index) => (
          <div key={index + 'duplicate'} className="icon-wrapper">
            <div className="icon-with-label">
              {iconInfo.customIcon ? (
                <CustomSvgIcon src={iconInfo.customIcon} alt={iconInfo.name} />
              ) : (
                iconInfo.icon && <img src={iconInfo.icon} alt={iconInfo.name} width={30} height={30} />
              )}
              <span className="icon-label">{iconInfo.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  // Backend icons
  const backendIcons: IconInfo[] = [
    { icon: null, name: "FastAPI", customIcon: "/images/FastAPI.svg" },
    { icon: null, name: "Flask", customIcon: "/images/Flask.svg" },
    { icon: null, name: "Next.js", customIcon: "/images/Next.js.svg" }
  ];
  
  // Cyber Security icons
  const securityIcons: IconInfo[] = [
    { icon: null, name: "Malware Analysis", customIcon: "/images/malware_analysis.svg" },
    { icon: null, name: "Penetration Testing", customIcon: "/images/penetration testing.svg" },
    { icon: null, name: "Reverse Engineering", customIcon: "/images/reverse_engineering.svg" }
  ];
  
  // State for lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  
  // Function to open lightbox
  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };
  
  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <motion.div 
            className="left-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Eren Alparslan</h1>
            <div className="typing-container">
              <TypeAnimation
                sequence={[
                  'Computer Engineer', 
                  2000,
                  'Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typing-text"
              />
            </div>
          </motion.div>
          <motion.div 
            className="right-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="profile-image">
              <img src="/images/1.jpg" alt="Eren Alparslan" />
            </div>
          </motion.div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
          <p>Scroll Down</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Who Am I?</h2>
        </motion.div>
        <div className="about-content">
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-container">
              <img src="/images/2.jpg" alt="About Eren Alparslan" />
            </div>
          </motion.div>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p>My interest in computers and the engineering applications surrounding them doesn't stem from the software industry's fluctuating popularity, but from a passion that dates back to my childhood. What started with modding games and cracking Wi-Fi passwords evolved during university into a serious focus on backend development and cybersecurity. Now, I'm dedicating my time and effort to building on that foundation by gaining experience in blockchain development and training large language models in the fields of Web3 and artificial intelligence.</p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>What Can I Do?</h2>
        </motion.div>
        <motion.div 
          className="skills-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="skill-card">
            <div className="skill-icon">
              <SvgIcon id="server-icon" size={40} />
            </div>
            <h3>Backend Development</h3>
            <p>Designing and developing robust backend solutions and APIs for modern web applications.</p>
            <SlidingIcons icons={backendIcons} />
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <SvgIcon id="lock-icon" size={40} />
            </div>
            <h3>Cyber Security</h3>
            <p>Implementing security solutions and performing security assessments to protect systems against vulnerabilities.</p>
            <SlidingIcons icons={securityIcons} />
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="portfolio-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Projects</h2>
          <p className="sub-title">only noteworthy ones</p>
        </motion.div>
        <motion.div 
          className="portfolio-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          <div className="project-card">
            <div className="project-image">
              <img src="/images/rss.png" alt="Modern RSS Project" />
            </div>
            <h3>Modern RSS</h3>
            <p>
              Flask-based web application that aggregates and displays the latest social media posts from Instagram, YouTube, and X (formerly Twitter) for specified users. It utilizes various APIs and web scraping techniques to fetch recent posts, videos, and tweets by providing usernames or channel IDs.
            </p>
          </div>
          
          <div className="project-card">
            <div className="project-image">
              <img src="/images/video_editor.png" alt="Video Editor Project" />
            </div>
            <h3>Video Editor (Very Basic)</h3>
            <p>
              Electron-based desktop application that enables users to perform essential video editing tasks on their local machine. It provides a user-friendly interface for uploading videos and supports features such as trimming, audio extraction or muting, format conversion, and more.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="certificates-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Certificates</h2>
        </motion.div>
        <motion.div 
          className="certificates-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="certificate-card">
            <div className="certificate-image">
              <img 
                src="/images/sertifika.jpg" 
                alt="RACONF 25 Penetration Testing Certificate" 
                onClick={() => openLightbox("/images/sertifika.jpg")} 
              />
            </div>
            <h3>RACONF 25 Penetration Testing</h3>
          </div>
        </motion.div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="experiences-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Experiences</h2>
        </motion.div>
        <motion.div 
          className="experiences-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          <div className="experience-card">
            <div className="experience-video">
              <video autoPlay loop muted playsInline>
                <source src="/images/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="experience-details">
              <h3>Intern at</h3>
              <h4>Istanbul Metropolitan Municipality</h4>
              <p>
                Worked on various projects within the geographical informations systems department, focusing on developing web applications using Maplibre library.
              </p>
            </div>
          </div>
          
          <div className="experience-card loading-card">
            <div className="loading-content">
              <h3>Something Big Coming Soon</h3>
              <div className="loading-animation">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Contact</h2>
        </motion.div>
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-info">
            <div className="contact-item">
              <SvgIcon id="email-icon" className="contact-icon" />
              <p>erenalparsn@gmail.com</p>
            </div>
            <div className="contact-item">
              <SvgIcon id="phone-icon" className="contact-icon" />
              <p>507 163 49 39</p>
            </div>
            <div className="social-links">
              <a href="https://github.com/rnpars" target="_blank" rel="noopener noreferrer" className="social-link">
                <SvgIcon id="github-icon" />
              </a>
              <a href="https://x.com/ernpars" target="_blank" rel="noopener noreferrer" className="social-link">
                <SvgIcon id="x-icon" />
              </a>
              <a href="https://www.linkedin.com/in/eren-alparslan-a666a7318/" target="_blank" rel="noopener noreferrer" className="social-link">
                <SvgIcon id="linkedin-icon" />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Name" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <textarea placeholder="Message"></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Lightbox Component */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Enlarged Certificate" />
            <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
          </div>
        </div>
      )}

      <footer>
        <p>&copy; {new Date().getFullYear()} Eren Alparslan. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
