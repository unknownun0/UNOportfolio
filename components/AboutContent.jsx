"use client";

import Image from "next/image";
import { DATA } from "@/lib/data";
import { alertDetail } from "@/lib/download";

export default function AboutContent() {
  return (
    <section className="page-section fade">
      <div className="about-grid">
        {/* LEFT: Certification */}
        <div className="about-col">
          <div className="label-tab">Certification</div>
          <div className="box tabbed">
            {DATA.certifications.map((c) => (
              <div key={c.title} className="m-cert-card">
                <div className="m-cert-header">{c.title}</div>
                <div className="row" style={{ marginBottom: 0 }}>
                  <div className="thumb">
                    {c.image ? (
                      <Image src={c.image} alt={c.title} fill sizes="58px" style={{ objectFit: "cover" }} />
                    ) : null}
                  </div>
                  <div className="row-body">
                    <div className="row-title">{c.title}</div>
                    <div className="row-sub">{c.meta}</div>
                  </div>
                  <button className="btn small" onClick={() => alertDetail(c.title)}>
                    Details / View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Education */}
        <div className="about-col">
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
      </div>
    </section>
  );
}