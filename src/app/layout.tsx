import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from '@next/font/google'
import "./globals.css";
import Header from "../components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700']
})

export const metadata: Metadata = {
  title: "Guaxuma's Burguer",
  description: "O melhor da cidade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="pt-br">

      <body className={roboto.className}>

        <Header />

        {children}

        <Footer />

      </body>

    </html>
  );
}
