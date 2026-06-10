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
          I am a Full Stack Developer with a background in Computer Engineering and hands-on experience building web applications using React, Django, Firebase, MySQL, and REST APIs.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          My interest lies in designing responsive user interfaces, developing backend systems, building authentication workflows, and creating reliable database-driven applications.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Through academic projects and industry experience, I have worked on full-stack solutions ranging from news platforms to pet adoption systems, focusing on clean code, maintainable architecture, and practical user experiences.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          I enjoy learning modern web technologies and continuously improving my understanding of software development, system design, and application scalability.
        </motion.p>
      </div>
    </section>
  );
}
