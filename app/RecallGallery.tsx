"use client";

import Image from "next/image";
import { useState } from "react";
import queue from "../public/projects/recall/revision-queue.png";
import progress from "../public/projects/recall/progress-dashboard.png";
import settings from "../public/projects/recall/revision-settings.png";

const screenshots = [
  {
    id: "queue",
    label: "Daily queue",
    image: queue,
    alt: "Recall daily queue showing Transactions and Linked List Cycle within a 20-minute budget, with longer coding sessions listed as optional reviews.",
    caption: "A manageable plan for today. Reviews that fit the study budget appear first; optional sessions remain available below.",
  },
  {
    id: "progress",
    label: "Progress",
    image: progress,
    alt: "Recall progress dashboard with completed reviews, due topics, library size, weekly activity, and recall rating distribution.",
    caption: "Progress without streak pressure. Review activity and recall ratings show how practice is developing over time.",
  },
  {
    id: "settings",
    label: "Revision settings",
    image: settings,
    alt: "Recall settings showing the Asia/Kolkata timezone, configurable 3, 7, 14, 30, and 60-day intervals, and the Forgot, Partial, and Clear scheduling rules.",
    caption: "Predictable, configurable scheduling. Review dates follow the selected timezone and explicit recall-rating rules.",
  },
];

export default function RecallGallery() {
  const [selectedId, setSelectedId] = useState("queue");
  const selected = screenshots.find((screenshot) => screenshot.id === selectedId)!;

  return (
    <section className="recall-gallery" aria-labelledby="recall-gallery-title">
      <div className="recall-gallery-heading">
        <div>
          <p className="eyebrow">Inside the application</p>
          <h4 id="recall-gallery-title">Small sessions. A clearer picture.</h4>
        </div>
        <div className="recall-gallery-controls" role="group" aria-label="Choose an application screenshot">
          {screenshots.map((screenshot) => (
            <button
              key={screenshot.id}
              type="button"
              aria-pressed={selectedId === screenshot.id}
              aria-controls="recall-screenshot"
              onClick={() => setSelectedId(screenshot.id)}
            >
              {screenshot.label}
            </button>
          ))}
        </div>
      </div>
      <figure id="recall-screenshot">
        <a href={selected.image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${selected.label.toLowerCase()} screenshot at full size in a new tab`}>
          <Image src={selected.image} alt={selected.alt} sizes="(max-width: 800px) 90vw, 1200px" />
        </a>
        <figcaption aria-live="polite">
          <p>{selected.caption}</p>
          <a href={selected.image.src} target="_blank" rel="noopener noreferrer">View full size <span aria-hidden="true">↗</span><span className="contact-status"> (opens in a new tab)</span></a>
        </figcaption>
      </figure>
    </section>
  );
}
