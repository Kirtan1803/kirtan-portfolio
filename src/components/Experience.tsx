"use client";

import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Web Developer Intern",
    company: "Stark Technologies",
    location: "Ahmedabad",
    period: "Nov 2025 – May 2026",
    description: [
      "Developed web interfaces using React.js",
      "Integrated Firebase Authentication and Firestore for database actions",
      "Created dynamic UI components and assisted with frontend optimization",
      "Collaborated with team members to debug issues and improve usability",
    ],
    tech: [
      "React.js",
      "Firebase Authentication",
      "Firestore",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-border/40 scroll-mt-20">
      <div className="flex flex-col gap-3 mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Experience
        </h2>
        <p className="text-muted max-w-xl text-sm leading-relaxed">
          My professional industry experience.
        </p>
      </div>

      <div className="max-w-3xl space-y-8">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-6 rounded-2xl border border-border bg-card/25"
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-1">
                  <Briefcase size={14} />
                  <span>{exp.role}</span>
                </div>
                <h3 className="text-white font-bold text-lg">
                  {exp.company}
                </h3>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-muted font-medium">
                <span className="flex items-center gap-1.5 mb-1">
                  <Calendar size={12} />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1.5 sm:justify-end">
                  <MapPin size={12} />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            <ul className="space-y-2.5 mb-6 text-sm text-muted">
              {exp.description.map((bullet, i) => (
                <li key={i} className="list-disc list-outside ml-4 leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded bg-card/60 text-xs font-semibold text-muted border border-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
