import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Layout, 
  Trophy, 
  GraduationCap, 
  Briefcase,
  ChevronDown,
  Sparkles,
  Terminal,
  Cpu,
  Globe,
  Rocket,
  Search,
  Brain,
  Database,
  Cloud
} from 'lucide-react';

const CustomStyles = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
      
      html { scroll-behavior: smooth; font-family: 'Inter', sans-serif; background-color: #020617; }
      
      .gradient-text {
        background: linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% auto;
        animation: shine 5s linear infinite;
      }
      
      .glass-panel {
        background: rgba(30, 41, 59, 0.4);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.08);
      }
      
      .glass-card {
        background: linear-gradient(145deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .glass-card:hover {
        transform: translateY(-8px);
        border-color: rgba(56, 189, 248, 0.3);
        box-shadow: 0 20px 40px -10px rgba(56, 189, 248, 0.15);
      }

      .bg-grid-pattern {
        background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
        background-size: 32px 32px;
      }

      .animate-float {
        animation: float 6s ease-in-out infinite;
      }

      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }

      @keyframes shine { to { background-position: 200% center; } }
      .animate-fade-in { animation: fade-in 1s ease-out forwards; }
      @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
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
    location: "Mangaluru, India",
    linkedin: "https://linkedin.com/in/dhanush-hebbar",
    github: "https://github.com/DhanushHebbar"
  },
  skills: [
    { category: "AI Integrations", icon: <Brain className="text-purple-400" size={20}/>, items: ["Gemini 1.5", "Vertex AI", "Agentic AI", "NLP Pipelines", "Web Speech API"] },
    { category: "Frontend", icon: <Layout className="text-sky-400" size={20}/>, items: ["React.js", "Tailwind CSS", "HTML5"] },
    { category: "Backend", icon: <Terminal className="text-indigo-400" size={20}/>, items: ["Python", "FastAPI", "Node.js", "Express.js"] },
    { category: "Databases", icon: <Database className="text-emerald-400" size={20}/>, items: ["PostgreSQL", "MongoDB", "Firebase", "DBMS Core"] },
    { category: "Cloud & Deployment", icon: <Cloud className="text-blue-400" size={20}/>, items: ["Vercel", "Render", "CI/CD", "GitHub", "SEO"] },
    { category: "Core & Soft Skills", icon: <Sparkles className="text-yellow-400" size={20}/>, items: ["System Architecture", "Analytical Thinking", "Team Collaboration"] }
  ],
  experience: [
    { role: "Full Stack Web Development Intern", company: "SkillXAcademy, Bangalore (Online)", duration: "Mar 2025 - Jun 2025", description: "14-week internship covering MERN stack development, REST APIs, and real-time web applications. Built The Autonomous Cognitive Interviewer (AI mock platform) and TaskFlow (real-time collaboration tool)." },
    { role: "Full Stack Developer Intern", company: "Zephyr Technologies & Solutions Pvt Ltd, Mangaluru", duration: "Mar 2024 - Apr 2024", description: "Contributed to full-stack projects involving both frontend interface design and backend development. Improved application performance and enhanced overall user experience through code optimization." }
  ],
  projects: [
    { 
      title: "xTransMatrix | Moultrie", 
      tech: "React, FastAPI, MongoDB, Vercel, Render", 
      description: "Cloud-native IoT data engineering pipeline. Transforms massive volumes of unstructured customer feedback into actionable intelligence, automating sentiment annotation and identifying early churn signals.", 
      live: "https://xtransmatrix-case-study.vercel.app",
      isCaseStudy: true 
    },
    { title: "TaskFlow", tech: "React.js, Node.js, Express.js, MongoDB, Socket.IO", description: "Enterprise-grade project management platform featuring real-time collaboration, Agile sprint tracking, and AI assistance.", live: "https://taskflow-omega-drab.vercel.app" },
    { title: "The Cognitive Interviewer", tech: "React, Tailwind CSS, Web Speech API", description: "Professional-grade, voice-first mock interview platform with real-time AI evaluation, performance analytics, and dynamic curriculum unlocking.", live: "https://interview-sim-client-frontend.vercel.app" },
    { title: "The Weather", tech: "React, OpenWeatherMap API", description: "Expedition-themed meteorological dashboard framing climate data through the lens of exploration, pairing real-time metrics with situational survival gear recommendations.", live: "https://weather-proj-phi.vercel.app" },
    { title: "StudyForge", tech: "FastAPI, React, PostgreSQL, Firebase", description: "AI-powered learning platform with document-grounded responses, quiz engine, and collaborative whiteboard.", live: "https://studyforge4.vercel.app" },
    { title: "Expense Tracking System", tech: "React, Node.js, Express, MongoDB", description: "Financial dashboard with visual analytics to track income/expenses and comprehensive transaction management.", live: "https://personal-expense-track-seven.vercel.app" },
    { title: "Student Management System", tech: "Java, Web Technologies", description: "A robust, web-based backend-heavy system for administrative workflows and student data management.", live: "https://student-mca-app.onrender.com" },
    { title: "Study Planner", tech: "Web Technologies", description: "Productivity application designed to organize academic schedules, track tasks, and plan study sessions.", live: "https://study-planner-ochre.vercel.app" },
    { title: "Interactive Path Maker", tech: "Web Technologies", description: "Engaging visual tool for creating, mapping, and visualizing custom pathways and workflows.", live: "https://interactive-path-maker.vercel.app" },
    { title: "Anime World", tech: "Frontend Technologies", description: "Responsive web platform designed for anime enthusiasts to browse and discover content.", live: "https://anime-world-web.vercel.app" }
  ],
  education: [
    { degree: "Master of Computer Applications (MCA)", inst: "Shree Devi Institute of Technology", year: "2026", score: "86.74% / 8.67 CGPA" },
    { degree: "Bachelor of Computer Applications (BCA)", inst: "Padua College of Commerce and Management", year: "2024", score: "80.39% / 8.48 CGPA" },
    { degree: "Pre-University Course (PUC)", inst: "Padua PU College", year: "2021", score: "68%" },
    { degree: "S.S.L.C", inst: "Padua High School", year: "2019", score: "64%" }
  ],
  achievements: [
    { title: "1st Prize, Shark Tank Competition", description: "Won first place in a team of two for presenting an innovative business and technical idea at SDM College.", icon: <Trophy className="text-yellow-400" size={24}/> },
    { title: "Google GDG 2025", description: "Participated in GDG Cloud Community Day 2025, gaining hands-on experience in Agentic AI, Gemini 1.5 integration, and Vertex AI for scalable solutions.", icon: <Sparkles className="text-sky-400" size={24}/> }
  ]
};

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 relative overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern z-0 opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      <CustomStyles />
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-white">{PORTFOLIO_DATA.name}</h1>
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {['About', 'Experience', 'Projects', 'Achievements'].map(s => <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-sky-400 transition-colors">{s}</a>)}
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto space-y-32 relative z-10">
        {}
        <section id="home" className="text-center animate-fade-in mt-10 flex flex-col items-center justify-center min-h-[50vh]">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 mb-8 animate-float">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
            </span>
            <span className="text-sm font-medium">Available for new opportunities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Hi, I'm <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-[length:200%_auto] animate-[shine_5s_linear_infinite]">
              {PORTFOLIO_DATA.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-slate-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            {PORTFOLIO_DATA.role}
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#projects" className="px-8 py-4 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold transition-all shadow-[0_0_20px_-5px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_0px_rgba(56,189,248,0.6)] hover:-translate-y-1">
              View My Work
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); document.querySelector('footer').scrollIntoView({ behavior: 'smooth' }); }} className="px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all border border-white/10 hover:border-white/20 hover:-translate-y-1 flex items-center gap-2">
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </section>

        <section id="about" className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-slate-400 text-lg leading-relaxed whitespace-pre-line">{PORTFOLIO_DATA.summary}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {}
            {PORTFOLIO_DATA.skills.map((s, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all">
                <div className="mb-3 p-2 bg-slate-900/50 inline-block rounded-xl">{s.icon}</div>
                <h4 className="font-bold text-white mb-2">{s.category}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{s.items.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="space-y-12">
          <h2 className="text-3xl font-bold text-center">Experience & Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {PORTFOLIO_DATA.experience.map((e, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl">
                  <h3 className="font-bold text-white">{e.role}</h3>
                  <p className="text-sky-400 text-sm mb-2">{e.company} • {e.duration}</p>
              <p className="text-sm text-slate-400">{e.description}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {PORTFOLIO_DATA.education.map((e, i) => (
            <div key={i} className="glass-panel p-5 rounded-2xl flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border border-white/5 hover:border-sky-500/30 transition-all relative overflow-hidden group hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <h4 className="font-semibold text-white text-lg">{e.degree}</h4>
                <p className="text-sm text-slate-400 mt-1">{e.inst}</p>
              </div>
              <div className="relative z-10 flex flex-col sm:items-end gap-2">
                <span className="text-sm font-bold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent px-1 drop-shadow-sm group-hover:scale-105 transition-transform">
                  {e.score}
                </span>
                <span className="text-xs font-mono text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-white/5">{e.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id="projects" className="space-y-12">
      <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {PORTFOLIO_DATA.projects.map((p, i) => (
          <div key={i} className="glass-card p-6 rounded-3xl flex flex-col group border border-white/5 hover:border-sky-500/30 relative overflow-hidden">
            {p.isCaseStudy && (
              <div className="absolute top-0 right-0 bg-gradient-to-r from-sky-500/20 to-indigo-500/20 text-sky-300 text-[10px] font-bold px-3 py-1.5 rounded-bl-xl border-b border-l border-white/5 uppercase tracking-wider backdrop-blur-md z-10">
                Case Study
              </div>
            )}
            <h3 className={`text-xl font-bold text-white mb-2 group-hover:text-sky-400 transition-colors ${p.isCaseStudy ? 'pr-20' : ''}`}>{p.title}</h3>
            {p.tech && <div className="text-xs font-mono text-indigo-400 mb-3">{p.tech}</div>}
            <p className="text-sm text-slate-400 mb-6 flex-grow leading-relaxed">{p.description}</p>
            <div className="flex flex-wrap items-center gap-3 mt-auto pt-4 border-t border-white/5">
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sky-400 font-semibold hover:text-sky-300 transition-colors text-sm bg-sky-500/10 px-4 py-2 rounded-xl hover:bg-sky-500/20">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 font-semibold hover:text-white transition-colors text-sm bg-white/5 px-4 py-2 rounded-xl hover:bg-white/10">
                      Code <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

    <section id="achievements" className="space-y-12">
      <h2 className="text-3xl font-bold text-center">Achievements</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.achievements.map((a, i) => (
          <div key={i} className="glass-panel p-6 rounded-3xl flex flex-col sm:flex-row gap-6 items-start hover:bg-slate-800/50 transition-all border border-white/5 hover:border-yellow-500/30 hover:shadow-[0_10px_30px_-10px_rgba(234,179,8,0.15)] group">
            <div className="p-4 bg-slate-900 rounded-2xl shadow-inner shadow-black/50 group-hover:scale-110 transition-transform duration-300">
              {a.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">{a.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{a.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>

  <footer className="border-t border-white/5 bg-slate-950/80 py-16 text-center text-slate-500 relative z-10 mt-20">
    <div className="max-w-4xl mx-auto px-6 space-y-8">
      <h2 className="text-2xl font-bold text-white">Let's Connect</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="flex items-center gap-2 hover:text-sky-400 hover:bg-sky-400/10 transition-colors bg-white/5 px-5 py-3 rounded-full border border-white/5 hover:border-sky-500/30">
          <Mail size={18} /> <span className="hidden sm:inline">{PORTFOLIO_DATA.contact.email}</span>
        </a>
        <a href={`tel:${PORTFOLIO_DATA.contact.phone}`} className="flex items-center gap-2 hover:text-sky-400 hover:bg-sky-400/10 transition-colors bg-white/5 px-5 py-3 rounded-full border border-white/5 hover:border-sky-500/30">
          <Phone size={18} /> <span className="hidden sm:inline">{PORTFOLIO_DATA.contact.phone}</span>
        </a>
        <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sky-400 hover:bg-sky-400/10 transition-colors bg-white/5 px-5 py-3 rounded-full border border-white/5 hover:border-sky-500/30">
          <Linkedin size={18} /> LinkedIn
        </a>
        <a href={PORTFOLIO_DATA.contact.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-sky-400 hover:bg-sky-400/10 transition-colors bg-white/5 px-5 py-3 rounded-full border border-white/5 hover:border-sky-500/30">
          <Github size={18} /> GitHub
        </a>
      </div>
      <div className="pt-8 border-t border-white/5">
        <p className="text-sm">© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. Built with Passion.</p>
      </div>
    </div>
  </footer>
</div>
  );
}
