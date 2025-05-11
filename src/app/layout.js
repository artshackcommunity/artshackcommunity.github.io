import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Artshack Community",
  description: "Protect the Artshack Mission",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <!-- HTML Meta Tags --> */}
      <title>Artshack Community</title>
      <meta name="description" content="Protect the Artshack Mission" />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://artshackcommunity.org" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Artshack Community" />
      <meta property="og:description" content="Protect the Artshack Mission" />
      <meta property="og:image" content="" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="artshackcommunity.org" />
      <meta property="twitter:url" content="https://artshackcommunity.org" />
      <meta name="twitter:title" content="Artshack Community" />
      <meta name="twitter:description" content="Protect the Artshack Mission" />
      <meta name="twitter:image" content="" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
