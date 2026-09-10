"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "SeatSync",
    type: "Full-stack · Distributed ticketing platform",
    description:
      "A real-time event booking experience with live seat inventory, atomic Redis locks, idempotent checkout, and Kafka-powered payment confirmation across Spring Boot microservices.",
    stack: [
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Kafka",
    ],
    outcome: "Conflict-safe booking",
    status: "Active development",
    challenge:
      "Keep seat selection accurate when many customers act at once, while making retries and service failures safe throughout checkout.",
    approach:
      "Atomic Redis and Lua seat locks prevent double booking. Expiring reservations, idempotency keys, compensation logic, circuit breakers, and a Kafka transactional outbox keep the workflow reliable.",
    features: [
      "Event discovery, search, showtimes, and live seat availability",
      "Interactive seat selection with automatic reservation expiry",
      "Booking, payment deadline, and confirmation tracking",
      "Rate limiting, fallbacks, correlation IDs, and recovery states",
    ],
    architecture:
      "React → API Gateway → Event, Venue, Show, Inventory, Booking & Payment services → PostgreSQL · Redis · Kafka",
  },
  {
    number: "02",
    title: "QueryPilot",
    type: "Full-stack · AI database workspace",
    description:
      "A natural-language database assistant that discovers schemas, creates structured SQL plans, validates every statement, and requires explicit confirmation before executing writes.",
    stack: [
      "React",
      "Java",
      "Spring Boot",
      "Spring AI",
      "JSqlParser",
      "Docker",
    ],
    outcome: "Safer database access",
    status: "Production-minded prototype",
    challenge:
      "Make natural-language database work useful without trusting model output, exposing database access to the model, or allowing silent destructive changes.",
    approach:
      "The AI produces a structured SQL plan only. A server-side policy layer parses its AST, verifies intent and dialect, enforces parameters and limits, and pauses every write for one-time user confirmation.",
    features: [
      "PostgreSQL, MySQL, and Oracle connections with schema discovery",
      "Natural-language queries with SQL preview and tabular results",
      "Explicit confirm or cancel controls for data modifications",
      "Expiring sessions, query timeouts, row limits, and host allowlisting",
    ],
    architecture:
      "React → Spring Boot API → AI planner → SQL policy & confirmation layer → JDBC → PostgreSQL · MySQL · Oracle",
  },
];

export default function ProjectShowcase() {
  const [openProject, setOpenProject] = useState<string | null>(null);

  return (
    <div className="project-list">
      {projects.map((project) => {
        const isOpen = openProject === project.number;
        const detailsId = `project-${project.number}-details`;

        return (
          <article
            className={`project project-${project.number}${isOpen ? " is-expanded" : ""}`}
            key={project.number}
          >
            <div className="project-number">{project.number}</div>
            <div className={`project-preview preview-${project.number}`} role="img" aria-label={project.number === "01" ? "Illustrative SeatSync seat selection preview" : "Illustrative QueryPilot SQL planning preview"}>
              <div className="preview-bar"><span>{project.title}<b> / workspace</b></span><span>● ● ●</span></div>
              {project.number === "01" ? <div className="seat-preview">
                <div className="preview-title"><span>LIVE INVENTORY</span><strong>Your evening. Your seat.</strong></div>
                <div className="stage">S T A G E</div>
                <div className="seat-map" aria-hidden="true">{Array.from({length: 48}, (_, index) => <i key={index} className={index === 27 || index === 28 ? "selected" : index % 7 === 0 || index % 11 === 0 ? "reserved" : ""} />)}</div>
                <div className="preview-bottom"><span><i /> Available <i className="selected" /> Selected</span><span>2 seats reserved ↗</span></div>
              </div> : <div className="query-preview">
                <div className="preview-title"><span>NATURAL LANGUAGE → SQL</span><strong>Ask better questions.</strong></div>
                <div className="query-prompt">Show the five most recent bookings <span>↵</span></div>
                <div className="query-code"><span>01 <b>SELECT</b> id, event_name, created_at</span><span>02 <b>FROM</b> bookings</span><span>03 <b>ORDER BY</b> created_at <b>DESC</b></span><span>04 <b>LIMIT</b> <em>5</em>;</span></div>
                <div className="preview-bottom"><span>✓ Read-only query</span><span>Policy validated</span></div>
              </div>}
              <span className="preview-note">INTERFACE CONCEPT</span>
            </div>
            <div className="project-main">
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul
                className="tag-list"
                aria-label={`${project.title} technologies`}
              >
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button
                className="project-action"
                type="button"
                aria-expanded={isOpen}
                aria-controls={detailsId}
                onClick={() => setOpenProject(isOpen ? null : project.number)}
              >
                <span>{isOpen ? "Close case study" : "Explore project"}</span>
                <span aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
            </div>
            <div className="project-outcome">
              <span>Outcome</span>
              <strong>{project.outcome}</strong>
            </div>

            {isOpen && (
              <div className="project-details" id={detailsId}>
                <div className="project-details-heading">
                  <p>Inside the build</p>
                  <span>{project.status}</span>
                </div>

                <div className="project-detail-grid">
                  <section>
                    <span>Challenge</span>
                    <p>{project.challenge}</p>
                  </section>
                  <section>
                    <span>Engineering approach</span>
                    <p>{project.approach}</p>
                  </section>
                </div>

                <div className="project-feature-block">
                  <span>What I built</span>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-architecture">
                  <span>System flow</span>
                  <p>{project.architecture}</p>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
