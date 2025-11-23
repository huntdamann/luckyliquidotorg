import React, {  } from "react";
import type { Metadata } from "next";
import "./globals.css";
import { PreScreen } from "../components/ui/Prescreen";


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
  
      <body
        className={` antialiased`}
      >
        

    
        <PreScreen />

      <main>

        {children}
      </main>

      </body>
     
    </html>
    </>
  );
}
