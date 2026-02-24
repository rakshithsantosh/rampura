import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Rampura Organics | Certified Trust from Indian Soil",
  description: "Premium organic farming brand rooted in Indian heritage. Chemicals-free, farm-to-table, and community-driven.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.variable} ${fraunces.variable} antialiased bg-[var(--background)] text-[var(--foreground)] font-sans`}
      >
        <NoiseOverlay />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
