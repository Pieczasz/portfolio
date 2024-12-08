"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork, SiGoodreads } from "react-icons/si";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <FaGithub className="text-2xl" />,
      url: "https://github.com/Pieczasz",
      color: "hover:text-[#57A464]",
    },
    {
      name: "Fiverr",
      icon: <TbBrandFiverr className="text-2xl" />,
      url: "https://www.fiverr.com/pieczasz",
      color: "hover:text-[#57A464]",
    },
    {
      name: "Upwork",
      icon: <SiUpwork className="text-2xl" />,
      url: "https://www.upwork.com/freelancers/~01b14ac855ff93d122",
      color: "hover:text-[#57A464]",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-2xl" />,
      url: "https://www.linkedin.com/in/bart%C5%82omiej-piekarz-274b49304/",
      color: "hover:text-[#57A464]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-2xl" />,
      url: "https://www.instagram.com/bartek__piekarz/",
      color: "hover:text-[#57A464]",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-2xl" />,
      url: "https://x.com/Pieczasz",
      color: "hover:text-[#57A464]",
    },
    {
      name: "Goodreads",
      icon: <SiGoodreads className="text-2xl" />,
      url: "https://www.goodreads.com/user/show/165146275-bart-omiej-piekarz",
      color: "hover:text-[#57A464]",
    },
    {
      name: "Email",
      icon: <FaEnvelope className="text-2xl" />,
      url: "mailto:bartekp854@gmail.com",
      color: "hover:text-[#57A464]",
    },
  ];

  return (
    <div className="container mx-auto">
      <MaxWidthWrapper>
        <motion.div
          className="my-[7.5rem] flex flex-col items-center justify-center p-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="mb-8 text-5xl font-bold text-gray-800"
            variants={itemVariants}
          >
            Where you can find me
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            variants={itemVariants}
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex transform items-center gap-2 rounded-full bg-white px-6 py-3 shadow-md transition-all duration-300 hover:scale-105 ${link.color}`}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Contact;
