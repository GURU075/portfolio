import ContactActions from "./ContactActions";

const skills = [
  "Java",
  "Spring Boot",
  "Microservices",
  "REST APIs",
  "React",
  "TypeScript",
  "SQL",
  "PostgreSQL",
  "MongoDB",
  "Kafka",
  "Docker",
  "Git",
  "CI/CD",
];

const projects = [
  {
    number: "01",
    title: "OrderFlow",
    type: "Distributed microservices backend",
    description:
      "A resilient order-processing system designed around clear service boundaries, asynchronous events, and observable failure recovery.",
    stack: ["Java", "Spring Boot", "Microservices", "Kafka", "PostgreSQL"],
    outcome: "Reliable workflows",
  },
  {
    number: "02",
    title: "SignalDesk",
    type: "Operations dashboard",
    description:
      "A focused dashboard that turns service health and business events into fast, readable decisions for operations teams.",
    stack: ["React", "TypeScript", "REST APIs", "Docker"],
    outcome: "Faster diagnosis",
  },
  {
    number: "03",
    title: "DataBridge",
    type: "Integration platform",
    description:
      "A configurable data pipeline for validating, transforming, and synchronizing records across independent systems.",
    stack: ["Java", "MongoDB", "SQL", "CI/CD"],
    outcome: "Clean integrations",
  },
];

const principles = [
  {
    title: "Think in systems",
    text: "I look beyond the ticket to understand data flow, failure modes, and the people who depend on the result.",
  },
  {
    title: "Build for clarity",
    text: "Readable code, explicit contracts, and useful documentation make software easier to change and safer to own.",
  },
  {
    title: "Ship with confidence",
    text: "Testing, observability, and small feedback loops are part of the build—not tasks saved for the end.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Gururaj Yadav portfolio home">
          <span className="brand-mark">G</span>
          <span>GURURAJ YADAV / PORTFOLIO</span>
        </a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="availability" href="#contact">
          <span aria-hidden="true" />
          Open to opportunities
        </a>
      </nav>

      <header className="hero shell" id="top">
        <div className="hero-kicker">
          <span>Software Engineer</span>
          <span>India · 2026</span>
        </div>
        <h1>
          I build software
          <br />
          that stays <em>useful.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            I&apos;m Gururaj Yadav, a software engineer focused on dependable backend
            systems and thoughtful full-stack experiences.
          </p>
          <a className="circle-link" href="#work" aria-label="View selected work">
            <span>View work</span>
            <b aria-hidden="true">↓</b>
          </a>
        </div>
        <div className="hero-orbit orbit-one" aria-hidden="true" />
        <div className="hero-orbit orbit-two" aria-hidden="true" />
      </header>

      <section className="statement shell" aria-label="Professional summary">
        <p className="eyebrow">What I bring</p>
        <p className="statement-copy">
          Strong engineering fundamentals, a product mindset, and the curiosity
          to understand how every moving part connects.
        </p>
        <div className="statement-meta">
          <span>Backend systems</span>
          <span>Full-stack delivery</span>
          <span>Continuous learning</span>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2>Built to solve,<br />not just to ship.</h2>
          </div>
          <p>
            A selection of systems and product ideas that show how I approach
            architecture, implementation, and impact.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.stack.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
              <div className="project-outcome">
                <span>Outcome</span>
                <strong>{project.outcome}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="shell about-grid">
          <div className="about-intro">
            <p className="eyebrow light">How I work</p>
            <h2>Curious by default.<br />Practical by design.</h2>
          </div>
          <div className="principles">
            {principles.map((principle, index) => (
              <article key={principle.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills shell" aria-labelledby="skills-title">
        <div className="skills-copy">
          <p className="eyebrow">Knowledge base</p>
          <h2 id="skills-title">Tools I use to turn ideas into reliable products.</h2>
          <p>
            I care more about choosing the right tool than chasing every new
            one. These are the technologies I use to create clear, maintainable
            solutions.
          </p>
        </div>
        <ul className="skill-cloud">
          {skills.map((skill, index) => (
            <li key={skill}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="contact shell" id="contact">
        <p className="eyebrow light">Next chapter</p>
        <div className="contact-row">
          <h2>Have a role in mind?</h2>
          <ContactActions />
        </div>
        <div className="contact-foot">
          <p>
            I&apos;m open to software engineering opportunities where I can
            solve meaningful problems and grow with a strong team.
          </p>
          <span>gururajyadav.07@gmail.com</span>
        </div>
      </section>

      <footer className="shell">
        <span>© 2026 Gururaj Yadav</span>
        <span>Designed with intent. Built with care.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
