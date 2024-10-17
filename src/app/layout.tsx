import type { Metadata } from "next";
import { Recursive } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Providers from "@/components/Providers";

const recursive = Recursive({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Texto Certo - API",
  description: "Serviço para análise e detecção de conteúdo impróprio em textos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${recursive.className} antialiased`}
      >
        <Navbar />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
