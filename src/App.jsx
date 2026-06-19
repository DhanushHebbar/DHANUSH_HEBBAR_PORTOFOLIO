import React from 'react';
import { Mail, Github, Linkedin, ExternalLink, Code, Briefcase, Award, GraduationCap, ChevronRight, Brain, Database, Cloud, Terminal, Code2, Users } from 'lucide-react';

const SKILLS_DATA = [
  {
    category: "AI & Intelligence Integration",
    icon: <Brain className="w-5 h-5 text-purple-400" />,
    items: ["Gemini 1.5 Integration", "Agentic AI Workflows", "Vertex AI", "NLP & Sentiment Analysis", "RAG Pipelines"]
  },
  {
    category: "Frontend Development",
    icon: <Code2 className="w-5 h-5 text-blue-400" />,
    items: ["React.js", "Tailwind CSS", "HTML5", "Vite", "Glassmorphism UI"]
  },
  {
    category: "Backend & APIs",
    icon: <Terminal className="w-5 h-5 text-green-400" />,
    items: ["Node.js", "Express.js", "FastAPI", "Python", "RESTful APIs", "Socket.IO"]
  },
  {
    category: "Database & Cloud",
    icon: <Database className="w-5 h-5 text-orange-400" />,
    items: ["MongoDB", "PostgreSQL", "Firebase", "Motor Async Driver"]
  },
  {
    category: "Deployment & Tools",
    icon: <Cloud className="w-5 h-5 text-sky-400" />,
    items: ["Vercel", "Render", "GitHub", "CI/CD", "MS Office", "SEO"]
  },
  {
    category: "Core & Soft Skills",
    icon: <Users className="w-5 h-5 text-pink-400" />,
    items: ["Analytical Thinking", "Team Collaboration", "Technical Documentation", "DBMS"]
  }
];

const PROJECTS_DATA = [
  {
    title: "xTransMatrix | Moultrie Solution",
    year: "2024",
    tech: ["React", "FastAPI", "MongoDB", "Vercel", "Render"],
    description: "A cloud-native data engineering pipeline transforming unstructured IoT feedback into actionable intelligence. Features real-time dashboard analytics, Pydantic data validation, and an NLP simulation matrix to identify early product churn signals.",
    live: "https://xtransmatrix-case-study.vercel.app",
    github: "",
    isCaseStudy: true
  },
  {
    title: "The Autonomous Cognitive Interviewer",
    year: "2025",
    tech: ["React (Vite)", "Tailwind CSS", "Gemini API", "Web Speech API"],
    description: "An AI-powered mock interview platform bridging the gap between academia and industry. Features real-time voice-to-text interaction, a dynamic 2-tier learning path, and live AI rendering for constructive feedback and missed technical keywords.",
    live: "https://interview-sim-client-frontend.vercel.app",
    github: ""
  },
  {
    title: "The Weather (Stratos)",
    year: "2024",
    tech: ["React", "OpenWeatherMap API", "Tailwind"],
    description: "An expedition-themed meteorological dashboard. Beyond standard forecasting, it features a context-aware recommendation engine that suggests practical travel gear and situational provisions based on real-time climate metrics.",
    live: "https://weather-proj-phi.vercel.app",
    github: ""
  },
  {
    title: "TaskFlow",
    year: "2026",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    description: "Enterprise-grade real-time collaborative workspace featuring Agile sprint tracking, Kanban workflows, AI-powered task assistance, analytics dashboards, and role-based access control.",
    live: "https://taskflow-omega-drab.vercel.app",
    github: ""
  },
  {
    title: "StudyForge: AI Learning Platform",
    year: "2025",
    tech: ["FastAPI", "React", "PostgreSQL", "Firebase"],
    description: "AI-powered educational platform providing document-grounded responses, a dynamic quiz engine, and a real-time collaborative whiteboard to enhance remote learning experiences.",
    live: "https://studyforge4.vercel.app",
    github: ""
  },
  {
    title: "Expense Tracking System",
    year: "2025",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    description: "Financial dashboard offering visual analytics for tracking income and expenses. Features detailed category-wise breakdowns and comprehensive CRUD transaction management.",
    live: "https://personal-expense-track-seven.vercel.app",
    github: ""
  },
  {
    title: "Simple Anime Website",
    year: "2024",
    tech: ["React", "CSS", "API Integration"],
    description: "A clean and responsive web application for discovering and tracking anime series.",
    live: "https://anime-world-web.vercel.app",
    github: ""
  },
  {
    title: "Study Planner",
    year: "2024",
    tech: ["React", "Tailwind"],
    description: "A productivity tool aimed at helping students organize their academic schedules and track study goals effectively.",
    live: "https://study-planner-ochre.vercel.app",
    github: ""
  },
  {
    title: "Interactive Path Maker",
    year: "2024",
    tech: ["React", "Dynamic Routing"],
    description: "A creative digital tool allowing users to build and visualize interactive decision trees and custom learning paths.",
    live: "https://interactive-path-maker.vercel.app",
    github: ""
  },
  {
    title: "Student Management System",
    year: "2024",
    tech: ["Java Backend", "Web Interface"],
    description: "A comprehensive backend system for managing student records, academic tracking, and institutional administration.",
    live: "https://student-mca-app.onrender.com",
    github: ""
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-slate-300 font-sans selection:bg-indigo-500/30">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        .status-dot-container {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .status-dot {
          width: 8px;
          height: 8px;
          background-color: #4ade80;
          border-radius: 50%;
          position: relative;
          z-index: 2;
        }
        .status-ring {
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #4ade80;
          border-radius: 50%;
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          z-index: 1;
        }
      `}} />

      {/* Navigation / Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">
              DHANUSH HEBBAR
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <div className="status-dot-container mr-1">
                <div className="status-ring"></div>
                <div className="status-dot"></div>
              </div>
              Available for opportunities
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-20 space-y-24">
        
        {/* HERO SECTION */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
            Web Developer & <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
              AI Enthusiast.
            </span>
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed whitespace-pre-line">
            I am a Master of Computer Applications (MCA) graduate combining a strong academic foundation with practical problem-solving. 
            {"\n\n"}
            From learning my first computer keys in 1st standard to architecting full-stack web applications in my 6th sem BCA, I have spent 16 years growing on the exact same campus. Today, I actively fuse modern MERN architectures with cutting-edge AI integrations to build scalable, intelligent platforms.
          </p>
          <div className="flex justify-center gap-4 pt-6">
            <a href="mailto:dhanushhebbar6@gmail.com" className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              <Mail size={18} /> Contact Me
            </a>
            <div className="flex gap-3">
              <a href="https://github.com/DhanushHebbar" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-white/5">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/dhanush-hebbar" target="_blank" rel="noreferrer" className="flex items-center justify-center p-3 bg-slate-800/50 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors border border-white/5">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </section>

        <hr className="border-white/5" />

        {/* SKILLS SECTION */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Terminal className="text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">Technical Arsenal</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS_DATA.map((skillGroup, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-800/20 border border-white/5 hover:bg-slate-800/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-slate-900/50">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-900/50 text-slate-300 text-sm rounded-full border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Briefcase className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Experience</h2>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-slate-800/30 backdrop-blur-sm">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">SkillXAcademy</div>
                    <time className="text-xs font-medium text-indigo-400">Mar '25 - Jun '25</time>
                  </div>
                  <div className="text-sm text-slate-400 mb-2">Full Stack Web Development Intern</div>
                  <ul className="text-sm space-y-1 list-disc list-inside text-slate-300">
                    <li>14-week internship covering MERN stack, REST APIs, and real-time apps.</li>
                    <li>Built The Autonomous Cognitive Interviewer using Gemini API.</li>
                    <li>Developed TaskFlow real-time collaborative tool via Socket.IO.</li>
                  </ul>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-700 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Briefcase size={16} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/5 bg-slate-800/10">
                  <div className="flex items-center justify-between space-x-2 mb-1">
                    <div className="font-bold text-white">Zephyr Technologies</div>
                    <time className="text-xs font-medium text-slate-400">Mar '24 - Apr '24</time>
                  </div>
                  <div className="text-sm text-slate-400 mb-2">Full Stack Developer Intern</div>
                  <ul className="text-sm space-y-1 list-disc list-inside text-slate-300">
                    <li>Contributed to full-stack interface and backend development.</li>
                    <li>Improved application performance and enhanced user experience.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="text-indigo-400" />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {[
                { deg: "Master of Computer Applications (MCA)", inst: "Shree Devi Institute of Technology", year: "2026", marks: "86.74% / 8.67 CGPA" },
                { deg: "Bachelor of Computer Applications (BCA)", inst: "Padua College of Commerce and Management", year: "2024", marks: "80.39% / 8.48 CGPA" },
                { deg: "Pre-University Course (PUC)", inst: "Padua PU College", year: "2021", marks: "68%" },
                { deg: "S.S.L.C", inst: "Padua High School", year: "2019", marks: "64%" }
              ].map((edu, idx) => (
                 <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-4 border-slate-900 ${idx === 0 ? 'bg-indigo-500' : 'bg-slate-700'} text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10`}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] p-4 rounded-xl border border-white/5 bg-slate-800/10 hover:bg-slate-800/30 transition-colors">
                    <div className="font-bold text-white mb-1 leading-tight">{edu.deg}</div>
                    <div className="text-sm text-slate-400 mb-2">{edu.inst}</div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs bg-slate-900/50 px-2 py-1 rounded text-slate-300">{edu.year}</span>
                      <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">{edu.marks}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Code className="text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS_DATA.map((project, idx) => (
              <div key={idx} className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-800/20 border border-white/5 hover:border-indigo-500/30 hover:bg-slate-800/40 transition-all hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/10">
                {project.isCaseStudy && (
                  <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-white/20 transform rotate-3">
                    CASE STUDY
                  </div>
                )}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs font-mono bg-slate-900/50 text-indigo-400 px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[11px] font-medium px-2 py-1 bg-slate-900/60 text-slate-300 rounded border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    {project.live && project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-white bg-indigo-500/20 hover:bg-indigo-500/40 px-4 py-2 rounded-full transition-colors">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    {project.github && project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-full transition-colors border border-white/5">
                        <Github size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS SECTION */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Award className="text-indigo-400" />
            <h2 className="text-2xl font-bold text-white">Achievements & Recognition</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-gradient-to-br from-amber-500/10 to-orange-500/5 border border-amber-500/20">
              <div className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                🏆 1st Prize, Shark Tank (SDM College)
              </div>
              <p className="text-sm text-slate-300">
                Won first place in a team of two for presenting an innovative business and technical idea.
              </p>
            </div>
            
            <div className="p-5 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20">
              <div className="font-bold text-blue-400 mb-2 flex items-center gap-2">
                ☁️ Google GDG Cloud Community Day 2025
              </div>
              <p className="text-sm text-slate-300">
                Gained hands-on experience in Agentic AI, Gemini 1.5 integration, and Vertex AI for scalable cloud solutions.
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 bg-slate-950/50 mt-12 py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Dhanush Hebbar. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}
