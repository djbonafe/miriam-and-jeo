import React from "react";
import "../../../styles.css";

export default function ShortMessage() {
  return (
    <div className="short-message-container">
      <h2 className="section-heading glimpse-heading">Glimpse of Us</h2>
      <div className="short-message-flexbox">
        <div>
          <p className="standard-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            praesentium nostrum, perspiciatis ratione assumenda harum! Fugiat
            voluptatibus eligendi totam dolorum?
          </p>
        </div>
        <div>
          <p className="standard-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            obcaecati aliquid natus corporis, temporibus voluptas numquam
            accusantium ab architecto provident.
          </p>
        </div>
      </div>
    </div>
  );
}
