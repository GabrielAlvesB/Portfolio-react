import { Orbitron } from "next/font/google";
import "./globals.css";

import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import WhatsAppButton from "../components/whatsapp/WhatsAppButton";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://gabrielalves.dev"),
  title: "Gabriel Alves — Desenvolvedor Front-end",
  description:
    "Portfólio de Gabriel Alves Batista, desenvolvedor front-end especializado em React, Next.js e TypeScript.",
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={orbitron.variable}>
      <body>
        <NavBar />
        <div className="container">{children}</div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
