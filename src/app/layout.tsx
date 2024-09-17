import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google"
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";
import { LayoutProps } from "../../.next/types/app/layout";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const metadata: Metadata = {
  title: "Guaxuma's Burguer",
  description: "O melhor da cidade",
};

export default function RootLayout({ children } : LayoutProps ) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children}
        {/* Render Footer conditionally based on isOpen from Header */}
        <Footer />
      </body>
    </html>
  );
}