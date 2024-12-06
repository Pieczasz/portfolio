// Functions
import { useState, useEffect } from "react";

// Framer motion
import { motion } from "framer-motion";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.35,
        ease: [0.2, 1, 0.4, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const rotatedTextVariants = {
    initial: {
      opacity: 0,
      y: 20,
      rotate: -18.5,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotate: -18.5,
      transition: {
        duration: 1.2,
        ease: [0.2, 1, 0.4, 1],
      },
    },
  };

  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={variants}
      className="my-[7.5rem] flex flex-col"
    >
      <motion.h1 variants={variants} className="mb-4 text-7xl font-bold">
        Hello, I&apos;m Bartek
      </motion.h1>
      <motion.div
        variants={variants}
        className="mb-8 flex flex-col sm:flex-row sm:items-end sm:gap-x-4"
      >
        <motion.h2 variants={variants} className="text-4xl font-semibold">
          Full-Stack <span className="text-[#1A8BA1]">Developer</span>
          <br />& UI / UX <span className="text-[#3B955B]">Designer</span>
        </motion.h2>
        <motion.p
          variants={
            !isMounted || isSmallScreen ? variants : rotatedTextVariants
          }
          className="mt-4 text-lg font-medium sm:mb-2"
        >
          Based in <span className="text-[#D61C1C]">Poland</span>
        </motion.p>
      </motion.div>
      <motion.h4 variants={variants} className="text-2xl font-semibold">
        I&apos;m passionate about{" "}
        <span className="text-[#1A8BA1]">building</span> practical,{" "}
        <br className="hidden sm:block" />
        minimalistic, and <span className="text-[#3B955B]">easy to use </span>
        apps and websites
      </motion.h4>
    </motion.main>
  );
};

export default Hero;
