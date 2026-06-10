import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../src/index.css";

export const metadata: Metadata = {
  title: "Nails By Cris",
  description:
    "Salón de uñas con estética moderna y elegante, servicios de acrílico, gelish y diseños personalizados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
