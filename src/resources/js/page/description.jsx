import React from "react";
import dataCard from "../../../data/carrousel.json";
import { useParams } from "react-router-dom";
import "../../css/description.css"

export const Description =() =>{
    const { id } = useParams();
    const card = dataCard.find(card => card.id === id);
    console.log(card)
    return (
        <section id={"description"}>
            <img className={"imagePrincipal"} src={card.img} alt={`image de fond représentant la marque ${card.title}`}/>
            <div>
                <img className={"logo"} src={card.logo} alt={`logo représentant la marque ${card.title}`}/>
                <h1>{card.title}</h1>
                <p>{card.description}</p>
            </div>
        </section>
    )
}