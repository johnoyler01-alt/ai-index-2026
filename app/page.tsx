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

        {/* Section 1: Dawn */}
        <Section
          id="dawn"
          title="2022: The Tipping Point"
          subtitle="From novelty to necessity in 18 months"
          align="left"
        >
          <div className="space-y-6">
            <p className="text-xl text-zinc-300 max-w-xl">
              In just 18 months, the AI industry saw a{" "}
              <span className="text-white font-semibold">1,200x</span> increase
              in model parameters.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">
                  2022
                </div>
                <Counter from={0} to={1.4} suffix="B" decimals={1} />
              </div>
              <div>
                <div className="text-sm text-zinc-500 uppercase tracking-wider">
                  2024
                </div>
                <Counter from={0} to={1.7} suffix="T" decimals={1} />
              </div>
            </div>
          </div>
        </Section>

        {/* Section 2: Explosion */}
        <Section
          id="explosion"
          title="The Cost of Intelligence"
          subtitle="Democratization through efficiency"
          align="right"
        >
          <div className="space-y-6">
            <p className="text-xl text-zinc-300 max-w-xl ml-auto">
              Training costs have plummeted by{" "}
              <span className="text-white font-semibold">70%</span>
              while performance metrics continue to climb.
            </p>
            <div className="flex gap-12 justify-end">
              <div className="text-right">
                <div className="text-sm text-zinc-500 uppercase tracking-wider">
                  Cost Reduction
                </div>
                <Counter from={0} to={70} suffix="%" decimals={0} />
              </div>
            </div>
          </div>
        </Section>

        {/* Section 3: Integration */}
        <Section
          id="integration"
          title="The Invisible Layer"
          subtitle="AI as infrastructure"
          align="center"
        >
          <div className="space-y-6 text-center">
            <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
              <span className="text-white font-semibold">72%</span> of Fortune
              500 companies now use AI in production environments.
            </p>
            <Counter
              from={0}
              to={72}
              suffix="%"
              decimals={0}
              className="text-7xl font-bold text-white"
            />
          </div>
        </Section>

        {/* Performance Notes */}
        <PerformanceNotes />

        <footer className="py-12 text-center text-zinc-500 text-sm border-t border-white/5">
          Built with Next.js, Three.js, and Framer Motion
        </footer>
      </div>
    </main>
  );
}
