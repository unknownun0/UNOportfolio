import "./globals.css";
import AppChrome from "@/components/AppChrome";
import FadeObserver from "@/components/FadeObserver";

export const metadata = {
  title: "MY PORTFOLIO // CLASSIFIED DOSSIER",
  description: "Personal portfolio styled as a classified intelligence dossier."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppChrome />
        <div className="page-shell">
          {children}
          <footer className="footer-bar">
            <span className="footer-stage">&#9679; Portfolio still in progress</span>
            <span className="footer-copy">Developer: Earl Abella 2026</span>
            <span className="footer-offer">Happy to work on your future project &#9654;</span>
          </footer>
        </div>
        <FadeObserver />
      </body>
    </html>
  );
}