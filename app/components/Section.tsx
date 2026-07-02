"use client";

import { motion } from "framer-motion";

export function Section({
  id,
  title,
  subtitle,
  align = "left",
  children,
}: any) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col w-full ${align === "center" ? "items-center text-center" : align === "right" ? "items-end text-right" : "items-start text-left"}`}
      >
        <span className="text-sm text-zinc-500 uppercase tracking-[0.2em] mb-4">
          {subtitle}
        </span>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <div className="w-full max-w-3xl">{children}</div>
      </motion.div>
    </section>
  );
}
