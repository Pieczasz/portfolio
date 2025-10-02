"use client";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { motion } from "motion/react";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

interface WorkExperience {
	company: string;
	position: string;
	duration: string;
	location: string;
	description: string[];
	technologies?: string[];
	link?: string;
}

const workExperiences: WorkExperience[] = [
	{
		company: "Quill",
		position: "Backend & Frontend Developer",
		duration: "August 2025 - Present",
		location: "Remote",
		description: [
			"Built comprehensive backend infrastructure using Firebase Realtime Database for live collaboration and Firestore for persistent data storage",
			"Developed real-time collaboration features allowing Unity teams to lock assets, preventing conflicting changes during development",
			"Implemented commenting and notes system that enables developers to write feedback directly in Unity with instant synchronization across all team members",
			"Integrated Sentry for error tracking and PostHog for analytics, ensuring robust monitoring and valuable user insights",
			"Created modern Next.js frontend providing responsive interface for managing collaboration workflows",
		],
		technologies: [
			"Next.js",
			"TypeScript",
			"Node.js",
			"Firebase",
			"Firestore",
			"Firebase Functions",
			"Sentry",
			"PostHog",
			"Unity Integration",
		],
	},
	{
		company: "TheWidlarzGroup",
		position: "React Native Developer",
		duration: "May 2025 - Present",
		location: "Kraków, Poland (Hybrid)",
		description: [
			"Implemented and maintained native modules for React Native, focusing on cross-platform video functionalities",
			"Maintained and extended the react-native-video library, leading development of its native implementations in Swift (iOS) and Kotlin (Android)",
			"Designed and built a server for stream-downloader, a library enabling offline video playback",
			"Developed features in stream-downloader to support downloading and offline playback of HLS, DASH, MP4, and DRM-protected video content",
		],
		technologies: [
			"React Native",
			"Swift",
			"Kotlin",
			"TypeScript",
			"HLS",
			"DASH",
			"Video Streaming",
			"DRM",
		],
	},
	{
		company: "Outlier",
		position: "AI Developer (Freelance AI Trainer)",
		duration: "Apr 2025 - Aug 2025",
		location: "United States (Remote)",
		description: [
			"Work as a freelance AI trainer, helping improve how AI understands and writes code",
			"Write effective prompts for AI systems and optimize their performance",
			"Review AI-generated code as well as code from other contributors for quality and accuracy",
			"Rate, fix, and improve code when needed to maintain high standards",
			"Contribute to training datasets that enhance AI model capabilities in software development",
		],
		technologies: [
			"JavaScript",
			"TypeScript",
			"React.js",
			"Python",
			"Code Review",
			"AI Training",
			"Prompt Engineering",
		],
	},
	{
		company: "InnoBee",
		position: "Product Developer (Frontend Developer)",
		duration: "Mar 2025 - Jun 2025",
		location: "Netherlands (Remote)",
		description: [
			"Contributed to developing and enhancing web applications using modern technologies like Next.js, React, TypeScript, and Tailwind CSS",
			"Focused on building responsive user interfaces and collaborating with the team to deliver clean, scalable solutions",
			"Stayed current with frontend trends and implemented best practices for modern web development",
			"Worked on innovation management platform features to improve user experience and functionality",
		],
		technologies: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"JavaScript",
			"HTML5",
			"CSS3",
		],
	},
	{
		company: "Freelance Projects",
		position: "Full Stack Developer",
		duration: "2023 - Present",
		location: "Remote",
		description: [
			"Designed and developed custom web applications including CleanupHub, Shared Alarm, and Trapla",
			"Created modern, responsive user interfaces with focus on exceptional user experience",
			"Built full-stack solutions using React, Next.js, tRPC, and various database technologies",
			"Delivered end-to-end solutions from initial concept to deployment and maintenance",
			"Managed multiple client projects simultaneously while maintaining high quality standards",
		],
		technologies: [
			"React",
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Prisma",
			"tRPC",
			"PostgreSQL",
			"Figma",
		],
	},
];

const WorkExperience = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.5,
				ease: "easeOut",
			},
		},
	};

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#57A464]">
						Work Experience
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						My professional journey in full-stack development and Mobile
						Development
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="space-y-6"
				>
					{workExperiences.map((experience) => (
						<motion.div
							key={`${experience.company}-${experience.position}`}
							variants={cardVariants}
						>
							<Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-[#57A464]">
								<CardHeader>
									<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
										<div className="flex-1">
											<CardTitle className="text-xl sm:text-2xl font-semibold flex items-center gap-2">
												{experience.company}
												{experience.link && (
													<ExternalLink className="h-4 w-4 text-muted-foreground" />
												)}
											</CardTitle>
											<CardDescription className="text-lg font-medium text-[#57A464] mt-1">
												{experience.position}
											</CardDescription>
										</div>
										<div className="flex flex-col sm:text-right gap-1">
											<div className="flex items-center gap-2 text-sm text-muted-foreground">
												<CalendarDays className="h-4 w-4" />
												{experience.duration}
											</div>
											<div className="flex items-center gap-2 text-sm text-muted-foreground">
												<MapPin className="h-4 w-4" />
												{experience.location}
											</div>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<ul className="space-y-2 mb-4">
										{experience.description.map((item) => (
											<li
												key={item.substring(0, 30)}
												className="flex items-start gap-2"
											>
												<span className="text-[#57A464] font-bold mt-1">•</span>
												<span className="text-muted-foreground">{item}</span>
											</li>
										))}
									</ul>
									{experience.technologies && (
										<div className="flex flex-wrap gap-2 mt-4">
											{experience.technologies.map((tech) => (
												<span
													key={tech}
													className="px-3 py-1 bg-[#57A464]/10 text-[#57A464] border border-[#57A464]/20 rounded-full text-sm font-medium"
												>
													{tech}
												</span>
											))}
										</div>
									)}
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default WorkExperience;
