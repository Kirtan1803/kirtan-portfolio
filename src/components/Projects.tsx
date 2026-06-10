"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "petpal",
    title: "PetPal",
    tagline: "Full Stack Pet Adoption Platform",
    description: "Developed a pet adoption platform featuring user and admin modules. Designed a relational database schema for pets, categories, and adoption workflows. Built RESTful APIs using Django REST Framework.",
    tech: ["React.js", "Django", "MySQL", "REST APIs"],
    github: "https://github.com/Kirtan1803/PetPal-fullstack",
    color: "from-emerald-500/20 to-teal-500/20",
    borderHover: "hover:border-emerald-500/30",
  },
  {
    id: "goodnews",
    title: "GoodNews",
    tagline: "News Web Application",
    description: "Developed a responsive news web application using React.js. Integrated Firebase Authentication and Firestore for data management. Implemented dynamic content rendering and user interaction features.",
    tech: ["React.js", "Firebase", "Firestore"],
    github: "https://github.com/Kirtan1803/GoodNews-react-firebase",
    color: "from-blue-500/20 to-indigo-500/20",
    borderHover: "hover:border-blue-500/30",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-border/40 scroll-mt-20">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Projects
        </h2>
        <p className="text-muted max-w-xl text-sm leading-relaxed">
          A collection of web applications developed using React, Django, and Firebase.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`flex flex-col h-full rounded-2xl border border-border bg-card/25 overflow-hidden transition-all duration-300 ${project.borderHover}`}
          >
            {/* Visual Header Mockup */}
            <div className={`h-40 bg-gradient-to-br ${project.color} border-b border-border/30 relative flex items-center justify-center p-6`}>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-20" />
              <div className="z-10 text-center">
                <span className="text-3xl font-extrabold tracking-tight text-white/95">
                  {project.title}
                </span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-primary mb-3">
                {project.tagline}
              </p>
              <p className="text-sm text-muted mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-card border border-border text-muted-darker"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Project Actions */}
              <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-auto">
                <Link
                  href={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-white hover:text-primary transition-colors group"
                >
                  <span>Case Study</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="flex items-center gap-4 text-muted">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
