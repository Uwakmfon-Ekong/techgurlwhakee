import Link from "next/link";
import { posts } from "./posts";

const mono = "'Share Tech Mono', monospace";
const sans = "'Syne', sans-serif";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export const metadata = {
  title: "blog — whakee",
  description: "Articles on tech founders, products, and the ideas behind them.",
};

export default function BlogPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Syne:wght@400;700;800&display=swap');
        body { background: #111111; }
        .blog-card {
          display: block;
          padding: 1.5rem 0;
          border-bottom: 1px solid #1e1e1e;
          text-decoration: none;
          color: inherit;
          transition: background 0.15s;
        }
        .blog-card:hover .blog-title {
          color: #ffffff;
        }
        .blog-card:hover .blog-arrow {
          color: #ffffff;
          transform: translate(3px, -3px);
        }
        .blog-title {
          transition: color 0.15s;
        }
        .blog-arrow {
          transition: color 0.15s, transform 0.15s;
          display: inline-block;
        }
      `}</style>

      <div
        style={{
          background: "#111111",
          color: "#eeeeee",
          fontFamily: mono,
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "3rem 2rem 4rem",
          }}
        >
          {/* Header */}
          <header style={{ marginBottom: "3rem", paddingBottom: "2rem", borderBottom: "1px solid #2a2a2a" }}>
            <p style={{ fontSize: 11, color: "#444444", marginBottom: "0.5rem", letterSpacing: "0.08em" }}>
              // blog.init()
            </p>
            <h1
              style={{
                fontFamily: sans,
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                marginBottom: "0.75rem",
              }}
            >
              blog
            </h1>
            <p style={{ fontSize: 12, color: "#888888", maxWidth: 480, lineHeight: 1.7 }}>
              writing about tech founders and products i find interesting. opinions are mine.
            </p>
          </header>

          {/* Post list */}
          <section>
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: 9,
                          letterSpacing: "0.12em",
                          color: "#ffffff",
                          background: "#1e1e1e",
                          border: "1px solid #2a2a2a",
                          padding: "2px 8px",
                          fontFamily: mono,
                        }}
                      >
                        {post.tag}
                      </span>
                      <span style={{ fontSize: 10, color: "#444444" }}>
                        {formatDate(post.date)}
                      </span>
                      <span style={{ fontSize: 10, color: "#333333" }}>·</span>
                      <span style={{ fontSize: 10, color: "#444444" }}>
                        {post.readTime} read
                      </span>
                    </div>
                    <h2
                      className="blog-title"
                      style={{
                        fontFamily: sans,
                        fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                        fontWeight: 700,
                        color: "#cccccc",
                        lineHeight: 1.3,
                        marginBottom: "0.4rem",
                      }}
                    >
                      {post.title}
                    </h2>
                    <p style={{ fontSize: 12, color: "#666666", lineHeight: 1.6 }}>
                      {post.subtitle}
                    </p>
                  </div>
                  <span className="blog-arrow" style={{ fontSize: 14, color: "#333333", flexShrink: 0, marginTop: 4 }}>
                    ↗
                  </span>
                </div>
              </Link>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
