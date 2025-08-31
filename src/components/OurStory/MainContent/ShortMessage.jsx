import React from "react";
import "../../../styles.css";

export default function ShortMessage() {
  return (
    <div className="short-message-container">
      <h2 className="section-heading glimpse-heading">Love Brewed Here</h2>
      <div className="short-message-flexbox">
        <div>
          <p className="standard-text">
            They met behind the counters of Botejyu—he, a spirited barman trainee; she, the queen of the register. Between shared laughs, stolen glances, and countless cups of coffee, friendship brewed into love.
          </p>
        </div>
        <div>
          <p className="standard-text">
            From their first “yes” to a proposal filled with caffeine-fueled nerves, they’re now ready to serve a lifetime of laughter, love, and little moments that feel like home.
          </p>
        </div>
      </div>
    </div>
  );
}
