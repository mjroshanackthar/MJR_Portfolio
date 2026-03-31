import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "600", "700", "900"] });

export const metadata: Metadata = {
  title: "M J Roshan Ackthar | Creative Developer",
  description: "High-end scrollytelling personal portfolio website building premium digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-neutral-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
