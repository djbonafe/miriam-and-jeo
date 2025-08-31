import React from "react";
import "../../../styles.css"; 
export default function EventsOverview() {
  return (
    <div>
      {/* <h2 className="page-heading events-overview-heading">Events Overview</h2> */}
      <section id="overview">
       <div id="ceremony">
        <h2 className="events-overview-heading2">Ceremony </h2>
        <p><strong>Venue:</strong> &nbsp; St. John Nepomuceno Parish</p>
        <p><strong>Address:</strong>&nbsp; Brgy. Sum-ag, Bacolod City, Negros Occidental, Philippines</p>
        <p><strong>Color Motif:</strong>&nbsp; Champagne</p>
        {/* <h3>Order of Events:</h3>
        <ul>
            <li>[Event 1]</li>
            <li>[Event 2]</li>
            <li>[Event 3]</li>
        </ul> */}
        {/* <p><strong>Special Instructions:</strong> [Any additional information]</p> */}
    </div>

    <div id="reception">
        <h2 className="events-overview-heading2">Reception </h2>
        <p><strong>Venue:</strong> &nbsp; Roy's Hotel and Convention Center</p>
        <p><strong>Address:</strong> &nbsp; JW6G+RC, Araneta Ave, Bacolod, Negros Occidental</p>
        {/* <p><strong>Dress Code:</strong>&nbsp; Color motif is champagne but feel free to wear any color as long as it's not white. </p> */}
    </div>
    </section>
    </div>
  );
}
