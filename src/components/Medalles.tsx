import React from "react";
import TitolMedalles from "./TitolMedalles";
import GridMedalles from "./GridMedalles";
import "../styles/Medalles.css";

const Medalles: React.FC = () => {
  return (
    <div className="titol-medalles-container">
      <TitolMedalles />
      <div className="contenidor-medalles">
        <GridMedalles />
      </div>
    </div>
  );
};

export default Medalles;