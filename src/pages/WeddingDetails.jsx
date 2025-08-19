import React from "react";
import WeddingDetailsText from "../components/WeddingDetails/WeddingDetailsText";
import WeddingDetailsImage from "../components/WeddingDetails/WeddingDetailsImage";
import EventsOverview from "../components/WeddingDetails/EventsOverview/EventsOverview";

export default function WeddingDetails() {
  return (
    <div>
      <section className="wedding-details-ceremony">
        <WeddingDetailsText />
        <WeddingDetailsImage />
      </section>
      <section>
        <EventsOverview />
      </section>
    </div>
  );
}
