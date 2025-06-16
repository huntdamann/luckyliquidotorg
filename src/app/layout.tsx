
import React, { lazy, Suspense } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Preloader } from '../components/Preloader'


import { getPageFiles } from "next/dist/server/get-page-files";
import { PreScreen } from "../components/Prescreen";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const LeckerliOne = localFont({
  src: "./fonts/LeckerliOne-Regular.woff",
  variable: "--font-main",
  weight: "100 900",
});
const Julius = localFont({
  src: "./fonts/JuliusSansOne-Regular.woff",
  variable: "--font-juju",
  weight: "100 900",
});
// const Fredoka = localFont({
//   src: "./fonts/Fredoka-VariableFont_wdth.ttf",
//   variable: "--font-fred",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "LuckyLiquid",
  description: "Homemade Tea Beverages",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
  
      <body
        className={`${geistSans.variable}  ${geistMono.variable} ${LeckerliOne.variable} ${Julius.variable} antialiased`}
      >
        

    
        <PreScreen />

        {children}
      </body>
     
    </html>
    </>
  );
}
