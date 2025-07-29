import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/subcomponents/Navbar";


const heroFont = DM_Serif_Display({
  variable: "--font-hero",
  subsets:["latin"],
  weight: '400'
})

const secondaryFont = Inter({
  variable:'--font-sub_hero',
  subsets:['latin'],
  weight:["100","200","300","400","500"]
})



export const metadata: Metadata = {
  title: "Hikari(光)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heroFont.variable} ${secondaryFont.variable} 
        antialiased w-full h-[100dvh] relative`}
      >
        {children}
        <Navbar/>
      </body>
    </html>
  );
}
