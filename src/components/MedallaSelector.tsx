import React from "react";
import Medalla from "./Medalla";
import "../styles/MedallaSelector.css";
import LockImage from "../resources/Lock.png"; // Importa la imagen de candado

interface MedallaInfo {
  nom: string;
  imatge: string;
  descripcio: string;
  bloquejada?: boolean;
}

interface MedallaSelectorProps {
  medallesDisponibles: MedallaInfo[];
  medallesSeleccionades: MedallaInfo[];
  onClose: () => void;
  onSelect: (medalla: MedallaInfo | null) => void;
}

const MedallaSelector: React.FC<MedallaSelectorProps> = ({
  medallesDisponibles,
  medallesSeleccionades,
  onClose,
  onSelect,
}) => {
  const medallesFiltrades = medallesDisponibles.filter(
    (medalla) => !medallesSeleccionades.some((seleccionada) => seleccionada.nom === medalla.nom)
  );

  return (
    <div className="medalla-selector-overlay">
      <div className="medalla-selector">
        <h3>Selecciona una medalla</h3>
        <div className="grid-medalla-selector">
          {medallesFiltrades.map((medalla) => (
            <div
              key={medalla.nom}
              onClick={() => !medalla.bloquejada && onSelect(medalla)}
              className={`medalla-slot ${medalla.bloquejada ? "bloquejada" : ""}`}
            >
              <Medalla nom={medalla.nom} imatge={medalla.imatge} descripcio={medalla.descripcio} />
              {medalla.bloquejada && (
                <img src={LockImage} alt="Bloquejada" className="lock-icon" />
              )}
            </div>
          ))}
        </div>
        <button onClick={() => onSelect(null)} className="treure-medalla">
          Treure Medalla
        </button>
        <button onClick={onClose} className="cancelar">Cancel·la</button>
      </div>
    </div>
  );
};

export default MedallaSelector;