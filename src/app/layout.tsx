import React, {  } from "react";
import type { Metadata, } from "next";
import  Head  from "next/head";
import "./globals.css";
import { PreScreen } from "../components/ui/Prescreen";
import LenisScrollProvider  from '@/lib/lenis'


export const metadata: Metadata = {
  title: "Lucky Liquid",
  description: "Homemade Tea Beverages & Tea Blends",
};




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <Head>
      <link
          href="https://fonts.googleapis.com/css?family=Fredoka+One"
          rel="stylesheet"
        />

      </Head>
  
      <body
        className={` antialiased`}
      >
        

    
        <PreScreen />

      <main>

      <LenisScrollProvider>

          {children}

      </LenisScrollProvider>
      </main>

      </body>
     
    </html>
    </>
  );
}
