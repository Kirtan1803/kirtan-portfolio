"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Database, ShieldCheck, Cpu, Code, BookOpen, AlertTriangle } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectGallery from "@/components/ProjectGallery";

export default function GoodNewsProject() {
  const images = [
    "/projects/goodnews-1.png",
    "/projects/goodnews-2.png",
    "/projects/goodnews-3.png",
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
          className="rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent border border-border p-8 md:p-12 mb-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-10" />
          <div className="relative z-10">
            <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-full">
              Frontend &amp; BaaS Case Study
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-2 tracking-tight">
              GoodNews
            </h1>
            <p className="text-lg text-muted max-w-xl leading-relaxed mb-6">
              A responsive news web application built with React and Firebase.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Kirtan1803/GoodNews-react-firebase"
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
          <ProjectGallery images={images} altText="GoodNews" />
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
                GoodNews is a news reader application. It retrieves article feeds from the database and renders them dynamically based on user selection.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                The project uses Firebase as a Backend-as-a-Service to manage authentication and database states directly from the frontend.
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
                The frontend is built with React and connects directly to the Firebase SDK for database queries.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                User accounts are managed through Firebase Authentication. Articles are stored in Firestore as NoSQL document collections, which sync to the client UI.
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
                  <strong className="text-white text-sm block">Firebase Authentication</strong>
                  <p className="text-xs text-muted mt-1 leading-relaxed">Email and password authentication flows.</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card/10">
                  <strong className="text-white text-sm block">Firestore Database</strong>
                  <p className="text-xs text-muted mt-1 leading-relaxed">NoSQL document collections storing and updating news articles.</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card/10">
                  <strong className="text-white text-sm block">Responsive Design</strong>
                  <p className="text-xs text-muted mt-1 leading-relaxed">Layouts that adapt to mobile, tablet, and desktop screens.</p>
                </div>
                <div className="p-4 rounded-xl border border-border bg-card/10">
                  <strong className="text-white text-sm block">Dynamic Content Rendering</strong>
                  <p className="text-xs text-muted mt-1 leading-relaxed">React state updates to display articles.</p>
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
                A key challenge was structuring Firestore database listeners to avoid extra document reads. I resolved this by cleaning up database subscriptions when React components unmounted, preventing read overhead during navigation.
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
                Developing GoodNews taught me how to structure NoSQL collections. I learned how to denormalize data schemas to optimize query speeds for client-side rendering.
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
                {["React.js", "Firebase", "Firestore"].map((tech) => (
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
