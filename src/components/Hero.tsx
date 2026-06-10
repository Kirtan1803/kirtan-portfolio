"use client";

import React from "react";
import { ArrowDown, Mail, Download, Code, GraduationCap, Briefcase, UserCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const HIGHLIGHTS = [
    {
      icon: <UserCheck className="text-primary" size={16} />,
      label: "Role",
      value: "Full Stack Developer",
    },
    {
      icon: <Code className="text-accent" size={16} />,
      label: "Tech Stack",
      value: "React.js • Django • Firebase • MySQL",
    },
    {
      icon: <Briefcase className="text-emerald-500" size={16} />,
      label: "Experience",
      value: "Web Developer Intern (Stark Tech)",
    },
    {
      icon: <GraduationCap className="text-amber-500" size={16} />,
      label: "Education",
      value: "B.E. Computer Engineering (GTU)",
    },
  ];

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center py-12 md:py-20">
      <div className="max-w-4xl">
        {/* Subtle greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/40 text-xs font-medium text-primary mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for opportunities in Ahmedabad / Remote</span>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-white leading-tight"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-primary via-indigo-400 to-accent bg-clip-text text-transparent">
            Kirtan Tanti
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted max-w-3xl mb-8 leading-relaxed"
        >
          Full Stack Developer focused on building modern web applications using React, Django, Firebase, and REST APIs. Recently completed a Bachelor of Engineering in Computer Engineering and gained practical industry experience through a web development internship.
        </motion.p>

        {/* Quick Highlights Grid for 5-Second Scan */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-border bg-card/15 backdrop-blur-sm flex items-start gap-3"
            >
              <div className="flex-shrink-0 mt-0.5 p-1.5 rounded-lg bg-card border border-border/80">
                {item.icon}
              </div>
              <div>
                <div className="text-[10px] font-bold text-muted uppercase tracking-wider">
                  {item.label}
                </div>
                <div className="text-xs font-semibold text-white/95 mt-0.5 leading-snug">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 items-center"
        >
          <a
            href="/#projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white text-background hover:bg-white/95 active:scale-95 transition-all shadow-md"
          >
            <span>View Projects</span>
            <ArrowDown size={16} />
          </a>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-border bg-card/60 text-foreground hover:bg-card hover:border-muted/50 active:scale-95 transition-all"
          >
            <Download size={16} />
            <span>Download Resume</span>
          </a>

          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-muted hover:text-foreground transition-all"
          >
            <Mail size={16} />
            <span>Contact Me</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
