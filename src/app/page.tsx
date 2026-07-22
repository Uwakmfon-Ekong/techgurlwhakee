"use client";

import { useState, CSSProperties } from "react";

interface Project {
  index: string;
  name: string;
  desc: string;
  stack: string[];
  href: string;
  screenshot?: string;
}

const SCREENSHOT = (url: string) =>
  `https://api.screenshotone.com/take?access_key=epvzMi8f4alMjQ&url=${encodeURIComponent(url)}&viewport_width=1280&viewport_height=800&format=jpg&image_quality=80`;

const projects: Project[] = [
  {
    index: "01",
    name: "Next Gen Summit",
    desc: "A web3 event bringing together founders, builders, and creators. organized and led by Whakee.",
    stack: ["NEXT.JS", "TAILWIND", "WEB3"],
    href: "https://nextgensummit.xyz",
    screenshot: SCREENSHOT("https://nextgensummit.xyz"),
  },
  {
    index: "02",
    name: "Project Susliva",
    desc: "Susliva, a platform built for sustainable living and conscious consumption.",
    stack: ["NEXT", "TAILWIND", "TS"],
    href: "https://susliva.org/",
    screenshot: SCREENSHOT("https://susliva.org/"),
  },
  {
    index: "03",
    name: "Project Ell-crotchet",
    desc: "Ell-crotchets and beads. a business website made with love and warmth.",
    stack: ["JAVASCRIPT", "API"],
    href: "https://ellscrotchet.shop/",
    screenshot: SCREENSHOT("https://ellscrotchet.shop/"),
  },
  {
    index: "04",
    name: "Project Clean-air",
    desc: "An environmental awareness web project focused on clean air advocacy.",
    stack: ["HTML", "CSS", "JS"],
    href: "https://clean-air-tree.pxxl.pro/",
    screenshot: SCREENSHOT("https://clean-air-tree.pxxl.pro/"),
  },
  {
    index: "05",
    name: "Project CURLy",
    desc: "Curl to code instantly. fetch() or axios code in seconds.",
    stack: ["NEXT.JS", "TYPESCRIPT"],
    href: "https://curly.pxxl.pro/",
    screenshot: SCREENSHOT("https://curly.pxxl.pro/"),
  },
  {
    index: "06",
    name: "Project Foorm",
    desc: "An all-in-one form, email, and link platform. currently applying for yc.",
    stack: ["NEXT.JS", "TYPESCRIPT"],
    href: "https://foorm.xyz",
    screenshot: SCREENSHOT("https://foorm.xyz"),
  },
];

const skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Git",
  "GitHub",
  "Figma",
  "Web3",
  "REST APIs",
  "Responsive Design",
];

const CV_URL = "/whakee-cv.pdf";
const TG_URL = "https://t.me/whakeee";
const CONTENT_URL =
  "https://app.notion.com/p/mini-portfolio-35155ceabf3480f4a03de7c4340bb991?showMoveTo=true&saveParent=true";

const mono = "'Share Tech Mono', monospace";
const sans = "'Syne', sans-serif";

const DownloadIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
);

const NotionIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z" />
  </svg>
);

interface ActionButtonProps {
  href: string;
  download?: string;
  children: React.ReactNode;
  filled?: boolean;
}

function ActionButton({
  href,
  download,
  children,
  filled = false,
}: ActionButtonProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      download={download}
      target={download ? undefined : "_blank"}
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "10px 20px",
        border: `1px solid ${filled ? (hovered ? "#dddddd" : "#ffffff") : hovered ? "#ffffff" : "#ffffff44"}`,
        fontSize: 12,
        letterSpacing: "0.1em",
        fontFamily: mono,
        cursor: "pointer",
        textDecoration: "none",
        transition: "background 0.2s, border-color 0.2s, color 0.2s",
        background: filled
          ? hovered
            ? "#dddddd"
            : "#ffffff"
          : hovered
            ? "#ffffff15"
            : "transparent",
        color: filled ? "#111111" : "#ffffff",
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
      {project.screenshot && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${project.screenshot})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            opacity: hovered ? 0.12 : 0.05,
            transition: "opacity 0.3s ease",
            filter: "grayscale(100%)",
          }}
        />
      )}
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
        style={{ fontSize: 11, color: "#888888", lineHeight: 1.6, flex: 1 }}
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

function ContentCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={CONTENT_URL}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.2rem 1.5rem",
        border: `1px solid ${hovered ? "#ffffff44" : "#2a2a2a"}`,
        background: hovered ? "#1a1a1a" : "#111111",
        textDecoration: "none",
        color: "inherit",
        transition: "background 0.2s, border-color 0.2s",
        position: "relative",
        overflow: "hidden",
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
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span
          style={{ fontSize: 10, color: "#444444", letterSpacing: "0.1em" }}
        >
          // content
        </span>
        <span
          style={{
            fontFamily: sans,
            fontSize: 15,
            fontWeight: 700,
            color: "#eeeeee",
          }}
        >
          mini content portfolio
        </span>
        <span style={{ fontSize: 11, color: "#888888" }}>
          ugc, brand campaigns, storytelling — the other side of what i do.
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <NotionIcon />
        <span
          style={{
            fontSize: 10,
            color: hovered ? "#ffffff" : "#444444",
            transition: "color 0.2s, transform 0.2s",
            transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
            display: "inline-block",
          }}
        >
          ↗
        </span>
      </div>
    </a>
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
          .cta-row { flex-direction: column !important; align-items: flex-start !important; }
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
            style={{
              marginBottom: "3.5rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid #2a2a2a",
            }}
          >
            <p
              style={{
                fontSize: 11,
                color: "#444444",
                marginBottom: "0.75rem",
                letterSpacing: "0.08em",
              }}
            >
              // portfolio.init()
            </p>
            <p
              style={{
                fontSize: 13,
                color: "#888888",
                letterSpacing: "0.1em",
                lineHeight: 1.6,
              }}
            >
              Uwakmfon Ekong &mdash;{" "}
              <span style={{ color: "#ffffff" }}>frontend developer</span>{" "}
              &mdash; <span style={{ color: "#555555" }}>Nigeria</span>
            </p>
          </header>

          {/* ABOUT */}
          <section style={{ marginBottom: "3rem" }}>
            <SectionLabel>// about</SectionLabel>
            <p
              style={{
                fontSize: 13,
                color: "#888888",
                lineHeight: 1.8,
                maxWidth: 600,
                marginBottom: "0.8rem",
              }}
            >
              Frontend developer based in{" "}
              <span style={{ color: "#ffffff" }}>Nigeria</span>. I build
              websites for businesses and brands — clean interfaces, functional
              components, and digital experiences that speak. Currently studying
              Communication Arts and working at the intersection of{" "}
              <span style={{ color: "#ffffff" }}>
                tech, content, marketing and ugc
              </span>
              .
            </p>
            <p
              style={{ fontSize: 13, color: "#888888", marginBottom: "1.5rem" }}
            >
              need a website?{" "}
              <a
                href={TG_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  borderBottom: "1px solid #ffffff44",
                  paddingBottom: 1,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = "#ffffff")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#ffffff44")
                }
              >
                grab your website here ↗
              </a>
            </p>
            <div
              className="cta-row"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <ActionButton href={CV_URL} download="Whakee_cv.pdf" filled>
                <DownloadIcon /> download cv
              </ActionButton>
              <ActionButton href={TG_URL}>
                <TelegramIcon /> contact me
              </ActionButton>
              {/* <ActionButton href="https://github.com/Uwakmfon-Ekong?tab=repositories">
                see more projects <ArrowRightIcon />
              </ActionButton> */}
            </div>
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
          <section id="projects" style={{ marginBottom: "3rem" }}>
            <SectionLabel>// projects</SectionLabel>
            <div
              className="matrix"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                background: "#2a2a2a",
                border: "1px solid #2a2a2a",
                marginBottom: "1rem",
              }}
            >
              {projects.map((p) => (
                <ProjectCard key={p.index} project={p} />
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <ActionButton href="https://github.com/Uwakmfon-Ekong?tab=repositories">
                see more projects <ArrowRightIcon />
              </ActionButton>
            </div>
          </section>

          {/* CONTENT */}
          <section style={{ marginBottom: "3rem" }}>
            <SectionLabel>// content</SectionLabel>
            <ContentCard />
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
              <span style={{ color: "#888888" }}>globally</span>
            </div>
            <div
              style={{ fontSize: 10, color: "#444444", letterSpacing: "0.1em" }}
            >
              © 2025 WHAKEE
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
