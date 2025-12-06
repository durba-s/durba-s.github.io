import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function BlogHome({ posts, query }) {
  // Define preferred category order
  const preferredOrder = ["Literature Review", "Machine Learning", "Reinforcement Learning", "NLP"];

  // Extract categories with post counts
  const categories = useMemo(() => {
    const countMap = {};

    posts.forEach((p) => {
      countMap[p.category] = (countMap[p.category] || 0) + 1;
    });

    const allCategories = Object.keys(countMap);

    // Separate preferred and others
    const preferred = preferredOrder.filter((cat) => allCategories.includes(cat));
    const others = allCategories
      .filter((cat) => !preferred.includes(cat))
      .sort((a, b) => countMap[b] - countMap[a]); // sort remaining by count descending

    return [...preferred, ...others];
  }, [posts]);

  // Default = first category in final list
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");

  // Filter posts based on active category + search query
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return posts.filter((p) => {
      const matchesCategory = p.category === activeCategory;

      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [posts, query, activeCategory]);

  return (
    <main className="blog-layout">

      {/* LEFT SIDEBAR */}
      <aside className="blog-sidebar">
        <h3 className="sidebar-heading">Category</h3>

        <ul className="sidebar-category-list">
          {categories.map((cat) => (
            <li
              key={cat}
              className={`sidebar-category ${
                activeCategory === cat ? "active-cat" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* POSTS */}
      <div className="blog-posts">
        <ul className="post-list">
          {filtered.map((post) => (
            <li key={post.id} className="post-card">
              <Link to={`/post/${post.slug}`} className="post-title">
                {post.title}
              </Link>
              <p>{post.excerpt}</p>
            </li>
          ))}

          {filtered.length === 0 && <p>No posts found.</p>}
        </ul>
      </div>

    </main>
  );
}
