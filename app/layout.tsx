import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Affectiv Overview",
  description:
    "An overview of the Affectiv app and form to stay in the loop for Affectiv updates",

  // Adaptive theme colors for iOS Safari + modern browsers
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "hsl(var(--primary))",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "hsl(var(--primary))",
    },
  ],

  // iOS Safari Dynamic Island / status bar styling
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
