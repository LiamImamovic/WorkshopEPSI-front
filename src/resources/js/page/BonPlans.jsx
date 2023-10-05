import React, { useState } from "react";
import dataCard from "../../../data/carrousel.json";
import Card from "../components/cardAssoBP.jsx";
import "../../css/carrousel.css";
import "../../css/card.css"
import "../../css/asoBP.css"

export const Bonplans = () => {
    const [rechercheTerm, setRechercheTerm] = useState('');
    const [nombreDeResultats, setNombreDeResultats] = useState(5); // By default, show 5 results
    const [startIndex, setStartIndex] = useState(0); // Starting index for slicing
    const handleRechercheChange = (e) => {
        setRechercheTerm(e.target.value);
        setStartIndex(0);
    };
    // Filter the data based on the search term
    const assoBPSearch = dataCard.filter((item) =>
        item.title.toLowerCase().includes(rechercheTerm.toLowerCase())
    );
    const handleSelectChange = (e) => {
        const selectedValue = parseInt(e.target.value, 10); // Convert to a number
        setNombreDeResultats(selectedValue);
        setStartIndex(0); // Reset the starting index to 0 when changing the number of results
    };

    // Handle the "Next" button click
    const handleNextClick = () => {
        setStartIndex(startIndex + nombreDeResultats);
    };

    // Handle the "Previous" button click
    const handlePreviousClick = () => {
        if (startIndex - nombreDeResultats >= 0) {
            setStartIndex(startIndex - nombreDeResultats);
        }
    };

    // Calculate the current page number
    const currentPage = Math.ceil((startIndex + 1) / nombreDeResultats);
    const totalPages = Math.ceil(dataCard.length / nombreDeResultats);

    // Determine whether to print the "Next" and "Previous" buttons
    const printNextButton = startIndex + nombreDeResultats < dataCard.length;
    const printPrevButton = startIndex > 0;


    const card = assoBPSearch.slice(startIndex, startIndex + nombreDeResultats).map((item, index) => {
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
            <input className={"search"}
                   type="text"
                   placeholder="Rechecher un nom"
                   value={rechercheTerm}
                   onChange={handleRechercheChange}
            />
            <div id={"card"}>
                {card}
            </div>
            <div className={"printPage"}>
                <select onChange={handleSelectChange} value={nombreDeResultats}>
                    <option value={3}>Afficher 6 résultats</option>
                    <option value={12}>Afficher 12 résultats</option>
                    <option value={24}>Afficher 24 résultats</option>
                </select>

                <div className={"changePage"}>

                    <button
                        className={'rotateArrow'}
                        onClick={handlePreviousClick}
                        disabled={startIndex === 0}
                    >
                        { printPrevButton && (
                            <p>precedent</p>
                        )}
                    </button>

                    <p>
                        {currentPage}/{totalPages}
                    </p>

                    <button
                        onClick={handleNextClick}
                        disabled={startIndex + nombreDeResultats >= dataCard.length}
                    >
                        { printNextButton && (
                            <p>suivant</p>
                        )}
                    </button>


                </div>
            </div>
        </main>
    );
};
