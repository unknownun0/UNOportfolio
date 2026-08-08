"use client";

import { useState } from "react";
import { DATA } from "@/lib/data";

const tag = (name, level) => (
  <span className="skill-tag">
    {name} <b style={{ color: "#8ee7a0" }}>({level})</b>
  </span>
);

function alertDetail(title) {
  const hit = [...DATA.certifications, ...DATA.projects].find((x) => x.title === title);
  alert("[DETAILS] " + title + "\n" + (hit ? hit.meta : ""));
}

const icon = (label) => <span className="icon">{label.slice(0, 1).toUpperCase()}</span>;

const ContactList = Object.values(DATA.contact).map((c) => (
  <li key={c.label}>
    {icon(c.label)}
    {c.value}
  </li>
));

const InterestTags = DATA.profile.interests.map((i) => (
  <span className="interest" key={i}>
    {i}
  </span>
));

export default function MobileApp({ onResume }) {
  const [activeTab, setActiveTab] = useState("Home");

  const p = DATA.profile;

  return (
    <>
      {/* mobile top bar */}
      <div className="m-obar">
        <div className="logo">
          <span className="logo-stamp">AG</span>
        </div>
        <div className="m-right">
          <span className="status-badge">
            <span className="dot" />
            <span className="m-status-text">Active for Work</span>
          </span>
          <button className="btn" onClick={onResume}>
            Resume
          </button>
        </div>
      </div>

      {/* tab content */}
      <div className="m-app">
        {/* HOME */}
        <section className={`m-panel ${activeTab === "Home" ? "active" : ""}`}>
          <div className="label-tab">Image Profile</div>
          <div className="profile-img" style={{ height: 170 }}>
            <span className="img-label">IMAGE PROFILE</span>
          </div>

          <div className="label-tab">Contact Information</div>
          <div className="box tabbed">
            <ul className="contact-list">{ContactList}</ul>
          </div>

          <div className="label-tab">Dossier Subject</div>
          <div className="box tabbed">
            <div className="field">
              <div className="label-tab">Name</div>
              <div className="field-value redacted-name">{p.name}</div>
            </div>
            <div className="field">
              <div className="label-tab">Birthday</div>
              <div className="field-value mono">{p.birthday}</div>
            </div>
            <div className="field">
              <div className="field-value quote">{p.quote}</div>
            </div>
            <div className="field">
              <div className="label-tab">Bio</div>
              <div className="field-value">{p.bio}</div>
            </div>
            <div className="field">
              <div className="label-tab">Interests</div>
              <div className="field-value" style={{ padding: 12 }}>
                <div className="interests">{InterestTags}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className={`m-panel ${activeTab === "About" ? "active" : ""}`}>
          <div className="label-tab">Certification</div>
          <div className="box tabbed">
            {DATA.certifications.map((c, i) => (
              <div className="row" key={c.title} style={{ marginBottom: 6 }}>
                <div className="thumb">IMG CERT {i + 1}</div>
                <div className="row-body">
                  <div className="row-title">{c.title}</div>
                  <div className="row-sub">{c.meta}</div>
                </div>
                <button className="btn small" onClick={() => alertDetail(c.title)}>
                  Details / View More
                </button>
              </div>
            ))}
          </div>

          <div className="label-tab">Education</div>
          <div className="box tabbed">
            {DATA.education.map((e) => (
              <div className="edu-entry" key={e.school}>
                <div className="edu-school">{e.school}</div>
                <div className="edu-years">{e.years}</div>
                <div className="edu-prog">{e.program}</div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECT */}
        <section className={`m-panel ${activeTab === "Project" ? "active" : ""}`}>
          <div className="label-tab">Project</div>
          <div className="box tabbed">
            {DATA.projects.map((pj, i) => (
              <div
                className="row"
                key={pj.title}
                style={{ flexDirection: "column", alignItems: "stretch" }}
              >
                <div className="thumb" style={{ width: "100%", height: 70 }}>
                  IMG PROJ {i + 1}
                </div>
                <div className="row-body" style={{ marginTop: 8 }}>
                  <div className="row-title">{pj.title}</div>
                  <div className="row-sub">{pj.meta}</div>
                </div>
                <button
                  className="btn small"
                  style={{ alignSelf: "flex-start" }}
                  onClick={() => alertDetail(pj.title)}
                >
                  Details / View More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section className={`m-panel ${activeTab === "Skills" ? "active" : ""}`}>
          {DATA.skills
            .filter((s) => s.tags && s.tags.length > 0)
            .map((s) => (
              <div
                className="skill-card"
                key={s.category}
                style={{ width: "100%", flex: "none", marginBottom: 12 }}
              >
                <h3>{s.category}</h3>
                <div className="skill-tags">{s.tags.map((t) => tag(t[0], t[1]))}</div>
              </div>
            ))}
        </section>
      </div>

      {/* bottom nav */}
      <nav className="m-nav">
        {["Home", "About", "Project", "Skills"].map((name) => (
          <button
            key={name}
            className={`m-tab ${activeTab === name ? "active" : ""}`}
            onClick={() => setActiveTab(name)}
          >
            {name}
          </button>
        ))}
      </nav>
    </>
  );
}
