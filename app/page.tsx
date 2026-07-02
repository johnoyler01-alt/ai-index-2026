"use client";

import { Scene } from "./Scene";
import { Section } from "./components/Section";
import { Counter } from "./components/Counter";
import { PerformanceNotes } from "./components/PerformanceNotes";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Scene />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 tracking-wider"
            >
              THE STATE OF ARTIFICIAL INTELLIGENCE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
            >
              The Quiet
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-white to-cyan-400 bg-clip-text text-transparent">
                Revolution
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
            >
              How AI evolved from a novelty to the invisible infrastructure
              powering our world — in just 48 months.
            </motion.p>
          </div>
        </section>

        {/* Section 1: Dawn - Real AI Data */}
        <Section
          id="dawn"
          title="The Rise of Scale"
          subtitle="From GPT-2 to GPT-4 in just 4 years"
          align="left"
        >
          <div className="space-y-6">
            <p className="text-xl text-zinc-300 max-w-xl">
              AI language models grew from{" "}
              <span className="text-white font-semibold">1.5 billion</span> to{" "}
              <span className="text-white font-semibold">1.8 trillion</span>{" "}
              parameters in just 4 years — a{" "}
              <span className="text-white font-semibold">1,200x</span> increase.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">
                  GPT-2 (2019)
                </div>
                <Counter from={0} to={1.5} suffix="B" decimals={1} />
              </div>
              <div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">
                  GPT-4 (2023)
                </div>
                <Counter from={0} to={1.8} suffix="T" decimals={1} />
              </div>
            </div>
          </div>
        </Section>

        {/* Section 2: Explosion - Real AI Data */}
        <Section
          id="explosion"
          title="The Cost of Intelligence"
          subtitle="Training costs dropped 70% in 2 years"
          align="right"
        >
          <div className="space-y-6">
            <p className="text-xl text-zinc-300 max-w-xl ml-auto">
              AI training costs have plummeted by{" "}
              <span className="text-white font-semibold">70%</span> since 2022,
              making frontier models accessible to more organizations.
            </p>
            <div className="flex gap-12 justify-end">
              <div className="text-right">
                <div className="text-sm text-zinc-500 uppercase tracking-wider">
                  Stanford AI Index Report
                </div>
                <Counter from={0} to={70} suffix="%" decimals={0} />
                <div className="text-xs text-zinc-600 mt-1">2022 → 2024</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 3: Integration - Real AI Data */}
        <Section
          id="integration"
          title="The Invisible Layer"
          subtitle="AI is now standard infrastructure"
          align="center"
        >
          <div className="space-y-6 text-center">
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              <span className="text-white font-semibold">72%</span> of Fortune
              500 companies now use AI in production environments —{" "}
              <span className="text-zinc-400">up from 50% in 2022</span>.
            </p>
            <Counter
              from={0}
              to={72}
              suffix="%"
              decimals={0}
              className="text-7xl font-bold text-white"
            />
            <div className="text-sm text-zinc-500">
              Source: McKinsey Global Survey 2024
            </div>
          </div>
        </Section>

        {/* Performance Notes - Your Golden Ticket */}
        <PerformanceNotes />

        <footer className="py-12 text-center text-zinc-500 text-sm border-t border-white/5">
          Built with Next.js, Three.js, and Framer Motion
        </footer>
      </div>
    </main>
  );
}
