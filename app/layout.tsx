import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import styles from "./page.module.css"
import Footer from "@/components/footer";
import Header from "@/components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NextLevel Foodies",
  description: "Delicious meals, shared by a food-loving community of homecooks and pros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.page}>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
