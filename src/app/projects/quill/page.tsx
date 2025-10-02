"use client";

import { useState, useEffect } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { Link2, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiReact,
	SiFirebase,
	SiNodedotjs,
	SiSentry,
} from "react-icons/si";

// Utils
import { assetPath } from "@/lib/assetPath";

const QuillPage = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setSelectedImage(null);
			}
		};

		if (selectedImage) {
			window.addEventListener("keydown", handleEsc);
		}

		return () => {
			window.removeEventListener("keydown", handleEsc);
		};
	}, [selectedImage]);

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

	const listItemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	const linkVariants = {
		initial: { scale: 1 },
		hover: {
			scale: 1.05,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
		tap: { scale: 0.95 },
	};

	const techStackVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	const listAnimationVariants = {
		offscreen: { opacity: 0, x: -50 },
		onscreen: (index: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.5,
				delay: index * 0.1,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		}),
	};

	const screenshots = [
		assetPath("/quill-baner.jpg"),
		assetPath("/quill_comment_showcase.png"),
		assetPath("/Locks.png"),
	];

	const techStack = [
		{
			label: "Frontend",
			stack: "Next.js, React, TypeScript, Tailwind CSS",
			icons: [
				{ icon: SiNextdotjs, color: "text-black dark:text-white" },
				{ icon: SiReact, color: "text-blue-400" },
				{ icon: SiTypescript, color: "text-blue-600" },
				{ icon: SiTailwindcss, color: "text-cyan-500" },
			],
		},
		{
			label: "Backend & Infrastructure",
			stack:
				"Node.js, TypeScript, Firebase (Realtime Database, Firestore, Functions), Sentry, PostHog",
			icons: [
				{ icon: SiNodedotjs, color: "text-green-600" },
				{ icon: SiTypescript, color: "text-blue-600" },
				{ icon: SiFirebase, color: "text-orange-500" },
				{ icon: SiSentry, color: "text-purple-600" },
			],
		},
	];

	return (
		<MaxWidthWrapper>
			<motion.div
				initial="initial"
				animate="animate"
				variants={variants}
				className="px-4 py-16 lg:px-0"
			>
				<motion.div variants={variants} className="flex items-center gap-4">
					<Image
						src={assetPath("/quill_logo.png")}
						alt="Quill Logo"
						width={64}
						height={64}
						className="rounded-lg"
					/>
					<motion.h1
						variants={variants}
						className="text-4xl lg:text-5xl font-bold text-black dark:text-white"
					>
						Quill
					</motion.h1>
				</motion.div>

				<motion.div variants={variants} className="mt-16 flex gap-4">
					<motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
						<Link
							href="https://quill4.dev/"
							target="_blank"
							className="flex items-center gap-2 rounded-lg bg-[#FF6B35] px-4 py-2 text-white transition-colors hover:bg-black"
						>
							<Link2 size={20} />
							<span>Visit Website</span>
						</Link>
					</motion.div>
				</motion.div>

				<motion.section variants={variants} className="mt-16 space-y-4">
					<motion.h2
						variants={variants}
						className="text-3xl lg:text-4xl font-bold text-[#FF6B35]"
					>
						Project overview
					</motion.h2>
					<motion.p variants={variants} className="text-lg dark:text-gray-200">
						Quill is a real-time collaboration tool designed specifically for
						Unity game development teams. It enables seamless collaboration
						among team members by providing powerful features for commenting,
						locking assets, and real-time synchronization across the development
						workflow.
					</motion.p>
					<motion.p variants={variants} className="text-lg dark:text-gray-200">
						I built the comprehensive backend infrastructure using
						Firebase&apos;s suite of tools, including Realtime Database for live
						collaboration features and Firestore for persistent data storage.
						The system is enhanced with Sentry for error tracking and PostHog
						for analytics, ensuring robust monitoring and valuable user
						insights. The frontend is built with Next.js, providing a modern and
						responsive user interface.
					</motion.p>
				</motion.section>

				<motion.section className="mt-16 space-y-4">
					<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
						{screenshots.map((src) => (
							<motion.div
								key={src}
								variants={variants}
								whileHover={{ scale: 1.02 }}
								onClick={() => setSelectedImage(src)}
								className="cursor-pointer overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
							>
								<Image
									src={src}
									alt="Quill Screenshot"
									width={800}
									height={450}
									className="w-full"
								/>
							</motion.div>
						))}
					</div>
				</motion.section>

				{/* Key Features section */}
				<motion.section className="mt-16 space-y-4">
					<motion.h2 className="text-3xl font-semibold text-[#FF6B35]">
						Key Features
					</motion.h2>
					<ul className="list-inside list-disc space-y-2 text-lg">
						{[
							"Real-time collaboration system for Unity game development teams",
							"Asset locking mechanism to prevent conflicting changes",
							"Commenting system for effective team communication",
							"Firebase Realtime Database for instant synchronization",
							"Firestore integration for reliable data persistence",
							"Firebase Functions for serverless backend operations",
							"Sentry integration for comprehensive error tracking",
							"PostHog analytics for user behavior insights",
							"Modern Next.js frontend with responsive design",
						].map((item) => (
							<motion.li
								key={item}
								custom={item}
								variants={listAnimationVariants}
								initial="offscreen"
								whileInView="onscreen"
								viewport={{ once: true, margin: "-50px" }}
							>
								{item}
							</motion.li>
						))}
					</ul>
				</motion.section>

				<motion.section variants={variants} className="mt-16 space-y-4">
					<motion.h2
						variants={variants}
						className="text-3xl font-semibold text-[#FF6B35]"
					>
						Tech Stack
					</motion.h2>
					<motion.div
						variants={techStackVariants}
						className="grid gap-4 sm:grid-cols-2"
					>
						{techStack.map((category) => (
							<motion.div
								key={category.label}
								variants={listItemVariants}
								className="rounded-lg border border-gray-200 p-4 shadow-sm transition-all dark:border-gray-700 dark:bg-gray-800/50"
							>
								<h3 className="mb-2 font-semibold dark:text-white">
									{category.label}
								</h3>
								<div className="flex items-center gap-2">
									{category.icons.map((Icon) => (
										<Icon.icon
											key={Icon.color}
											className={`h-6 w-6 ${Icon.color} dark:opacity-90`}
										/>
									))}
								</div>
								<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
									{category.stack}
								</p>
							</motion.div>
						))}
					</motion.div>
				</motion.section>

				<AnimatePresence>
					{selectedImage && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={() => setSelectedImage(null)}
							className="fixed inset-0 z-50 flex items-center justify-center bg-[#FF6B35]/80 p-4"
						>
							<motion.div
								initial={{ scale: 0.9 }}
								animate={{ scale: 1 }}
								exit={{ scale: 0.9 }}
								className="relative h-auto max-h-[90vh] w-auto max-w-[90vw]"
							>
								<button
									type="button"
									onClick={(e) => {
										e.stopPropagation();
										setSelectedImage(null);
									}}
									className="absolute -right-4 -top-4 z-50 rounded-full bg-white p-2 dark:bg-gray-900"
								>
									<X className="h-6 w-6" />
								</button>
								<Image
									src={selectedImage}
									alt="Screenshot"
									width={1920}
									height={1080}
									className="h-auto max-h-[85vh] w-auto rounded-lg object-contain"
								/>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</motion.div>
		</MaxWidthWrapper>
	);
};

export default QuillPage;
