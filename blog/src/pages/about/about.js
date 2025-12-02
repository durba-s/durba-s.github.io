import * as React from 'react';
import StyledContainer from '../../components/styled-container';
import avatarImg from '../Assets/Image.jpeg';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../../theme';

export default function About({ darkMode }) {

  const accent = '#9c27b0';
  const muted = '#6b7280';
  const cardBg = darkMode ? '#0b1220' : '#ffffff';

  const styles = {
    wrapper: { display: 'flex', gap: 32, flexWrap: 'wrap', alignItems: 'flex-start' },
    left: {
      flex: '0 0 300px',
      maxWidth: 320,
      background: cardBg,
      borderRadius: 8,
      padding: 20,
      boxShadow: '0 6px 18px rgba(16,24,40,0.06)',
    },
    avatar: {
      width: 96,
      height: 96,
      borderRadius: '50%',
      background: '#e6eef8',
      display: 'block',
      marginBottom: 12,
    },
    name: { fontSize: 20, fontWeight: 700, marginBottom: 6 },
    subtitle: { color: muted, fontSize: 13, marginBottom: 12 },
    contact: { fontSize: 13, color: muted, lineHeight: 1.6 },
    button: {
      display: 'inline-block',
      marginTop: 12,
      padding: '8px 12px',
      background: accent,
      color: '#fff',
      borderRadius: 6,
      textDecoration: 'none',
      fontSize: 13,
    },
    right: { flex: 1, minWidth: 300 },
    section: { marginBottom: 20 },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 700,
      color: accent,
      letterSpacing: 1,
      marginBottom: 8,
      textTransform: 'uppercase',
    },
    meta: { color: muted, fontSize: 15, marginBottom: 8, padding: 5 },
    list: { margin: 0, paddingLeft: 18,fontSize: 13,color: muted },
    iframeWrap: {
      width: '100%',
      height: '60vh',
      border: '1px solid rgba(0,0,0,0.06)',
      borderRadius: 6,
      overflow: 'hidden',
      marginTop: 12,
    },
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <StyledContainer darkMode={darkMode}>
      <div style={styles.wrapper}>
        <aside style={styles.left}>
          <img
            src={avatarImg}
            alt="Durba Satpathi"
            style={styles.avatar}
          />
          <div style={styles.name}>Durba Satpathi</div>
          <div style={styles.subtitle}>Data Scientist</div>

          <div style={styles.contact}>
            <div>
              <strong>Email</strong>
              <div>
                <a href="mailto:durba.satpathi@gmail.com">durba.satpathi@gmail.com</a>
              </div>
            </div>

            <div style={{ marginTop: 8 }}>
              <strong>Links</strong>
              <div>
                <a href="https://github.com/durba-s" target="_blank" rel="noreferrer">GitHub</a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/durba-satpathi-87482421a/" target="_blank" rel="noreferrer">LinkedIn</a>
              </div>
            </div>

            <a href="https://drive.google.com/file/d/1AW_EEj1dXwORUdcZwxwm7-Z4JfIjQUcC/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={styles.button}>
               Resume
            </a>
          </div>
        </aside>

        <main style={styles.right}>
          <section style={styles.section}>
            <div style={styles.sectionTitle}>Education</div>
            <div style={styles.meta}>Birla Institute of Technology and Science, Pilani (BITS Pilani) — B.E. Computer Science</div>
            <div style={{ color: muted, fontSize: 14 }}>2019–2023 · GPA: 9.87/10.0 (University Rank 1) · Minor: Data Science (10.0/10.0)</div>
          </section>

          <section style={styles.section}>
            <div style={styles.sectionTitle}>Experience</div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: 700 }}>Microsoft R & D</div>
              <div style={styles.meta}>Data Scientist 2 · Sept 2025 – Present | Data Scientist · Jul 2023 – Aug 2025</div>
              <ul style={styles.list}>
                <li>Bing Ads: Contextual bandit and RL-based ranking/allocation policies for sponsored search; and whole page optimization.</li>
              </ul>
            </div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: 700 }}>Uber Technologies Inc.</div>
              <div style={styles.meta}>Software Engineering Intern · Jan 2023 – Jun 2023</div>
              <ul style={styles.list}>
                <li>Built a Fusion.js frontend integrated with 10+ microservices using GraphQL federation and optimized visualization pipelines.</li>
              </ul>
            </div>

            <div style={{ marginBottom: 10 }}>
              <div style={{ fontWeight: 700 }}>Intuit Inc.</div>
              <div style={styles.meta}>Software Engineering Intern · Jun 2022 – Jul 2022</div>
              <ul style={styles.list}>
                <li>Developed backend services for Warehouse Management Systems using Kotlin & Spring; focused on async I/O and scalable REST APIs.</li>
              </ul>
            </div>
          </section>

          <section style={styles.section}>
            <div style={styles.sectionTitle}>Skills</div>
            <div style={{ color: muted, marginBottom: 8 }}>
              <ul style={styles.list}>
                <li> <b>Programming:</b> Python, Java, C/C++, C#, SQL</li>
                <li> <b>ML:</b> PyTorch, TensorFlow, Scikit-learn, Azure ML</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </StyledContainer>
    </ThemeProvider>
  );
}