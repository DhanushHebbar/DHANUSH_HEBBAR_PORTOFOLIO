import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Phone, ExternalLink, Code2, Layout, Trophy, 
  GraduationCap, Briefcase, Sparkles, Terminal, Cpu, Globe, Brain, 
  Database, Cloud, Users, TrendingUp, Calendar, Map, Tv, ChevronRight,
  ArrowRight, ChevronUp, Zap, Server
} from 'lucide-react';

const CustomStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;700&display=swap');
      
      html { scroll-behavior: smooth; font-family: 'Inter', sans-serif; background-color: #020617; color: #f8fafc; }
      
      /* Hide default scrollbar for a cleaner look */
      ::-webkit-scrollbar { width: 8px; }
      ::-webkit-scrollbar-track { background: #020617; }
      ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 4px; }
      ::-webkit-scrollbar-thumb:hover { background: #38bdf8; }

      /* Premium Gradients */
      .gradient-text {
        background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% auto;
        animation: shine 5s linear infinite;
      }

      .gradient-text-alt {
        background: linear-gradient(135deg, #a78bfa 0%, #f472b6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      
      /* Advanced Glassmorphism */
      .glass-panel {
        background: rgba(15, 23, 42, 0.4);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      }
      
      .glass-card {
        background: linear-gradient(180deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.06);
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
      
      .glass-card:hover {
        transform: translateY(-10px) scale(1.02);
        border-color: rgba(56, 189, 248, 0.5);
        background: linear-gradient(180deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%);
        box-shadow: 0 30px 60px -15px rgba(56, 189, 248, 0.2), 0 0 20px rgba(56, 189, 248, 0.1) inset;
        z-index: 10;
      }

      .bg-grid-pattern {
        background-image: 
          linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
        background-size: 40px 40px;
        mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
        -webkit-mask-image: radial-gradient(ellipse at center, black 40%, transparent 80%);
      }

      /* Infinite Marquee */
      @keyframes scroll-left {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: scroll-left 60s linear infinite;
        width: max-content;
      }
      .marquee-container:hover .animate-marquee {
        animation-play-state: paused;
      }

      /* Premium Case Study Animated Border */
      @keyframes border-spin {
        100% { transform: rotate(360deg); }
      }
      .case-study-wrapper {
        position: relative;
        overflow: hidden;
        border-radius: 2rem;
        padding: 2px;
      }
      .case-study-wrapper::before {
        content: '';
        position: absolute;
        top: 50%; left: 50%;
        width: 200%; height: 200%;
        background: conic-gradient(from 0deg, transparent 0%, transparent 70%, #38bdf8 80%, #c084fc 100%);
        transform-origin: 0 0;
        animation: border-spin 4s linear infinite;
        z-index: 0;
      }
      .case-study-content {
        position: relative;
        z-index: 1;
        border-radius: 1.9rem;
        height: 100%;
        background: #0f172a;
      }

      /* Custom Cursor Follower */
      .cursor-dot {
        pointer-events: none;
        position: fixed;
        top: 0; left: 0;
        width: 8px; height: 8px;
        background-color: #38bdf8;
        border-radius: 50%;
        z-index: 9999;
        transition: transform 0.1s ease-out;
        mix-blend-mode: difference;
      }
      .cursor-ring {
        pointer-events: none;
        position: fixed;
        top: 0; left: 0;
        width: 40px; height: 40px;
        border: 2px solid rgba(56, 189, 248, 0.5);
        border-radius: 50%;
        z-index: 9998;
        transition: transform 0.3s ease-out, width 0.2s, height 0.2s, border-color 0.2s;
        box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
      }
      
      /* Typewriter Cursor */
      .typing-cursor::after {
        content: '|';
        animation: blink 1s step-start infinite;
      }
      @keyframes blink { 50% { opacity: 0; } }

      /* Base Animations */
      @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
      .animate-float { animation: float 6s ease-in-out infinite; }
      @keyframes shine { to { background-position: 200% center; } }
      
      /* Glowing Status Dot */
      @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 0.8; } 100% { transform: scale(2.5); opacity: 0; } }
      .status-dot-container { position: relative; display: flex; align-items: center; justify-content: center; margin-right: 10px; }
      .status-dot { width: 8px; height: 8px; background-color: #38bdf8; border-radius: 50%; position: relative; z-index: 2; box-shadow: 0 0 10px #38bdf8; }
      .status-ring { position: absolute; width: 10px; height: 10px; background-color: #38bdf8; border-radius: 50%; animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite; z-index: 1; }

      /* Premium Noise Overlay */
      .bg-noise {
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        pointer-events: none;
        z-index: 9997;
        opacity: 0.04;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      }

      /* Mouse Scroll Animation */
      @keyframes scroll-wheel {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(6px); opacity: 0; }
      }
      .scroll-wheel-anim {
        animation: scroll-wheel 1.5s infinite;
      }
    `}
  </style>
);

const PORTFOLIO_DATA = {
  name: "Dhanush Hebbar",
  role: "Web Developer & AI Enthusiast",
  summary: "I am a passionate MCA graduate, Full-Stack Web Developer, and dedicated AI Enthusiast. My tech journey is rooted in deep persistence—from learning my first computer keys in 1st standard to architecting full-stack web apps in my 6th sem BCA, I spent an incredible 16 years growing and evolving on the exact same campus.\n\nToday, I leverage that foundational drive to build intelligent, scalable applications. I have successfully architected and deployed multiple full-stack projects across diverse technologies, heavily integrating modern AI (like Gemini, Vertex AI, and Agentic workflows) into real-world solutions. I am highly adaptable, endlessly curious, and driven to bridge the gap between traditional web development and cutting-edge artificial intelligence.",
  contact: {
    email: "dhanushhebbar6@gmail.com",
    phone: "+91 8618543398",
    linkedin: "https://linkedin.com/in/dhanush-hebbar",
    github: "https://github.com/DhanushHebbar"
  },
  skills: [
    { category: "AI Integrations", icon: <Brain className="text-purple-400" size={22}/>, items: ["Gemini 1.5", "Vertex AI", "Agentic AI", "NLP Pipelines", "Web Speech API"] },
    { category: "Frontend", icon: <Layout className="text-sky-400" size={22}/>, items: ["React.js", "Tailwind CSS", "HTML5", "Vite", "Glassmorphism"] },
    { category: "Backend", icon: <Terminal className="text-indigo-400" size={22}/>, items: ["Python", "FastAPI", "Node.js", "Express.js", "REST APIs", "Socket.IO"] },
    { category: "Databases", icon: <Database className="text-emerald-400" size={22}/>, items: ["PostgreSQL", "MongoDB", "Firebase", "DBMS Core"] },
    { category: "Cloud & Deployment", icon: <Cloud className="text-blue-400" size={22}/>, items: ["Vercel", "Render", "CI/CD", "GitHub", "Docker Basics"] },
    { category: "Core & Soft Skills", icon: <Sparkles className="text-yellow-400" size={22}/>, items: ["System Architecture", "Analytical Thinking", "Team Collaboration"] }
  ],
  experience: [
    { role: "Full Stack Web Development Intern", company: "SkillXAcademy, Bangalore (Online)", duration: "Mar 2025 - Jun 2025", description: "14-week internship covering MERN stack development, REST APIs, and real-time web applications. Built The Autonomous Cognitive Interviewer (AI mock platform) and TaskFlow (real-time collaboration tool)." },
    { role: "Full Stack Developer Intern", company: "Zephyr Technologies & Solutions Pvt Ltd, Mangaluru", duration: "Mar 2024 - Apr 2024", description: "Contributed to full-stack projects involving both frontend interface design and backend development. Improved application performance and enhanced overall user experience through code optimization." }
  ],
  projects: [
    { 
      title: "xTransMatrix | Moultrie", 
      icon: <Database size={24} className="text-sky-400" />,
      tech: "React, FastAPI, MongoDB, Vercel, Render", 
      description: "Cloud-native IoT data engineering pipeline. Transforms massive volumes of unstructured customer feedback into actionable intelligence, automating sentiment annotation and identifying early churn signals.", 
      live: "https://xtransmatrix-case-study.vercel.app",
      github: "#",
      isCaseStudy: true 
    },
    { 
      title: "TaskFlow", 
      icon: <Layout size={24} className="text-indigo-400" />,
      tech: "React.js, Node.js, Express.js, MongoDB, Socket.IO", 
      description: "Enterprise-grade project management platform featuring real-time collaboration, Agile sprint tracking, and AI assistance.", 
      live: "https://taskflow-omega-drab.vercel.app",
      github: "https://github.com/DhanushHebbar/taskflow-client"
    },
    { 
      title: "The Cognitive Interviewer", 
      icon: <Brain size={24} className="text-purple-400" />,
      tech: "React, Tailwind CSS, Web Speech API", 
      description: "Professional-grade, voice-first mock interview platform with real-time AI evaluation, performance analytics, and dynamic curriculum unlocking.", 
      live: "https://interview-sim-client-frontend.vercel.app",
      github: "https://github.com/DhanushHebbar/interview-sim-client-frontend"
    },
    { 
      title: "The Weather (Stratos)", 
      icon: <Cloud size={24} className="text-cyan-400" />,
      tech: "React, OpenWeatherMap API", 
      description: "Expedition-themed meteorological dashboard framing climate data through the lens of exploration, pairing real-time metrics with situational survival gear recommendations.", 
      live: "https://weather-proj-phi.vercel.app",
      github: "#"
    },
    { 
      title: "StudyForge", 
      icon: <GraduationCap size={24} className="text-emerald-400" />,
      tech: "FastAPI, React, PostgreSQL, Firebase", 
      description: "AI-powered learning platform with document-grounded responses, quiz engine, and collaborative whiteboard. Currently architecting Advanced AI features.", 
      live: "https://studyforge4.vercel.app",
      github: "#"
    },
    { 
      title: "Expense Tracking System", 
      icon: <TrendingUp size={24} className="text-green-400" />,
      tech: "React, Node.js, Express, MongoDB", 
      description: "Financial dashboard with visual analytics to track income/expenses and comprehensive transaction management.", 
      live: "https://personal-expense-track-seven.vercel.app",
      github: "https://github.com/DhanushHebbar/personal-expense-track-client"
    },
    { 
      title: "Student Management System", 
      icon: <Users size={24} className="text-orange-400" />,
      tech: "Java, Web Technologies", 
      description: "A robust, web-based backend-heavy system for administrative workflows and student data management.", 
      live: "https://student-mca-app.onrender.com",
      github: "#"
    },
    { 
      title: "Study Planner", 
      icon: <Calendar size={24} className="text-pink-400" />,
      tech: "Web Technologies", 
      description: "Productivity application designed to organize academic schedules, track tasks, and plan study sessions.", 
      live: "https://study-planner-ochre.vercel.app",
      github: "#"
    },
    { 
      title: "Interactive Path Maker", 
      icon: <Map size={24} className="text-yellow-400" />,
      tech: "Web Technologies", 
      description: "Engaging visual tool for creating, mapping, and visualizing custom pathways and workflows.", 
      live: "https://interactive-path-maker.vercel.app",
      github: "#"
    },
    { 
      title: "Anime World", 
      icon: <Tv size={24} className="text-red-400" />,
      tech: "Frontend Technologies", 
      description: "Responsive web platform designed for anime enthusiasts to browse and discover content.", 
      live: "https://anime-world-web.vercel.app",
      github: "#"
    }
  ],
  education: [
    { degree: "Master of Computer Applications (MCA)", inst: "Shree Devi Institute of Technology", year: "2026", score: "86.74% / 8.67 CGPA" },
    { degree: "Bachelor of Computer Applications (BCA)", inst: "Padua College of Commerce and Management", year: "2024", score: "80.39% / 8.48 CGPA" },
    { degree: "Pre-University Course (PUC)", inst: "Padua PU College", year: "2021", score: "68%" },
    { degree: "S.S.L.C", inst: "Padua High School", year: "2019", score: "64%" }
  ],
  achievements: [
    { title: "1st Prize, Shark Tank Competition", description: "Won first place in a team of two for presenting an innovative business and technical idea at SDM College.", icon: <Trophy className="text-yellow-400" size={28}/> },
    { title: "Google GDG 2025", description: "Participated in GDG Cloud Community Day 2025, gaining hands-on experience in Agentic AI, Gemini 1.5 integration, and Vertex AI for scalable solutions.", icon: <Globe className="text-sky-400" size={28}/> }
  ]
};

// Reusable Scroll Reveal Component
const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if(domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const [typingText, setTypingText] = useState("");
  
  const phrases = ["Scalable Web Platforms", "Intelligent AI Workflows", "Real-Time Architectures", "Cloud-Native Solutions"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Advanced Typewriter Effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting && typingText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end of phrase
      } else if (isDeleting && typingText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        setTypingText(currentPhrase.substring(0, typingText.length + (isDeleting ? -1 : 1)));
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, phraseIndex]);

  // Mouse & Scroll Listeners
  useEffect(() => {
    const updateMousePosition = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrolled(window.scrollY > 100);
    
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prepare a long array for the infinite marquee
  const ALL_TECH = [...PORTFOLIO_DATA.skills.flatMap(s => s.items), "FastAPI", "React.js", "Docker", "MongoDB", "PostgreSQL", "Gemini AI", "Tailwind CSS"];

  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 relative overflow-hidden selection:bg-sky-500/30 cursor-none sm:cursor-auto">
      
      {/* Premium Noise Overlay */}
      <div className="bg-noise mix-blend-overlay"></div>

      {/* Custom Cursor (Hidden on touch devices/small screens natively by media queries typically, but here via CSS/JS logic if needed) */}
      <div className="hidden sm:block cursor-dot" style={{ transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)` }} />
      <div className="hidden sm:block cursor-ring" style={{ transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)` }} />
      
      {/* Background Interactive Glow */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 opacity-40 mix-blend-screen"
        style={{ background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.08), transparent 40%)` }}
      />
      
      {/* Static Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern z-0 opacity-20 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[500px] bg-sky-500/20 blur-[150px] rounded-full pointer-events-none z-0 animate-pulse" style={{animationDuration: '8s'}}></div>
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[600px] bg-purple-500/20 blur-[150px] rounded-full pointer-events-none z-0 animate-pulse" style={{animationDuration: '12s'}}></div>
      
      <CustomStyles />
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 via-indigo-500 to-purple-600 flex items-center justify-center font-black text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.8)] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              DH
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white hidden sm:block group-hover:text-sky-400 transition-colors">Dhanush Hebbar</h1>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-bold tracking-wide">
            {['About', 'Experience', 'Projects', 'Achievements'].map(s => (
              <a key={s} href={`#${s.toLowerCase()}`} className="text-slate-300 hover:text-white transition-colors relative group py-2">
                {s}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <a href="#contact" className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-sky-500 hover:border-sky-400 hover:scale-110 transition-all shadow-lg">
            <Mail size={20} />
          </a>
        </div>
      </nav>

      {/* Floating Back to Top Button */}
      <button 
        onClick={() => window.scrollTo(0,0)}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-slate-800/80 backdrop-blur-lg border border-white/10 text-sky-400 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:bg-sky-500 hover:text-white hover:scale-110 hover:-translate-y-2 transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ChevronUp size={24} strokeWidth={3} />
      </button>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32 relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="flex flex-col items-center justify-center min-h-[75vh] mt-10">
          <FadeInSection delay={100}>
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full glass-panel border border-emerald-500/30 text-emerald-300 mb-10 animate-float shadow-[0_0_30px_rgba(16,185,129,0.15)] backdrop-blur-2xl">
              <div className="status-dot-container">
                <div className="status-ring" style={{backgroundColor: '#10b981'}}></div>
                <div className="status-dot" style={{backgroundColor: '#10b981', boxShadow: '0 0 10px #10b981'}}></div>
              </div>
              <span className="text-sm font-bold tracking-widest uppercase">Open to Opportunities</span>
            </div>
          </FadeInSection>
          
          <FadeInSection delay={200} className="text-center w-full">
            <h1 className="text-6xl md:text-8xl lg:text-[6rem] font-black tracking-tight mb-6 leading-tight">
              Hi, I'm <br className="md:hidden" />
              <span className="gradient-text drop-shadow-2xl filter contrast-125">
                {PORTFOLIO_DATA.name}
              </span>
            </h1>
            
            <div className="h-20 md:h-16 flex items-center justify-center mb-12">
              <h2 className="text-2xl md:text-4xl text-slate-400 font-medium">
                I build <span className="text-white font-bold typing-cursor">{typingText}</span>
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 w-full sm:w-auto">
              <a href="#projects" className="px-10 py-5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-black text-lg hover:from-sky-400 hover:to-indigo-500 transition-all shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)] hover:-translate-y-2 flex items-center justify-center gap-3">
                Explore My Work <ArrowRight size={22} strokeWidth={3} />
              </a>
              <div className="flex gap-4 justify-center">
                <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noreferrer" className="p-5 rounded-2xl glass-panel text-white hover:text-slate-900 hover:bg-white hover:border-white transition-all hover:-translate-y-2 shadow-xl">
                  <Github size={26} strokeWidth={2.5} />
                </a>
                <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="p-5 rounded-2xl glass-panel text-white hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all hover:-translate-y-2 shadow-xl">
                  <Linkedin size={26} strokeWidth={2.5} />
                </a>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer hidden md:flex" onClick={() => document.getElementById('about').scrollIntoView({behavior: 'smooth'})}>
              <div className="w-6 h-10 border-2 border-sky-400/50 rounded-full flex justify-center pt-2">
                <div className="w-1.5 h-1.5 bg-sky-400 rounded-full scroll-wheel-anim"></div>
              </div>
              <span className="text-[10px] font-black tracking-[0.2em] text-sky-400 uppercase">Scroll</span>
            </div>
          </FadeInSection>

          {/* Quick Metrics Bar */}
          <FadeInSection delay={400} className="w-full mt-24 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2 rounded-3xl glass-panel border border-white/10">
              {[
                { label: "Years on Campus", val: "16", icon: <Map className="text-purple-400" size={20}/> },
                { label: "Full-Stack Projects", val: "10+", icon: <Code2 className="text-sky-400" size={20}/> },
                { label: "AI Integrations", val: "5+", icon: <Brain className="text-pink-400" size={20}/> },
                { label: "Commitment", val: "100%", icon: <Zap className="text-yellow-400" size={20}/> },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-900/50 border border-white/5 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    {stat.icon}
                    <span className="text-3xl font-black text-white">{stat.val}</span>
                  </div>
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* INFINITE TECH MARQUEE */}
        <section className="relative w-full py-10 overflow-hidden border-y border-white/5 bg-slate-900/30">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="marquee-container overflow-hidden flex">
            <div className="animate-marquee flex gap-8 px-4">
              {[...ALL_TECH, ...ALL_TECH, ...ALL_TECH].map((tech, i) => (
                <div key={i} className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/50 border border-white/5 text-slate-300 font-bold whitespace-nowrap hover:text-sky-400 hover:border-sky-500/30 transition-colors cursor-default">
                  <Server size={16} className="text-slate-500" /> {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="relative scroll-mt-32">
          <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <FadeInSection className="lg:col-span-5 space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">The Architecture <br/>of My Journey.</h2>
              <p className="text-slate-400 text-lg leading-relaxed whitespace-pre-line border-l-4 border-purple-500/50 pl-6 bg-gradient-to-r from-purple-500/5 to-transparent py-4">
                {PORTFOLIO_DATA.summary}
              </p>
            </FadeInSection>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {PORTFOLIO_DATA.skills.map((s, i) => (
                <FadeInSection key={i} delay={i * 100}>
                  <div className="glass-card p-8 rounded-3xl group relative overflow-hidden h-full">
                    <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-sky-500/20 transition-all duration-700"></div>
                    <div className="relative z-10">
                      <div className="mb-6 p-4 bg-slate-900 border border-white/10 inline-block rounded-2xl shadow-inner shadow-black/50 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                        {s.icon}
                      </div>
                      <h4 className="font-bold text-white mb-4 text-xl tracking-wide">{s.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {s.items.map((item, idx) => (
                          <span key={idx} className="text-xs font-bold px-3 py-1.5 bg-slate-900 text-slate-300 rounded-lg border border-white/10 uppercase tracking-wider hover:bg-sky-500/10 hover:text-sky-300 hover:border-sky-500/50 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="scroll-mt-32">
          <FadeInSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Experience & Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-purple-500 mx-auto rounded-full"></div>
          </FadeInSection>
          
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-12">
            <div>
              <FadeInSection className="flex items-center gap-3 mb-10 text-2xl font-black text-white tracking-wide">
                <Briefcase className="text-sky-400" size={28}/> Work Experience
              </FadeInSection>
              <div className="relative border-l-4 border-slate-800 ml-4 pl-10 space-y-16">
                {PORTFOLIO_DATA.experience.map((e, i) => (
                  <FadeInSection key={i} delay={i * 150} className="relative group">
                    <div className="absolute w-6 h-6 bg-slate-900 border-4 border-sky-500 rounded-full -left-[53px] top-1 z-10 group-hover:scale-125 group-hover:bg-sky-500 transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.5)]"></div>
                    <div className="glass-card p-8 rounded-3xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-sky-500/10 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:rounded-3xl overflow-hidden">
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-2">{e.role}</h3>
                        <div className="flex flex-wrap items-center gap-3 mb-6">
                          <span className="text-sky-400 font-bold text-lg">{e.company}</span>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-300 font-mono text-sm px-3 py-1 bg-slate-900/80 rounded-lg border border-white/10 shadow-inner">{e.duration}</span>
                        </div>
                        <p className="text-base text-slate-400 leading-relaxed font-medium">{e.description}</p>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>

            <div>
              <FadeInSection className="flex items-center gap-3 mb-10 text-2xl font-black text-white tracking-wide">
                <GraduationCap className="text-purple-400" size={28}/> Academic Background
              </FadeInSection>
              <div className="relative border-l-4 border-slate-800 ml-4 pl-10 space-y-10">
                {PORTFOLIO_DATA.education.map((e, i) => (
                  <FadeInSection key={i} delay={i * 100} className="relative group">
                    <div className={`absolute w-5 h-5 ${i===0 ? 'bg-purple-500 border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-slate-700 border-slate-600'} border-4 rounded-full -left-[51px] top-3 z-10 group-hover:scale-125 group-hover:bg-purple-400 group-hover:border-purple-300 transition-all duration-300`}></div>
                    <div className="glass-panel p-6 rounded-3xl hover:border-purple-500/40 transition-all hover:bg-white/5 hover:shadow-2xl hover:-translate-y-1">
                      <div className="flex flex-col xl:flex-row xl:justify-between xl:items-start gap-3 mb-3">
                        <h4 className="font-bold text-white text-lg leading-tight pr-4">{e.degree}</h4>
                        <span className="text-xs font-black font-mono text-slate-300 bg-slate-900 px-3 py-1.5 rounded-lg border border-white/10 whitespace-nowrap shadow-inner">{e.year}</span>
                      </div>
                      <p className="text-sm text-slate-400 mb-4 font-medium">{e.inst}</p>
                      <div className="inline-block px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/20 to-transparent border-l-4 border-purple-500 shadow-sm">
                        <span className="text-sm font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                          {e.score}
                        </span>
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-32">
          <FadeInSection className="flex flex-col sm:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Featured Projects</h2>
              <p className="text-slate-400 text-lg">A curated selection of my technical builds.</p>
            </div>
            <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-base font-bold text-sky-400 hover:text-sky-300 transition-colors group px-6 py-3 rounded-xl bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/20">
              View All Repos <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </FadeInSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((p, i) => (
              <FadeInSection key={i} delay={i * 100} className={p.isCaseStudy ? 'md:col-span-2 lg:col-span-2' : ''}>
                <div className={`${p.isCaseStudy ? 'case-study-wrapper shadow-[0_0_40px_rgba(56,189,248,0.1)] hover:shadow-[0_0_60px_rgba(56,189,248,0.25)] transition-shadow duration-500' : 'h-full'}`}>
                  <div className={`glass-card p-8 rounded-[2rem] flex flex-col group relative overflow-hidden h-full ${p.isCaseStudy ? 'case-study-content border-none' : ''}`}>
                    
                    {/* Decorative Background Icon */}
                    <div className="absolute -right-8 -bottom-8 opacity-[0.02] transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                      {React.cloneElement(p.icon, { size: 220 })}
                    </div>

                    {p.isCaseStudy && (
                      <div className="absolute top-0 right-0 bg-gradient-to-r from-sky-500 to-purple-600 text-white text-[10px] sm:text-[11px] font-black px-6 py-2.5 rounded-bl-[1.9rem] shadow-lg uppercase tracking-[0.2em] z-20 flex items-center justify-center border-b border-l border-white/10">
                        Case Study
                      </div>
                    )}
                  
                  <div className="flex items-start gap-5 mb-6 relative z-10">
                    <div className="p-4 rounded-2xl bg-slate-900 border border-white/10 shadow-inner shadow-black/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      {p.icon}
                    </div>
                    <h3 className={`text-2xl font-black text-white mt-1 group-hover:text-sky-400 transition-colors ${p.isCaseStudy ? 'pr-28' : ''}`}>{p.title}</h3>
                  </div>
                  
                  {p.tech && (
                    <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                      {p.tech.split(',').map((t, j) => (
                        <span key={j} className="text-[11px] font-bold px-3 py-1.5 bg-slate-950/50 text-slate-300 rounded-lg border border-white/10 uppercase tracking-wider backdrop-blur-sm group-hover:border-white/20 transition-colors">
                          {t.trim()}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-base text-slate-400 mb-10 flex-grow leading-relaxed relative z-10 font-medium">{p.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 mt-auto relative z-10">
                    {p.live && p.live !== "#" && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white font-black hover:text-white transition-all text-sm bg-sky-600 px-6 py-3 rounded-xl hover:bg-sky-500 shadow-[0_0_20px_rgba(2,132,199,0.4)] hover:shadow-[0_0_30px_rgba(2,132,199,0.6)] hover:-translate-y-1">
                        Live Demo <ExternalLink size={16} strokeWidth={3} />
                      </a>
                    )}
                    {p.github && p.github !== "#" && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 font-bold hover:text-white transition-all text-sm glass-panel px-6 py-3 rounded-xl hover:bg-white/10 hover:-translate-y-1">
                        Code <Github size={16} strokeWidth={2.5} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section id="achievements" className="scroll-mt-32">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Achievements & Recognition</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
          </FadeInSection>
          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.achievements.map((a, i) => (
              <FadeInSection key={i} delay={i * 200}>
                <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] flex flex-col sm:flex-row gap-8 items-start group relative overflow-hidden hover:border-yellow-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 p-5 bg-slate-900 rounded-3xl border border-white/10 shadow-inner shadow-black/50 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500">
                    {a.icon}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-yellow-400 transition-colors">{a.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-medium text-lg">{a.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER & CONTACT */}
      <footer id="contact" className="border-t border-white/10 bg-slate-950/90 backdrop-blur-3xl pt-24 pb-12 text-center text-slate-500 relative z-10 mt-32 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <FadeInSection className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight">Let's Build <br/><span className="gradient-text">The Future.</span></h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">I'm currently open for new roles and exciting projects. Let's engineer something amazing together.</p>
          </FadeInSection>
          
          <FadeInSection delay={200} className="flex flex-wrap justify-center gap-6">
            <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="flex items-center gap-3 hover:text-white hover:bg-sky-500 transition-all bg-slate-900/80 px-8 py-5 rounded-2xl border border-white/10 hover:border-sky-500 font-bold group shadow-2xl hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] hover:-translate-y-2">
              <Mail size={22} className="text-sky-400 group-hover:text-white" /> <span className="hidden sm:inline text-lg">{PORTFOLIO_DATA.contact.email}</span>
            </a>
            <a href={`tel:${PORTFOLIO_DATA.contact.phone}`} className="flex items-center gap-3 hover:text-white hover:bg-emerald-500 transition-all bg-slate-900/80 px-8 py-5 rounded-2xl border border-white/10 hover:border-emerald-500 font-bold group shadow-2xl hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:-translate-y-2">
              <Phone size={22} className="text-emerald-400 group-hover:text-white" /> <span className="hidden sm:inline text-lg">{PORTFOLIO_DATA.contact.phone}</span>
            </a>
            <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white hover:bg-[#0A66C2] transition-all bg-slate-900/80 px-8 py-5 rounded-2xl border border-white/10 hover:border-[#0A66C2] font-bold group shadow-2xl hover:shadow-[0_0_30px_rgba(10,102,194,0.4)] hover:-translate-y-2">
              <Linkedin size={22} className="text-[#0A66C2] group-hover:text-white" /> <span className="text-lg">LinkedIn</span>
            </a>
          </FadeInSection>
          
          <FadeInSection delay={300} className="pt-12 border-t border-white/10 flex flex-col items-center justify-center gap-6">
            <div className="text-center">
              <p className="text-base font-bold text-slate-300">© {new Date().getFullYear()} Dhanush Hebbar.</p>
              <p className="text-sm mt-1">Engineered with React, Tailwind CSS & Passion.</p>
            </div>
          </FadeInSection>
        </div>
      </footer>
    </div>
  );
}
