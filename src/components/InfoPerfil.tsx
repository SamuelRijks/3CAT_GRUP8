import React from "react";
import "../styles/InfoPerfil.css";

const InfoPerfil: React.FC = () => {
  return (
    <div className="info-perfil">
      {/* Avatar */}
      <div className="avatar">
        <img
          src={require("../resources/foto juliana.png")}
          alt="Avatar"
          className="avatar-image"
        />
        <div className="edit-icon">✏️</div>
      </div>
      {/* Nom i etiqueta */}
      <h2 className="name">Samuel</h2>
      <span className="label">Cincsegons</span>
      {/* Nivell */}
      <div className="level">
        <div className="level-bar">
          <div className="progress"></div>
        </div>
        <span className="level-number">14</span>
      </div>
    </div>
  );
};

export default InfoPerfil;