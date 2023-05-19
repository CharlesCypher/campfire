import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Portfolio Template",
  description: "Created with next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://api.fontshare.com/v2/css?f[]=clash-display@1&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="">{children}</body>
    </html>
  );
}
