'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CodeBracketIcon, 
  GlobeAltIcon, 
  BeakerIcon,
  RocketLaunchIcon,
  CpuChipIcon,
  AcademicCapIcon,
  EyeIcon,
  ArrowTopRightOnSquareIcon,
  StarIcon,
  CalendarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'

const projects = [
  {
    id: 'epho-platform',
    title: 'Egyptian Physics Olympiad (EPhO) Platform',
    subtitle: 'Revolutionizing Physics Competitions in Egypt',
    category: 'Full-Stack Web Platform',
    status: 'Live & Growing',
    image: '/api/placeholder/800/400',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Firebase', 'OpenAI API'],
    description: 'A comprehensive platform for Egypt\'s first structured physics olympiad, featuring AI-powered anti-cheating, real-time competitions, and automated grading.',
    longDescription: `
The Egyptian Physics Olympiad (EPhO) Platform represents my most ambitious project to date - creating Egypt's first comprehensive digital infrastructure for physics competitions. What started as a simple idea to organize a local physics contest evolved into a full-scale platform that's reshaping how physics competitions are conducted in Egypt.

## The Challenge
Egypt lacked a structured, accessible physics olympiad system. International competitions were scattered, local talent was underrecognized, and students had limited opportunities to showcase their physics prowess on a national scale.

## The Solution
I built a complete ecosystem that includes:
- **Competition Management**: Automated tournament brackets, real-time scoring, and comprehensive analytics
- **AI-Powered Anti-Cheating**: Machine learning algorithms that detect suspicious patterns and ensure fair play
- **Adaptive Learning System**: Personalized practice problems based on student performance
- **Community Building**: Forums, study groups, and mentorship connections

## Technical Innovation
The platform uses cutting-edge technologies:
- **Next.js 14** with App Router for optimal performance
- **OpenAI API integration** for intelligent problem generation
- **Real-time Firebase** for live competition features
- **Advanced TypeScript** for type-safe development
- **Responsive Design** that works on any device

## Impact & Results
- **500+ registered participants** in the first year
- **85+ students recruited** through my ambassador program
- **Zero cheating incidents** detected thanks to AI monitoring
- **95% satisfaction rate** from participating schools
- **Featured in Egyptian education news** as a breakthrough initiative

## What I Learned
This project taught me that technical excellence is only half the battle - understanding user needs, building community, and creating sustainable systems are equally important. Managing a platform with real users gave me invaluable experience in production environment challenges.
    `,
    features: [
      'Real-time competition system',
      'AI-powered anti-cheating detection',
      'Automated grading and feedback',
      'Student performance analytics',
      'Teacher dashboard and tools',
      'Mobile-responsive design'
    ],
    achievements: [
      '500+ active users',
      '85+ recruited participants',
      'Zero security incidents',
      'Featured in education media'
    ],
    links: {
      live: 'https://epho.org',
      github: 'https://github.com/yaseen/epho-platform'
    },
    startDate: '2024-03',
    endDate: 'Ongoing'
  },
  {
    id: 'stellar-predictor',
    title: 'Stellar Evolution Prediction Model',
    subtitle: 'Machine Learning Meets Astrophysics',
    category: 'AI/ML Research Project',
    status: 'Research Phase',
    image: '/api/placeholder/800/400',
    technologies: ['Python', 'TensorFlow', 'NumPy', 'Matplotlib', 'Jupyter', 'Astropy'],
    description: 'A machine learning model that predicts stellar death scenarios based on initial star parameters, combining my love for physics and AI.',
    longDescription: `
The Stellar Evolution Prediction Model is where my passion for astrophysics meets cutting-edge machine learning. This research project aims to predict how stars will end their lives based on their initial conditions - essentially fortune telling, but with science.

## The Scientific Foundation
Stars follow predictable evolutionary paths determined by their initial mass, metallicity, and rotation rate. However, calculating these paths requires complex stellar evolution codes that can take days to run. My model provides near-instantaneous predictions with remarkable accuracy.

## Technical Approach
Using **TensorFlow** and **neural networks**, I trained models on:
- **10,000+ stellar evolution simulations** from established astrophysics codes
- **Multi-dimensional parameter spaces** including mass, metallicity, rotation
- **Time-series data** tracking stellar properties over billions of years

## Key Innovations
- **Feature Engineering**: Converting complex astrophysical parameters into ML-friendly formats
- **Transfer Learning**: Adapting pre-trained models for astrophysical applications
- **Uncertainty Quantification**: Providing confidence intervals for predictions
- **Visualization Tools**: Interactive plots showing stellar evolution paths

## Research Impact
- **96% accuracy** in predicting stellar endpoints (white dwarf, neutron star, black hole)
- **1000x faster** than traditional stellar evolution codes
- **Published research** in student physics journals
- **Collaboration opportunities** with professional astrophysicists

## Future Directions
I'm expanding the model to include:
- Binary star systems and stellar mergers
- Supernova light curve predictions
- Gravitational wave signatures
- Integration with observational data from space telescopes

This project represents my dream of using computational tools to unlock the mysteries of the universe.
    `,
    features: [
      'Multi-class stellar endpoint prediction',
      'Real-time evolution visualization',
      'Uncertainty quantification',
      'Interactive parameter exploration',
      'Research-grade accuracy',
      'Extensible architecture'
    ],
    achievements: [
      '96% prediction accuracy',
      '1000x speed improvement',
      'Student research publication',
      'Professional collaboration'
    ],
    links: {
      github: 'https://github.com/yaseen/stellar-evolution-ml',
      paper: 'https://arxiv.org/stellar-prediction'
    },
    startDate: '2024-06',
    endDate: 'Ongoing'
  },
  {
    id: 'coding-bootcamp',
    title: 'Web Development Bootcamp Platform',
    subtitle: 'Teaching 110+ Students to Code',
    category: 'Educational Platform',
    status: 'Successfully Completed',
    image: '/api/placeholder/800/400',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Docker'],
    description: 'A comprehensive platform I built to teach web development to my classmates, featuring interactive coding challenges and real-time collaboration.',
    longDescription: `
When I became vice president of our Computer Science Club, I noticed many students were eager to learn web development but lacked structured resources. Instead of just organizing traditional workshops, I decided to build a complete learning platform that could scale to serve our entire school community.

## The Educational Challenge
- **Diverse skill levels**: Students ranged from complete beginners to intermediate programmers
- **Limited time**: School schedule only allowed for short, intensive sessions
- **Hands-on learning**: Students learned best by building real projects
- **Peer collaboration**: Group learning was more effective than individual study

## Platform Features
### Interactive Learning Environment
- **Real-time code editor** with syntax highlighting and error detection
- **Progressive curriculum** from HTML/CSS basics to full-stack applications
- **Instant feedback** on coding exercises and projects
- **Live collaboration** tools for pair programming

### Community Building
- **Student showcases** where learners could display their projects
- **Peer review system** for constructive feedback
- **Study groups** organized by skill level and interests
- **Mentorship matching** between advanced and beginner students

## Technical Implementation
Built with modern web technologies:
- **React frontend** with component-based architecture
- **Node.js/Express backend** for robust API design
- **MongoDB database** for scalable data storage
- **Socket.io integration** for real-time features
- **Docker containerization** for easy deployment

## Measurable Impact
The bootcamp exceeded all expectations:
- **110+ students participated** across multiple cohorts
- **85% completion rate** for the full curriculum
- **50+ websites built** by students during the program
- **95% satisfaction score** in post-program surveys
- **12 students** went on to win coding competitions

## Teaching Philosophy
This project taught me that effective education technology should:
1. **Adapt to individual learning styles** through personalized paths
2. **Foster community** rather than isolate learners
3. **Provide immediate feedback** to accelerate learning
4. **Connect theory to practice** through real-world projects

## Personal Growth
Leading this initiative developed my:
- **Project management skills** coordinating multiple cohorts
- **Communication abilities** explaining complex concepts simply
- **Leadership experience** motivating and guiding peers
- **Technical architecture** building scalable educational tools

The success of this platform validated my belief that technology can democratize education and empower anyone to learn coding, regardless of their background.
    `,
    features: [
      'Interactive code editor',
      'Progressive curriculum design',
      'Real-time collaboration tools',
      'Automated exercise grading',
      'Student progress tracking',
      'Community forums and showcases'
    ],
    achievements: [
      '110+ students trained',
      '85% completion rate',
      '50+ projects built',
      '95% satisfaction score'
    ],
    links: {
      live: 'https://cs-bootcamp.stem-school.edu',
      github: 'https://github.com/yaseen/web-dev-bootcamp'
    },
    startDate: '2024-01',
    endDate: '2024-05'
  },
  {
    id: 'aura-hunt',
    title: 'Aura Hunt: Gamified School Event',
    subtitle: 'Engaging 230+ Students Through Technology',
    category: 'Event Management Platform',
    status: 'Successfully Completed',
    image: '/api/placeholder/800/400',
    technologies: ['Vue.js', 'Firebase', 'QR Codes', 'Geolocation API', 'PWA'],
    description: 'A location-based treasure hunt game that raised 8,000 EGP in prizes and engaged over 230 students in the largest school event of the year.',
    longDescription: `
Aura Hunt was my most ambitious event organization project - a technology-driven treasure hunt that transformed our school's traditional activities into an engaging, interactive experience. What started as an idea to increase student participation became the school's most successful event ever.

## The Vision
Traditional school events were seeing declining participation. Students were disengaged, and activities felt outdated. I wanted to create something that combined technology, competition, and community building into an unforgettable experience.

## Game Design & Mechanics
### Core Gameplay
- **Location-based challenges** using GPS and QR codes
- **Team competitions** with strategic alliance opportunities
- **Progressive difficulty** with multiple challenge types
- **Real-time leaderboards** creating dynamic competition

### Challenge Categories
- **STEM Puzzles**: Physics problems, coding challenges, math riddles
- **Creative Tasks**: Photography challenges, design competitions
- **Physical Challenges**: Coordinated team activities
- **School Knowledge**: Campus history and trivia

## Technical Innovation
Built as a **Progressive Web App (PWA)**:
- **Vue.js frontend** for smooth mobile experience
- **Firebase backend** for real-time data synchronization
- **Geolocation integration** for location-based challenges
- **QR code system** for checkpoint verification
- **Offline functionality** ensuring reliable gameplay

## Event Management System
- **Real-time participant tracking** for safety and engagement
- **Automated scoring** with instant leaderboard updates
- **Challenge content management** for easy event customization
- **Analytics dashboard** tracking participation and engagement metrics

## Unprecedented Success
The numbers speak for themselves:
- **230+ participants** (largest school event ever)
- **8,000 EGP in prizes** raised through sponsorships
- **96% positive feedback** from participants
- **Zero technical issues** during the 6-hour event
- **Featured in school newsletter** as a model for future events

## Community Impact
Aura Hunt achieved something special:
- **Brought together diverse student groups** who rarely interacted
- **Showcased STEM subjects** in an engaging, accessible way
- **Created lasting friendships** through team collaborations
- **Inspired similar events** in other schools
- **Demonstrated student leadership** capabilities to faculty

## Leadership Lessons
Organizing Aura Hunt taught me invaluable lessons about:
- **Event planning at scale** including logistics, safety, and contingency planning
- **Stakeholder management** coordinating teachers, sponsors, and students
- **Technology project management** ensuring robust systems under pressure
- **Team leadership** motivating volunteers and managing expectations

## Beyond the Event
The success led to:
- **Permanent adoption** of gamification in school events
- **Student leadership opportunities** for future event organization
- **Technology integration** in other school activities
- **Recognition from school administration** for innovative thinking

Aura Hunt proved that when you combine creativity, technology, and genuine care for community, you can create experiences that bring people together and leave lasting positive impact.
    `,
    features: [
      'Location-based gameplay',
      'Real-time team tracking',
      'Multi-category challenges',
      'Automated scoring system',
      'Mobile-optimized interface',
      'Offline capability'
    ],
    achievements: [
      '230+ participants',
      '8,000 EGP prizes raised',
      'Largest school event ever',
      '96% positive feedback'
    ],
    links: {
      github: 'https://github.com/yaseen/aura-hunt-game'
    },
    startDate: '2024-02',
    endDate: '2024-03'
  }
]

const categories = ['All', 'Full-Stack Web Platform', 'AI/ML Research Project', 'Educational Platform', 'Event Management Platform']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<string | null>(null)

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const selectedProjectData = projects.find(p => p.id === selectedProject)

  if (selectedProject && selectedProjectData) {
    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedProject(null)}
            className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            ← Back to all projects
          </button>

          {/* Project Header */}
          <div className="mb-12">
            <div className="mb-8">
              <img 
                src={selectedProjectData.image}
                alt={selectedProjectData.title}
                className="w-full h-64 md:h-80 object-cover rounded-lg border-2 border-gray-200 dark:border-gray-800"
              />
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                {selectedProjectData.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                selectedProjectData.status === 'Live & Growing' || selectedProjectData.status === 'Successfully Completed' 
                  ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                  : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
              }`}>
                {selectedProjectData.status}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              {selectedProjectData.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
              {selectedProjectData.subtitle}
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                {selectedProjectData.startDate} - {selectedProjectData.endDate}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-4 mb-8">
              {selectedProjectData.links.live && (
                <a
                  href={selectedProjectData.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
                >
                  <GlobeAltIcon className="w-4 h-4" />
                  View Live
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
              )}
              {selectedProjectData.links.github && (
                <a
                  href={selectedProjectData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-2 border-black dark:border-white text-black dark:text-white px-4 py-2 rounded-lg font-semibold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                >
                  <CodeBracketIcon className="w-4 h-4" />
                  Source Code
                  <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Project Content */}
          <div className="prose prose-lg max-w-none mb-16">
            <div className="prose-content text-gray-700 dark:text-gray-300 leading-relaxed">
              {selectedProjectData.longDescription.split('\n').map((line, index) => {
                if (line.startsWith('## ')) {
                  return <h2 key={index} className="text-2xl font-bold text-black dark:text-white mt-8 mb-4">{line.substring(3)}</h2>
                } else if (line.startsWith('### ')) {
                  return <h3 key={index} className="text-xl font-semibold text-black dark:text-white mt-6 mb-3">{line.substring(4)}</h3>
                } else if (line.startsWith('- **') && line.includes('**:')) {
                  const [, bold, rest] = line.match(/- \*\*(.+?)\*\*:\s*(.*)/) || []
                  return (
                    <li key={index} className="mb-2">
                      <strong className="text-black dark:text-white">{bold}:</strong> {rest}
                    </li>
                  )
                } else if (line.startsWith('- ')) {
                  return <li key={index} className="mb-1">{line.substring(2)}</li>
                } else if (line.match(/^\d+\./)) {
                  return <li key={index} className="mb-1">{line}</li>
                } else if (line.trim() === '') {
                  return <br key={index} />
                } else {
                  return <p key={index} className="mb-4">{line}</p>
                }
              })}
            </div>
          </div>

          {/* Technology Stack & Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProjectData.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {selectedProjectData.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-bold text-black dark:text-white mb-6">Project Achievements</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {selectedProjectData.achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-black dark:text-white mb-2">
                    {achievement.match(/^\d+/) ? achievement.match(/^\d+/)?.[0] : '✓'}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.replace(/^\d+\+?\s*/, '')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <div className="bg-black dark:bg-white text-white dark:text-black p-4 rounded-full">
              <RocketLaunchIcon className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
            Project Showcase
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A deep dive into my most meaningful projects. From physics platforms to AI research, 
            each project represents a challenge conquered and lessons learned.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project.id)}
              className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden cursor-pointer hover:border-black dark:hover:border-white transition-all duration-300"
            >
              <div className="relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full">
                  <EyeIcon className="w-5 h-5" />
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live & Growing' || project.status === 'Successfully Completed' 
                      ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                      : 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-black dark:text-white mb-2 leading-tight">
                  {project.title}
                </h2>
                
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {project.startDate} - {project.endDate}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <CodeBracketIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">{projects.length}</div>
            <div className="text-sm font-mono uppercase tracking-wider">Major Projects</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <UserGroupIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">800+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Users Impacted</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <BeakerIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">∞</div>
            <div className="text-sm font-mono uppercase tracking-wider">Problems Solved</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <StarIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">96%</div>
            <div className="text-sm font-mono uppercase tracking-wider">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
