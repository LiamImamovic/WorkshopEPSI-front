import React from "react";
import { Link } from 'react-router-dom'
import "../../css/home.css"
import asso from "../../image/DALL·E 2023-10-04 09.33.23.png"
import bpimg from "../../image/DALL·E 2023-10-04 09.37.35 - Créez une image joyeuse représentant des étudiatns qui étudies.png"
export const Home = () => {
  return (
    <section id={"home"}>
        <div className={"pagehomecenter"}>

            <Link id={"association"} to={`/asso`}>
                <div>
                    <img src={asso} alt={"image représentant des étudiants qui discutes"}/>
                    <p>Association</p>
                </div>
            </Link>
            <Link id={"bonPlans"} to={`/bonplan`}>
                <div>
                    <img src={bpimg} alt={"image représentant des étudiants qui discutes"}/>
                    <p>Bon Plans</p>
                </div>
            </Link>
        </div>
    </section>
  );
};
