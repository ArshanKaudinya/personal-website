import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import GlobalLoader from "@/components/GlobalLoader";
import SiteNav from "@/components/SiteNav";
import AccessibilityWidget from "@/components/AccessibilityWidget";

const cabinetGrotesk = localFont({
  src: [
    { path: "../fonts/cabinet-grotesk/cabinet-grotesk-400.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cabinet-grotesk/cabinet-grotesk-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cabinet-grotesk/cabinet-grotesk-700.woff2", weight: "700", style: "normal" },
    { path: "../fonts/cabinet-grotesk/cabinet-grotesk-800.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}document.documentElement.classList.add('js');})();`;

const a11yScript = `(function(){try{var p=JSON.parse(localStorage.getItem('a11y')||'{}');var m={font:'a11y-font',spacing:'a11y-spacing',large:'a11y-large',links:'a11y-links',mask:'a11y-mask'};var r=document.documentElement;for(var k in m){if(p[k])r.classList.add(m[k]);}}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://arshankaudinya.com"),
  title: "Arshan Kaudinya",
  description: "curious what Arshan is up to?",
  icons: {
    icon: "/pfp.jpeg",
  },
  openGraph: {
    title: "Arshan Kaudinya",
    url: "https://arshankaudinya.com",
    siteName: "Arshan Kaudinya",
    images: [
      {
        url: "/pfp.jpeg",
        width: 747,
        height: 996,
        alt: "Arshan Kaudinya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshan Kaudinya",
    description: "curious what Arshan is up to?",
    images: ["/pfp.jpeg"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cabinetGrotesk.variable} ${lora.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script dangerouslySetInnerHTML={{ __html: a11yScript }} />
      </head>
      <body className="scroll-smooth antialiased">
        <GlobalLoader />
        <div className="j-container">
          <SiteNav />
          {children}
          <footer
            className="mt-18 border-t pt-7 text-left"
            style={{
              borderColor: "var(--border)",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "14px",
              color: "var(--faint)",
            }}
          >
            © {new Date().getFullYear()} · arshan kaudinya
          </footer>
        </div>
        <AccessibilityWidget />
        <Analytics />
      </body>
    </html>
  );
}
