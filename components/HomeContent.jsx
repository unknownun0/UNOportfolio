"use client";

import Image from "next/image";
import { DATA } from "@/lib/data";

const icon = (label) => <span className="icon">{label.slice(0, 1).toUpperCase()}</span>;

export default function HomeContent() {
  const p = DATA.profile;

  return (
    <section className="page-section fade">
      <div className="home-grid">
        {/* LEFT COLUMN */}
        <div className="home-left">
          <div className="m-tab-title">TOP SECRET // PERSONNEL DOSSIER</div>

          <div className="label-tab">Image Profile</div>
          <div className="profile-img">
            <Image src={p.photo} alt="Profile" fill sizes="100vw" style={{ objectFit: "cover" }} priority />
          </div>

          <div className="label-tab">Contact Information</div>
          <div className="box tabbed">
            <ul className="contact-list">
              {Object.values(DATA.contact).map((c) => (
                <li key={c.label}>
                  {icon(c.label)}
                  {c.value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="home-right">
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
                <div className="interests">
                  {p.interests.map((i) => (
                    <span className="interest" key={i}>
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}