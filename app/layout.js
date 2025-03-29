import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // Import Next.js Script for external scripts

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "save you password",
  description: "you don't need to remember password",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Include Lordicon script */}
        <Script
          src="https://cdn.lordicon.com/lordicon.js"

        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
