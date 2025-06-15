import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/Particles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Automation Hub",
  description: "Yapay zeka entegrasyonları ve otomasyonları ile işinizi geleceğe taşıyın. NLP, görüntü işleme ve veri analizi çözümleri.",
  keywords: [
    "yapay zeka",
    "otomasyon",
    "n8n",
    "AI",
    "automation",
    "integration",
    "NLP",
    "görüntü işleme",
    "veri analizi",
    "yapay zeka entegrasyonu",
    "iş otomasyonu"
  ],
  authors: [{ name: "AI Automation Hub" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0A192F",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ai-automation-hub.com",
    title: "AI Automation Hub",
    description: "Yapay zeka entegrasyonları ve otomasyonları ile işinizi geleceğe taşıyın",
    siteName: "AI Automation Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Hub",
    description: "Yapay zeka entegrasyonları ve otomasyonları ile işinizi geleceğe taşıyın",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <div className="geometric-pattern" />
        <ParticlesBackground />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
