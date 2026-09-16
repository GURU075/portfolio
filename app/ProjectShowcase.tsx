"use client";

import { useState } from "react";
import Image from "next/image";
import RecallGallery from "./RecallGallery";
import recallQueue from "../public/projects/recall/revision-queue.png";

const projects = [
  {
    id: "seatsync",
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
    id: "recall",
    title: "Recall",
    type: "Full-stack · Study revision tracker",
    description:
      "A study planner that turns 10-, 20-, or 30-minute budgets into prioritized revision sessions. Combines active recall, independent DSA practice schedules, retry-safe review updates, and a Windows desktop launch workflow.",
    stack: ["Java 17", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Flyway", "PowerShell"],
    outcome: "Focused, time-budgeted revision",
    status: "Single-user local application",
    challenge:
      "Help learners decide what to revise as their topic library grows, prioritizing forgotten and overdue material within limited study time. Keep review history and schedules consistent when requests are retried or sessions overlap.",
    approach:
      "A modular Spring Boot monolith separates topics, reviews, scheduling, and settings. Pure scheduling logic builds deterministic queues, while unique submission IDs, database locking, stale-state validation, and a transaction keep review history and schedule updates consistent. Flyway migrations and Hibernate validation maintain the PostgreSQL schema.",
    features: [
      "10-, 20-, or 30-minute focus queues that prioritize overdue topics and weaker recall",
      "Question-first recall sessions with Forgot, Partial, and Clear ratings",
      "Independent Approach and Coding schedules and duration estimates for DSA practice",
      "Topic search, filtering, archiving, restoration, and persistent review history",
      "Timezone-aware review dates and configurable successful-recall intervals",
      "Windows shortcuts for launch and shutdown, with process tracking and startup logs",
    ],
    architecture:
      "Windows shortcut → PowerShell launcher → dedicated local PostgreSQL + packaged Spring Boot / React application → readiness checks → browser",
    details: [
      {
        title: "How a focus session is selected",
        text: "Priority = (overdue days × 2) + recall bonus: Forgot adds 8, Partial adds 4, and Clear or no previous rating adds 0. Due sessions are ranked by score, then earlier due date and a stable identifier. The planner includes each session that fits the remaining estimated budget; others remain optional. A started session keeps its original queue.",
      },
      {
        title: "A predictable review schedule",
        text: "Forgot schedules a review for the next day and resets progression. Partial schedules it two days later without advancing. Clear advances through configurable intervals, defaulting to 3, 7, 14, 30, and 60 days. Dates use the configured timezone. These are rule-based product defaults; the budget uses estimates, so actual study time can vary.",
      },
      {
        title: "From source code to desktop workflow",
        text: "PowerShell scripts and Windows shortcuts start a dedicated local PostgreSQL instance, launch the packaged Spring Boot and React application, verify readiness, and open the browser. Process tracking, shutdown controls, and startup logging support repeatable local use.",
      },
      {
        title: "Verification and scope",
        text: "The project verification record reports 12 backend tests passing against H2 and PostgreSQL, plus frontend type checking, a production build, and desktop and mobile browser checks. Coverage includes concurrent retries, stale states, budget fitting, timezone boundaries, and independent DSA modes. Designed for one user on a trusted local machine; authentication, cloud sync, and notifications are outside the current scope. Docker Compose configuration was validated, but a full container launch was not verified.",
      },
    ],
  },
  {
    id: "querypilot",
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
      {projects.map((project, index) => {
        const number = String(index + 1).padStart(2, "0");
        const isOpen = openProject === project.id;
        const detailsId = `project-${project.id}-details`;

        return (
          <article
            className={`project project-${project.id}${isOpen ? " is-expanded" : ""}`}
            key={project.id}
          >
            <div className="project-number">{number}</div>
            <div className={`project-preview preview-${project.id}`} role="img" aria-label={project.id === "seatsync" ? "Illustrative SeatSync seat selection preview" : project.id === "recall" ? "Actual Recall application showing the daily revision queue and optional reviews within a 20-minute study budget" : "Illustrative QueryPilot SQL planning preview"}>
              <div className="preview-bar"><span>{project.title}<b> / workspace</b></span><span>● ● ●</span></div>
              {project.id === "seatsync" ? <div className="seat-preview">
                <div className="preview-title"><span>LIVE INVENTORY</span><strong>Your evening. Your seat.</strong></div>
                <div className="stage">S T A G E</div>
                <div className="seat-map" aria-hidden="true">{Array.from({length: 48}, (_, index) => <i key={index} className={index === 27 || index === 28 ? "selected" : index % 7 === 0 || index % 11 === 0 ? "reserved" : ""} />)}</div>
                <div className="preview-bottom"><span><i /> Available <i className="selected" /> Selected</span><span>2 seats reserved ↗</span></div>
              </div> : project.id === "recall" ? <div className="recall-preview">
                <div className="preview-title"><span>YOUR DAILY FOCUS</span><strong>A little time. A clear plan.</strong></div>
                <Image className="recall-cover" src={recallQueue} alt="" sizes="(max-width: 800px) 90vw, 600px" />
                <div className="preview-bottom"><span>Daily queue · Optional reviews</span><span>20-minute budget</span></div>
              </div> : <div className="query-preview">
                <div className="preview-title"><span>NATURAL LANGUAGE → SQL</span><strong>Ask better questions.</strong></div>
                <div className="query-prompt">Show the five most recent bookings <span>↵</span></div>
                <div className="query-code"><span>01 <b>SELECT</b> id, event_name, created_at</span><span>02 <b>FROM</b> bookings</span><span>03 <b>ORDER BY</b> created_at <b>DESC</b></span><span>04 <b>LIMIT</b> <em>5</em>;</span></div>
                <div className="preview-bottom"><span>✓ Read-only query</span><span>Policy validated</span></div>
              </div>}
              <span className="preview-note">{project.id === "recall" ? "ACTUAL APPLICATION" : "INTERFACE CONCEPT"}</span>
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
                onClick={() => setOpenProject(isOpen ? null : project.id)}
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

                {project.id === "recall" && <RecallGallery />}

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
                {project.details && (
                  <div className="project-detail-grid recall-engineering">
                    {project.details.map((detail) => (
                      <section key={detail.title}>
                        <h4>{detail.title}</h4>
                        <p>{detail.text}</p>
                      </section>
                    ))}
                  </div>
                )}
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
