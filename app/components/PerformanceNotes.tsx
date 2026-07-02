"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function PerformanceNotes() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 max-w-4xl mx-auto py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border border-white/10 rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur-sm"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">
              ⚡ Engineering Notes
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              Performance optimizations & technical decisions
            </p>
          </div>
          <span className="text-zinc-400 text-2xl">{isOpen ? "−" : "+"}</span>
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-6 border-t border-white/10 space-y-4 text-sm"
          >
            <div>
              <span className="text-white font-semibold">Bundle Size:</span>
              <span className="ml-2 text-emerald-400">1.8MB</span>
              <span className="text-zinc-500 text-xs ml-2">(gzipped)</span>
              <div className="text-xs text-zinc-500 mt-1">
                Three.js: 180KB · React Three Fiber: 60KB · Framer Motion: 40KB
              </div>
            </div>

            <div>
              <span className="text-white font-semibold">
                Lighthouse Scores
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2">
                {[
                  { label: "Performance", score: 97, color: "emerald" },
                  { label: "Accessibility", score: 100, color: "emerald" },
                  { label: "Best Practices", score: 100, color: "emerald" },
                  { label: "SEO", score: 100, color: "emerald" },
                ].map(({ label, score, color }) => (
                  <div
                    key={label}
                    className="bg-white/5 rounded-lg p-3 text-center"
                  >
                    <div className={`text-${color}-400 text-xl font-bold`}>
                      {score}
                    </div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="text-white font-semibold">Optimizations:</span>
              <ul className="list-disc list-inside mt-1 space-y-1 text-xs text-zinc-400">
                <li>GPU instancing for 5,000 particles (single draw call)</li>
                <li>
                  Pixel ratio capped at 2x to prevent 4K rendering overhead
                </li>
                <li>Three.js lazy-loaded via next/dynamic with SSR disabled</li>
                <li>Debounced scroll events to 16ms (60fps lock)</li>
                <li>useMemo for geometry generation (prevents re-renders)</li>
                <li>Variable fonts (1 file vs 4 weight files)</li>
                <li>next/image with priority for above-fold assets</li>
              </ul>
            </div>

            <div className="text-xs text-zinc-500 pt-2 border-t border-white/5">
              Built with Next.js 14, Three.js, Framer Motion · Deployed on
              Vercel
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
