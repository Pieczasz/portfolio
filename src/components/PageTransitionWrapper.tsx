"use client";
import { type FC, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface PageTransitionWrapperProps {
  children: React.ReactNode;
}

const PageTransitionWrapper: FC<PageTransitionWrapperProps> = ({
  children,
}) => {
  // We need to check if the component is mounted on the client side because of the hydration errors
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const variants = {
    hidden: { 
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial={isClient ? "hidden" : false}
      animate={isClient ? "visible" : false}
      className="flex min-h-screen w-full flex-col"
    >
      {children}
    </motion.div>
  );
};

export default PageTransitionWrapper;
