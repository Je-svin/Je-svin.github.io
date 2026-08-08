import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, CheckCircle2, Code2,
  Download, ExternalLink, Github, GraduationCap, Linkedin, Mail,
  Menu, Phone, Send, Sparkles, X
} from "lucide-react";
import "./styles.css";

const roles = [
  "BTech Computer Science Graduate",
  "Data Science Intern",
  "Aspiring Data Analyst"
];

const projects = [
  {
    title: "Library Management System",
    description:
      "A Python-based Library Management System developed using Object-Oriented Programming concepts. It manages books and supports viewing, adding, removing and issuing books.",
    tech: ["Python", "OOP", "File Handling"],
    icon: "01"
  },
  {
    title: "Infopark Jobs Web Scraping",
    description:
      "A Python web scraping project that collects job-related information and organizes the extracted data for easier analysis.",
    tech: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    icon: "02"
  },
  {
    title: "Smart Car Parking System",
    description:
      "A smart parking solution designed to improve parking management and provide an efficient way to monitor and manage parking spaces.",
    tech: [],
    icon: "03"
  }
];

const skills = [
  ["C", "Programming"],
  ["Python", "Programming"],
  ["Manual Testing", "Testing"],
  ["API Testing", "Testing"],
  ["Web Scraping", "Web"],
  ["Git", "Tools"],
  ["VS Code", "Tools"]
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "About", "Education", "Skills", "Projects", "Experience", "Certificates", "Contact"];

  return (
    <header className="navbar">
      <a className="logo" href="#home" onClick={() => setOpen(false)}>
        <span>J</span> Jesvin<span className="dot">.</span>
      </a>
      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const [role, setRole] = useState(0);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => setRole((r) => (r + 1) % roles.length), 2600);
    return () => clearInterval(timer);
  }, []);

  const handlePhoto = (event) => {
    const file = event.target.files?.[0];
    if (file) setPhoto(URL.createObjectURL(file));
  };

  return (
    <section id="home" className="hero section">
      <div className="hero-glow glow-one" />
      <div className="hero-glow glow-two" />
      <div className="hero-copy reveal">
        <p className="eyebrow"><Sparkles size={16} /> Welcome to my portfolio</p>
        <h1>Hi, I'm <span>Jesvin Jose</span></h1>
        <div className="role-wrap">
          <span className="role-line" key={roles[role]}>{roles[role]}</span>
        </div>
        <p className="hero-text">
          Passionate about Data Analytics, Artificial Intelligence, Machine Learning
          and building practical software solutions.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">View My Projects <ArrowDown size={18} /></a>
          <a className="btn secondary" href="#contact">Contact Me <ArrowUpRight size={18} /></a>
        </div>
        <div className="quick-contact">
          <a href="mailto:jesvinjose660@gmail.com"><Mail size={16} /> jesvinjose660@gmail.com</a>
          <a href="tel:8714731168"><Phone size={16} /> 8714731168</a>
        </div>
      </div>

      <div className="hero-photo reveal">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="photo-frame">
          {photo ? (
            <img src={photo} alt="Jesvin Jose" />
          ) : (
            <div className="photo-placeholder">
              <div className="initials">JJ</div>
              <p>Add your photo</p>
              <small>Click the button below</small>
            </div>
          )}
        </div>
        <label className="photo-upload">
          <input type="file" accept="image/*" onChange={handlePhoto} />
          {photo ? "Change Photo" : "Upload Photo"}
        </label>
        <div className="floating-card">
          <CheckCircle2 size={18} />
          <div><strong>Open to opportunities</strong><small>Data • AI • Software</small></div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="section-title reveal">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <SectionTitle kicker="01 — About Me" title="Turning curiosity into practical skills." />
      <div className="about-grid">
        <div className="about-card glass reveal">
          <p>
            I am a BTech Computer Science graduate with a strong interest in Data
            Analytics, Artificial Intelligence, and Machine Learning. I enjoy learning
            new technologies and developing practical projects that solve real-world problems.
          </p>
          <p>
            I am currently pursuing a Data Science course at <strong>SMEC Technologies</strong>,
            where I am developing my skills in Python, data analysis, machine learning,
            and related technologies.
          </p>
          <p>
            I am also interested in software testing, API testing, web scraping,
            and developing efficient software solutions.
          </p>
        </div>
        <div className="highlights reveal">
          {[
            ["BTech CSE", "Graduate", GraduationCap],
            ["Data Science", "Learner", Sparkles],
            ["Python", "Enthusiast", Code2],
            ["Projects", "Builder", BriefcaseBusiness]
          ].map(([a, b, Icon]) => (
            <div className="highlight glass" key={a}>
              <Icon size={22} />
              <strong>{a}</strong><span>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle kicker="02 — Education" title="My academic journey." />
      <div className="timeline">
        <article className="timeline-item reveal">
          <div className="timeline-icon"><GraduationCap size={22} /></div>
          <div className="timeline-card glass">
            <span className="date">2022 — 2026</span>
            <h3>BTech — Computer Science and Engineering</h3>
            <p className="institution">Sahrdaya College of Engineering and Technology, Kodakara</p>
            <p>APJ Abdul Kalam Technological University (KTU)</p>
            <div className="result">CGPA <strong>7.92</strong></div>
          </div>
        </article>
        <article className="timeline-item reveal">
          <div className="timeline-icon"><GraduationCap size={22} /></div>
          <div className="timeline-card glass">
            <span className="date">2020 — 2022</span>
            <h3>Higher Secondary</h3>
            <p className="institution">St. Antony's HSS, Mala</p>
            <p>Kerala State Board</p>
            <div className="result">Percentage <strong>92%</strong></div>
          </div>
        </article>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle kicker="03 — Skills" title="Tools I work with." text="A growing technical toolkit built through coursework, projects and hands-on practice." />
      <div className="skills-grid">
        {skills.map(([name, category], i) => (
          <div className="skill-card glass reveal" style={{ "--i": i }} key={name}>
            <span className="skill-number">0{i + 1}</span>
            <Code2 size={25} />
            <h3>{name}</h3>
            <p>{category}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle kicker="04 — Projects" title="Things I've built." text="Projects that demonstrate my interest in Python, automation, web data and practical problem solving." />
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article className="project-card glass reveal" key={project.title}>
            <div className="project-top">
              <span>{project.icon}</span>
              <Github size={22} />
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.tech.length > 0 && (
              <div className="tags">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
            )}
            <div className="project-links">
              <a href="#contact">GitHub <ArrowUpRight size={15} /></a>
              <a href="#contact">Demo <ExternalLink size={15} /></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle kicker="05 — Experience" title="Experience & learning." />
      <div className="experience-stack">
        <article className="experience-card glass reveal">
          <div className="experience-badge">DS</div>
          <div>
            <span className="date">June 2026 — Present</span>
            <h3>Data Science Intern</h3>
            <p className="institution">SMEC Technologies</p>
            <p>Building practical knowledge in Python, data analysis, machine learning and data science workflows.</p>
          </div>
        </article>
        <article className="experience-card glass reveal">
          <div className="experience-badge">QA</div>
          <div>
            <span className="date">Internship</span>
            <h3>Quality Analyst Intern</h3>
            <p className="institution">Caddayn Biller Solutions</p>
            <ul>
              <li>Manual and software testing</li>
              <li>Regression testing and test case execution</li>
              <li>API testing and bug identification/reporting</li>
              <li>Automation testing using Python</li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}

function Certificates() {
  const certs = [
    ["AI for Future Workforce Program", "Intel & Dell Technologies", "AI awareness and foundation course"],
    ["The Joy of Computing Using Python", "NPTEL", "12 Week Course"],
    ["C Programming Bootcamp", "Udemy", "C Programming"]
  ];
  return (
    <section id="certificates" className="section">
      <SectionTitle kicker="06 — Certifications" title="Learning beyond the classroom." />
      <div className="cert-grid">
        {certs.map(([title, issuer, desc], i) => (
          <article className="cert-card glass reveal" key={title}>
            <div className="cert-icon"><CheckCircle2 size={24} /></div>
            <span className="cert-index">0{i + 1}</span>
            <h3>{title}</h3>
            <strong>{issuer}</strong>
            <p>{desc}</p>
            <a href="#contact">View Certificate <ArrowUpRight size={15} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  };
  return (
    <section id="contact" className="section contact-section">
      <SectionTitle kicker="07 — Contact" title="Let's connect." text="Interested in technology, data, AI and software development? Feel free to reach out." />
      <div className="contact-grid">
        <div className="contact-info glass reveal">
          <h3>Have an opportunity?</h3>
          <p>I’m open to conversations about internships, entry-level opportunities and interesting projects.</p>
          <a href="tel:8714731168"><Phone /> 8714731168</a>
          <a href="mailto:jesvinjose660@gmail.com"><Mail /> jesvinjose660@gmail.com</a>
          <a href="https://www.linkedin.com/in/jesvin-jose-488b42254add" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn Profile</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer"><Github /> GitHub Profile</a>
        </div>
        <form className="contact-form glass reveal" onSubmit={submit}>
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@example.com" /></label>
          <label>Message<textarea required name="message" rows="5" placeholder="Write your message..."></textarea></label>
          <button className="btn primary" type="submit"><Send size={17} /> {sent ? "Message Ready" : "Send Message"}</button>
          {sent && <p className="form-note">Form submitted locally. Connect it to an email service to receive messages.</p>}
        </form>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <footer>
        <a className="logo" href="#home"><span>J</span> Jesvin<span className="dot">.</span></a>
        <p>© 2026 Jesvin Jose. All Rights Reserved.</p>
        <a href="#home" className="back-top" aria-label="Back to top"><ArrowUp size={18} /></a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
