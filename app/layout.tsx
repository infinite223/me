import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dawid Szmigiel",
  description: "Dawid Szmigiel IT Solutions",
  icons: [{
    url: '/favicon.png',
    type: 'image/png' 
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={` font-sans antialiased max-md:overflow-y-auto`}>
        <div className="flex p-5 pr-0 max-md:pr-3 max-md:p-3 gap-3 max-md:flex-col">
          <Sidebar />
          <main className="flex-1 md:overflow-y-auto scroll-smooth px-6 max-md:px-2 py-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
