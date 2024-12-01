import React, { useState } from "react";
import "../styles/Medalla.css";

interface MedallaProps {
  nom: string;
  imatge: string;
  descripcio: string;
}

const Medalla: React.FC<MedallaProps> = ({ nom, imatge, descripcio }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="medalla"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={imatge} alt={nom} className="medalla-imatge" />
      <p className="medalla-text">{hover ? descripcio : nom}</p>
    </div>
  );
};

export default Medalla;