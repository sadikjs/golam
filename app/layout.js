import "./globals.css";
// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.js
export const metadata = {
  title: "My Next.js App",
  description: "A sample Next.js application with multiple meta tags.",
  keywords: ["nextjs", "react", "web development"],
  authors: [{ name: "Your Name" }],
  // Add other meta tags as needed
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
