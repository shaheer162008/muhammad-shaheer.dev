"use client";

import { motion } from "framer-motion";

const words = ["I", "build", "web", "products", "that", "move", "businesses", "forward."];

export function HeroHeadline() {
  return (
    <h1 className="hero-title" aria-label={words.join(" ")}>
      {words.map((word, index) => (
        <motion.span
          key={word + index}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + index * 0.065, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "inline" }}
        >
          {index === words.length - 1
            ? <span style={{ color: "var(--green)" }}>{word}</span>
            : word}
          {index < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </h1>
  );
}
