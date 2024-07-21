import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const vietnam = Be_Vietnam_Pro({ weight: '400', subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pacific Hunt CRM",
  description: "A CRM software for Pacific Hunt",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vietnam.className}>{children}</body>
    </html>
  );
}
