"use client";

import { DATA } from "@/lib/data";

const tag = (name, level) => (
  <span className="skill-tag">
    {name} <b style={{ color: "#8ee7a0" }}>({level})</b>
  </span>
);

export default function SkillsContent() {
  return (
    <section className="page-section fade">
      <div className="label-tab">Skills</div>
      <div className="skills-list">
        {DATA.skills.map((s) => (
          <div className="skill-card" key={s.category}>
            <h3>{s.category}</h3>
            <div className="skill-tags">{s.tags.map((t) => tag(t[0], t[1]))}</div>
          </div>
        ))}
      </div>
    </section>
  );
}