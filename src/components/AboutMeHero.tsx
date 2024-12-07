"use client";

// Components
import Image from "next/image";
import Link from "next/link";

// Framer motion
import { motion } from "framer-motion";

const AboutMeHero = () => {
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

  return (
    <motion.main
      initial="initial"
      animate="animate"
      variants={variants}
      className="my-[4rem] flex flex-col md:my-[7.5rem]"
    >
      <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-12">
        <div className="flex flex-col">
          <motion.h1
            variants={variants}
            className="mb-4 text-center text-4xl font-bold md:text-left md:text-7xl"
          >
            About Me
          </motion.h1>
          <motion.p
            variants={variants}
            className="text-center text-lg md:text-left md:text-xl"
          >
            I&apos;m Bartek, an 18-year-old software engineer from Poland with a
            desire for coding practical apps and websites. <br />I specialize in
            Frontend Development using React.js and TailwindCSS, blending
            technical expertise with a keen eye for minimalistic design.
            Currently, I&apos;m in my final year at a technical high school in
            Poland,
            <Link
              href={"https://www.zsti.gliwice.pl/"}
              className="text-blue-600"
            >
              {" "}
              Zespół Szkół Techniczno-Informatycznych w Gliwicach
            </Link>
            , which ranks as the 25th best technical school in Poland.
            <br /> I strive to make my projects as simple and intuitive as
            possible, ensuring they are accessible and user-friendly for
            everyone. In addition to my studies, I enjoy attending to
            hackathons, continuously improving my skills in designing and
            developing engaging user experiences.
            <br />
            Beyond coding, I have a strong interest in psychology, exploring how
            people think and make decisions, which helps me create more
            intuitive user experiences. I also aspire to study abroad and have
            already taken steps toward this goal by scoring 101 out of 120 on
            the TOEFL exam.
          </motion.p>
        </div>

        <Image
          src={"/me.jpeg"}
          alt="Image of me"
          width={300}
          height={600}
          className="rounded-t-[3rem]"
        />
      </div>
    </motion.main>
  );
};

export default AboutMeHero;
