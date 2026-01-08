import Contact from "./component/Contact";

import {Home,About,Practices,Resources} from "./component/practices"

function App() {
  
  const aboutSection1 = [
    {
      "logo" : "🧠",
      "title" : "Rewire Your Brain",
      "description" : "Neuroplasticity in action - just 10 minutes daily physically reshapes your brain for better focus and emotional control."
    },
     {
      "logo" : "🎯",
      "title" : "Instant Calm",
      "description" : "Achieve flow states more easily and unlock your full potential in work, creativity, and personal growth."
    },
     {
      "logo" : "⚡",
      "title" : "Instant Calm",
      "description" : "Access immediate stress relief through proven breathing techniques that activate your parasympathetic nervous system."
    }
    
  ]

  const aboutSection2 = {
    "StressReduction" : 90,
    "BetterFocus" : 7,
    "HappyMembers" : 20,
    "UserRating" : "5.9",
  }

  const aboutSection3 = [
    {
      "description" :"Science-backed techniques proven by neuroscience",
    },
     {
      "description" :"Personalized journey adapted to your needs",
    },
    {
      "description" : "Expert guidance from certified instructors"
    },
    {
      "description" : "Track your progress with real metrics"
    },
    {
      "description" : "Brought to you by Tooplate website"
    },
]

  const practicesSection1 = [
    {"title" : "Foundation"
     },
      {"title" : " Breathing"
     },
      {"title" : " Awerness "
     },
      {"title" : " Integration"
     }
  ]
  const practicesSection2 =[
    {"logo" : "🧘",
      "title" : "Foundation Meditation",
      "timeline" : "10-20 minutes daily",
      "description" :"Begin your journey with guided meditation sessions designed specifically for beginners. Learn the fundamental techniques of sitting meditation, including proper posture, attention anchoring, and working with wandering thoughts. Our progressive approach ensures you build a solid foundation without feeling overwhelmed.",
      "benefit1":" Stress Reduction" ,
      "benefit2":" Mental Clarity" ,
      "benefit3":" Emotional Balance" ,
      "benefit4":"  Better Sleep" 

    
    },
     {"logo" : "🌬️",
      "title" : "Concious Breathing",
      "timeline" : " 5-10 minutes daily",
      "description" :"Master the art of breath awareness with techniques that instantly calm your nervous system. From box breathing to 4-7-8 patterns, discover how different breathing exercises can energize, relax, or center you throughout your day. Perfect for managing anxiety and stress in real-time.", 
      "benefit1":"Instant Calm" ,
      "benefit2":" Energy Boost" ,
      "benefit3":" Focus Enhancement" ,
      "benefit4":"  Anixety Relief" 

    },
      {"logo" : "📝",
      "title" : "Mindful Awareness",
      "timeline" : " 15 minutes daily",
      "description" :" Develop meta-awareness through journaling and body scan practices. Learn to observe your thoughts, emotions, and physical sensations without judgment. This practice includes gratitude exercises, emotional check-ins, and reflective writing to deepen self-understanding.. Perfect for managing anxiety and stress in real-time." ,
        "benefit1":"Self Discovery" ,
      "benefit2":" Pattern Recognization" ,
      "benefit3":"Emotional Intelligence",
      "benefit4":"  Gratitute" 

    },
      {"logo" : "🚶",
      "title" : "Living Mindfully",
      "timeline" : " Throughout a day",
      "description" :" Integrate mindfulness into every aspect of your daily life. From mindful eating to walking meditation, learn how to transform routine activities into opportunities for presence. Discover how to maintain awareness during work, conversations, and even challenging situations.",
      "benefit1":"Present Living" ,
      "benefit2":" Joy in Simple Things" ,
      "benefit3":" Mindful Communication" ,
      "benefit4":" Work-Life Balance" 
}
    
  ]
   const resourcesSection1 = [
    {
      "imageurl" :"/images/unsplash-mountain-cloud.avif",
      "title" : "Morning Meditation",
      "description" : " Start your day with clarity and intention through our 15-minute morning practice."
    },
    {
      "imageurl" :"/images/unsplash-mountain-top.avif",
      "title" : "Stress Relief Session",
      "description" : "Quick 10-minute guided meditation for immediate stress and anxiety relief."
    },
    {
      "imageurl" :"/images/unsplash-blue-lakeside.avif",
      "title" : "Sleep Meditation",
      "description" : "Peaceful bedtime meditation to help you unwind and prepare for restful sleep."
    }

   ]
   
    const resourcesSection2 = [
      {
      "imageurl" :"/images/unsplash-library-bookshelf.avif",
      "title" : "8-Week MBSR Program",
      "description" : " Comprehensive Mindfulness-Based Stress Reduction course with certified instructors."},
      {
      "imageurl" :"/images/unsplash-people-meeting-room.avif",
      "title" : "Mindful Leadership",
      "description" : " Develop presence and emotional intelligence for effective leadership."},
      {
     "imageurl" :"/images/unsplash-yoga-session.avif",
      "title" : "Beginner's Journey",
      "description" : " 30-day introduction to mindfulness with daily lessons and practices."}
    ]
  const resourcesSection3 = [
      {
      "imageurl" :"/images/unsplash-meditation-timer.avif",
      "title" : "Meditation Timer",
      "description" : " Customizable timer with ambient sounds and interval bells for your practice.Start your day with clarity and intention through our 15-minute morning practice."},
      {
      "imageurl" :"/images/unsplash-mood-tracker.avif",
      "title" : "Mood Tracker",
      "description" : "Monitor your emotional patterns and see how mindfulness impacts your well-being."},
      {
     "imageurl" :"/images/unsplash-breathing-exercise.avif",
      "title" : "Breathing Exercises",
      "description" : "Interactive breathing patterns for different situations and energy levels."}
    ]
  
  return (
    <>
     <div class="geometric-bg"></div>

    
    <header>
        <nav>
            <a href="#hero" class="logo">
                <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#667eea", stopOpacity: 1 }} />
                            <stop offset="100%" style={{stopColor:"#764ba2",stopOpacity:1}} />
                        </linearGradient>
                    </defs>
                    <circle cx="20" cy="20" r="18" fill="none" stroke="url(#logoGradient)" stroke-width="2"/>
                    <circle cx="20" cy="20" r="14" fill="none" stroke="url(#logoGradient)" stroke-width="1.5" opacity="0.7"/>
                    <circle cx="20" cy="20" r="10" fill="none" stroke="url(#logoGradient)" stroke-width="1" opacity="0.5"/>
                    <circle cx="20" cy="20" r="6" fill="none" stroke="url(#logoGradient)" stroke-width="0.5" opacity="0.3"/>
                    <circle cx="20" cy="20" r="3" fill="url(#logoGradient)"/>
                </svg>
                <span class="logo-text">Inner Peace</span>
            </a>
            <div class="menu-toggle" onclick="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links">
                <li><a href="#hero" class="nav-link active">Home</a></li>
                <li><a href="#about" class="nav-link">About</a></li>
                <li><a href="#practices" class="nav-link">Practices</a></li>
                <li><a href="#resources" class="nav-link">Resources</a></li>
                <li><a href="#contact" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

     <Home/>

     <About 
       aboutSection1={aboutSection1}
       aboutSection2={aboutSection2}
       aboutSection3={aboutSection3}
      />
     
    <Practices
      practicesSection1={practicesSection1} 
      practicesSection2={practicesSection2}
    
    />
    
    <Resources
    resourcesSection1={resourcesSection1}
    resourcesSection2={resourcesSection2}
    resourcesSection3={resourcesSection3}
    />
    <Contact/>
    

    <footer>
        <div class="footer-content">
            <div class="footer-links">
                <a href="#privacy">Privacy Policy</a>
                <a href="#terms">Terms of Service</a>
                <a href="#support">Support</a>
            </div>
            <div class="copyright">
                <p>&copy; 2025 Inner Peace. All rights reserved. Nurturing minds, one breath at a time. 
                Designed by <a rel="nofollow noopener" href="https://www.tooplate.com" target="_blank" >Tooplate</a></p>
            </div>
        </div>
    </footer>
    </>
  );
}

export default App;
