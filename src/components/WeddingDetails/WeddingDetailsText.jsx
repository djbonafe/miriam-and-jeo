import React from "react";

export default function WeddingDetailsText() {
  return (
    <div>
      <div className="ceremony-title">
        <h3 className="page-heading wedding-details-heading">You are Invited!</h3>
        <sub className="ceremony-title-sub">To witness as we exchange vows and begin our forever</sub>
      </div>
      <div className="wedding-details">
        <p className="ceremony-date">
          <time dateTime="2025-11-21">Friday, November 21, 2025</time>
        </p>

        <p className="ceremony-time">
          <span className="event-time">2:00 PM</span>
          <span className="arrival-note">(Guests to arrive by 1:45 PM)</span>
        </p>

        <div className="ceremony-location">
          <p className="venue-name">San Juan Nepomuceno Parish</p>
          <address className="venue-address">
            <p>Brgy. Sum-ag, Bacolod</p> {/* Example Address */}
          </address>
        </div>
      </div>
    </div>
  );
}
