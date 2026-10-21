import React from "react";
import avatarImg from '../assets/Image.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import './Portfolio.css'; 

export default function Projects() {
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
              <FontAwesomeIcon icon={faGithub} /> GitHub
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

        {/* Updated sidebar nav specific to the Projects page */}
        <nav className="sidebar-nav">
          <a href="#systems">Systems & Databases</a>
          <a href="#ml-ai">Machine Learning & AI</a>
          <a href="#web-mobile">Web, Mobile & Algorithms</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <section className="port-class">
          <h1>My <span className="highlight">Projects</span></h1>
          <p className="intro">
            A selection of my academic and personal work spanning systems, machine learning frameworks, and full-stack engineering.
          </p>
        </section>

        {/* 1. Systems & Databases */}
        <section id="systems" className="port-class">
          <h3>Systems & Databases</h3>
          
          <div className="post-card">
            <h4>Buffer Pool Manager</h4>
            <p><b>Course:</b> Introduction to Database Systems, CMU · Fall 2026</p>
            <p><b>Tech Stack:</b> C++</p>
            <p>Engineered a thread-safe Buffer Pool Manager for the BusTub relational database, implementing an Adaptive Replacement Cache (ARC) policy to dynamically balance recency and frequency for optimal page eviction.</p>
          </div>

          <div className="post-card">
            <h4>Dynamic Memory Allocator</h4>
            <p><b>Course:</b> Introduction to Computer Systems, CMU · Summer 2026</p>
            <p><b>Tech Stack:</b> C</p>
            <p>Designed a dynamic memory allocator (Malloc, Calloc, Free, Realloc) featuring segregated free lists and best-fit allocation, achieving a throughput of 10,884 KOPS and 74% memory utilization.</p>
          </div>

          <div className="post-card">
            <h4>QUBE Language Compiler</h4>
            <p><b>Course:</b> Compiler Systems, BITS Pilani ·Spring 2022</p>
            <p><b>Tech Stack:</b> C++</p>
            <p>Designed a Context-Free Grammar (CFG) for the custom language QUBE. Implemented a lexical analyzer and parser from scratch to generate three-address intermediate code.</p>
            <p><a href="https://github.com/durba-s/compiler_project" target="_blank" rel="noopener noreferrer">View on GitHub ➔</a></p>
          </div>
        </section>

        {/* 2. Machine Learning & AI */}
        <section id="ml-ai" className="port-class">
          <h3>Machine Learning & AI</h3>

          <div className="post-card">
            <h4>Needle: Deep Learning Framework</h4>
            <p><b>Course:</b> Deep Learning Systems, CMU · Fall 2026 (Ongoing)</p>
            <p><b>Tech Stack:</b> Python, C++, CUDA</p>
            <p>Implementing a mini PyTorch-like framework from scratch. Developing a custom automatic differentiation (autograd) engine, tensor operations, and hardware-accelerated neural network backend modules.</p>
          </div>

          <div className="post-card">
            <h4>Ads Audio (Microsoft Hackathon)</h4>
            <p>Fall 2023</p>
            <p><b>Tech Stack:</b> Python, HuggingFace</p>
            <p>Developed an accessibility-focused tool that converts product advertisement images to speech to aid visually impaired users.</p>
            <p><a href="https://github.com/durba-s/Ads-Audio" target="_blank" rel="noopener noreferrer">View on GitHub ➔</a></p>
          </div>

          <div className="post-card">
            <h4>Image Captioning</h4>
            <p>Summer 2021</p>
            <p><b>Tech Stack:</b> Python, CNNs, Transformers</p>
            <p>Trained a deep learning pipeline combining Convolutional Neural Networks for image feature extraction and Transformers for natural language generation using the Flickr Dataset.</p>
            <p><a href="https://github.com/durba-s/image_captioning" target="_blank" rel="noopener noreferrer">View on GitHub ➔</a></p>
          </div>
        </section>

        {/* 3. Web, Mobile & Algorithms */}
        <section id="web-mobile" className="port-class">
          <h3>Web, Mobile & Algorithms</h3>

          <div className="post-card">
            <h4>Bentley Ottman Algorithm</h4>
            <p><b>Course:</b> Design and Analysis of Algorithms, BITS Pilani ·Fall 2022</p>
            <p><b>Tech Stack:</b> Python/C++</p>
            <p>Implemented the Bentley-Ottman sweep-line algorithm for efficient computational geometry and line segment intersection detection.</p>
            <p><a href="https://github.com/durba-s/BentleyOttmanAlgorithm/tree/master" target="_blank" rel="noopener noreferrer">View on GitHub ➔</a></p>
          </div>

          <div className="post-card">
            <h4>BITSmart Ecommerce Application</h4>
            <p><b>Course:</b> Software Engineering, BITS Pilani ·Spring 2022</p>
            <p><b>Tech Stack:</b> MongoDB, Express.js, React, Node.js (MERN), Heroku(for deployment)</p>
            <p>Developed a full-stack ecommerce platform supporting product catalogs, user authentication, and shopping cart functionality.</p>
            <p><a href="https://github.com/pjay20301/BITSmart" target="_blank" rel="noopener noreferrer">View on GitHub ➔</a></p>
          </div>

          <div className="post-card">
            <h4>Placement Management System</h4>
            <p><b>Course:</b> Introduction To Database Systems, BITS Pilani ·Spring 2021</p>
            <p><b>Tech Stack:</b> PHP, SQL, Procedural SQL</p>
            <p>Built a web application to demonstrate database operations, utilizing SQL triggers and stored procedures to manage university placement data.</p>
            <p><a href="https://github.com/durba-s/Placement_Management_System" target="_blank" rel="noopener noreferrer">View on GitHub ➔</a></p>
          </div>

          <div className="post-card">
            <h4>Tracker & Trigger Android App</h4>
            <p><b>Course:</b> Object Oriented Programming, BITS Pilani ·Fall 2020</p>
            <p><b>Tech Stack:</b> Java, XML, Firebase</p>
            <p>Created a mobile application utilizing Firebase storage for real-time tracking and event triggering based on user states.</p>
            <p><a href="https://github.com/durba-s/Tracker-Trigger-App" target="_blank" rel="noopener noreferrer">View on GitHub ➔</a></p>
          </div>
        </section>

      </main>
    </div>
  );
}