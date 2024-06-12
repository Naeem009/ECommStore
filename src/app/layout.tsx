import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer/page";
import Header from "./header/page";
import Navigation from "./navigation/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jamal Din",
  description: "E-Commerce Store Try using API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
    <body className={inter.className}>
    <Header/>
    <Navigation/>
      {children}
    <Footer/>
      </body>
    </html>
  );
}
