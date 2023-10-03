import React, { useState } from "react";
import dataCarrousel from "../data/carrousel.json";
import CarrouselCard from "./card.jsx";
import "../css/carrousel.css";

export const Bonplans = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [carrouselcount, setCarrouselcount] = useState(0)
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            // Revenir au dernier élément lorsque vous êtes au début
            setCurrentIndex(dataCarrousel.length - 1);
        }
    };

    const next = () => {
        if (currentIndex < dataCarrousel.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // Revenir au premier élément lorsque vous êtes à la fin
            setCurrentIndex(0);
        }
    };

    const carrousel = dataCarrousel.map((item, index) => {
        if (item.carrousel === "1") {
            return (
                <CarrouselCard
                    key={index}
                    id={item.id}
                    image={item.img}
                    logo={item.logo}
                    description={item.description}
                    titre={item.title}
                />
            );
        }
        return null;
    });

    return (
        <main>
            <div id={`carrousel`} className="carousel-container">
                <p onClick={prev} className={"leftarrow"}>
                    &lt;
                </p>
                {carrousel}
                <p onClick={next} className={"rightarrow"}>
                    &gt;
                </p>
            </div>
        </main>
    );
};
