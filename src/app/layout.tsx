import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Repo TS Support",
  description: "A Next.js TypeScript fullstack application for testing PR review workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

