import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import Mermaid from "./Mermaid";
import "katex/dist/katex.min.css";

// Utility to extract text from nested children safely
const getText = (children) => {
  if (!children) return "";
  if (typeof children === "string") return children;
  if (Array.isArray(children)) {
    return children
      .map((child) =>
        typeof child === "string" ? child : getText(child.props?.children)
      )
      .join("");
  }
  // single React element
  return getText(children.props?.children);
};

// Extract headings from markdown
function extractHeadings(markdown) {
  const regex = /^(##+)\s+(.*)$/gm;
  const headings = [];
  let match;
  while ((match = regex.exec(markdown)) !== null) {
    const level = match[1].length; // 2 = h2, 3 = h3
    const text = match[2].trim();
    const id = text.toLowerCase().replace(/\s+/g, "-");
    headings.push({ level, text, id });
  }
  return headings;
}

export default function PostPage({ posts }) {
  const { slug } = useParams();
  const nav = useNavigate();

  const post = posts.find((p) => p.slug === slug);
  const headings = post ? extractHeadings(post.content) : [];

  // Hook for active section highlighting
  useEffect(() => {
    if (!post || !headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          const tocLink = document.querySelector(`.toc a[href="#${id}"]`);
          if (tocLink) {
            if (entry.isIntersecting) tocLink.classList.add("active");
            else tocLink.classList.remove("active");
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings, post]);

  // Early return if post not found
  if (!post)
    return (
      <main className="container">
        <h2>Post not found</h2>
        <button onClick={() => nav("/")} className="backBtn">
          Go Home
        </button>
      </main>
    );

  return (
    <main className="post-page container">
      {/* Table of Contents */}
      <nav className="toc">
        <h3>Contents</h3>
        <ul>
          {headings.map((h) => (
            <li key={h.id} className={h.level === 3 ? "level-3" : "level-2"}>
              <a
                href={`#${h.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(h.id);
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Article */}
      <article className="markdown">
        <button className="backBtn" onClick={() => nav(-1)}>
          ← Back
        </button>

        <h1>{post.title || "Untitled"}</h1>
        <p className="post-date">{post.date || ""}</p>

        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex]}
          components={{
            h2: ({ node, ...props }) => {
              const text = getText(props.children) || "Heading";
              const id = text.toLowerCase().replace(/\s+/g, "-");
              return <h2 id={id}>{props.children}</h2>;
            },
            h3: ({ node, ...props }) => {
              const text = getText(props.children) || "Subheading";
              const id = text.toLowerCase().replace(/\s+/g, "-");
              return <h3 id={id}>{props.children}</h3>;
            },
            code({ className, children }) {
              const codeString = String(children).trim();
              if (className === "language-mermaid") {
                return <Mermaid code={codeString} />;
              }
              return <code className={className}>{children}</code>;
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
