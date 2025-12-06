import React from "react";
import avatarImg from '../assets/Image.jpeg';
export default function Portfolio() {
    const styles = {
    name: { fontSize: 20, fontWeight: 700, marginBottom: 6 },
    subtitle: {fontSize: 13, marginBottom: 12 },
    contact: { fontSize: 13,lineHeight: 1.6 },
    button: {
      display: 'inline-block',
      marginTop: 12,
      padding: '8px 12px',
      background: '#dc7579ff',
      color: '#fff',
      borderRadius: 6,
      textDecoration: 'none',
      fontSize: 13,
    },

  };
  return (
    <div className="site-wrapper">
      {/* Vertical Sidebar */}
      <aside className="sidebar">
        <img
                    src={avatarImg}
                    alt="Durba Satpathi"
                  />
        <nav className="sidebar-nav">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#links">Links</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* About */}
        <section id="about" className="port-class">
          <h1>Hi, I’m <span className="highlight">Durba Satpathi</span></h1>
          <p className="intro">
            I am a Data Scientist working at Microsoft R & D. I build ML systems for large-scale decision-making, reinforcement learning, and optimization problems.
          </p>
          <p>Email: <a href="mailto:durba.satpathi@gmail.com">durba.satpathi@gmail.com</a></p>
        </section>

        {/* Education */}
        <section id="education" className="port-class">
          <h3>Education</h3>
          <div className="post-card">
            <h4>Birla Institute of Technology and Science, Pilani (BITS Pilani)</h4>
            <p>B.E. Computer Science, 2019–2023</p>
            <p>GPA: 9.87/10.0 (University Rank 1)</p>
            <p>Minor: Data Science (10.0/10.0)</p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="port-class">
          <h3>Experience</h3>

          <div className="post-card">
            <h4>Microsoft R & D</h4>
            <p>Data Scientist 2 · Sept 2025 – Present</p>
            <p>Data Scientist · Jul 2023 – Aug 2025</p>
            <p>Bing Ads: Contextual bandit and RL-based ranking/allocation policies for sponsored search; whole page optimization.</p>
          </div>

          <div className="post-card">
            <h4>Uber Technologies Inc.</h4>
            <p>Software Engineering Intern · Jan 2023 – Jun 2023</p>
            <p>Built a Fusion.js frontend integrated with 10+ microservices using GraphQL federation and optimized visualization pipelines.</p>
          </div>

          <div className="post-card">
            <h4>Intuit Inc.</h4>
            <p>Software Engineering Intern · Jun 2022 – Jul 2022</p>
            <p>Developed backend services for Warehouse Management Systems using Kotlin & Spring; focused on async I/O and scalable REST APIs.</p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="port-class">
          <h3>Skills</h3>
          <ul className="skills-list">
            <li><strong>Programming:</strong> Python, Java, C/C++, C#, SQL</li>
            <li><strong>Machine Learning:</strong> PyTorch, TensorFlow, Scikit-learn, Azure ML</li>
          </ul>
        </section>

        {/* Links */}
        <section id="links" className="port-class">
          <h3>Links</h3>
          <ul>
            <li><a href="https://github.com/durba-s">GitHub</a></li>
            <li><a href="https://linkedin.com/in/durba-satpathi">LinkedIn</a></li>
            <li><a href="/resume.pdf">Resume</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
