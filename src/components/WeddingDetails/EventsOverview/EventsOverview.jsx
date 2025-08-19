import React from "react";
import "../../../styles.css"; 
export default function EventsOverview() {
  return (
    <div>
      <h2 className="page-heading events-overview-heading">Events Overview</h2>
      <section id="overview">
       <div id="ceremony">
        <h2 className="events-overview-heading2">Ceremony </h2>
        <p><strong>Venue:</strong>St. John Nepomuceno Parish</p>
        <p><strong>Address:</strong>Brgy. Sum-ag, Bacolod City, Negros Occidental, Philippines</p>
        <p><strong>Type of Ceremony:</strong>Catholic Wedding</p>
        <p><strong>Officiant:</strong> [Name]</p>
        <p><strong>Color Motif:</strong>Champagne</p>
        <h3>Order of Events:</h3>
        <ul>
            <li>[Event 1]</li>
            <li>[Event 2]</li>
            <li>[Event 3]</li>
        </ul>
        <p><strong>Special Instructions:</strong> [Any additional information]</p>
    </div>

    <div id="reception">
        <h2 className="events-overview-heading2">Reception </h2>
        <p><strong>Venue:</strong> [Venue Name]</p>
        <p><strong>Address:</strong> [Complete Address]</p>
        <p><strong>Type of Reception:</strong> [Formal Dinner/Cocktail Hour/Buffet]</p>
        <p><strong>Food and Beverage:</strong> [Details about food options]</p>
        <p><strong>Entertainment:</strong> [Details about entertainment]</p>
        <p><strong>Seating Arrangements:</strong> [Information on seating]</p>
        <p><strong>Dress Code:</strong> [Dress Code]</p>
        <p><strong>Special Instructions:</strong> [Any additional information]</p>
    </div>
    </section>
    </div>
  );
}
