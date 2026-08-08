"use client";

export default function TopNav({ onResume }) {
  return (
    <header className="topnav topnav-desktop">
      <div className="logo">
        <span className="logo-stamp">AG</span> Portfolio//&lt;Logo&gt;
      </div>
      <button
        className="nav-pill"
        onClick={() =>
          document.getElementById("dossier")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        My Portfolio
      </button>
      <div className="nav-right">
        <span className="status-badge">
          <span className="dot" /> Active for Work
        </span>
        <a className="nav-link" href="#education-holder">
          Education Background
        </a>
        <button className="btn" onClick={onResume}>
          Resume Download &#11015;
        </button>
      </div>
    </header>
  );
}
