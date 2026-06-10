"use client";

import React from "react";
import { GraduationCap, Calendar, Award, School } from "lucide-react";
import { motion } from "framer-motion";

const EDUCATION_ITEMS = [
  {
    isPrimary: true,
    degree: "Bachelor of Engineering in Computer Engineering",
    school: "Shree Swaminarayan Institute of Technology",
    metaLabel: "University",
    metaValue: "GTU",
    period: "2022 – 2026",
    metricLabel: "CGPA",
    metricValue: "8.12 / 10",
    icon: <GraduationCap size={16} />,
  },
  {
    isPrimary: false,
    degree: "Higher Secondary Education (12th HSC)",
    school: "Adani Vidya Mandir",
    metaLabel: "Board",
    metaValue: "CBSE  ",
    period: "2022",
    metricLabel: "Percentage",
    metricValue: "72%",
    icon: <School size={16} />,
  },
];

export default function Education() {
  return (
    <section id="education" className="py-16 border-t border-border/40 scroll-mt-20">
      <div className="flex flex-col gap-3 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Education
        </h2>
        <p className="text-muted max-w-xl text-sm leading-relaxed">
          My academic history in computer engineering and secondary education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION_ITEMS.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={`p-6 rounded-2xl border bg-card/20 backdrop-blur-sm relative flex flex-col justify-between h-full transition-all hover:border-muted/30 ${
              item.isPrimary ? "border-primary/30" : "border-border"
            }`}
          >
            {/* Primary badge */}
            {item.isPrimary && (
              <span className="absolute top-4 right-4 text-[9px] font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-0.5 rounded-full border border-primary/20">
                Primary
              </span>
            )}

            <div>
              <div className="flex items-center gap-2 text-primary font-semibold text-sm mb-2">
                {item.icon}
                <span>{item.degree}</span>
              </div>

              <h3 className="text-white font-bold text-lg mb-1">
                {item.school}
              </h3>
              
              <div className="text-sm font-medium text-muted mb-4">
                {item.metaLabel}: {item.metaValue}
              </div>
            </div>

            <div className="border-t border-border/40 pt-4 mt-4 flex items-center justify-between text-xs text-muted font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar size={12} />
                <span>{item.period}</span>
              </span>
              <span className="flex items-center gap-1 text-sm text-white font-semibold">
                <Award className="text-primary" size={14} />
                <span>{item.metricLabel}: {item.metricValue}</span>
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
