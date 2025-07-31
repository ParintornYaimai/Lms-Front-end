import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { Archivo } from 'next/font/google'
import ReactQueryProvider from "./ReactQueryProvider";
import 'react-toastify/dist/ReactToastify.css';


const archivo = Archivo({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
})

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
      <body className={`${archivo.className} antialiased`}>
        <ReactQueryProvider>
          <ClientLayout>{children}</ClientLayout>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
