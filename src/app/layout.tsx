"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Tipan</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
