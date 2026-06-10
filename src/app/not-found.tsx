import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20 min-h-[60vh]">
        <div className="max-w-md relative z-10">
          {/* Large Gradient 404 text */}
          <h1 className="text-8xl md:text-9xl font-black tracking-tight mb-4 bg-gradient-to-r from-primary via-indigo-400 to-accent bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
            Page Not Found
          </h2>
          
          <p className="text-muted text-sm md:text-base mb-8">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white text-background hover:bg-white/95 active:scale-95 transition-all shadow-md"
          >
            <Home size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
