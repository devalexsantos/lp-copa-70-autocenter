import type { Metadata } from "next";
import { Carlito } from "next/font/google";
import "./globals.css";

const carlito = Carlito({
  variable: "--font-carlito-sans",
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "Copa 70 Auto Center",
  description: "Auto Center no Shopping da Bahia com preço de oficina de rua",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${carlito.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
