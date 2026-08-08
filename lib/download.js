import { DATA } from "@/lib/data";

export function downloadResume() {
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

export function alertDetail(title) {
  const hit = [...DATA.certifications, ...DATA.projects].find((x) => x.title === title);
  alert("[DETAILS] " + title + "\n" + (hit ? hit.meta : ""));
}