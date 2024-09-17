import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google"
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const metadata: Metadata = {
  title: "Guaxuma's Burguer",
  description: "O melhor da cidade",
};

export default function RootLayout({
  children,
  isOpen // Receive isOpen as a prop
}: Readonly<{
  children: React.ReactNode;
  isOpen: boolean;
}>) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children}
        {/* Render Footer conditionally based on isOpen from Header */}
        {isOpen && <Footer />}
      </body>
    </html>
  );
}