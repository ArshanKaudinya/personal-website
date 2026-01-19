"use client";

import { useState, useEffect } from "react";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let pending = 0;

    const waitForImages = () => {
      const images = Array.from(document.images);
      pending += images.length;

      if (images.length === 0) return;

      const done = () => {
        pending--;
        if (pending === 0) setLoading(false);
      };

      images.forEach((img) => {
        if (img.complete) {
          pending--;
        } else {
          img.addEventListener("load", done);
          img.addEventListener("error", done);
        }
      });
    };

    const waitForFonts = () => {
      pending++;
      document.fonts.ready.then(() => {
        pending--;
        if (pending === 0) setLoading(false);
      });
    };

    const waitForDOM = () => {
      if (document.readyState === "complete") return;
      pending++;
      window.addEventListener("load", () => {
        pending--;
        if (pending === 0) setLoading(false);
      });
    };

    waitForImages();
    waitForFonts();
    waitForDOM();

    if (pending === 0) setLoading(false);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-700 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="loader" />
    </div>
  );
}
