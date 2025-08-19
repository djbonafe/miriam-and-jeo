import React from "react";
import "../../../styles.css";
import Countdown from "./Countdown";

export default function HeaderText() {
  return (
    <div className="our-story-hero-text">
      <div className="our-story-hero-title">
        <h1 className="our-story-title-1">The Wedding of</h1>
        <h2 className="our-story-title-2">Jeo <span className="plus">+</span> <span className="miriam">Miriam</span></h2>
      </div>
      <div className="our-story-invitation-text">
        <p className="sample">November 21, 2025 <span className="our-story-invitation-text-dot">●</span> <span className="our-story-invitation-text-location">San Juan Nepomuceno Parish</span></p>
        <Countdown targetDate={new Date("2025-11-21")} />
      </div>
    </div>
  );
}
