import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import "./globals.css";

import { Providers } from "./Providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Appointment Manager",
  description: "A simple appointment manager",
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <>
      <html lang={locale} suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>{children}</Providers>
        </body>
      </html>
    </>
  );
}
