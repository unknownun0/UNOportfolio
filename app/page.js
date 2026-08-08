"use client";

import { useEffect } from "react";
import TopNav from "@/components/TopNav";
import DossierPanel from "@/components/DossierPanel";
import SkillsStrip from "@/components/SkillsStrip";
import FooterBar from "@/components/FooterBar";
import MobileApp from "@/components/MobileApp";
import { DATA } from "@/lib/data";

function downloadResume() {
  const lines = [
    "RESUME // " + DATA.profile.name,
    "==============================",
    "Name: " + DATA.profile.name,
    "Birthday: " + DATA.profile.birthday,
    "",
    "EDUCATION",
    DATA.education
      .map((e) => "- " + e.school + " (" + e.years + ") — " + e.program)
      .join("\n"),
    "",
    "SKILLS",
    DATA.skills
      .map((s) => "- " + s.category + ": " + s.tags.map((t) => t[0] + " (" + t[1] + ")").join(", "))
      .join("\n"),
    "",
    "CERTIFICATIONS",
    DATA.certifications
      .map((c) => "- " + c.title + " — " + c.meta)
      .join("\n"),
  ].join("\n");
  const blob = new Blob([lines], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "resume.txt";
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function Page() {
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

  return (
    <>
      <TopNav onResume={downloadResume} />
      <div className="desktop-shell">
        <main className="wrapper">
          <DossierPanel />
          <SkillsStrip />
        </main>
        <FooterBar />
      </div>
      <MobileApp onResume={downloadResume} />
    </>
  );
}