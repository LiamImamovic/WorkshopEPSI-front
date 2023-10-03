import React from "react";
import { Link } from 'react-router-dom'
import "../css/home.css"
export const Home = () => {
  return (
    <main>
        <Link id={"association"} to={`/asso`}>
            <div>
                <p>Association</p>
            </div>
        </Link>
        <Link id={"bonPlans"} to={`/bonplans`}>
            <div>
                <p>Bon Plans</p>
            </div>
        </Link>

    </main>
  );
};
