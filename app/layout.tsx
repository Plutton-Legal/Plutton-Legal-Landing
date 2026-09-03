import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import LanguageProvider from "@/lib/i18n/LanguageProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "BCBL — Mejor Crédito, Mejor Vida",
  description:
    "BCBL te ayuda a disputar errores en tu reporte de crédito bajo las protecciones de la ley federal.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={plusJakartaSans.variable}>
      <body className="antialiased">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
          <StickyBar />
          {/* Spacer so StickyBar never covers footer content on mobile */}
          <div className="md:hidden h-[54px]" aria-hidden="true" />
        </LanguageProvider>
      </body>
    </html>
  );
}
