"use client";

import { Mail, Phone, MapPin, Download, Eye } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-20 border-t border-border/40 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-10 rounded-2xl border border-border bg-card/20 backdrop-blur-sm relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-5" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Header Title */}
            <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
              Get In Touch
            </h2>
            
            {/* Tagline */}
            <p className="text-muted text-base leading-relaxed max-w-lg mx-auto mb-8">
              I&apos;m currently open to full-time opportunities, graduate roles, and interesting projects.
            </p>

            {/* Factual Information Rows (Desktop: 3 columns, Mobile/Tablet: Stacked) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6 border-y border-border/40 w-full mb-8">
              {/* Email */}
              <div className="flex flex-col items-center text-center">
                <Mail className="text-primary mb-2" size={20} />
                <span className="text-[10px] font-bold text-muted-darker uppercase tracking-wider">Email</span>
                <a
                  href="mailto:kirtantanti23@gmail.com"
                  className="text-xs font-semibold text-white hover:text-primary transition-colors mt-1 break-all"
                >
                  kirtantanti23@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-center text-center border-t border-border/20 pt-4 sm:border-t-0 sm:pt-0 sm:border-x sm:border-border/20 sm:px-4">
                <Phone className="text-emerald-500 mb-2" size={20} />
                <span className="text-[10px] font-bold text-muted-darker uppercase tracking-wider">Phone</span>
                <a
                  href="tel:9313566349"
                  className="text-xs font-semibold text-white hover:text-emerald-400 transition-colors mt-1"
                >
                  9313566349
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col items-center text-center border-t border-border/20 pt-4 sm:border-t-0 sm:pt-0">
                <MapPin className="text-amber-500 mb-2" size={20} />
                <span className="text-[10px] font-bold text-muted-darker uppercase tracking-wider">Location</span>
                <span className="text-xs font-semibold text-white mt-1">
                  Ahmedabad, Gujarat
                </span>
              </div>
            </div>

            {/* Action Links & Resume Download Button */}
            <div className="flex flex-wrap justify-center items-center gap-4 w-full">
              <a
                href="https://github.com/Kirtan1803"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border border-border bg-card/40 text-foreground hover:bg-card hover:border-white/30 transition-all"
              >
                <GithubIcon size={14} />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/kirtan-tanti-b43bb0255"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border border-border bg-card/40 text-foreground hover:bg-card hover:border-accent/40 transition-all"
              >
                <LinkedinIcon size={14} />
                <span>LinkedIn</span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold border border-border bg-card/40 text-foreground hover:bg-card hover:border-muted/50 active:scale-95 transition-all"
              >
                <Eye size={14} />
                <span>View Resume</span>
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-white text-background hover:bg-white/95 active:scale-95 transition-all shadow-md"
              >
                <Download size={14} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
