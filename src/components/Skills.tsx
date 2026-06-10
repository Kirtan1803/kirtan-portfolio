"use client";

import React from "react";
import { Monitor, Server, Database, Cloud, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Monitor className="text-primary" size={18} />,
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    icon: <Server className="text-accent" size={18} />,
    skills: ["Python", "Django", "REST APIs"],
  },
  {
    title: "Database",
    icon: <Database className="text-emerald-500" size={18} />,
    skills: ["MySQL", "Firestore"],
  },
  {
    title: "BaaS",
    icon: <Cloud className="text-blue-500" size={18} />,
    skills: ["Firebase Authentication", "Firebase Firestore"],
  },
  {
    title: "Tools",
    icon: <Wrench className="text-amber-500" size={18} />,
    skills: ["Git", "GitHub", "Postman"],
    isLast: true, // Marker for styling
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-border/40 scroll-mt-20">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Skills
        </h2>
        <p className="text-muted max-w-xl text-sm leading-relaxed">
          The technologies, libraries, and tools I use to build responsive web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className={`p-5 rounded-2xl border border-border bg-card/20 hover:border-muted/30 transition-all flex flex-col h-full ${
              category.isLast ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            {/* Category Header */}
            <div className="flex items-center gap-2 mb-4 border-b border-border/40 pb-3">
              {category.icon}
              <h3 className="font-semibold text-white text-base">
                {category.title}
              </h3>
            </div>

            {/* Badges list */}
            <div className="flex flex-wrap gap-2 mt-1">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg bg-card/60 text-xs font-semibold text-muted border border-border/80 hover:text-white transition-all hover:bg-card"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
