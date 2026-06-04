import type { Metadata } from "next";
import { Geist, Geist_Mono, } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "techgurlwhakee",
  description: "frontend developer,marketing strategist and video content creator",
  keywords: [
  "Next.js",
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Frontend Development",
  "Web Development",
  "UI/UX Design",
  "Tech Enthusiast",
  "Programming",
  "Software Development",
  "whakee",
  "techgurlwhakee",
  "uyo",
  "tech girl in uyo",
  "content creator in uyo",
  "marketing strategist in uyo",
],
  icons: {
    icon: "/techgurlwhakee.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
