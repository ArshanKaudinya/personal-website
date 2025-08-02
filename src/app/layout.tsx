import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arshan Kaudinya",
  description:
    "Founder-grade portfolio. Building Promptly, Computer Science @ VIT. Product builder and ambitious creator.",
  icons: { 
    icon: "/pfp.jpg" 
  },
  openGraph: {
    title: "Arshan Kaudinya",
    description:
      "Founder-grade portfolio. Building Promptly, Computer Science @ VIT.",
    url: "https://arshankaudinya.com",
    siteName: "Arshan Kaudinya",
    images: [
      {
        url: "https://vsqruzzlzbuyzgatbzeo.supabase.co/storage/v1/object/sign/misc/pfp.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNGNiZDIzMi1iMjhhLTQwZDktOGYxNS1iNDMxMDQxMTJiNWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtaXNjL3BmcC5qcGciLCJpYXQiOjE3NTQxMTgwNTEsImV4cCI6MTg0ODcyNjA1MX0.eavAC-EHwBiy4_--Gw9_cpwJRvvKf0IoOzy4WH45mRE",
        width: 1200,
        height: 630,
        alt: "Arshan Kaudinya"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshan Kaudinya",
    description:
      "Founder-grade portfolio. Building Promptly, Computer Science @ VIT.",
    images: ["https://vsqruzzlzbuyzgatbzeo.supabase.co/storage/v1/object/sign/misc/pfp.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zNGNiZDIzMi1iMjhhLTQwZDktOGYxNS1iNDMxMDQxMTJiNWYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtaXNjL3BmcC5qcGciLCJpYXQiOjE3NTQxMTgwNTEsImV4cCI6MTg0ODcyNjA1MX0.eavAC-EHwBiy4_--Gw9_cpwJRvvKf0IoOzy4WH45mRE"]
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@300,400,500,700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="scroll-smooth bg-black/90 text-white  font-grotesk">
        {children}
      </body>
    </html>
  );
}

