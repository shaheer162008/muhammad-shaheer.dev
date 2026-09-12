import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Shaheer — Full Stack Developer",
  description: "Portfolio of Muhammad Shaheer, a Full Stack Developer with 3+ years building TypeScript, Next.js and AI-powered products for SMBs and government clients.",
  keywords: ["Full Stack Developer", "Next.js", "React", "TypeScript", "AI", "Karachi", "Muhammad Shaheer"],
  authors: [{ name: "Muhammad Shaheer", url: "https://muhammad-shaheer.dev" }],
  openGraph: {
    title: "Muhammad Shaheer — Full Stack Developer",
    description: "Building TypeScript, Next.js and AI-powered products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#101010",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
