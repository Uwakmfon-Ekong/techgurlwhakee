"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const mono = "'Share Tech Mono', monospace";
const sans = "'Syne', sans-serif";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

    const links = [
    { href: "/", label: "home" },
    { href: "/#projects", label: "projects" },
    { href: "/blog", label: "blog" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Syne:wght@400;700;800&display=swap');
        .nav-link {
          font-size: 12px;
          letter-spacing: 0.1em;
          color: #555555;
          text-decoration: none;
          transition: color 0.2s;
          font-family: ${mono};
        }
        .nav-link:hover, .nav-link.active {
          color: #ffffff;
        }
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .nav-hamburger span {
          display: block;
          width: 22px;
          height: 1px;
          background: #888888;
          transition: background 0.2s;
        }
        .nav-hamburger:hover span {
          background: #ffffff;
        }
        @media (max-width: 600px) {
          .nav-links-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        .nav-mobile-menu {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: #0d0d0d;
          z-index: 99;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
        }
        .nav-mobile-link {
          font-family: ${sans};
          font-size: 2.2rem;
          font-weight: 700;
          color: #555555;
          text-decoration: none;
          letter-spacing: -0.02em;
          transition: color 0.2s;
        }
        .nav-mobile-link:hover, .nav-mobile-link.active {
          color: #ffffff;
        }
        .nav-close {
          position: absolute;
          top: 1.8rem;
          right: 2rem;
          background: none;
          border: none;
          color: #888888;
          cursor: pointer;
          font-size: 11px;
          letter-spacing: 0.1em;
          font-family: ${mono};
          transition: color 0.2s;
        }
        .nav-close:hover { color: #ffffff; }
        .nav-icon-link {
          color: #555555;
          display: flex;
          align-items: center;
          transition: color 0.2s;
        }
        .nav-icon-link:hover { color: #ffffff; }
      `}</style>

      <nav
        style={{
          width: "100%",
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "0.5rem 0",
          background: "rgba(17,17,17,0.9)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid #1e1e1e",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "1.1rem 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: sans,
                fontWeight: 800,
                fontSize: 18,
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              whakee
            </span>
          </Link>

          {/* Desktop links */}
          <div className="nav-links-desktop" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link${pathname === l.href ? " active" : ""}`}
              >
                {l.label}
              </Link>
            ))}
            <div style={{ width: 1, height: 14, background: "#2a2a2a" }} />
            <a href="https://github.com/Uwakmfon-Ekong" target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
            </a>
            <a href="https://x.com/whakee_" target="_blank" rel="noreferrer" className="nav-icon-link" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(true)}
            aria-label="open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div className="nav-mobile-menu">
          <button className="nav-close" onClick={() => setOpen(false)}>
            [close]
          </button>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-mobile-link${pathname === l.href ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div style={{ display: "flex", gap: "1.5rem", marginTop: "1rem" }}>
            <a href="https://github.com/Uwakmfon-Ekong" target="_blank" rel="noreferrer" className="nav-icon-link" style={{ fontSize: 12, letterSpacing: "0.08em", fontFamily: mono }}>github</a>
            <a href="https://x.com/whakee_" target="_blank" rel="noreferrer" className="nav-icon-link" style={{ fontSize: 12, letterSpacing: "0.08em", fontFamily: mono }}>x / twitter</a>
          </div>
        </div>
      )}
    </>
  );
}
