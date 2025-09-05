import React from "react";
import WeddingDetailsText from "../components/WeddingDetails/WeddingDetailsText";
import WeddingDetailsImage from "../components/WeddingDetails/WeddingDetailsImage";
import EventsOverview from "../components/WeddingDetails/EventsOverview/EventsOverview";
import WeddingTimeline from "../components/WeddingDetails/WeddingTimeline/WeddingTimeline";
import Attire from "../components/WeddingDetails/Attire/Attire";
import Faqs from "../components/WeddingDetails/Faqs";

export default function WeddingDetails() {
  return (
    <div >
      <section className="wedding-details-ceremony">
        <WeddingDetailsText />
        <WeddingDetailsImage />
      </section>
      <section>
        <EventsOverview />
        <WeddingTimeline/>
       
        
      </section>
    <Attire/>
     <Faqs/>
    </div>
  );
}
