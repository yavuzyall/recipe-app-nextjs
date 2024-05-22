import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/glogals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gourmet Guide",
  description: "Very delicious recipes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../../public/favicon.ico" sizes="32x32" />
        <title>Gourmet Guide</title>
      </head>
      <body className={inter.className}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
