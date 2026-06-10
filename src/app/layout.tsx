import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Electech Engineering Solutions LTD | Urban & Industrial Infrastructure",
  description: "Electech Engineering Solutions LTD delivers electrical engineering, renewable energy, telecommunications, ICT infrastructure, and industrial automation solutions across Uganda and East Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${robotoMono.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          precedence="default"
        />
      </head>
      <body className="bg-industrial-950 text-industrial-400 font-sans antialiased selection:bg-hazard-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
