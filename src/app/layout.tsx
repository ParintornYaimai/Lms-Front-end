import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";


import { Archivo } from 'next/font/google'

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EDU WING - Free Educational",
  description: "Free Educational Website",
   icons: {
    icon: "/favicon-16x16.png", 
  }
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode;}>){

  return (
    <html lang="en">
      <body className={`${archivo.className} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
