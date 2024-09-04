import { Raleway } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "./components/Navbar";
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Adam Durigon",
  description: "Portfolio Adam Durigon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Portfolio Adam Durigon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={raleway.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
