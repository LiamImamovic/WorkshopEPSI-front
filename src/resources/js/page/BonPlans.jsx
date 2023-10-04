import React, { useState } from "react";
import dataCard from "../../../data/carrousel.json";
import Card from "../components/cardAssoBP.jsx";
import "../../css/carrousel.css";
import "../../css/card.css"
import "../../css/asoBP.css"

export const Bonplans = () => {
    const card = dataCard.map((item, index) => {
        return (
                <Card
                    key={index}
                    id={item.id}
                    image={item.img}
                    logo={item.logo}
                    description={item.description}
                    titre={item.title}
                    lien="bonplan"
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
