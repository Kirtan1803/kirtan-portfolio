"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/40 mt-auto">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted font-medium">
        <div>
          &copy; {currentYear} Kirtan Tanti.
        </div>
        <div className="flex items-center gap-1">
          <span>Designed & Developed by</span>
          <span className="text-white hover:text-primary transition-colors">Kirtan Tanti</span>
        </div>
      </div>
    </footer>
  );
}
