import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dawid Szmigiel",
  description: "Dawid Szmigiel IT Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-md:overflow-y-auto`}
      >
        <div className="flex p-5 pr-0 max-md:mr-5 gap-3 max-md:flex-col">
          <Sidebar />
          <main className="flex-1 md:overflow-y-auto scroll-smooth px-6 max-md:px-2 py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
