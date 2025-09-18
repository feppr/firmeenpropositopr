import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FEP Real Estate — Firme en Propósito",
  description: "Rehabilitamos casas olvidadas junto a inversionistas locales. Hogares renovados para nuestra gente en Puerto Rico.",
  metadataBase: new URL("https://firmeenpropositopr.com"),
  openGraph: { title: "FEP Real Estate", description: "Firme en Propósito", images: ["/logo.jpg"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
