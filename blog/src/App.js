import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Portfolio from "./pages/Portfolio";
import BlogHome from "./pages/BlogHome";
import PostPage from "./pages/PostPage";
import NotFound from "./pages/NotFound";

import { loadPosts } from "./utils/postsLoader";

import "./styles.css";

export default function App() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");

  const posts = loadPosts();
  const toggleTheme = () => setDark((prev) => !prev);

  return (
    <Router>
      <div className={dark ? "app dark" : "app"}>
        <Header
          dark={dark}
          onToggleTheme={toggleTheme}
          query={query}
          setQuery={setQuery}
        />

        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route
            path="/blog"
            element={<BlogHome posts={posts} query={query} setQuery={setQuery} />}
          />
          <Route path="/post/:slug" element={<PostPage posts={posts} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
//<footer className="footer">
//          © {new Date().getFullYear()} My Blog
//        </footer>