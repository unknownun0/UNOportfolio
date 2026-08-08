"use client";

import Image from "next/image";
import { DATA } from "@/lib/data";

function ProfileImage() {
  return (
    <div className="profile-img">
      <Image
        src={DATA.profile.photo}
        alt="Profile"
        fill
        sizes="(max-width: 1180px) 50vw, 20vw"
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}

function ContactBox() {
  return (
    <div className="box" style={{ marginTop: 18 }}>
      <div className="label-tab">Contact Information</div>
      <div className="box tabbed">
        <ul className="contact-list">
          {Object.values(DATA.contact).map((c) => (
            <li key={c.label}>
              <span className="icon">{c.label.slice(0, 1).toUpperCase()}</span>
              <a href="#" onClick={(e) => e.preventDefault()}>
                {c.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CenterInfo() {
  const p = DATA.profile;
  return (
    <>
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
    </>
  );
}

function ThumbRow({ image, title, meta, onDetail }) {
  return (
    <div className="row">
      <div className="thumb">
        {image ? (
          <Image src={image} alt={title} fill sizes="58px" style={{ objectFit: "cover" }} />
        ) : null}
      </div>
      <div className="row-body">
        <div className="row-title">{title}</div>
        <div className="row-sub">{meta}</div>
      </div>
      <button className="btn small" onClick={onDetail}>
        Details / View More
      </button>
    </div>
  );
}

function CertProjects() {
  return (
    <div className="col-cert">
      <div className="label-tab">Certification</div>
      <div className="box tabbed" style={{ marginBottom: 18 }}>
        {DATA.certifications.map((c, i) => (
          <ThumbRow
            key={c.title}
            image={c.image}
            title={c.title}
            meta={c.meta}
            onDetail={() => alertDetail(c.title)}
          />
        ))}
      </div>
      <div className="label-tab">Project</div>
      <div className="box tabbed">
        {DATA.projects.map((pj, i) => (
          <ThumbRow
            key={pj.title}
            title={pj.title}
            meta={pj.meta}
            onDetail={() => alertDetail(pj.title)}
          />
        ))}
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="col-edu" id="education-holder">
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
    </div>
  );
}

function alertDetail(title) {
  const hit = [...DATA.certifications, ...DATA.projects].find((x) => x.title === title);
  alert("[DETAILS] " + title + "\n" + (hit ? hit.meta : ""));
}

export default function DossierPanel() {
  return (
    <section className="dossier-panel fade" id="dossier">
      <span className="dossier-tab-label">TOP SECRET // PERSONNEL DOSSIER</span>
      <div className="col-photo">
        <div className="label-tab">Image Profile</div>
        <ProfileImage />
        <ContactBox />
      </div>
      <div className="col-info">
        <CenterInfo />
      </div>
      <CertProjects />
      <Education />
    </section>
  );
}
