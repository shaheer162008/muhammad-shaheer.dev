"use client";

import { useEffect, useState } from "react";

const words = ["reliable-software", "websites", "full-stack-web-apps"];
const maxWordLength = Math.max(...words.map((w) => w.length));

export function HeroTerminal() {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
      setTick((t) => t + 1);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-terminal">
      <div className="hero-terminal-line">
        <span>➜</span> <b>muhammad-shaheer.dev</b> <i>--ship</i>{" "}
        <span
          className="terminal-word-wrapper"
          style={{ width: `${maxWordLength}ch` }}
        >
          <span key={tick} className="terminal-word">
            {words[index]}
          </span>
        </span>
      </div>

      <style jsx>{`
        .hero-terminal {
          background: var(--canvas-soft);
          border: 1px solid var(--hairline);
          border-radius: var(--r-sm);
          padding: 8px 16px;
          display: inline-flex;
          align-self: flex-start;
          font-family: var(--font-mono);
          font-size: 13px;
          max-width: 400px;
          width: 100%;
        }
        .hero-terminal-line {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--body);
          width: 100%;
          white-space: nowrap;
        }
        .hero-terminal-line span:first-child {
          color: var(--green);
        }
        .terminal-word-wrapper {
          display: inline-block;
          overflow: hidden;
          flex-shrink: 0;
        }
        .terminal-word {
          color: var(--green);
          font-style: normal;
          white-space: nowrap;
          display: inline-block;
          overflow: hidden;
          animation: typing 1.4s steps(${maxWordLength}) forwards;
        }
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}