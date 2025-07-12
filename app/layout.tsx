import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EcoWear App",
  description: "EEcoWear - Sustainable Fashion Recommendations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
