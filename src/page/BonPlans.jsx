import React, { useState } from "react";
import dataCard from "../data/carrousel.json";
import Card from "../components/cardAssoBP.jsx";
import "../css/carrousel.css";
import "../css/card.css"
import "../css/asoBP.css"
export const Bonplans = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carrouselcount, setCarrouselcount] = useState(0)
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            // Revenir au dernier élément lorsque vous êtes au début
            setCurrentIndex(dataCard.length - 1);
        }
    };

    const next = () => {
        if (currentIndex < dataCard.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // Revenir au premier élément lorsque vous êtes à la fin
            setCurrentIndex(0);
        }
    };

    const carrousel = dataCard.map((item, index) => {
        if (item.carrousel === "1") {
            return (
                <Card
                    key={index}
                    id={item.id}
                    image={item.img}
                    logo={item.logo}
                    description={item.description}
                    titre={item.title}
                    lien="bonplans"
                />
            );
        }
        return null;
    });
    const card = dataCard.map((item, index) => {
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

    return (
        <main>
            <div id={"card"}>
                {card}
            </div>
        </main>
    );
};
