// Import Type & Utilities
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// Import layout components
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

// Konfigurasi font (Inter)
const inter = Inter({subsets:['latin'],variable:'--font-sans'});

// SEO & Metadata
export const metadata: Metadata = {
  title: "Rekarya | Gadget Repair Service",
  description: "Solusi perbaikan gadget terpercaya dengan teknisi ahli.",
};

// Root layour component
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
