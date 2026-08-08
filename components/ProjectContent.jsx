"use client";

import { DATA } from "@/lib/data";
import { alertDetail } from "@/lib/download";

export default function ProjectContent() {
  return (
    <section className="page-section fade">
      <div className="label-tab">Project</div>
      <div className="proj-grid">
        {DATA.projects.map((pj, i) => (
          <div key={pj.title} className="proj-card">
            <div className="thumb project-thumb">IMG PROJ {i + 1}</div>
            <div className="row-body">
              <div className="row-title">{pj.title}</div>
              <div className="row-sub">{pj.meta}</div>
            </div>
            <button className="btn small" onClick={() => alertDetail(pj.title)}>
              Details / View More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}