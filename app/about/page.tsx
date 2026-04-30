"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Code } from "lucide-react";

const experiences = [
  {
    title: "Agentic AI & Full Stack Projects",
    company: "Personal Projects",
    period: "2024 - Present",
    description: "Built intelligent applications using agentic AI, autonomous agents, and RAG chatbots with full-stack implementation.",
  },
  {
    title: "Full Stack Development",
    company: "Academic & Personal Work",
    period: "2023 - 2024",
    description: "Developed web applications using Next.js, TypeScript, Python, FastAPI, and Neon database with focus on user experience.",
  },
  {
    title: "Learning & Building",
    company: "Self-Directed",
    period: "2022 - 2023",
    description: "Mastered modern web technologies, AI integration, and database management through hands-on projects.",
  },
];

const education = [
  {
    degree: "Master's Degree in Biochemistry",
    school: "Karachi University",
    period: "2020 - 2024",
  },
  {
    degree: "Artificial Intelligence Course",
    school: "Governor House",
    period: "2024 - Ongoing",
  },
];

const achievements = [
  "Built autonomous AI agents",
  "Developed RAG chatbot with context-aware responses",
  "Created full-stack applications using Next.js and FastAPI",
  "Integrated Neon database for scalable data management",
  "Mastered modern frontend and backend technologies",
  "Implemented agentic AI",
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Fresh graduate passionate about AI-powered full-stack development
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="card-gradient rounded-2xl p-8 mb-12 border border-slate-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-primary-400" size={28} />
            <h2 className="text-3xl font-bold">My Story</h2>
          </div>
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              I'm a passionate full-stack developer and fresh graduate with a strong foundation in modern web technologies
              and artificial intelligence. My journey in tech is driven by curiosity and a desire to build intelligent,
              impactful applications that solve real-world problems.
            </p>
            <p>
              On the frontend, I craft responsive and intuitive user interfaces using TypeScript, Next.js, HTML, CSS, and
              Tailwind CSS. On the backend, I build robust APIs and services with Python and FastAPI, leveraging Neon database
              for efficient data management. I'm particularly excited about agentic AI and have hands-on experience creating
              autonomous agents and RAG chatbots that bring intelligence to applications.
            </p>
            <p>
              My projects showcase my ability to integrate cutting-edge AI technologies with full-stack development,
              creating seamless experiences from database to user interface. I'm always eager to learn, experiment with
              new technologies, and contribute to innovative solutions.
            </p>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-primary-400" size={28} />
            <h2 className="text-3xl font-bold">Projects & Experience</h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-primary-400 mb-3">{exp.title}</h3>
                <p className="text-gray-300 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-400">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary-400" size={28} />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-primary-400 mb-2">{edu.degree}</h3>
                <p className="text-gray-300 mb-1">{edu.school}</p>
                <p className="text-gray-400 text-sm">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-primary-400" size={28} />
            <h2 className="text-3xl font-bold">Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="card-gradient rounded-xl p-4 border border-slate-700 flex items-center gap-3 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                <p className="text-gray-300">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
