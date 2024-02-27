import type { Metadata } from "next";
import { Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import localFont from "next/font/local";
import "@/styles/animation.css";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "700"],
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
  weight: "400",
});

const gotham = localFont({
  src: [
    { path: "../../public/fonts/Gotham-Font/Gotham-Black.otf", weight: "700" },
    { path: "../../public/fonts/Gotham-Font/GothamBook.ttf", weight: "400" },
  ],
  display: "swap",
  variable: "--font-gotham",
});

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
        className={`${poppins.variable} ${gotham.variable} ${bebas.variable} vsc-initialized min-h-screen min-w-full bg-black font-body text-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
      <Script src="thunder-group/js/nav.js"></Script>
      <Script
        strategy="lazyOnload"
        type="module"
        src="thunder-group/js/video-background.js"
      ></Script>
      <Script src="thunder-group/js/util.js" defer></Script>
    </html>
  );
}
