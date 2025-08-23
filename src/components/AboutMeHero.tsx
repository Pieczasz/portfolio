"use client";

// Components
import Image from "next/image";
import Link from "next/link";

// Framer motion
import { motion } from "motion/react";

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
			className="my-[4rem] flex flex-col px-4 md:my-[7.5rem] lg:px-0"
		>
			<div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row md:gap-12">
				<div className="flex w-full flex-col items-start">
					<motion.h1
						variants={variants}
						className="mb-4 text-left text-3xl font-bold text-black dark:text-white md:text-left md:text-5xl"
					>
						About Me
					</motion.h1>
					<motion.p
						variants={variants}
						className="max-w-[50ch] text-left text-lg text-black dark:text-white md:text-xl"
					>
						I&apos;m Bartek, a developer currently based in Rotterdam,
						Netherlands. I specialize in full-stack development with a focus on
						mobile applications, working with React Native, Swift, and Kotlin.
						I&apos;m currently starting my BSc in Computer Science and
						Engineering at{" "}
						<Link
							href={"https://www.tudelft.nl/"}
							className="text-blue-600 hover:underline"
							target="_blank"
						>
							TU Delft
						</Link>
						. I create scalable, user-friendly applications and enjoy working on
						challenging projects that push the boundaries of technology. My
						experience includes working with AI training, video streaming
						technologies, and cross-platform mobile development.
					</motion.p>
				</div>

				<Image
					src={"/me.jpeg"}
					alt="Image of me"
					width={200}
					height={400}
					className="rounded-t-[3rem]"
				/>
			</div>
		</motion.main>
	);
};

export default AboutMeHero;
