/* =====================================================================
   EDIT YOUR REAL INFO HERE — every visible string lives in this object.
   ===================================================================== */
export const DATA = {
  profile: {
    name: "Earl Abella",
    birthday: "2004 / 08 / 14",
    photo: "/profile.png",
    quote: "\"Classified dev. Minimal code. Maximum output.\"",
    bio: "A detail-oriented developer who treats every project like a mission. I enjoy turning messy requirements into clean, reliable builds — and I always keep the dossier updated.",
    interests: ["Web Security", "Open Source", "UI Systems", "Terminal Aesthetics", "Problem Solving"]
  },
  contact: {
    github:  { label: "GitHub",   value: "github.com/yourhandle" },
    gmail:   { label: "Gmail",    value: "you@gmail.com" },
    whatsapp:{ label: "WhatsApp", value: "+63 912 345 6789" },
    facebook:{ label: "Facebook", value: "fb.com/your.name" }
  },
  certifications: [
    { title: "FreeCodeCamp Cert",        meta: "Responsive Web Design · 2024", image: "/b2f9aff1-a8d6-4d9c-81d1-432ebd056f0a.jpg" },
    { title: "AWS Certified Cloud Prac.", meta: "Amazon Web Services · 2024",  image: "/cc6762ed-9488-47fd-9a9e-3d2aa7bac23b.jpg" },
    { title: "Google IT Support",        meta: "Google · 2023",               image: "/7c3dc184-8336-4ed0-b41f-18c41e9fe09c.jpg" }
  ],
  projects: [
    { title: "Dossier CMS",    meta: "Admin dashboard · React + Node" },
    { title: "Portfolio",      meta: "Personal site · Vanilla JS" },
    { title: "Task Roster",    meta: "Kanban tool · Vue + Firebase" },
    { title: "Scout Bot",      meta: "Discord bot · Node.js" },
    { title: "Weather Relay",  meta: "Weather API · Python" }
  ],
  education: [
    { school: "University of St. La Salle", years: "2022 – 2026", program: "BS Information Technology" },
    { school: "Negros Occidental High School", years: "2016 – 2021", program: "Senior High · STEM" },
    { school: "E-COM Academy", years: "2018 – 2022", program: "ICT / Programming Track" }
  ],
  skills: [
    { category: "Frontend",              tags: [["HTML", 92], ["CSS", 90], ["JavaScript", 85], ["React", 78]] },
    { category: "DevOps & Cloud",        tags: [["Docker", 62], ["AWS", 58], ["CI/CD", 65], ["Linux", 70]] },
    { category: "Backend",               tags: [["Node.js", 74], ["Express", 70], ["MySQL", 72], ["MongoDB", 66]] },
    { category: "AI & Machine Learning", tags: [["Python", 68], ["Scikit-learn", 55], ["Prompt Eng.", 80]] },
    { category: "Security & Identity",   tags: [["OAuth2", 64], ["JWT", 71], ["Network Sec", 58]] },
    { category: "Developer Tools",       tags: [["Git", 85], ["VSCode", 92], ["Vite", 74], ["Postman", 70]] },
    { category: "CMS & No-Code",         tags: [["WordPress", 82], ["Webflow", 77], ["Notion", 88]] }
  ]
};
