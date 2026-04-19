"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export interface TypewriterProps {
  words: string[];
}

export function Typewriter({ words }: TypewriterProps) {
  const [index, setIndex] = useState(0);
  const baseText = words[index];
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      duration: 1.5,
      ease: "easeInOut",
      onUpdate: (latest) => {
        setDisplayText(baseText.slice(0, Math.round(latest)));
      },
    });

    return controls.stop;
  }, [baseText, count]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
      count.set(0);
    }, 4000); // Wait 4s before switching word

    return () => clearTimeout(timeout);
  }, [index, words.length, count]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        className="inline-block w-[3px] h-[0.9em] bg-emerald-400 ml-1 align-middle"
      />
    </span>
  );
}
