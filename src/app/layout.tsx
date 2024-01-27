import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  verification: {
    google: 'google'
  },
  title: "Juros compostos",
  description: "Calcule o quanto pode ganhar com juros compostos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-5560319928636009" />
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
    </>
  );
}
