"use client";

import React from "react";
import { BookOpen, Cpu, Code, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const EXPLORING_TOPICS = [
  {
    icon: <Code className="text-primary" size={20} />,
    title: "Next.js 15",
  },
  {
    icon: <Cpu className="text-accent" size={20} />,
    title: "React Server Components",
  },
  {
    icon: <Layers className="text-emerald-500" size={20} />,
    title: "Performance Optimization",
  },
  {
    icon: <Sparkles className="text-amber-500" size={20} />,
    title: "System Design Fundamentals",
  },
];

export default function CurrentlyBuilding() {
  return (
    <section className="py-12 border-t border-border/40">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-primary/10">
          <BookOpen className="text-primary" size={20} />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Currently Learning
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {EXPLORING_TOPICS.map((topic, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="p-5 rounded-xl border border-border bg-card/20 backdrop-blur-sm hover:border-muted/30 transition-all flex items-center gap-4"
          >
            <div className="flex-shrink-0 p-2 rounded-lg bg-card border border-border/60">
              {topic.icon}
            </div>
            <span className="text-sm font-medium text-white leading-relaxed">
              {topic.title}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
