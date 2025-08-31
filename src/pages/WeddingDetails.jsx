import React from "react";
import WeddingDetailsText from "../components/WeddingDetails/WeddingDetailsText";
import WeddingDetailsImage from "../components/WeddingDetails/WeddingDetailsImage";
import EventsOverview from "../components/WeddingDetails/EventsOverview/EventsOverview";
import WeddingTimeline from "../components/WeddingDetails/WeddingTimeline";
import Attire from "../components/WeddingDetails/Attire/Attire";

export default function WeddingDetails() {
  return (
    <div>
      <section className="wedding-details-ceremony">
        <WeddingDetailsText />
        <WeddingDetailsImage />
      </section>
      <section>
        <EventsOverview />
        <WeddingTimeline/>
        
      </section>
    <Attire/>
    </div>
  );
}
