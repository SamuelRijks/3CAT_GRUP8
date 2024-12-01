import React, { useState } from "react";
import "../styles/GridMedalles.css";
import Medalla from "./Medalla";
import MedallaSelector from "./MedallaSelector";
import DetectiuSofa from "../resources/detectiu-sofa.png";
import PlatsNetsImg from "../resources/plats-nets.png";
import LlicoApresa from "../resources/llico-apresa.png";
import FanActualitat from "../resources/fan-actualitat.png";
import TotsSupers from "../resources/tots-supers.png";
import RomanticEmpedreit from "../resources/romantic-empedreit.png";
import InformacioClassificada from "../resources/informacio-classificada.png";
import MinistreComedia from "../resources/ministre-comedia.png";
import PrimerPas from "../resources/primer-pas.png";
import Numero1Img from "../resources/numero-1.png";
import InfluencerEmergent from "../resources/influencer-emergent.png";
import PrimeraDesenaImg from "../resources/primera-desena.png";
import QuinEnrenouImg from "../resources/quin-enrenou.png";
import XupXupImg from "../resources/xup-xup.png";
import AddMedalImage from "../resources/+.png";
import LockImage from "../resources/Lock.png"; // Importa la imagen de candado

interface MedallaInfo {
  nom: string;
  imatge: string;
  descripcio: string;
  bloquejada?: boolean;
}

const medallesDisponibles: MedallaInfo[] = [
  { nom: "Detectiu de sofà", imatge: DetectiuSofa, descripcio: "Has vist 5 episodis de Crims", bloquejada: false },
  { nom: "Tots som súpers", imatge: TotsSupers, descripcio: "Tens el carnet Super", bloquejada: false },
  { nom: "Lliçó apresa", imatge: LlicoApresa, descripcio: "Has vist 3 episodis de Merlí", bloquejada: true },
  { nom: "Primer pas", imatge: PrimerPas, descripcio: "Completa el teu perfil", bloquejada: false },
  { nom: "Romàntic empedreït", imatge: RomanticEmpedreit, descripcio: "Has vist la primera temporada de Cites", bloquejada: true },
  { nom: "Informació classificada", imatge: InformacioClassificada, descripcio: "Has escoltat 5 hores de 'Que no surti d'aquí'", bloquejada: false },
  { nom: "Influencer emergent", imatge: InfluencerEmergent, descripcio: "Comparteix 10 noticies", bloquejada: false },
  { nom: "Primera desena", imatge: PrimeraDesenaImg, descripcio: "Afegeix 10 amics a la llista", bloquejada: false },
  { nom: "Plats nets!", imatge: PlatsNetsImg, descripcio: "Has vist tota una temporada de Plats Bruts", bloquejada: false },
  { nom: "Número #1", imatge: Numero1Img, descripcio: "Sigues el #1 al final de la classificació setmanal", bloquejada: true },
  { nom: "Fan de l'actualitat", imatge: FanActualitat, descripcio: "Has vist tots els telenotícies d'una setmana", bloquejada: false },
  { nom: "Quin enrenou!", imatge: QuinEnrenouImg, descripcio: "Posa el teu primer comentari", bloquejada: false },
  { nom: "Xup-xup", imatge: XupXupImg, descripcio: "Mira 10 episodis de Cuines", bloquejada: false },
  { nom: "Ministre de la comèdia", imatge: MinistreComedia, descripcio: "Has vist compartit 4 episodis de Polònia", bloquejada: true },
];

const GridMedalles: React.FC = () => {
  const [medalles, setMedalles] = useState<(MedallaInfo | null)[]>(Array(8).fill(null));
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null); // Estat per controlar el hover
  const [medallesSeleccionades, setMedallesSeleccionades] = useState<MedallaInfo[]>([]);

  const handleMedallaClick = (index: number) => {
    setSelectedSlot(index);
  };

  const handleMedallaSelect = (medalla: MedallaInfo | null) => {
    if (selectedSlot !== null) {
      const novesMedalles = [...medalles];
      novesMedalles[selectedSlot] = medalla;
      setMedalles(novesMedalles);

      if (medalla) {
        setMedallesSeleccionades([...medallesSeleccionades, medalla]);
      }
    }
    setSelectedSlot(null);
  };

  return (
    <div className="contenidor-medalles">
      <div className="grid-medalles">
        {medalles.map((medalla, index) => (
          <div
            key={index}
            className={`medalla-slot ${medalla ? "amb-medalla" : ""}`}
            onClick={() => handleMedallaClick(index)}
            onMouseEnter={() => setHoverIndex(index)} // Configura el hover
            onMouseLeave={() => setHoverIndex(null)} // Neteja el hover
          >
            {medalla ? (
              <>
                <Medalla nom={medalla.nom} imatge={medalla.imatge} descripcio={medalla.descripcio} />
                {medalla.bloquejada && (
                  <img src={LockImage} alt="Bloquejada" className="lock-icon" />
                )}
              </>
            ) : (
              <img src={AddMedalImage} alt="Afegir medalla" />
            )}
          </div>
        ))}
      </div>
      {selectedSlot !== null && (
        <MedallaSelector
          medallesDisponibles={medallesDisponibles}
          medallesSeleccionades={medallesSeleccionades}
          onClose={() => setSelectedSlot(null)}
          onSelect={handleMedallaSelect}
        />
      )}
    </div>
  );
};

export default GridMedalles;