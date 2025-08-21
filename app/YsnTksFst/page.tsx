'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BookOpenIcon, 
  LightBulbIcon, 
  BeakerIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  HeartIcon,
  CalendarIcon,
  TagIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

const blogPosts = [
  {
    id: 'college-application-journey',
    title: 'The College Application Chaos: A STEM Student\'s Perspective',
    excerpt: 'Navigating the US college application process as an Egyptian STEM student has been like debugging code at 3 AM - frustrating, enlightening, and oddly addictive.',
    content: `
## The Beginning of My College Journey

As I sit here at 2:47 AM Cairo time, listening to Wegz and debugging my latest project, I can't help but reflect on this wild ride called college applications. Being a STEM student from Egypt applying to US universities is like trying to solve a physics problem where half the variables are in a language you're still learning.

### The Reality Check

The EducationUSA Competitive College Club application opened my eyes to just how competitive this process is. With a 3.9 GPA and ranking 5th worldwide in the International Physics Realm, I thought I had it made. Then reality hit - I'm competing with students who've cured cancer, started billion-dollar companies, and probably solved world hunger during lunch break.

### What I've Learned So Far

1. **Authenticity Beats Perfection**: I spent weeks trying to sound like the "perfect" applicant before realizing my genuine voice - the one that writes rap lyrics about quantum mechanics - was what made me unique.

2. **Financial Aid is Everything**: With family contributions around $1,200/year, need-based aid isn't just helpful, it's essential. Davidson College and Johns Hopkins offering full-need aid for admitted internationals suddenly became my best friends.

3. **Essays Are Everything**: Your 1500 SAT score gets you in the door, but your essays make you memorable. Writing about my rejection from the Physics Club and how it shaped my leadership was harder than any calculus problem.

### The Waiting Game

Now I'm in the hardest part - waiting. June SAT prep, TOEFL studies, and trying to maintain my GPA while also running the CS Club, organizing competitions, and somehow finding time to sleep.

But here's what I know: regardless of where I end up, this journey has already changed me. I've learned to articulate my dreams, face my failures, and most importantly, stay true to who I am - a physics-obsessed, rap-loving, code-writing Egyptian teenager trying to decode the universe.

*To be continued...*
    `,
    category: 'Personal Growth',
    date: '2024-12-17',
    readTime: '8 min',
    tags: ['college', 'applications', 'STEM', 'personal'],
    icon: <BookOpenIcon className="w-5 h-5" />
  },
  {
    id: 'physics-programming-love-affair',
    title: 'My Love Affair with Physics and Programming',
    excerpt: 'How I discovered that physics and programming are basically the same thing - just different ways of understanding and manipulating the universe.',
    content: `
## When Physics Meets Code

There's something magical about the moment you realize that physics and programming are fundamentally the same thing. Both are attempts to understand patterns, predict behavior, and manipulate systems. Both require you to break down complex problems into manageable pieces.

### The Revelation

It hit me during my computational astrophysics research. I was building a machine learning model to predict stellar death scenarios, and suddenly I realized - I wasn't just coding, I was literally using math to understand how stars die. My Python script was a window into the cosmos.

### The Beautiful Parallels

**Debugging = Problem Solving**: Whether you're debugging code or solving a physics problem, the process is identical:
1. Observe the unexpected behavior
2. Form hypotheses about the cause
3. Test your theories
4. Iterate until you find the solution

**Functions = Physical Laws**: A function in programming is like a physical law - given certain inputs, it produces predictable outputs. F = ma isn't just a physics equation; it's a function that takes mass and acceleration and returns force.

**Loops = Periodic Motion**: While loops in code mirror the periodic behavior we see everywhere in physics - from planetary orbits to quantum oscillations.

### My Current Projects

Right now I'm working on several projects that blend both worlds:

1. **EPhO Platform**: A full-stack competition platform with AI-powered anti-cheating detection. Physics competitions meet modern web development.

2. **Stellar Evolution Predictor**: Machine learning model that predicts how stars will die based on their initial conditions. It's like fortune telling, but with science.

3. **Physics Visualization Tools**: Interactive demos that help students understand complex concepts like quantum mechanics and relativity.

### The Future

I dream of building tools that make physics as accessible as writing a simple Python script. Imagine being able to simulate the entire universe with just a few lines of code, or visualize quantum mechanics in real-time.

Physics gave me the curiosity to ask "why?" and "how?" Programming gave me the tools to answer those questions. Together, they're my way of touching the infinite.
    `,
    category: 'Technical',
    date: '2024-12-15',
    readTime: '6 min',
    tags: ['physics', 'programming', 'passion', 'science'],
    icon: <BeakerIcon className="w-5 h-5" />
  },
  {
    id: 'music-coding-connection',
    title: 'Why Arabic Rap is the Perfect Coding Soundtrack',
    excerpt: 'Exploring the unexpected connection between Wegz\'s beats and clean code, and why Arabic rap has become the unofficial soundtrack of my programming journey.',
    content: `
## The Beat Behind the Code

If you walk into my room at any hour of the day, you'll hear one of two things: the click-clack of my keyboard or the bass-heavy beats of Arabic rap. Usually both at the same time.

### The Discovery

It started accidentally. I was pulling an all-nighter working on the Youth Science Journal platform, feeling stuck on a particularly tricky authentication system. In desperation, I threw on Wegz's "El Bakht" and something clicked. Not just the solution to my code problem - though that came too - but the realization that this music was doing something special to my brain.

### The Science Behind It

There's actual neuroscience behind why music helps with coding:

1. **Rhythm and Logic**: The steady beats create a rhythmic pattern that mirrors the logical flow of programming
2. **Emotional Regulation**: The energy in rap keeps me motivated during frustrating debugging sessions
3. **Language Centers**: Arabic rap engages different language centers than English, leaving my "coding brain" free to focus

### My Coding Playlist Breakdown

**Deep Focus Mode**: Marwan Pablo - "El Gemeza"
The track is long enough for extended coding sessions, with complex wordplay that matches the complexity of algorithmic thinking.

**Debugging Sessions**: Wegz - "Adeka"
High energy for when I need to stay alert while hunting down bugs. The aggressive beats match my frustration with broken code.

**Creative Coding**: Abyusif - "Nos Kilo"
Raw, authentic energy that pushes me to write cleaner, more creative solutions.

**Late Night Coding**: Ahmed Mekky - "Law Mesh Hena"
When it's 3 AM and I'm questioning all my life choices, Mekky's humor keeps me sane.

### The Cultural Connection

There's something deeply satisfying about writing code while listening to music in my native language. It keeps me grounded in my identity while I'm building projects that could be used anywhere in the world.

### The Philosophy

Both rap and coding are about taking complex ideas and expressing them in structured, rhythmic ways. A good rap verse flows like good code - every line has purpose, every transition is smooth, and the whole thing builds to something greater than its parts.

When Wegz drops a complex wordplay, it's like when you write an elegant recursive function. When Marwan Pablo builds a narrative across verses, it's like architecting a clean, scalable system.

### My Own Rap Lines

I've started writing my own lyrics inspired by my coding experiences:

*"Coding through the night, with Wegz in my headphones*  
*Physics equations mixed with Egyptian beats*  
*STEM school dreams, Cairo rap scenes*  
*From quantum mechanics to Pablo's flow"*

### Conclusion

Music isn't just background noise while I code - it's fuel for creativity, motivation for persistence, and a connection to my culture while I build my future. Every great project I've built has had a soundtrack, and that soundtrack has always been Arabic rap.

Now if you'll excuse me, I have some debugging to do, and Wegz just dropped a new track.
    `,
    category: 'Lifestyle',
    date: '2024-12-12',
    readTime: '7 min',
    tags: ['music', 'rap', 'coding', 'culture'],
    icon: <HeartIcon className="w-5 h-5" />
  },
  {
    id: 'leadership-rejection-growth',
    title: 'How Getting Rejected Made Me a Better Leader',
    excerpt: 'The story of how being rejected from my school\'s Physics Club became the catalyst for my most significant leadership growth.',
    content: `
## The Rejection That Changed Everything

Sometimes the best thing that can happen to you is getting told "no." I learned this the hard way when I got rejected from my own school's Physics Club leadership position.

### The Setup

Picture this: I had just ranked 5th worldwide in the International Physics Realm. I was the club's web developer, had organized multiple competitions, and genuinely thought leadership was a given. I prepared for weeks, sure that my technical achievements would speak for themselves.

### The Fall

"We regret to inform you..." 

Those words hit harder than a failed compile after hours of debugging. The feedback was brutal but honest: my technical achievements were impressive, but I hadn't demonstrated enough collaborative leadership or genuine team presence within the club.

### The Realization

I had been so focused on individual excellence that I'd forgotten about the "we" in teamwork. I was the person who solved problems alone at 2 AM instead of teaching others how to solve them. I was building systems instead of building people.

### The Comeback

Instead of letting rejection define me, I let it refine me. Here's what I did:

**1. Shifted Focus to Others**
- As vice president of the STEM Computer Science Club, I organized coding bootcamps that helped 110+ students build their own websites
- Instead of just fixing problems, I started teaching others how to fix them

**2. Created Opportunities for Everyone**
- Designed Egypt's first Computational Science Olympiad to give students new ways to excel
- Built platforms not just for efficiency, but for community engagement

**3. Led Through Service**
- Organized the Aura Hunt Game that engaged 230+ students and raised 8,000 EGP in prizes
- Started the school magazine to give students a voice and platform for expression

### The Lessons

**Leadership isn't about being the smartest person in the room** - it's about making everyone else smarter.

**Individual excellence means nothing without collective impact** - your achievements only matter if they lift others up too.

**Rejection is data, not destiny** - it tells you what to improve, not who you are.

### The Growth

That rejection taught me that true leadership is about presence, not just performance. It's about showing up for your team, not just showing off your skills. It's about creating environments where others can succeed, not just succeeding yourself.

Now, when I lead workshops or organize competitions, I focus on:
- Making sure everyone feels heard and valued
- Creating learning opportunities for all skill levels  
- Building systems that empower others to lead
- Being present in the community, not just the code

### The Irony

The skills that eventually made me a better leader - empathy, community building, collaborative problem-solving - are now the ones that make me a better programmer too. Code isn't just about logic; it's about creating tools that serve people.

### The Gratitude

I'm actually grateful for that rejection now. It forced me to confront my weaknesses and develop into the kind of leader I actually want to follow. Sometimes the best thing that can happen to you is being told you're not ready - because it gives you the chance to become ready.

To anyone reading this who's facing their own rejection: it's not the end of your story. It's the beginning of your comeback.
    `,
    category: 'Leadership',
    date: '2024-12-08',
    readTime: '9 min',
    tags: ['leadership', 'rejection', 'growth', 'personal'],
    icon: <LightBulbIcon className="w-5 h-5" />
  },
  {
    id: 'future-tech-predictions',
    title: 'My Predictions for the Future of Technology (From a Gen Z Perspective)',
    excerpt: 'A teenager\'s take on where technology is heading, from quantum computing to AI consciousness, and why the future is both exciting and terrifying.',
    content: `
## The Future According to a Physics-Obsessed Teenager

As someone who spends equal time reading quantum mechanics papers and debugging JavaScript, I have some thoughts about where technology is heading. Here are my predictions for the next decade:

### 1. Quantum Computing Goes Mainstream (Sort Of)

By 2030, we'll have quantum computers that can solve specific problems exponentially faster than classical computers. But here's the thing - they won't replace your laptop. They'll be like GPUs: specialized tools for specific tasks.

I predict quantum computing will first revolutionize:
- Drug discovery and molecular simulation
- Cryptography and security
- Financial modeling and optimization
- Machine learning training

**My Hot Take**: The first quantum computer you interact with won't be one you own - it'll be a cloud service that your regular computer talks to.

### 2. AI Gets Weirdly Human (And Humans Get Weirdly AI)

We're not heading toward artificial general intelligence - we're heading toward artificial emotional intelligence. The AIs of 2030 won't just be smarter; they'll be more empathetic, creative, and intuitive.

Meanwhile, humans will become more AI-like:
- Brain-computer interfaces will let us process information faster
- AI assistants will become extensions of our memory and reasoning
- We'll develop "hybrid intelligence" where human creativity meets AI computation

**My Hot Take**: The question isn't "Will AI become conscious?" but "Will we know when it does?"

### 3. Programming Becomes a Universal Language

Just like literacy became essential in the 20th century, computational thinking will become essential in the 21st. But programming languages will evolve to be more natural and intuitive.

I predict:
- Visual programming will replace text-based coding for many tasks
- AI will write most boilerplate code
- The skill will shift from "writing code" to "designing systems"

**My Hot Take**: My little brother will never write a for-loop by hand, and that's perfectly fine.

### 4. Physics Simulations Change Everything

As someone building physics simulations, I see where this is going. By 2030, we'll be able to simulate complex physical systems in real-time with consumer hardware.

This will revolutionize:
- Engineering design (test everything virtually first)
- Education (manipulate physics concepts with your hands)
- Entertainment (games that obey actual physics laws)
- Scientific research (experiment in virtual universes)

**My Hot Take**: The first person to build a full universe simulation will be a bored teenager with access to quantum computing.

### 5. The Internet Becomes Three-Dimensional

The web is about to get spatial. Not just VR/AR, but truly three-dimensional information spaces where:
- Code repositories are navigable 3D environments
- Data visualizations exist in space around you  
- Social media happens in shared virtual worlds
- Programming is done by manipulating objects in 3D space

**My Hot Take**: Flat websites will look as outdated as command-line interfaces do now.

### 6. Energy Storage Solves Climate Change

The breakthrough won't be in renewable generation - we already have enough solar and wind. It'll be in storage. Solid-state batteries, liquid air energy storage, and quantum batteries will make renewable energy available 24/7.

**My Hot Take**: The person who solves energy storage will become the richest human in history.

### 7. Biotech Meets Infotech

The boundary between biology and technology will blur completely:
- DNA will become a storage medium for data
- Living computers will use biological neural networks
- We'll program biological systems like we program computers
- Medicine will become as precise as debugging code

**My Hot Take**: The first truly intelligent AI will be biological, not digital.

### The Scary Part

All of this assumes we navigate the risks: job displacement, privacy erosion, deepfakes, autonomous weapons, and the general weirdness of living in a world where reality is increasingly negotiable.

### The Exciting Part

We're living through the most interesting time in human history. The tools we're building today will let us cure diseases, explore space, understand consciousness, and maybe even figure out what the universe is really made of.

### My Role in All This

As someone who's passionate about both the theoretical (physics) and practical (programming) sides of technology, I want to help build the future responsibly. That means:
- Using AI to augment human creativity, not replace it
- Building quantum systems that solve real problems
- Creating educational tools that make complex ideas accessible
- Ensuring technology serves humanity, not the other way around

The future is coming whether we're ready or not. I'd rather help build it than just experience it.

*What are your predictions? What am I getting wrong? Let me know - the future is too important to get wrong.*
    `,
    category: 'Technology',
    date: '2024-12-05',
    readTime: '12 min',
    tags: ['future', 'technology', 'predictions', 'AI'],
    icon: <GlobeAltIcon className="w-5 h-5" />
  }
]

const categories = ['All', 'Personal Growth', 'Technical', 'Leadership', 'Lifestyle', 'Technology']

export default function ThoughtsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedPost, setSelectedPost] = useState<string | null>(null)

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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

  if (selectedPost) {
    const post = blogPosts.find(p => p.id === selectedPost)
    if (!post) return null

    return (
      <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
          >
            ← Back to all thoughts
          </button>

          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-gray-600 dark:text-gray-400">
                  {post.icon}
                </div>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-black dark:text-white mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="prose-content">
              {formatContent(post.content)}
            </div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6 text-black dark:text-white">
            Thoughts & Reflections
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            My digital journal where I process the chaos of being a teenager trying to understand 
            physics, technology, leadership, and life. Raw thoughts, lessons learned, and random musings. 💭✨
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

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPost(post.id)}
              className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden cursor-pointer hover:border-black dark:hover:border-white transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-gray-600 dark:text-gray-400">
                    {post.icon}
                  </div>
                  <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-black dark:text-white mb-3 leading-tight">
                  {post.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <ClockIcon className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-black dark:bg-white text-white dark:text-black rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 3 && (
                    <span className="px-2 py-1 bg-gray-300 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                      +{post.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Writing Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <BookOpenIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">{blogPosts.length}</div>
            <div className="text-sm font-mono uppercase tracking-wider">Blog Posts</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <TagIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">{categories.length - 1}</div>
            <div className="text-sm font-mono uppercase tracking-wider">Categories</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <ClockIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">50+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Read Minutes</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <LightBulbIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">∞</div>
            <div className="text-sm font-mono uppercase tracking-wider">Ideas</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
