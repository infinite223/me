import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dawid Szmigiel",
  description: "Dawid Szmigiel IT Solutions",
  icons: [{ url: "/favicon.png", type: "image/png" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const messages = await getMessages();

  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased max-md:overflow-y-auto">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
