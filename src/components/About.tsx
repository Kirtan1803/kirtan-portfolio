"use client";

import React from "react";
import { User } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-border/40 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-primary/10">
          <User className="text-primary" size={20} />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          About Me
        </h2>
      </div>

      <div className="max-w-3xl space-y-6 text-base md:text-lg text-muted leading-relaxed">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          I am a Computer Engineering graduate from Gujarat Technological University (GTU) with practical experience building modern web applications using React, Django, Firebase, MySQL, and REST APIs.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          During my internship at Stark Technologies, I worked on frontend development, responsive user interfaces, API integration, and database-driven web applications. This experience strengthened my understanding of real-world software development workflows and collaborative engineering practices.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          I enjoy creating clean, maintainable, and user-focused applications that solve practical problems. My interests include full-stack development, scalable web architecture, performance optimization, and modern frontend technologies.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          Currently, I am seeking opportunities as a Full Stack Developer, Software Developer, or Frontend Developer where I can continue learning, contribute to impactful projects, and grow as an engineer.
        </motion.p>
      </div>
    </section>
  );
}
