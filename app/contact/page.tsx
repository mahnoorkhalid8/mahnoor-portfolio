"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const handleEmailClick = () => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=mahnoorkhalid814@gmail.com&su=Portfolio Contact&body=Hi, I would like to get in touch with you.",
      "_blank"
    );
  };

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
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
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
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="card-gradient rounded-xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">Karachi, Pakistan</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form - Gmail Integration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="card-gradient rounded-2xl p-8 border border-slate-700"
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <p className="text-gray-400 mb-6">
              Click the button below to compose an email directly in Gmail
            </p>

            <button
              onClick={handleEmailClick}
              className="w-full group px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Mail size={20} />
              Open Gmail to Contact Me
              <Send className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>

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

            {/* Decorative Elements */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                className="h-2 bg-primary-500/20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="h-2 bg-accent-500/20 rounded-full"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="h-2 bg-primary-500/20 rounded-full"
              />
            </div>
          </motion.div>
        </div>

        {/* Map or Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 card-gradient rounded-2xl p-8 border border-slate-700 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Available for Opportunities</h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm currently open to freelance projects, full-time positions, and collaboration opportunities.
            Let's create something amazing together!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
