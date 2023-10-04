import React from "react";
import "../css/card.css"
import dataCarrousel from "../data/carrousel.json";
import Card from "./cardAssoBP.jsx";

const card = dataCarrousel.map((item, index) => {
  return (
      <Card
          key={index}
          id={item.id}
          image={item.img}
          logo={item.logo}
          description={item.description}
          titre={item.title}
      />
  );
});

export const Asso = () => {
  return (
      <main>
          <div id={"card"}>
              {card}
          </div>
      </main>

  );

};
