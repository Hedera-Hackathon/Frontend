import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./output.css";
import { Web3Modal } from "@/context/Web3Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nirbhik",
  description: "Aid for Every Need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  );
}
