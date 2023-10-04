import React from "react";
import "../../css/card.css";
import dataCard from "../../../data/carrousel.json";
import Card from "../components/cardAssoBP.jsx";


export const Asso = () => {
    const card = dataCard.map((item, index) => {
        return (
            <Card
                key={index}
                id={item.id}
                image={item.img}
                logo={item.logo}
                description={item.description}
                titre={item.title}
                lien="asso"
            />
        );
    });
  return (
      <main>
          <div id={"card"}>
              {card}
          </div>
      </main>

  );

};
