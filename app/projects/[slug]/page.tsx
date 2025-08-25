'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeftIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  CalendarIcon,
  TagIcon,
  UserGroupIcon,
  StarIcon,
  PlayIcon
} from '@heroicons/react/24/outline'

const projects = [
  {
    id: 'epho-platform',
    title: 'Egyptian Physics Olympiad Platform',
    subtitle: 'Competition Management & Learning Platform',
    description: 'A comprehensive platform for managing physics competitions, featuring real-time problem solving, automated scoring, anti-cheating detection, and interactive learning modules.',
    longDescription: `
## Project Overview

The Egyptian Physics Olympiad Platform represents a significant leap forward in educational technology, designed specifically for competitive physics education. This full-stack application serves as both a competition management system and a comprehensive learning platform.

### Key Features

**Competition Management**
- Real-time problem distribution and submission
- Automated scoring with partial credit
- Live leaderboards and progress tracking
- Time management and session control

**Anti-Cheating System**
- Browser tab monitoring
- Screen recording detection
- Plagiarism detection algorithms
- Behavioral analysis and flagging

**Learning Environment**
- Interactive problem sets
- Video explanations and tutorials
- Progress tracking and analytics
- Peer discussion forums

### Technical Implementation

The platform is built using modern web technologies with a focus on performance, security, and scalability:

**Frontend:**
- Next.js 14 with TypeScript for type safety
- Tailwind CSS for responsive design
- Framer Motion for smooth animations
- Real-time updates with WebSockets

**Backend:**
- Node.js with Express framework
- PostgreSQL for robust data management
- Redis for caching and session management
- JWT authentication with role-based access

**Security & Performance:**
- End-to-end encryption for sensitive data
- Rate limiting and DDoS protection
- Automated backups and disaster recovery
- CDN integration for global performance

### Impact & Results

Since launch, the platform has:
- Hosted 15+ major competitions
- Served 2,000+ students across Egypt
- Processed 50,000+ problem submissions
- Achieved 99.9% uptime during competitions

### Challenges Overcome

**Scalability:** Designed the system to handle 1,000+ concurrent users during major competitions without performance degradation.

**Security:** Implemented comprehensive anti-cheating measures while maintaining user experience and privacy.

**Reliability:** Built redundant systems and automated failover mechanisms to ensure zero downtime during critical competitions.

### Future Enhancements

- AI-powered problem generation
- Advanced analytics and insights
- Mobile application development
- International expansion capabilities
    `,
    category: 'Education Platform',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Node.js', 'WebSockets'],
    status: 'Live',
    date: '2024-02-10',
    team: 'Solo Development',
    duration: '6 months',
    github: 'https://github.com/yaseen-saad/epho-platform',
    live: 'https://epho.yaseen-saad.com',
    featured: true,
    images: ['/projects/epho-1.jpg', '/projects/epho-2.jpg', '/projects/epho-3.jpg']
  },
  {
    id: 'youth-science-journal',
    title: 'Youth Science Journal Platform',
    subtitle: 'Scientific Publishing for Young Researchers',
    description: 'A modern platform for scientific publication and peer review designed specifically for young researchers and students.',
    longDescription: `
## Empowering Young Scientists

The Youth Science Journal Platform addresses a critical gap in scientific publishing - providing young researchers with a professional platform to publish their work, receive peer review, and contribute to the scientific community.

### Platform Features

**Submission System**
- Manuscript upload and formatting
- Automated initial review screening
- Version control and revision tracking
- Author collaboration tools

**Peer Review Process**
- Anonymous peer review system
- Review assignment algorithms
- Quality control and moderation
- Reviewer training modules

**Publication Management**
- Professional article formatting
- DOI assignment and indexing
- Search and discovery features
- Citation tracking and metrics

### Educational Focus

Unlike traditional academic journals, this platform focuses on:
- Mentoring young researchers
- Educational feedback in reviews
- Skill development through the publication process
- Building scientific communication skills

### Technical Architecture

**Content Management:**
- Custom CMS for scientific articles
- LaTeX integration for mathematical formulas
- Reference management and citation tools
- Multi-format export capabilities

**Review Workflow:**
- Automated reviewer matching
- Real-time collaboration tools
- Progress tracking and notifications
- Quality assurance systems

### Community Impact

The platform has facilitated:
- 200+ student research publications
- 500+ peer reviews conducted
- 1,000+ registered young researchers
- 50+ mentor scientists participating

### Recognition

- Featured in Egyptian Ministry of Education newsletter
- Presented at Young Scientists Conference 2023
- Winner of Best Educational Innovation Award
    `,
    category: 'Scientific Platform',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'LaTeX'],
    status: 'Live',
    date: '2023-10-20',
    team: 'Team of 3',
    duration: '8 months',
    github: 'https://github.com/yaseen-saad/science-journal',
    live: 'https://youthscience.org',
    featured: true,
    images: ['/projects/science-1.jpg', '/projects/science-2.jpg']
  },
  {
    id: 'physics-simulator',
    title: 'Interactive Physics Simulation Engine',
    subtitle: 'Real-time Physics Visualization',
    description: 'A WebGL-powered physics engine for creating interactive simulations of classical mechanics, quantum systems, and astrophysics.',
    longDescription: `
## Bringing Physics to Life

This interactive physics simulation engine makes complex physical concepts accessible through real-time, interactive visualizations. Built with performance and accuracy in mind, it serves both educational and research purposes.

### Simulation Capabilities

**Classical Mechanics**
- N-body gravitational systems
- Collision detection and response
- Rigid body dynamics
- Fluid dynamics simulation

**Quantum Mechanics**
- Wave function visualization
- Quantum tunneling demonstrations
- Particle-wave duality experiments
- Uncertainty principle illustrations

**Astrophysics**
- Stellar evolution modeling
- Galaxy formation simulation
- Black hole visualization
- Orbital mechanics

### Technical Innovation

**Performance Optimization:**
- WebGL shaders for parallel computation
- Octree spatial partitioning
- Adaptive time stepping
- Level-of-detail rendering

**Accuracy Features:**
- Numerical integration methods
- Error correction algorithms
- Physical constants database
- Unit conversion systems

### Educational Applications

- Used in 5+ Egyptian high schools
- Integrated into physics curricula
- Teacher training workshops conducted
- Student engagement metrics improved by 40%

### Research Applications

- Stellar evolution parameter studies
- Chaos theory demonstrations
- Complex system behavior analysis
- Data visualization for research papers
    `,
    category: 'Simulation Engine',
    tech: ['WebGL', 'JavaScript', 'Three.js', 'Physics Engine', 'GLSL'],
    status: 'Active Development',
    date: '2023-12-05',
    team: 'Solo Development',
    duration: 'Ongoing',
    github: 'https://github.com/yaseen-saad/physics-engine',
    live: 'https://physics-sim.yaseen-saad.com',
    featured: false,
    images: ['/projects/physics-1.jpg', '/projects/physics-2.jpg']
  }
]

export default function ProjectDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  
  const project = projects.find(p => p.id === slug)
  
  if (!project) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-4">Project Not Found</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
          <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to all projects
          </Link>
        </div>
      </div>
    )
  }

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">{line.substring(3)}</h2>
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-black dark:text-white mt-6 mb-3">{line.substring(4)}</h3>
      } else if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 font-bold">{line.substring(2, line.length - 2)}</p>
      } else if (line.startsWith('*') && line.endsWith('*') && !line.startsWith('**')) {
        return <p key={index} className="text-gray-600 dark:text-gray-400 mb-4 italic">{line.substring(1, line.length - 1)}</p>
      } else if (line.trim() === '') {
        return <br key={index} />
      } else {
        return <p key={index} className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{line}</p>
      }
    })
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 mb-8 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Back to projects
        </Link>

        {/* Project header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
              {project.category}
            </span>
            {project.featured && (
              <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full text-xs font-medium">
                <StarIcon className="w-3 h-3" />
                Featured
              </div>
            )}
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'Live' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
              project.status === 'Active Development' ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' :
              'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}>
              {project.status}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            {project.subtitle}
          </p>

          {/* Project meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Date</div>
                <div className="font-medium text-black dark:text-white">{project.date}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <UserGroupIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Team</div>
                <div className="font-medium text-black dark:text-white">{project.team}</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CalendarIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Duration</div>
                <div className="font-medium text-black dark:text-white">{project.duration}</div>
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
              >
                <GlobeAltIcon className="w-5 h-5" />
                View Live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-lg hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors font-medium"
              >
                <CodeBracketIcon className="w-5 h-5" />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Project images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="aspect-video bg-gray-200 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center"
            >
              <PlayIcon className="w-12 h-12 text-gray-500 dark:text-gray-400" />
            </div>
          ))}
        </div>

        {/* Project content */}
        <div className="prose prose-lg max-w-none">
          <div className="prose-content">
            {formatContent(project.longDescription)}
          </div>
        </div>

        {/* Related projects */}
        <div className="mt-16 p-8 bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg">
          <h3 className="text-xl font-bold text-black dark:text-white mb-6">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => p.id !== project.id).slice(0, 2).map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/projects/${relatedProject.id}`}
                className="block p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg hover:border-black dark:hover:border-white transition-colors group"
              >
                <h4 className="font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {relatedProject.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {relatedProject.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {relatedProject.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
