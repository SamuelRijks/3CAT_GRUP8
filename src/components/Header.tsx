import React from "react";
import "../styles/Header.css";
import logo3cat from "../resources/logo3cat.svg"; // Importem el logo des del directori corresponent

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" />
          </svg>
        </button>
        <a href="/" className="logo">
          <img src={logo3cat} alt="3cat Logo" />
        </a>
      </div>
      <nav className="header-center">
        <ul className="menu">
          <li><a href="#directes">directes</a></li>
          <li><a href="#entreteniment">entreteniment</a></li>
          <li><a href="#series">sèries</a></li>
          <li><a href="#podcasts">pòdcasts</a></li>
          <li><a href="#mes-top">el més top</a></li>
          <li><a href="#meva-llista">la meva llista</a></li>
          <li><a href="#explora">explora</a></li>
        </ul>
      </nav>
      <div className="header-right">
        <button className="search-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M10 2a8 8 0 015.29 13.71l5 5a1 1 0 01-1.42 1.42l-5-5A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z" />
          </svg>
        </button>
        <button className="user-button">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24px" height="24px">
            <path d="M12 2a7 7 0 017 7 7 7 0 01-3 5.79A7 7 0 0119 19v1h-2v-1a5 5 0 00-10 0v1H5v-1a7 7 0 013-5.21A7 7 0 015 9a7 7 0 017-7zm0 2a5 5 0 100 10A5 5 0 0012 4z" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;