import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080c14",
};

export const metadata: Metadata = {
  title: "Harshvardhan Wadavane | Software Development Engineer",
  description:
    "Portfolio of Harshvardhan Rajkumar Wadavane - Software Development Engineer specializing in Enterprise Distributed Systems, Digital Factory/PLM platforms, Next.js, Spring Boot, ASP.NET Core, and GenAI.",
  keywords: [
    "Harshvardhan Wadavane",
    "Harshvardhan Rajkumar Wadavane",
    "Software Engineer",
    "Full Stack Engineer",
    "Distributed Systems",
    "Spring Boot",
    "ASP.NET Core",
    "Next.js",
    "Three.js",
    "Siemens NX",
    "GenAI",
    "Pune SDE",
  ],
  authors: [{ name: "Harshvardhan Rajkumar Wadavane" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#080c14] text-slate-100 font-sans selection:bg-blue-600 selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
