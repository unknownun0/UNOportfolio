"use client";

import { DATA } from "@/lib/data";

export default function FooterBar() {
  return (
    <footer className="footer-bar">
      <span className="footer-stage">&#9679; Portfolio still in progress</span>
      <span className="footer-copy">
        Developer: {DATA.profile.name} {new Date().getFullYear()}
      </span>
      <span className="footer-offer">Happy to work on your future project &#9654;</span>
    </footer>
  );
}
