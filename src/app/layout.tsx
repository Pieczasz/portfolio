import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Header from "@/components/Header";
import PageTransitionWrapper from "@/components/PageTransitionWrapper";

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
        </TRPCReactProvider>
      </body>
    </html>
  );
}
