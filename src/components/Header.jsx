import React, { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <div className="flex w-full lg:p-6 p-6 justify-between lg:justify-center gap-10 items-center">
          <div className="block lg:hidden">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 16 10"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Account menu icon"
              onClick={hamburgerMenu}
            >
              <g
                fill="none"
                stroke="#071F45"
                stroke-linecap="round"
                stroke-width="2"
              >
                <path d="M15 9H1M15 5.25H1M15 1.25H1"></path>
              </g>
            </svg>
          </div>
          <h1 className="text-purple-600 text-center lg:text-start">LOGO</h1>

          <button className="sm:bg-white justify-end lg:justify-start  flex lg:w-5/12 lg:bg-slate-100 rounded lg:py-2 lg:px-4 lg:gap-2 items-center ">
            <svg
              width="16px"
              height="16px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Search Icon"
            >
              <g
                stroke-width="2"
                transform="translate(1 1)"
                stroke="#071F45"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="7.5" cy="7.5" r="7.5"></circle>
                <path d="M18 18l-5.2-5.2"></path>
              </g>
            </svg>
            <span className="opacity-90 text-sm	hidden lg:block">
              Catégories...
            </span>
          </button>
          <div className="hidden lg:flex gap-5 items-center">
            <a href="/" className="hover:text-purple-600">
              Connexion
            </a>
            <a href="/" className="text-white bg-purple-600 px-5 py-1 rounded">
              S'inscrire
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};
