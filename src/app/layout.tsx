"use client";
import { useEffect } from "react";
import AOS from "aos";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
