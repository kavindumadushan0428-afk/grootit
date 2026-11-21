"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "motion/react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

/** Smooth blur-to-sharp editorial scroll reveal */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
}: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Clipped line-by-line kinetic headline reveal */
export function MaskLine({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden pb-1 ${className}`}>
      <motion.span
        initial={{ y: "105%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.82, delay, ease: EASE_OUT_EXPO }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

/**
 * Scrollytelling Section Wrapper:
 * Smoothly expands a dark-navy or feature section from a rounded inset card
 * to full width as the user scrolls into it.
 */
export function ScrollExpandSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "start 25%"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.93, 1]), {
    stiffness: 160,
    damping: 26,
  });
  const borderRadius = useTransform(scrollYProgress, [0, 1], [28, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, borderRadius }}
      className={`overflow-hidden will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

/**
 * Scrollytelling CTA Portal:
 * Scroll-linked 3D perspective & scale reveal for closing CTA cards.
 */
export function ScrollPortalCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "center 55%"],
  });

  const scale = useSpring(useTransform(scrollYProgress, [0, 1], [0.9, 1]), {
    stiffness: 150,
    damping: 24,
  });
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [36, 0]), {
    stiffness: 150,
    damping: 24,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.45, 0.85, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, y, opacity }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** Spring-physics 3D perspective tilt card with cursor-tracking blue spotlight */
export function TiltCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const [hovered, setHovered] = useState(false);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [4.5, -4.5]), {
    stiffness: 260,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-4.5, 4.5]), {
    stiffness: 260,
    damping: 22,
  });

  const spotlightX = useTransform(mouseX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(mouseY, (v) => `${v * 100}%`);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      className={`relative will-change-transform ${className}`}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: useTransform(
            [spotlightX, spotlightY],
            ([x, y]) =>
              `radial-gradient(280px circle at ${x} ${y}, rgba(0, 102, 255, 0.09), transparent 72%)`
          ),
        }}
      />
      {children}
    </motion.div>
  );
}

/** Subtle magnetic spring pull wrapper for CTAs */
export function MagneticWrap({
  children,
  className = "",
  strength = 0.22,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 320, damping: 20 });
  const springY = useSpring(y, { stiffness: 320, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** Scroll-scrubbed horizontal connecting progress bar for multi-step timelines */
export function ScrollTimelineLine({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 50%"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 right-0 top-4 hidden h-[2px] overflow-hidden bg-slate-200/80 lg:block ${className}`}
    >
      <motion.div
        style={{ scaleX, transformOrigin: "left center" }}
        className="h-full w-full bg-gradient-to-r from-[#0066FF] via-[#4DA3FF] to-[#0066FF]"
      />
    </div>
  );
}
