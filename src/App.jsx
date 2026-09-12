import React, { useState } from 'react'
import {
  FiArrowUpRight, FiChevronDown, FiFileText, FiGithub, FiLinkedin, FiMail,
} from 'react-icons/fi'
import './App.css'

import portrait from './assets/Edge7.JPG'
import football from './assets/football.JPG'
import humanRights from './assets/human rights.jpg'
import waterloo from './assets/e7.avif'
import trueLight from './assets/true_light.png'
import chessAi from './assets/chess_ai.png'
import sproutBanner from './assets/sprout-banner.png'
import ygbkLogo from './assets/ygbk-book-logo.png'
import orbitalLogo from './assets/uw-orbital-logo.jpeg'
import kortexLogo from './assets/kortex-logo.png'
import stPaulsLogo from './assets/st-pauls-logo.jpeg'
import resume from './assets/Tianze-Yin-Resume.pdf'

const projects = [
  {
    name: 'True Light',
    description: 'A mobile accessibility app built in 72 hours that identifies 30+ color regions and provides real-time visual and spoken feedback.',
    stack: 'React · Expo · FastAPI · OpenCV · ElevenLabs',
    image: trueLight,
    href: 'https://github.com/KrishP147/truelight',
    badge: 'DeltaHacks · Jan 2026',
  },
  {
    name: 'Sprout',
    description: 'An English and Rohingya learning platform with speaking assessment, AI vocabulary practice, and adaptive voice feedback.',
    stack: 'React · Next.js · ElevenLabs · Claude API',
    href: 'https://maggiemajiayi-cell.github.io/Sprout_voice_input_AItraining/',
    readMore: 'https://app.notion.com/p/Sprout-ce5f56ede491430ca04b0f39f02e3f2c',
    badge: '3rd Place · UW AI & Data Science Hackathon',
    image: sproutBanner,
  },
  {
    name: 'Chess AI',
    description: 'A chess bot with machine-learning capabilities trained on Lichess games.',
    stack: 'Next.js · Python · Machine Learning',
    image: chessAi,
    href: 'https://github.com/tianzeyin/chess_hack',
    badge: 'Independent project',
  },
]

const roles = [
  {
    company: 'YGBK International Education Technology',
    role: 'Software Engineer Intern',
    date: 'May 2026 — Present',
    duration: '5 mos',
    location: 'Beijing, China',
    href: 'https://library.percchina.com',
    tech: 'Next.js · PostgreSQL · Better Auth · CDN · HLS · Nginx',
    logo: ygbkLogo,
    points: [
      'Built and deployed a full-stack education and digital-library platform serving 10,000+ users across web and WeChat.',
      'Developed 100+ API route handlers and 50+ PostgreSQL migrations for books, courses, classes, progress, reporting, and administration.',
      'Engineered protected audiobook delivery with FFmpeg, encrypted HLS, expiring sessions, signed CDN URLs, and private object storage.',
      'Deployed with Nginx and PM2, adding health checks, logging, background workers, automated releases, and rollback protection.',
    ],
  },
  {
    company: 'Kortex',
    role: 'QA Engineer',
    date: 'Sept 2024 — Jun 2025',
    duration: '10 mos',
    location: 'Toronto, Ontario',
    href: 'https://www.kortex.co',
    tech: 'React · Next.js · Playwright · TypeScript · Python',
    logo: kortexLogo,
    points: [
      'Automated end-to-end tests for complex frontend interactions and documented defects across application features.',
      'Expanded coverage for document creation and deletion, billing interactions, context menus, and bulk actions.',
      'Validated fixes, edge cases, and regression stability across React and Next.js interfaces using Playwright test suites.',
    ],
  },
  {
    company: 'University of Waterloo Orbital Design Team',
    role: 'Software Developer',
    date: 'Dec 2025 — Present',
    duration: '10 mos',
    location: 'Waterloo, Ontario',
    href: 'https://github.com/UWOrbital',
    tech: 'FastAPI · Next.js · Python · SQLModel',
    logo: orbitalLogo,
    points: [
      'Built FastAPI endpoints to create, view, delete, and manage spacecraft commands for the Ground Station team.',
      'Implemented command parameter and format validation with SQLModel persistence.',
      'Added status tracking, timestamps, and request logging to improve traceability, monitoring, and debugging.',
    ],
  },
  {
    company: 'St. Paul’s High School',
    role: 'Student Council Web Manager',
    date: 'Sept 2023 — Jun 2025',
    duration: '1 yr 10 mos',
    location: 'Winnipeg, Manitoba',
    href: 'https://tianzeyin.github.io/mewing-academy/index.html',
    tech: 'React · HTML · CSS',
    logo: stPaulsLogo,
    points: [
      'Designed, developed, and maintained a website for school events and announcements.',
      'Built structured React layouts and responsive styling for usability across devices.',
      'Improved accessibility and navigation so information was easier for the school community to find.',
      'Collaborated with council members to publish content, manage schedules, and maintain consistent messaging.',
    ],
  },
]

const stories = [
  {
    title: 'Sports', eyebrow: 'Discipline & teamwork', icon: '🏈', image: football,
    description: 'I am a committed student athlete who plays linebacker. Football has taught me resilience, communication, and how to perform consistently under pressure.',
  },
  {
    title: 'Social Impact', eyebrow: 'Leadership & community', icon: '🌍', image: humanRights,
    description: 'As an ambassador at the Canadian Museum for Human Rights, I support educational initiatives and communicate complex human-rights topics to diverse audiences.',
  },
  {
    title: 'Engineering', eyebrow: 'Academics & building', icon: '🎓', image: waterloo,
    description: 'I study Computer Engineering at the University of Waterloo and enjoy software systems, backend development, hackathons, and collaborative technical teams.',
  },
]

function ExperienceRow({ item, isOpen, onToggle }) {
  return (
    <article className={`experience-row ${isOpen ? 'is-open' : ''}`}>
      <button className="experience-summary" onClick={onToggle} aria-expanded={isOpen}>
        <span className="role-icon" aria-hidden="true">
          <img className={item.logoClass || ''} src={item.logo} alt="" />
        </span>
        <span className="role-copy">
          <strong>{item.role}</strong>
          <span className="role-subline">
            <span>{item.company}</span>
            {item.duration && <span className="role-duration">{item.duration}</span>}
          </span>
          <span className="role-date-mobile">{item.date}</span>
        </span>
        <span className="expand-label">{item.date}</span>
        <FiChevronDown className="chevron" aria-hidden="true" />
      </button>
      <div className="experience-details" hidden={!isOpen}>
        <div className="experience-meta">
          <span>{item.tech}</span>
          <span>{item.location}</span>
          {item.href && <a href={item.href} target="_blank" rel="noreferrer">Visit <FiArrowUpRight /></a>}
        </div>
        <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
      </div>
    </article>
  )
}

function App() {
  const [openRole, setOpenRole] = useState(-1)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>

      <nav className="top-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Tianze Yin, home">TY<span>.</span></a>
        <div className="nav-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </div>
      </nav>

      <main id="main" className="page-container">
        <header id="top" className="hero">
          <div className="hero-copy">
            <p className="kicker">Computer Engineering · University of Waterloo</p>
            <h1>
              <span className="hero-greeting">Hi, I’m</span>{' '}
              <span className="hero-name">Tianze Yin</span>{' '}
              <span className="wave" aria-hidden="true">👋</span>
            </h1>
            <p className="intro">
              I’m a Computer Engineering student at the University of Waterloo who enjoys building{' '}
              <strong>full-stack products</strong>, <strong>backend systems</strong>, and reliable infrastructure.
              At YGBK, I helped build and deploy an education and digital-library platform serving more than
              10,000 users across the web and WeChat, working across APIs, PostgreSQL, secure audiobook
              streaming, CDN delivery, and production infrastructure. I also develop spacecraft command
              software with UW Orbital and previously improved product quality at Kortex through automated
              end-to-end testing. Beyond work, I build accessible and AI-assisted tools at hackathons—including
              True Light and Sprout—and bring the same curiosity, discipline, and team-first mindset to
              engineering, football, and community leadership.
            </p>
          </div>
          <div className="portrait-wrap">
            <img src={portrait} alt="Tianze Yin" />
            <span className="portrait-note">Waterloo, ON</span>
          </div>
        </header>

        <section className="link-section" aria-labelledby="links-title">
          <h2 id="links-title" className="section-label">Portfolio links</h2>
          <div className="portfolio-links">
            <a href="https://linkedin.com/in/tianze-yin" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
            <a href="https://github.com/tianzeyin" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
            <a href={resume} download="Tianze-Yin-Resume.pdf"><FiFileText /> Résumé</a>
            <a href="mailto:yintz1207@gmail.com"><FiMail /> yintz1207@gmail.com</a>
          </div>
        </section>

        <section id="experience" className="content-section" aria-labelledby="experience-title">
          <div className="section-heading"><h2 id="experience-title">Experience</h2><p>Select a role to read more.</p></div>
          <div className="experience-list">
            {roles.map((item, index) => (
              <ExperienceRow item={item} key={item.company} isOpen={openRole === index}
                onToggle={() => setOpenRole(openRole === index ? -1 : index)} />
            ))}
          </div>
        </section>

        <section id="projects" className="content-section" aria-labelledby="projects-title">
          <div className="section-heading">
            <h2 id="projects-title"><FiArrowUpRight /> Projects</h2>
            <p>Things I’ve recently designed and built.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                {project.image ? (
                  <a className="project-image" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                    <img src={project.image} alt={`${project.name} project preview`} />
                  </a>
                ) : (
                  <div className={`project-image project-visual ${project.visual}`} aria-hidden="true">
                    <span className="sprout-mark">S</span>
                    <span className="voice-line">hello · salaam · welcome</span>
                  </div>
                )}
                <div className="project-copy">
                  <div className="project-title-row">
                    <h3>{project.name}</h3>
                  </div>
                  <span className="project-badge">{project.badge}</span>
                  <p>{project.description}</p>
                  <span>{project.stack}</span>
                  <div className="project-actions">
                    <a className="project-button" href={project.href} target="_blank" rel="noreferrer">
                      {project.readMore ? 'Open project' : 'View on GitHub'}
                      {project.readMore ? <FiArrowUpRight /> : <FiGithub />}
                    </a>
                    {project.readMore && (
                      <a className="project-button project-button-secondary" href={project.readMore} target="_blank" rel="noreferrer">
                        Read case study <FiArrowUpRight />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="content-section" aria-labelledby="about-title">
          <div className="section-heading"><h2 id="about-title">Beyond the classroom</h2><p>The experiences that shape how I work.</p></div>
          <div className="story-grid">
            {stories.map((story) => (
              <article className="story-card" key={story.title}>
                <img src={story.image} alt="" />
                <div className="story-copy">
                  <span className="story-eyebrow">{story.icon} {story.eyebrow}</span>
                  <h3>{story.title}</h3><p>{story.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      <footer>
        <p>© {new Date().getFullYear()} Tianze Yin</p>
        <div><a href="#top">Back to top</a><span>·</span><a href="https://github.com/tianzeyin" target="_blank" rel="noreferrer">GitHub</a></div>
      </footer>
    </div>
  )
}

export default App
