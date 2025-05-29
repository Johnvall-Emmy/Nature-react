import React from "react";
import quotes from "../../assets/quotes.svg";
import Janemiller from "../../assets/Janemiller.png";
import "./Service.css";

const Service = () => {
  return (
    <div>
      <section className="customers-need">
        <div className="quote-div-image">
          <img src={quotes} alt="quotes" />
        </div>
        <h2>
          “Original and with an innate understanding of their customer’s needs,
          the team at Love Nature are always a pleasure to work with.”
        </h2>

        <div className="ceo-div">
          <img src={Janemiller} alt="The CEO" />
        </div>
        <p
          style={{
            color: " #536942",
            fontSize: "15px",
            paddingTop: "15px",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            width: "140px",
            paddingRight: "30px",
          }}
        >
          Jane Miller
        </p>
      </section>
    </div>
  );
};

export default Service;
