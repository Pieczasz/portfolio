// Functions
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";

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
      rotate: -14.5,
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

  const iconVariants = {
    initial: { opacity: 0 },
    animate: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.15 + i * 0.15,
        duration: 0.7,
        ease: [0.2, 1, 0.4, 1],
      },
    }),
  };

  const socialLinks = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/bart%C5%82omiej-piekarz-274b49304/",
      color: "hover:text-[#57A464]",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/Pieczasz",
      color: "hover:text-[#57A464]",
    },
    {
      icon: <SiUpwork className="text-2xl" />,
      url: "https://www.upwork.com/freelancers/~01b14ac855ff93d122",
      color: "hover:text-[#57A464]",
    },
    {
      icon: <TbBrandFiverr className="text-2xl" />,
      url: "https://www.fiverr.com/pieczasz",
      color: "hover:text-[#57A464]",
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      url: "mailto:bartekp854@gmail.com",
      color: "hover:text-[#57A464]",
    },
  ];

  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={variants}
      className="my-[7.5rem] flex flex-col px-4 md:px-0"
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
          <br />& UI / UX <span className="text-[#57A464]">Designer</span>
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
        I enjoy <span className="text-[#1A8BA1]">building</span> practical,{" "}
        minimalistic, <br className="hidden sm:block" />
        and <span className="text-[#57A464]">easy to use </span>
        apps and websites
      </motion.h4>
      <motion.div variants={variants} className="mt-8 flex gap-6">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            custom={index}
            variants={iconVariants}
            initial="initial"
            animate="animate"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transform transition-all duration-300 hover:scale-110 ${link.color}`}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.main>
  );
};

export default Hero;
