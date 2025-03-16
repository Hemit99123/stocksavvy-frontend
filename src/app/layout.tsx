import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stock Savvy",
  description:
    "Stock Savvy is a financial literacy initiative that helps young and aspiring high school students learn about financial concepts such as saving and spending, teaches investment strategies, and provides steps to become a successful investor. Our mission revolves around teaching you how to maintain your MONEY, and how to grow it over time! Join us on this meaningful journey of learning together",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleOAuthProvider clientId="349763756076-d3e7heso49g7guilorqri9k3n2u3krbm.apps.googleusercontent.com">
          <Suspense>
              {children}
          </Suspense>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
