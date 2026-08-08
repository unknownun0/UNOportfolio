"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { downloadResume } from "@/lib/download";

const TABS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Project", href: "/project" },
  { name: "Skills", href: "/skills" },
];

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function AppChrome() {
  const pathname = usePathname();

  return (
    <>
      <header className="topnav-desktop">
        <button className="nav-pill" onClick={scrollTop}>
          My Portfolio
        </button>
        <div className="nav-right">
          <span className="status-badge">
            <span className="dot" /> Active for Work
          </span>
          <Link className="nav-link" href="/about">
            Education Background
          </Link>
          <button className="btn" onClick={downloadResume}>
            Resume Download &#11015;
          </button>
        </div>
      </header>

      <nav className="m-nav" aria-label="Sections">
        {TABS.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className={`m-tab ${pathname === t.href ? "active" : ""}`}
          >
            {t.name}
          </Link>
        ))}
      </nav>
    </>
  );
}