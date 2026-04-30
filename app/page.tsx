"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Briefcase, GraduationCap, Award, Code, ExternalLink, Github, Mail, MapPin, Phone, Send, MessageCircle, Palette, Bot, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"
              >
                Hi, I'm{" "}
                <span className="text-gradient">Mahnoor Khalid</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg sm:text-xl md:text-2xl text-gray-300"
              >
                Full Stack Developer & Creative Problem Solver
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base sm:text-lg text-gray-400 leading-relaxed"
              >
                I specialize in building intelligent, user-friendly applications that leverage agentic AI and autonomous agents.
                With expertise spanning frontend and backend development, I create seamless digital experiences using Python,
                modern databases, and cutting-edge technologies. My focus is on crafting intuitive UI/UX designs paired with
                robust architectures that turn complex ideas into elegant, scalable solutions.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4"
              >
                <Link
                  href="/projects"
                  className="group px-6 sm:px-8 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  View My Work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>

                <a
                  href="/images/Mahnoor_Resume.pdf"
                  download="Mahnoor_Khalid_Resume.pdf"
                  className="px-6 sm:px-8 py-3 border-2 border-primary-500 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Download size={20} />
                  Download CV
                </a>

                <a
                  href="https://wa.me/923332455342?text=Hi%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 border-2 border-primary-500 rounded-full font-semibold hover:bg-primary-500/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </motion.div>
            </motion.div>

            {/* Image/Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Animated background circles */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"
                />

                {/* Profile image placeholder */}
                <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-accent-500 p-1">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img
                      src="/images/profile.jpeg"
                      alt="Mahnoor Khalid"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-9xl text-gray-600">👤</div>';
                      }}
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-full blur-xl"
                />
                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Technologies Marquee Section */}
      <section className="py-12 sm:py-16 bg-slate-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12"
          >
            Technologies I <span className="text-gradient">Work With</span>
          </motion.h2>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{
                x: [0, -2400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
              className="flex gap-8 pr-8"
            >
              {/* First set of technologies */}
              {[
                { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/10A37F" },
                { name: "Gemini", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
                { name: "Qwen", logo: "https://cdn.simpleicons.org/alibabacloud/FF6A00" },
                { name: "Claude AI", logo: "https://cdn.simpleicons.org/anthropic/D97757" },
                { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
                { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
                { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
                { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/FFFFFF" },
                { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
                { name: "MCP", logo: "https://mintlify.s3.us-west-1.amazonaws.com/anthropic/logo/light.svg", isMCP: true },
                { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
                { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
                { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
                { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
                { name: "Streamlit", logo: "https://cdn.simpleicons.org/streamlit/FF4B4B" },
                { name: "Chainlit", logo: "https://cdn.simpleicons.org/chainlink/375BD2" },
                { name: "SpecKit Plus", logo: "https://cdn.simpleicons.org/markdown/06B6D4" },
              ].map((tech, index) => (
                <div
                  key={`tech-1-${index}`}
                  className="flex-shrink-0 flex flex-col items-center gap-3 group"
                >
                  <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/20 p-3">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className={`w-12 h-12 object-contain ${tech.isMCP ? 'filter invert' : ''}`}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { name: "OpenAI", logo: "https://cdn.simpleicons.org/openai/10A37F" },
                { name: "Gemini", logo: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
                { name: "Qwen", logo: "https://cdn.simpleicons.org/alibabacloud/FF6A00" },
                { name: "Claude AI", logo: "https://cdn.simpleicons.org/anthropic/D97757" },
                { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
                { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
                { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
                { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/FFFFFF" },
                { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
                { name: "MCP", logo: "https://mintlify.s3.us-west-1.amazonaws.com/anthropic/logo/light.svg", isMCP: true },
                { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
                { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6" },
                { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
                { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E" },
                { name: "Streamlit", logo: "https://cdn.simpleicons.org/streamlit/FF4B4B" },
                { name: "Chainlit", logo: "https://cdn.simpleicons.org/chainlink/375BD2" },
                { name: "SpecKit Plus", logo: "https://cdn.simpleicons.org/markdown/06B6D4" },
              ].map((tech, index) => (
                <div
                  key={`tech-2-${index}`}
                  className="flex-shrink-0 flex flex-col items-center gap-3 group"
                >
                  <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-xl border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary-500/20 p-3">
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className={`w-12 h-12 object-contain ${tech.isMCP ? 'filter invert' : ''}`}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-300 whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Fresh graduate passionate about AI-powered full-stack development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="card-gradient rounded-2xl p-8 mb-12 border border-slate-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-primary-400" size={28} />
              <h3 className="text-3xl font-bold">My Story</h3>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="text-primary-400" size={28} />
              <h3 className="text-3xl font-bold">Projects & Experience</h3>
            </div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-primary-400 mb-3">Agentic AI & Full Stack Projects</h4>
                <p className="text-gray-300 font-medium mb-2">Personal Projects</p>
                <p className="text-gray-400">Built intelligent applications using agentic AI, autonomous agents, and RAG chatbots with full-stack implementation.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-primary-400 mb-3">Full Stack Development</h4>
                <p className="text-gray-300 font-medium mb-2">Academic & Personal Work</p>
                <p className="text-gray-400">Developed web applications using Next.js, TypeScript, Python, FastAPI, and Neon database with focus on user experience.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-primary-400 mb-3">Learning & Building</h4>
                <p className="text-gray-300 font-medium mb-2">Self-Directed</p>
                <p className="text-gray-400">Mastered modern web technologies, AI integration, and database management through hands-on projects.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="text-primary-400" size={28} />
              <h3 className="text-3xl font-bold">Education</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-primary-400 mb-2">Master's Degree in Biochemistry</h4>
                <p className="text-gray-300 mb-1">Karachi University</p>
                <p className="text-gray-400 text-sm">2020 - 2024</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <h4 className="text-xl font-semibold text-primary-400 mb-2">Artificial Intelligence Course</h4>
                <p className="text-gray-300 mb-1">Governor House</p>
                <p className="text-gray-400 text-sm">2024 - Ongoing</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="text-primary-400" size={28} />
              <h3 className="text-3xl font-bold">Achievements</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {["Built autonomous AI agents", "Developed RAG chatbot with context-aware responses", "Created full-stack applications using Next.js and FastAPI", "Integrated Neon database for scalable data management", "Mastered modern frontend and backend technologies", "Implemented agentic AI"].map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="card-gradient rounded-xl p-4 border border-slate-700 flex items-center gap-3 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-primary-400 rounded-full flex-shrink-0" />
                  <p className="text-gray-300">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 md:py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              My <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Comprehensive solutions to bring your ideas to life
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Custom Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-8 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <Code className="text-primary-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Web Development</h3>
              <p className="text-gray-400 mb-4 flex-grow">
                Full-stack web applications built with modern technologies. Frontend development using Next.js, TypeScript, and Tailwind CSS for beautiful, responsive interfaces. Backend services with Python and FastAPI for fast, scalable, and reliable performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">Next.js</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">TypeScript</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">Python</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">FastAPI</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let's Discuss
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* AI Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-8 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <Bot className="text-primary-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">AI Integration</h3>
              <p className="text-gray-400 mb-4 flex-grow">
                Intelligent AI-powered solutions to enhance your applications. Build autonomous AI agents, conversational chatbots, and RAG (Retrieval-Augmented Generation) systems using OpenAI, Groq, and other cutting-edge AI technologies for smart, context-aware interactions.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">AI Agents</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">Chatbots</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">RAG</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">OpenAI</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">Groq</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let's Discuss
                <ArrowRight size={18} />
              </a>
            </motion.div>

            {/* UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-8 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                <Palette className="text-primary-400" size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-400 mb-4 flex-grow">
                Beautiful, intuitive user interfaces with smooth animations and interactions. Create engaging user experiences with Framer Motion for fluid animations, fully responsive designs that work seamlessly across all devices, and pixel-perfect implementations that delight users.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">Framer Motion</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">Responsive</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">Animations</span>
                <span className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full">Modern UI</span>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Let's Discuss
                <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              A collection of projects I've worked on, showcasing my skills and passion for development
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              {
                title: "Personal AI Employee",
                description: "Revolutionary Digital FTE (Full-Time Employee) built with Claude Code that works 24/7 as a proactive business partner. Features the 'Monday Morning CEO Briefing' that autonomously audits bank transactions and tasks to report revenue and bottlenecks. Built with Claude Code, Obsidian for local knowledge base, Python watchers for Gmail/WhatsApp monitoring, and MCP servers for external actions. Delivers 85-90% cost savings compared to human employees.",
                image: "/images/personal-ai.PNG",
                tags: ["Claude Code", "Obsidian", "Python", "MCP", "AI Agent", "Automation"],
                github: "https://github.com/mahnoorkhalid8/hackathon-0",
                demo: "https://github.com/mahnoorkhalid8/hackathon-0",
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
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-gradient rounded-2xl overflow-hidden border border-slate-700 hover:border-primary-500/50 transition-all duration-300 group"
              >
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

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

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

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300"
            >
              View All Projects
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-16 md:py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Frontend",
                skills: [
                  { name: "Next.js", level: 90 },
                  { name: "TypeScript", level: 88 },
                  { name: "Tailwind CSS", level: 92 },
                  { name: "HTML/CSS", level: 95 },
                ],
              },
              {
                title: "Backend",
                skills: [
                  { name: "Python", level: 85 },
                  { name: "FastAPI", level: 80 },
                  { name: "PostgreSQL", level: 85 },
                  { name: "Neon db", level: 80 },
                ],
              },
              {
                title: "Tools & Others",
                skills: [
                  { name: "Git", level: 92 },
                  { name: "Docker", level: 85 },
                  { name: "AWS", level: 78 },
                  { name: "CI/CD", level: 60 },
                  { name: "Figma", level: 75 },
                ],
              },
            ].map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="card-gradient rounded-2xl p-8 border border-slate-700"
              >
                <h3 className="text-2xl font-bold mb-6 text-primary-400">
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.2 + skillIndex * 0.1,
                        duration: 0.6,
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary-400 font-semibold">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                            duration: 1,
                            ease: "easeOut",
                          }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 card-gradient rounded-2xl p-8 border border-slate-700 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new tools,
              frameworks, and best practices to stay at the forefront of web development.
              Currently diving deep into AI integration and Web3 technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto px-4">
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-400 leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=mahnoorkhalid814@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      mahnoorkhalid814@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+923332455342"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      +92 333 2455342
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/923332455342?text=Hi%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary-400 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary-400" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Karachi, Pakistan</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="card-gradient rounded-2xl p-8 border border-slate-700"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <p className="text-gray-400 mb-6">
                Fill out the form below and I'll get back to you as soon as possible
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-gray-300 focus:outline-none focus:border-primary-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-gray-300 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Message */}
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/50 text-green-400"
                        : "bg-red-500/10 border border-red-500/50 text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}
              </form>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="text-sm text-gray-400 text-center">
                  Or you can reach out to me directly at{" "}
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mahnoorkhalid814@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:underline"
                  >
                    mahnoorkhalid814@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 card-gradient rounded-2xl p-8 border border-slate-700 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Available for Opportunities</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm currently open to freelance projects, full-time positions, and collaboration opportunities.
              Let's create something amazing together!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
