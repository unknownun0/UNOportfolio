"use client";

import { DATA } from "@/lib/data";

const tag = (name, level) => (
  <span className="skill-tag">
    {name} <b style={{ color: "#8ee7a0" }}>({level})</b>
  </span>
);

export default function SkillsStrip() {
  return (
    <section className="skills-strip fade" id="skills-strip-desktop">
      {DATA.skills.map((s) => (
        <article className="skill-card fade" key={s.category}>
          <h3>{s.category}</h3>
          <div className="skill-tags">
            {s.tags.map((t) => tag(t[0], t[1]))}
          </div>
        </article>
      ))}
    </section>
  );
}
