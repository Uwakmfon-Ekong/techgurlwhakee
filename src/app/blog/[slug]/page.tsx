import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "../posts";

const mono = "'Share Tech Mono', monospace";
const sans = "'Syne', sans-serif";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — whakee`,
    description: post.subtitle,
  };
}

function renderContent(raw: string) {
  const lines = raw.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          style={{
            fontFamily: sans,
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#ffffff",
            marginTop: "2rem",
            marginBottom: "0.75rem",
            letterSpacing: "-0.01em",
          }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.trim() === "") {
      // skip blank lines
    } else {
      elements.push(
        <p
          key={i}
          style={{
            fontSize: 13,
            color: "#888888",
            lineHeight: 1.9,
            marginBottom: "1rem",
          }}
        >
          {line}
        </p>
      );
    }
    i++;
  }

  return elements;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Syne:wght@400;700;800&display=swap');
        body { background: #111111; }
        .post-back {
          font-size: 11px;
          color: #444444;
          text-decoration: none;
          letter-spacing: 0.1em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 2.5rem;
          transition: color 0.2s;
          font-family: ${mono};
        }
        .post-back:hover { color: #ffffff; }
        .post-more {
          font-size: 11px;
          color: #444444;
          text-decoration: none;
          letter-spacing: 0.08em;
          transition: color 0.2s;
          font-family: ${mono};
        }
        .post-more:hover { color: #ffffff; }
      `}</style>

      <div
        style={{
          background: "#111111",
          color: "#eeeeee",
          fontFamily: mono,
          minHeight: "100vh",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 2rem 5rem" }}>

          {/* Back */}
          <Link href="/blog" className="post-back">
            ← back to blog
          </Link>

          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
            <span
              style={{
                fontSize: 9,
                letterSpacing: "0.12em",
                color: "#ffffff",
                background: "#1e1e1e",
                border: "1px solid #2a2a2a",
                padding: "2px 8px",
              }}
            >
              {post.tag}
            </span>
            <span style={{ fontSize: 10, color: "#444444" }}>{formatDate(post.date)}</span>
            <span style={{ fontSize: 10, color: "#333333" }}>·</span>
            <span style={{ fontSize: 10, color: "#444444" }}>{post.readTime} read</span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: sans,
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              marginBottom: "0.75rem",
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              fontSize: 13,
              color: "#666666",
              marginBottom: "2.5rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid #1e1e1e",
              lineHeight: 1.6,
            }}
          >
            {post.subtitle}
          </p>

          {/* Body */}
          <article>{renderContent(post.content)}</article>

          {/* Footer */}
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid #1e1e1e",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <span style={{ fontSize: 11, color: "#444444" }}>
              written by{" "}
              <a
                href="https://x.com/whakee_"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#888888", textDecoration: "none" }}
              >
                @whakee_
              </a>
            </span>
            <Link href="/blog" className="post-more">
              more posts →
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
