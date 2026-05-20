import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

export const promptFont = Prompt({
  weight: ['400', '500', '700'],
  subsets: ['thai'],
  display: 'swap'
});


export const metadata: Metadata = {
  title: "ระบบ E-Commerce COSCI",
  description: "เรียนรู้การเขียน Nex.tjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${promptFont.className}`}
    >
      <body>
        <h1>Header Menu</h1>
        <hr />
        {children}
      </body>
    </html>
  );
}
