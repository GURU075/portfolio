"use client";

import { useState } from "react";

const email = "gururajyadav.07@gmail.com";
const emailHref =
  "mailto:gururajyadav.07@gmail.com?subject=Software%20engineering%20opportunity&body=Hi%20Gururaj%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect%20about...";

export default function ContactActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [copyLabel, setCopyLabel] = useState("Copy email");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyLabel("Copied!");
      window.setTimeout(() => setCopyLabel("Copy email"), 2200);
    } catch {
      setCopyLabel("Select email below");
    }
  }

  return (
    <div className="contact-actions">
      {isOpen && (
        <div className="contact-menu" id="contact-menu">
          <p>Choose how you&apos;d like to connect.</p>
          <button type="button" onClick={copyEmail}>
            <span>{copyLabel}</span>
            <span aria-hidden="true">{copyLabel === "Copied!" ? "✓" : "⧉"}</span>
          </button>
          <a href={emailHref}>
            <span>Open email app</span>
            <span aria-hidden="true">↗</span>
          </a>
          <span className="contact-status" aria-live="polite">
            {copyLabel === "Copied!" ? `${email} copied to clipboard` : ""}
          </span>
        </div>
      )}

      <button
        className="contact-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls="contact-menu"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span>{isOpen ? "Close" : "Let’s talk"}</span>
        <span aria-hidden="true">{isOpen ? "×" : "↗"}</span>
      </button>
    </div>
  );
}
