import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./output.css";
import { Web3Modal } from "@/context/Web3Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nirvik - Aid For Every Need",
  description: "Nirvik : Aid For Every Need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Web3Modal>{children}</Web3Modal>
      </body>
    </html>
  );
}
