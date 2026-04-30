"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, User, Trash2 } from "lucide-react";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/contact");
      const data = await response.json();
      setMessages(data.messages || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact <span className="text-gradient">Messages</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400">
            {messages.length} {messages.length === 1 ? "message" : "messages"} received
          </p>
        </motion.div>

        {messages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="card-gradient rounded-2xl p-12 border border-slate-700 text-center"
          >
            <Mail className="mx-auto mb-4 text-gray-500" size={48} />
            <h2 className="text-2xl font-bold mb-2">No messages yet</h2>
            <p className="text-gray-400">
              Messages from your contact form will appear here
            </p>
          </motion.div>
        ) : (
          <div className="space-y-6">
            {messages
              .sort((a, b) => b.id - a.id)
              .map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="card-gradient rounded-2xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary-500/10 rounded-full flex items-center justify-center">
                        <User className="text-primary-400" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-200">
                          {message.name}
                        </h3>
                        <a
                          href={`mailto:${message.email}`}
                          className="text-primary-400 hover:underline"
                        >
                          {message.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      {formatDate(message.timestamp)}
                    </div>
                  </div>

                  <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                    <p className="text-gray-300 whitespace-pre-wrap">
                      {message.message}
                    </p>
                  </div>
                </motion.div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
