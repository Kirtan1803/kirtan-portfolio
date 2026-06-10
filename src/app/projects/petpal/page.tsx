"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Database, ShieldCheck, Cpu, Code, BookOpen, AlertTriangle } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";

export default function PetPalProject() {
  const images = [
    "/projects/petpal-1.png",
    "/projects/petpal-2.png",
    "/projects/petpal-3.png",
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-6 w-full py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to projects</span>
          </Link>
        </motion.div>

        {/* Hero Banner Area */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-transparent border border-border p-8 md:p-12 mb-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />
          <div className="relative z-10">
            <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
              Full Stack Project Case Study
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-2 tracking-tight">
              PetPal
            </h1>
            <p className="text-lg text-muted max-w-xl leading-relaxed mb-6">
              A pet adoption platform with user and admin modules, structured database tables, and role-based access.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Kirtan1803/PetPal-fullstack"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-white text-background hover:bg-white/95 transition-all"
              >
                <GithubIcon size={16} />
                <span>View Repository</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Gallery */}
        <section className="mb-12">
          <ProjectGallery images={images} altText="PetPal" />
        </section>

        {/* Details Layout */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Main Case Study Column */}
          <div className="md:col-span-2 space-y-10">
            {/* Project Overview */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Database size={18} className="text-primary" />
                <span>Project Overview</span>
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                PetPal is a pet adoption website built to coordinate listings and requests between adopters and shelters. It features separate portals for normal users and shelter staff to track pets, submit applications, and review adoptions.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                The implementation features a decoupled React client and a Django backend, validating inputs at REST endpoints before committing queries to the database.
              </p>
            </motion.section>

            {/* Architecture Overview */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Cpu size={18} className="text-accent" />
                <span>Architecture Overview</span>
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                The project uses a client-server split. The React client handles UI states and communicates with the Django REST API.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                The backend uses Django REST Framework. Django&apos;s ORM maps data models directly to a MySQL database, managing relational keys between users, shelters, pets, and application states.
              </p>
            </motion.section>

            {/* Key Features */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <ShieldCheck size={18} className="text-emerald-500" />
                <span>Key Features</span>
              </h2>
              <div className="grid gap-4">
                <div className="p-4 rounded-xl border border-border bg-card/10">
                  <strong className="text-white text-sm block">User &amp; Admin Roles</strong>
                  <p className="text-xs text-muted mt-1 leading-relaxed">Permission layers separating normal users from shelter staff.</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card/10">
                  <strong className="text-white text-sm block">Relational Database</strong>
                  <p className="text-xs text-muted mt-1 leading-relaxed">MySQL models representing pet categories, attributes, and user workflows.</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card/10">
                  <strong className="text-white text-sm block">DRF RESTful APIs</strong>
                  <p className="text-xs text-muted mt-1 leading-relaxed">Endpoint routing returning JSON payloads to the client.</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card/10">
                  <strong className="text-white text-sm block">JWT Authentication</strong>
                  <p className="text-xs text-muted mt-1 leading-relaxed">JSON Web Tokens for secure session validation.</p>
                </div>
              </div>
            </motion.section>

            {/* Challenges */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <AlertTriangle size={18} className="text-yellow-500" />
                <span>Challenges</span>
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                Implementing Role-Based Access Control (RBAC) required writing custom permission layers in Django and binding them to DRF viewsets. This ensures regular users cannot access administrative endpoints.
              </p>
            </motion.section>

            {/* Lessons Learned */}
            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <BookOpen size={18} className="text-primary" />
                <span>Lessons Learned</span>
              </h2>
              <p className="text-muted text-sm leading-relaxed">
                This project showed the value of designing database schemas before writing code. Defining relations and constraints in MySQL early prevented schema layout errors and circular dependencies during development.
              </p>
            </motion.section>
          </div>

          {/* Sidebar Column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl border border-border bg-card/20 backdrop-blur-sm"
            >
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-border/40 pb-2 flex items-center gap-2">
                <Code size={14} className="text-primary" />
                <span>Tech Stack</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Django", "MySQL", "REST APIs", "DRF"].map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-card text-xs font-semibold text-muted border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
