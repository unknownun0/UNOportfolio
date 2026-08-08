"use client";

import { useEffect } from "react";

export default function FadeObserver() {
  useEffect(() => {
    const iObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            iObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".fade").forEach((el) => iObs.observe(el));
    return () => iObs.disconnect();
  }, []);

  return null;
}