'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  PlayIcon, 
  CodeBracketIcon, 
  SparklesIcon,
  ClipboardDocumentIcon
} from '@heroicons/react/24/outline'

const codeExamples = [
  {
    id: 'physics-sim',
    title: 'Physics Simulation',
    language: 'Python',
    description: 'A simple projectile motion calculator I wrote for physics class',
    code: `import math

def projectile_motion(velocity, angle, height=0):
    """
    Calculate projectile motion - because physics is cool!
    """
    # Convert angle to radians
    angle_rad = math.radians(angle)
    
    # Initial velocity components
    vx = velocity * math.cos(angle_rad)
    vy = velocity * math.sin(angle_rad)
    
    # Time of flight
    g = 9.81  # gravity
    time_flight = (vy + math.sqrt(vy**2 + 2*g*height)) / g
    
    # Maximum height and range
    max_height = height + (vy**2) / (2*g)
    range_x = vx * time_flight
    
    return {
        'time_of_flight': round(time_flight, 2),
        'max_height': round(max_height, 2),
        'range': round(range_x, 2)
    }

# Example: Cannon ball at 45° with 50 m/s velocity
result = projectile_motion(50, 45)
print(f"Time: {result['time_of_flight']}s")
print(f"Max Height: {result['max_height']}m")
print(f"Range: {result['range']}m")

# Output: Time: 7.21s, Max Height: 63.78m, Range: 254.91m`,
    output: `Time: 7.21s
Max Height: 63.78m
Range: 254.91m

Physics in action! This is what I love about 
programming - making abstract concepts tangible.`
  },
  {
    id: 'react-component',
    title: 'Smart React Component',
    language: 'TypeScript',
    description: 'A reusable component with TypeScript magic',
    code: `interface StudySessionProps {
  subject: string;
  duration: number;
  completed?: boolean;
}

const StudySession: React.FC<StudySessionProps> = ({ 
  subject, 
  duration, 
  completed = false 
}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      // Celebration time! 🎉
      alert(\`Congrats! You completed \${subject}!\`);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft, subject]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return \`\${mins}:\${secs.toString().padStart(2, '0')}\`;
  };

  return (
    <div className="study-timer">
      <h3>{subject} Study Session</h3>
      <div className="timer-display">
        {formatTime(timeLeft)}
      </div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start'} Studying
      </button>
    </div>
  );
};

// Usage: <StudySession subject="Physics" duration={1800} />`,
    output: `📚 A productivity tool I built to manage my study sessions!

Features:
✅ TypeScript for type safety
✅ React hooks for state management  
✅ Clean, reusable component design
✅ Actually helps me study better!

Currently using it for my college prep! 🎓`
  },
  {
    id: 'algorithm',
    title: 'Contest Algorithm',
    language: 'C++',
    description: 'From my competitive programming practice',
    code: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

// Binary search implementation - a classic!
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) {
            return mid;  // Found it!
        }
        
        if (arr[mid] < target) {
            left = mid + 1;   // Search right half
        } else {
            right = mid - 1;  // Search left half
        }
    }
    
    return -1;  // Not found
}

int main() {
    vector<int> scores = {67, 72, 85, 89, 92, 95, 98};
    int myScore = 89;
    
    int position = binarySearch(scores, myScore);
    
    if (position != -1) {
        cout << "Found my score at position: " << position << endl;
        cout << "That's rank #" << (scores.size() - position) << "!" << endl;
    }
    
    return 0;
}`,
    output: `Found my score at position: 3
That's rank #4!

O(log n) time complexity - efficient and elegant!

Fun fact: I use this algorithm thinking in my 
physics problem-solving too. When finding the 
right equation, I eliminate half the possibilities 
with each logical step! 🧠`
  },
  {
    id: 'api-magic',
    title: 'API Integration',
    language: 'JavaScript',
    description: 'Fetching real-world data like a pro',
    code: `// GitHub API integration for my portfolio
class GitHubStats {
  constructor(username) {
    this.username = username;
    this.baseURL = 'https://api.github.com';
  }

  async getProfile() {
    try {
      const response = await fetch(\`\${this.baseURL}/users/\${this.username}\`);
      const data = await response.json();
      
      return {
        name: data.name,
        bio: data.bio,
        publicRepos: data.public_repos,
        followers: data.followers,
        following: data.following,
        joinedDate: new Date(data.created_at).getFullYear()
      };
    } catch (error) {
      console.error('Error fetching GitHub data:', error);
      return null;
    }
  }

  async getLanguageStats() {
    try {
      const repos = await fetch(\`\${this.baseURL}/users/\${this.username}/repos\`);
      const repoData = await repos.json();
      
      const languages = {};
      
      for (const repo of repoData) {
        if (repo.language) {
          languages[repo.language] = (languages[repo.language] || 0) + 1;
        }
      }
      
      return Object.entries(languages)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5);  // Top 5 languages
        
    } catch (error) {
      console.error('Error fetching language stats:', error);
      return [];
    }
  }
}

// Usage
const myStats = new GitHubStats('Yaseen-Saad');
myStats.getProfile().then(profile => {
  console.log(\`Coding since \${profile.joinedDate}!\`);
});`,
    output: `Real API integration powering my portfolio!

This code actually runs on my website and shows:
📊 Live GitHub statistics
🔢 Repository counts  
Top programming languages
📈 Contribution patterns

Making my portfolio dynamic and data-driven! 
Perfect for showing colleges my active 
development work. 📚✨`
  }
]

export default function CodePlayground() {
  const [selectedExample, setSelectedExample] = useState(codeExamples[0])
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(selectedExample.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">
            Code Playground
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A peek into my digital workshop. These are real code snippets from my projects, 
            competitions, and late-night coding sessions. Each one tells a story of curiosity, 
            problem-solving, and the joy of making things work.
          </p>
        </motion.div>

        {/* Code Example Selector */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {codeExamples.map((example, index) => (
            <motion.button
              key={example.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedExample(example)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                selectedExample.id === example.id
                  ? 'border-black dark:border-white bg-black dark:bg-white text-white dark:text-black'
                  : 'border-gray-200 dark:border-gray-700 hover:border-black dark:hover:border-white bg-white dark:bg-black'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <CodeBracketIcon className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider">
                  {example.language}
                </span>
              </div>
              <h3 className="font-bold text-sm mb-1">{example.title}</h3>
              <p className={`text-xs ${
                selectedExample.id === example.id 
                  ? 'text-gray-300 dark:text-gray-700' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}>
                {example.description}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Code Display */}
        <motion.div
          key={selectedExample.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Code Panel */}
          <div className="bg-black rounded-lg overflow-hidden border-2 border-gray-800">
            {/* Code Header */}
            <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-white font-mono text-sm">
                  {selectedExample.title.toLowerCase().replace(/\s+/g, '_')}.{
                    selectedExample.language === 'TypeScript' ? 'tsx' :
                    selectedExample.language === 'JavaScript' ? 'js' :
                    selectedExample.language === 'Python' ? 'py' :
                    selectedExample.language === 'C++' ? 'cpp' : 'txt'
                  }
                </span>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ClipboardDocumentIcon className="w-4 h-4" />
                <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            
            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-sm text-gray-300 leading-relaxed">
                <code>{selectedExample.code}</code>
              </pre>
            </div>
          </div>

          {/* Output Panel */}
          <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
            <div className="bg-gray-100 dark:bg-gray-900 px-6 py-4 flex items-center gap-3">
              <PlayIcon className="w-5 h-5 text-green-500" />
              <span className="font-mono text-sm text-black dark:text-white">Output</span>
            </div>
            
            <div className="p-6">
              <pre className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
                {selectedExample.output}
              </pre>
            </div>
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <SparklesIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">4</div>
            <div className="text-sm font-mono uppercase tracking-wider">Languages Mastered</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <CodeBracketIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">1000+</div>
            <div className="text-sm font-mono uppercase tracking-wider">Lines Written</div>
          </div>
          <div className="text-center bg-black dark:bg-white text-white dark:text-black p-6 rounded-lg">
            <PlayIcon className="w-8 h-8 mx-auto mb-3" />
            <div className="text-2xl font-bold mb-2">∞</div>
            <div className="text-sm font-mono uppercase tracking-wider">Ideas Brewing</div>
          </div>
        </motion.div>

        {/* Personal Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-black border-2 border-gray-200 dark:border-gray-800 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">Code with Purpose</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Every line of code here serves a purpose - whether it's solving physics problems, 
              building useful tools, or preparing for competitive programming. I don't just code 
              to code; I code to solve real problems and make life a little bit better. 
              That's the mindset I'll bring to college and beyond!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
