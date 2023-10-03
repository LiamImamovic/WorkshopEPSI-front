import React, {useState} from "react";
import dataCarrousel from "../data/carrousel.json"
import CarrouselCard from "./card.jsx"
import "../css/carrousel.css"

export const Bonplans = () => {
    let [count, setCount] = useState(0);
    let [countCarrouselPos, setCountCarrouselPos] = useState(0);

    const carrousel = dataCarrousel.map((item,index) => {
      /* créé une logique afin de savoir si on a besoin de le mettre dans le carrousel d'image */
        console.log(`carrousel : ${item.carrousel} id:${item.id} `)
        if (item.carrousel==='1'){
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
      <section>
          <div id={`carrousel pageCarrousel`}>
              <p className={"leftarrow"}> &gt;</p>
                    {carrousel}
              <p className={"rightarrow"}> &lt;</p>
          </div>
      </section>
  )
};
