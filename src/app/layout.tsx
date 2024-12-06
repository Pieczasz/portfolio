// Tailwind
import "@/styles/globals.css";

// Font and metadata
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

// tRPC provider and page transition wrapper
import { TRPCReactProvider } from "@/trpc/react";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Piekarz",
  description:
    "Portfolio of Full-Stack Developer / UI & UX Designer Bartłomiej Piekarz",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-h-screen">
        <TRPCReactProvider>
          <Header />
          <PageTransitionWrapper>
            <main>{children}</main>
          </PageTransitionWrapper>
          <Footer />
        </TRPCReactProvider>
      </body>
    </html>
  );
}
