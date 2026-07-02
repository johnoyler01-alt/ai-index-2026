"use client";

import { Scene } from "./Scene";
import { Counter } from "./components/Counter";
import { PerformanceNotes } from "./components/PerformanceNotes";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000000",
      }}
    >
      <Scene />

      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Hero Section */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 1.5rem",
          }}
        >
          <div
            style={{ textAlign: "center", maxWidth: "56rem", margin: "0 auto" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                display: "inline-block",
                marginBottom: "1.5rem",
                padding: "0.25rem 1rem",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                fontSize: "0.75rem",
                color: "#a1a1aa",
                letterSpacing: "0.2em",
              }}
            >
              THE STATE OF ARTIFICIAL INTELLIGENCE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: "clamp(3rem, 10vw, 6rem)",
                fontWeight: "bold",
                letterSpacing: "-0.025em",
                color: "white",
                marginBottom: "0.5rem",
              }}
            >
              The Quiet
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(to right, #fb923c, #ffffff, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Revolution
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                marginTop: "1.5rem",
                fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                color: "#a1a1aa",
                maxWidth: "42rem",
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: "1.6",
              }}
            >
              How AI evolved from a novelty to the invisible infrastructure
              powering our world — in just 48 months.
            </motion.p>
          </div>
        </section>

        {/* Section 1: Dawn */}
        <section
          id="dawn"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 1.5rem",
            maxWidth: "80rem",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "#71717a",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "1rem",
              }}
            >
              FROM GPT-2 TO GPT-4 IN JUST 4 YEARS
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                fontWeight: "bold",
                letterSpacing: "-0.025em",
                marginBottom: "2rem",
                background: "linear-gradient(to right, #ffffff, #a1a1aa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Rise of Scale
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                maxWidth: "36rem",
              }}
            >
              <p style={{ fontSize: "1.25rem", color: "#d4d4d8" }}>
                AI language models grew from{" "}
                <span style={{ color: "white", fontWeight: 600 }}>
                  1.5 billion
                </span>{" "}
                to{" "}
                <span style={{ color: "white", fontWeight: 600 }}>
                  1.8 trillion
                </span>{" "}
                parameters in just 4 years — a{" "}
                <span style={{ color: "white", fontWeight: 600 }}>1,200x</span>{" "}
                increase.
              </p>
              <div
                style={{ display: "flex", gap: "4rem", alignItems: "center" }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#71717a",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    GPT-2 (2019)
                  </div>
                  <div
                    style={{
                      fontSize: "4rem",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    <Counter from={0} to={1.5} suffix="B" decimals={1} />
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#71717a",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    GPT-4 (2023)
                  </div>
                  <div
                    style={{
                      fontSize: "4rem",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    <Counter from={0} to={1.8} suffix="T" decimals={1} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Explosion */}
        <section
          id="explosion"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 1.5rem",
            maxWidth: "80rem",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: "100%",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "#71717a",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "1rem",
              }}
            >
              TRAINING COSTS DROPPED 70% IN 2 YEARS
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                fontWeight: "bold",
                letterSpacing: "-0.025em",
                marginBottom: "2rem",
                background: "linear-gradient(to right, #ffffff, #a1a1aa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Cost of Intelligence
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                maxWidth: "36rem",
                textAlign: "right",
              }}
            >
              <p style={{ fontSize: "1.25rem", color: "#d4d4d8" }}>
                AI training costs have plummeted by{" "}
                <span style={{ color: "white", fontWeight: 600 }}>70%</span>{" "}
                since 2022, making frontier models accessible to more
                organizations.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "3rem",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#71717a",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Stanford AI Index Report
                  </div>
                  <div
                    style={{
                      fontSize: "4rem",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    <Counter from={0} to={70} suffix="%" decimals={0} />
                  </div>
                  <div
                    style={{
                      fontSize: "0.65rem",
                      color: "#52525b",
                      marginTop: "0.25rem",
                    }}
                  >
                    2022 → 2024
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 3: Integration */}
        <section
          id="integration"
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 1.5rem",
            maxWidth: "80rem",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              textAlign: "center",
            }}
          >
            <span
              style={{
                fontSize: "0.75rem",
                color: "#71717a",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "1rem",
              }}
            >
              AI IS NOW STANDARD INFRASTRUCTURE
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 6vw, 4rem)",
                fontWeight: "bold",
                letterSpacing: "-0.025em",
                marginBottom: "2rem",
                background: "linear-gradient(to right, #ffffff, #a1a1aa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              The Invisible Layer
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                maxWidth: "42rem",
              }}
            >
              <p style={{ fontSize: "1.25rem", color: "#d4d4d8" }}>
                <span style={{ color: "white", fontWeight: 600 }}>72%</span> of
                Fortune 500 companies now use AI in production environments —{" "}
                <span style={{ color: "#a1a1aa" }}>up from 50% in 2022</span>.
              </p>
              <div
                style={{ fontSize: "5rem", fontWeight: "bold", color: "white" }}
              >
                <Counter from={0} to={72} suffix="%" decimals={0} />
              </div>
              <div style={{ fontSize: "0.75rem", color: "#71717a" }}>
                Source: McKinsey Global Survey 2024
              </div>
            </div>
          </motion.div>
        </section>

        <PerformanceNotes />

        <footer
          style={{
            padding: "3rem 0",
            textAlign: "center",
            color: "#71717a",
            fontSize: "0.875rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          Designed & built by [Your Name] · AI Index 2026
          <div
            style={{
              marginTop: "0.5rem",
              fontSize: "0.65rem",
              color: "#52525b",
            }}
          >
            Next.js · Three.js · Framer Motion
          </div>
        </footer>
      </div>
    </main>
  );
}
