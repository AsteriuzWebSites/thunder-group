import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thunder Group",
  description: "Bem Vindo ao Novo | Estrategista digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} vsc-initialized min-h-screen min-w-full bg-black`}
      >
        {children}
      </body>
      <Script
        strategy="lazyOnload"
        type="module"
        src="js/video-background.js"
      ></Script>
    </html>
  );
}
