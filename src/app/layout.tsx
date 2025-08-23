// Tailwind
import "@/styles/globals.css";

// Font and metadata
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

// Page transition wrapper
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata: Metadata = {
	title: "Bartłomiej Piekarz - Portfolio",
	description:
		"Portfolio of Full-Stack Developer / UI & UX Designer Bartłomiej Piekarz",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html
			lang="en"
			className={`${GeistSans.variable}`}
			suppressHydrationWarning
		>
			<body className="min-h-screen font-sans antialiased">
				<ThemeProvider>
					<Header />
					<PageTransitionWrapper>
						<main>{children}</main>
					</PageTransitionWrapper>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
