import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import {NavLinks} from "@/components/NavLinks/NavLinks";

const geistSans = localFont({
  src: "../resources/fonts/GeistVF.woff", // TODO: Replace with non-relative link if possible (like imports can be defined by typescript maybe?)
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../resources/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nick Reuter | Software Engineer",
  description: "Nick Reuter is a Software Engineer who loves creating great experiences for people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <header>
        <NavLinks/>
      </header>
      {children}
    </body>
    </html>
  );
}
