"use client";

import Hero from "@/components/Hero";
// Framer motion
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4"
    >
      <Hero />
    </motion.div>
  );
}
