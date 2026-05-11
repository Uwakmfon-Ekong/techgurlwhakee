"use client";

import { useState, CSSProperties } from "react";

interface Project {
  index: string;
  name: string;
  desc: string;
  stack: string[];
  href: string;
}

const projects: Project[] = [
  {
    index: "01",
    name: "Project Alpha",
    desc: "A placeholder for your first featured project. Swap this with a real repo name and link when ready.",
    stack: ["REACT", "TAILWIND"],
    href: "https://github.com/Uwakmfon-Ekong",
  },
  {
    index: "02",
    name: "Project Beta",
    desc: "Your second project lives here. Link directly to the GitHub repo or a live demo URL.",
    stack: ["HTML", "CSS", "JS"],
    href: "https://github.com/Uwakmfon-Ekong",
  },
  {
    index: "03",
    name: "Project Gamma",
    desc: "Third project card. Could be a landing page, dashboard, or any frontend build you're proud of.",
    stack: ["JAVASCRIPT", "API"],
    href: "https://github.com/Uwakmfon-Ekong",
  },
  {
    index: "04",
    name: "Project Delta",
    desc: "A Web3 or fintech-adjacent project would sit nicely here, given your community work.",
    stack: ["WEB3", "REACT"],
    href: "https://github.com/Uwakmfon-Ekong",
  },
  {
    index: "05",
    name: "Project Epsilon",
    desc: "Fifth project. Maybe a component library, a tool you built for yourself, or an open source contribution.",
    stack: ["CSS", "FIGMA"],
    href: "https://github.com/Uwakmfon-Ekong",
  },
  {
    index: "06",
    name: "Project Zeta",
    desc: "Sixth slot. Fill with your most recent build — or leave as a coming soon with a WIP label.",
    stack: ["NEXT.JS", "TYPESCRIPT"],
    href: "https://github.com/Uwakmfon-Ekong",
  },
];

const skills: string[] = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind",
  "Git", "GitHub", "Figma", "Web3", "REST APIs", "Responsive Design",
];

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.81 0 .27.18.59.69.49A10.27 10.27 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const mono = "'Share Tech Mono', monospace";
const sans = "'Syne', sans-serif";

interface LinkPillProps {
  href: string;
  children: React.ReactNode;
}

function LinkPill({ href, children }: LinkPillProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "7px 14px",
        border: `1px solid ${hovered ? "#ffffff" : "#ffffff44"}`,
        background: hovered ? "#ffffff15" : "transparent",
        color: "#ffffff",
        textDecoration: "none",
        fontSize: 12,
        letterSpacing: "0.08em",
        transition: "background 0.2s, border-color 0.2s",
        fontFamily: mono,
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
}

interface SkillTagProps {
  label: string;
}

function SkillTag({ label }: SkillTagProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "4px 12px",
        border: `1px solid ${hovered ? "#ffffff44" : "#2a2a2a"}`,
        fontSize: 11,
        color: hovered ? "#ffffff" : "#888888",
        letterSpacing: "0.06em",
        background: hovered ? "#ffffff10" : "#1a1a1a",
        transition: "border-color 0.2s, color 0.2s, background 0.2s",
        fontFamily: mono,
        cursor: "default",
      }}
    >
      {label}
    </span>
  );
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#1a1a1a" : "#111111",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        textDecoration: "none",
        color: "inherit",
        position: "relative",
        overflow: "hidden",
        transition: "background 0.2s",
        minHeight: 180,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 2,
          height: hovered ? "100%" : 0,
          background: "#ffffff",
          transition: "height 0.3s ease",
        }}
      />
      <span style={{ fontSize: 10, color: "#444444", letterSpacing: "0.1em" }}>
        {project.index}
      </span>
      <span
        style={{
          fontFamily: sans,
          fontSize: 15,
          fontWeight: 700,
          color: "#eeeeee",
          lineHeight: 1.2,
        }}
      >
        {project.name}
      </span>
      <span
        style={{
          fontSize: 11,
          color: "#888888",
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {project.desc}
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {project.stack.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 9,
              letterSpacing: "0.1em",
              color: "#888888",
              padding: "2px 7px",
              border: "1px solid #2a2a2a",
              background: "#1a1a1a",
              fontFamily: mono,
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <span
        style={{
          fontSize: 10,
          color: hovered ? "#ffffff" : "#444444",
          alignSelf: "flex-end",
          transition: "color 0.2s, transform 0.2s",
          transform: hovered ? "translate(2px, -2px)" : "translate(0, 0)",
          display: "inline-block",
        }}
      >
        ↗
      </span>
    </a>
  );
}

interface SectionLabelProps {
  children: React.ReactNode;
}

function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      style={{
        fontSize: 10,
        letterSpacing: "0.2em",
        color: "#444444",
        marginBottom: "1.2rem",
        display: "flex",
        alignItems: "center",
        gap: 12,
      }}
    >
      <span>{children}</span>
      <div style={{ flex: 1, height: 1, background: "#2a2a2a" }} />
    </div>
  );
}

function StatusDot() {
  return (
    <span
      style={{
        display: "inline-block",
        width: 6,
        height: 6,
        background: "#ffffff",
        borderRadius: "50%",
        marginRight: 6,
        animation: "pulse 2s infinite",
      }}
    />
  );
}

export default function Portfolio() {
  const gridBg: CSSProperties = {
    position: "fixed",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    pointerEvents: "none",
    zIndex: 0,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Syne:wght@400;700;800&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #111111; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }
        @media (max-width: 640px) {
          .matrix { grid-template-columns: repeat(2, 1fr) !important; }
          .portfolio-header { grid-template-columns: 1fr !important; }
          .header-links { align-items: flex-start !important; flex-direction: row !important; flex-wrap: wrap !important; }
        }
        @media (max-width: 420px) {
          .matrix { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div
        style={{
          background: "#111111",
          color: "#eeeeee",
          fontFamily: mono,
          minHeight: "100vh",
          position: "relative",
        }}
      >
        <div style={gridBg} />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 960,
            margin: "0 auto",
            padding: "3rem 2rem 4rem",
          }}
        >
          {/* HEADER */}
          <header
            className="portfolio-header"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "start",
              gap: "2rem",
              marginBottom: "3.5rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid #2a2a2a",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 11,
                  color: "#444444",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.08em",
                }}
              >
                // portfolio.init()
              </p>
              <h1
                style={{
                  fontFamily: sans,
                  fontSize: "clamp(2.4rem, 6vw, 4rem)",
                  fontWeight: 800,
                  color: "#ffffff",
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                Whakee
              </h1>
              <p
                style={{
                  marginTop: "0.6rem",
                  fontSize: 12,
                  color: "#888888",
                  letterSpacing: "0.12em",
                }}
              >
                Uwakmfon Ekong &mdash;{" "}
                <span style={{ color: "#ffffff" }}>frontend developer</span>
              </p>
            </div>
            <div
              className="header-links"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                alignItems: "flex-end",
                paddingTop: "0.5rem",
              }}
            >
              <LinkPill href="https://github.com/Uwakmfon-Ekong">
                <GitHubIcon /> GitHub
              </LinkPill>
              <LinkPill href="https://x.com/whakee_">
                <XIcon /> @whakee
              </LinkPill>
            </div>
          </header>

          {/* ABOUT */}
          <section style={{ marginBottom: "3rem" }}>
            <SectionLabel>// about</SectionLabel>
            <p style={{ fontSize: 13, color: "#888888", lineHeight: 1.8, maxWidth: 600 }}>
              Frontend developer based in{" "}
              <span style={{ color: "#ffffff" }}>Uyo, Nigeria</span>. I build
              things for the web — clean interfaces, functional components, and
              digital experiences that speak. Currently studying Communication
              Arts and working at the intersection of{" "}
              <span style={{ color: "#ffffff" }}>tech, content, marketing and ugc</span>.
            </p>
          </section>

          {/* SKILLS */}
          <section style={{ marginBottom: "3rem" }}>
            <SectionLabel>// stack</SectionLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {skills.map((s) => (
                <SkillTag key={s} label={s} />
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section style={{ marginBottom: "3rem" }}>
            <SectionLabel>// projects</SectionLabel>
            <div
              className="matrix"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                background: "#2a2a2a",
                border: "1px solid #2a2a2a",
              }}
            >
              {projects.map((p) => (
                <ProjectCard key={p.index} project={p} />
              ))}
            </div>
          </section>

          {/* FOOTER */}
          <footer
            style={{
              borderTop: "1px solid #2a2a2a",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div style={{ fontSize: 11, color: "#444444" }}>
              <StatusDot />
              <span style={{ color: "#888888" }}>available for work</span>
              &nbsp;&mdash;&nbsp;
              <span style={{ color: "#888888" }}>uyo, nigeria</span>
            </div>
            <div style={{ fontSize: 10, color: "#444444", letterSpacing: "0.1em" }}>
              © 2025 WHAKEE
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}