import React from "react";
import avatarImg from '../assets/Image.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import './Portfolio.css';

export default function Portfolio() {
  return (
    <div className="site-wrapper">
      {/* Vertical Sidebar */}
      <aside className="sidebar">
        <img
          src={avatarImg}
          alt="Durba Satpathi"
        />
        
        <ul className="social-links">
          <li>
            <a href="https://github.com/durba-s" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="social-links-iconed"/> GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/durba-satpathi" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/19OEh7igCBepDwZjSKKtvC0GoyfsHA7bf/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFileAlt} /> Resume
            </a>
          </li>
        </ul>

        <nav className="sidebar-nav">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Work Experience</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* About */}
        <section id="about" className="port-class">
          <h1>Hi, I’m <span className="highlight">Durba Satpathi</span></h1>
          <p className="intro">
            I am currently pursuing my Masters of Science in Computer Science (MSCS) at CMU. Previously I worked as a Data Scientist at Microsoft AI (Bing Search Ads), building RL-based whole-page optimization and sponsored search auctions. Beyond the algorithmic side, I am also deeply interested in the systems engineering required to make these models performant in high-throughput production environments.
          </p>
          <p><strong>Email Addresses:</strong> 
          <ul>
          <li><a href="mailto:dsatpath@andrew.cmu.edu">dsatpath@andrew.cmu.edu</a></li>
          <li><a href="mailto:durba.satpathi@gmail.com">durba.satpathi@gmail.com</a></li>
          </ul>
          </p>
        </section>

        {/* Education */}
        <section id="education" className="port-class">
          <h3>Education</h3>
          <div className="post-card">
            <h4>Carnegie Mellon University</h4>
            <p><b>M.S. in Computer Science</b> · Aug 2026 – Present</p>
            <p><b>QPA:</b> 4.0/4.0</p>
            <p><b>Coursework:</b> Introduction to Computer Systems, Database Systems, Machine Learning with Large Datasets, Deep Learning Systems</p>
          </div>
          <div className="post-card">
            <h4>Birla Institute of Technology and Science, Pilani (BITS Pilani)</h4>
            <p><b>B.E. in Computer Science</b> · Aug 2019 – Jun 2023</p>
            <p><b>GPA:</b> 9.87/10.0 (University Rank 1)</p>
            <p><b>Selected Coursework:</b> Number Theory (TA), Discrete Mathematics (TA), Logic in Computer Science(TA), Data Structures and Algorithms, Design and Analysis of Algorithms, C Programming, Object Oriented Programming, Database Systems, Multivariate Calculus, Linear Algebra, Differential Equations, Computer Networks, Compiler Design, Operating Systems, Digital Design, Microprocessors and Interfacing</p>
            <p><b>Minor:</b> Data Science (GPA: 10.0/10.0)</p>
            <p><b>Coursework:</b> Foundations of Data Science (TA), Data Mining (TA), Machine Learning, Deep Learning, Applied Statistical Methods</p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="port-class">
          <h3>Work Experience</h3>

          <div className="post-card">
            <h4>Microsoft AI</h4>
            <p><b>Data Scientist 2</b> · Sept 2025 – Aug 2026</p>
            <p><b>Data Scientist</b> · Jul 2023 – Aug 2025</p>
            <p>Bing Ads: Contextual bandit and RL-based ranking/allocation policies for sponsored search; whole page optimization, Sponsored Search Auctions for Product Ads.</p>
          </div>

          <div className="post-card">
            <h4>Uber Technologies Inc.</h4>
            <p><b>Software Engineering Intern</b> · Jan 2023 – Jun 2023</p>
            <p>Built a Fusion.js frontend integrated with 10+ microservices using GraphQL and built visualization dashboards.</p>
          </div>

          <div className="post-card">
            <h4>Intuit Inc.</h4>
            <p><b>Software Engineering Intern</b> · Jun 2022 – Jul 2022</p>
            <p>Developed backend services for Warehouse Management Systems using Kotlin & Spring; focused on async I/O and scalable API design.</p>
          </div>
        </section>
      </main>
    </div>
  );
}