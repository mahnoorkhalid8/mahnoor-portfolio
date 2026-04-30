"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Personal AI Employee",
    description: "Revolutionary Digital FTE (Full-Time Employee) built with Claude Code that works 24/7 as a proactive business partner. Features the 'Monday Morning CEO Briefing' that autonomously audits bank transactions and tasks to report revenue and bottlenecks. Built with Claude Code, Obsidian for local knowledge base, Python watchers for Gmail/WhatsApp monitoring, and MCP servers for external actions. Delivers 85-90% cost savings compared to human employees.",
    image: "/images/personal-ai.PNG",
    tags: ["Claude Code", "Python", "AI Agent", "Automation"],
    github: "https://github.com/mahnoorkhalid8/hackathon-0",
    demo: "https://www.youtube.com/watch?v=agCZcYYa0ag&list=PLwO2EHH6yMe6a-zjSO3megqor8jrkQzsr",
  },
  {
    title: "Watch Website",
    description: "E-commerce website featuring men's, women's, and kids' watch collections. Users must login to access the website with full authentication. Includes add to cart and wishlist functionality for seamless shopping experience. Built with Next.js and TypeScript.",
    image: "/images/watch-website.PNG",
    tags: ["Next.js", "TypeScript", "E-commerce", "Authentication"],
    github: "https://github.com/mahnoorkhalid8/watch-website",
    demo: "https://www.youtube.com/watch?v=ncV3HTmjdQk&t=14s",
  },
  {
    title: "Todo Website",
    description: "Advanced todo web application with JWT authentication for secure login and signup. Features an AI assistant powered by Groq and Claude that intelligently adds tasks to your list. Integrated with Neon database to save user information and maintain all tasks. Full-stack implementation with Next.js frontend and FastAPI backend.",
    image: "/images/todo-website.PNG",
    tags: ["Next.js", "TypeScript", "Python", "FastAPI", "Groq", "Claude", "JWT", "Neon DB"],
    github: "https://github.com/mahnoorkhalid8/todo-website",
    demo: "https://www.youtube.com/watch?v=NeUaWJrwm0k&list=PLwO2EHH6yMe6gJfTjA36WdhD6Hf3oUrOH",
  },
  {
    title: "Physical AI Humanoid Robotics Textbook",
    description: "Interactive AI-powered textbook built with Docusaurus featuring JWT authentication for secure login and signup. Includes an intelligent RAG chatbot that answers questions related to the book content using advanced AI. Comprehensive full-stack implementation combining documentation platform with AI assistance.",
    image: "/images/humanoid-robotics-textbook.PNG",
    tags: ["Docusaurus", "Next.js", "TypeScript", "Python", "FastAPI", "Groq", "Claude", "JWT", "RAG"],
    github: "https://github.com/mahnoorkhalid8/PHYSICAL-AI-HUMANOID-ROBOTICS-TEXTBOOK",
    demo: "https://www.linkedin.com/posts/mahnoor-khalid-547329244_i-finally-got-my-ai-powered-textbook-ive-activity-7407512872282435584-p8sQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyPhccBEM4isPI0p1V1AWva-gwI2dsgeJI",
  },
  {
    title: "Advanced Calculator",
    description: "Sophisticated calculator application built with SpecKit Plus framework. Features advanced mathematical operations and intelligent computation powered by Claude AI. Developed using Streamlit for interactive UI and Python for robust backend processing.",
    image: "/images/calculator.PNG",
    tags: ["SpecKit Plus", "Streamlit", "Python", "Claude"],
    github: "https://github.com/mahnoorkhalid8/speckit-calculator",
    demo: "https://www.linkedin.com/posts/mahnoor-khalid-547329244_advanced-calculator-built-with-speckit-plus-activity-7401631426883891200-Yvw9?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyPhccBEM4isPI0p1V1AWva-gwI2dsgeJI",
  },
  {
    title: "Educational Quiz Agent",
    description: "AI-powered educational tool that converts PDFs to perfect quizzes in seconds. Built with Gemini CLI and Streamlit, featuring two-stage processing: PDF Summarizer creates concise markdown summaries, and Quiz Generator produces MCQs and short-answer questions. Handles long-context documents up to 1,000 pages using Google Gemini's advanced capabilities with strictly enforced JSON output structure.",
    image: "/images/quiz-agent.PNG",
    tags: ["Streamlit", "Python", "Gemini CLI", "Google Gemini", "AI Agent", "PDF Processing"],
    github: "https://github.com/mahnoorkhalid8/speckit-calculator",
    demo: "https://www.linkedin.com/posts/mahnoor-khalid-547329244_ai-geminicli-streamlit-activity-7399929848732938240-qf6H?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyPhccBEM4isPI0p1V1AWva-gwI2dsgeJI",
  },
  {
    title: "AI Chatbot",
    description: "Intelligent conversational AI chatbot powered by Google's Gemini AI with memory capabilities. Features instant, smart replies and maintains full conversation context. Built with Chainlit for a sleek chat interface, creating a personal AI assistant experience right in your browser. Fast, friendly, and deployed for real-time interactions.",
    image: "/images/agent.PNG",
    tags: ["Chainlit", "Python", "Google Gemini", "AI Chatbot", "Conversational AI"],
    github: "https://github.com/mahnoorkhalid8/agent",
    demo: "https://www.linkedin.com/posts/mahnoor-khalid-547329244_ai-chatbot-googlegemini-activity-7359897597035053057-L4vl?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyPhccBEM4isPI0p1V1AWva-gwI2dsgeJI",
  },
  {
    title: "Library Manager",
    description: "Streamlit-based Library Manager App for tracking personal book collections. Features include adding new books with title, author, genre, and year, searching books by title or author, updating book information, deleting entries, and tracking reading progress visually. Data is stored securely using SQLite with exception handling for stability and user-friendly experience.",
    image: "/images/lib-manager.PNG",
    tags: ["Streamlit", "Python", "SQLite", "Database", "CRUD"],
    github: "https://github.com/mahnoorkhalid8/lib_manager_database",
    demo: "https://www.linkedin.com/posts/mahnoor-khalid-547329244_just-built-a-streamlit-based-library-manager-activity-7326891316993306624-fLil?utm_source=share&utm_medium=member_desktop&rcm=ACoAADyPhccBEM4isPI0p1V1AWva-gwI2dsgeJI",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            A collection of projects showcasing my skills and passion for development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-gradient rounded-2xl overflow-hidden border border-slate-700 hover:border-primary-500/50 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/600x400/${index % 2 === 0 ? '0ea5e9' : 'd946ef'}/ffffff?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <Github size={20} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 card-gradient rounded-2xl p-8 border border-slate-700 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">These are just the highlights!</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Want to see more? Check out all my repositories and deployed projects on GitHub and Vercel.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/mahnoorkhalid8?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-xl font-semibold hover:shadow-lg hover:shadow-slate-500/50 transition-all duration-300 border border-slate-600"
            >
              <Github size={20} />
              View all 90+ repos on GitHub
            </a>
            <a
              href="https://vercel.com/mahnoor-khalids-projects"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              <ExternalLink size={20} />
              View projects on Vercel
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
