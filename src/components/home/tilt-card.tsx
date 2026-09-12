"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";

export function TiltCard({ children }: { children: ReactNode }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 180, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 180, damping: 20 });

  return (
    <motion.div className="tilt-card" style={{ rotateX, rotateY }} onPointerMove={(event) => {
      const bounds = event.currentTarget.getBoundingClientRect();
      x.set((event.clientX - bounds.left) / bounds.width - 0.5);
      y.set((event.clientY - bounds.top) / bounds.height - 0.5);
    }} onPointerLeave={() => { x.set(0); y.set(0); }}>
      {children}
    </motion.div>
  );
}
