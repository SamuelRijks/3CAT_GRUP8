import React from "react";
import "./App.css";
import Header from "./components/Header";
import InfoPerfil from "./components/InfoPerfil";
import Medalles from "./components/Medalles";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <InfoPerfil />
        <Medalles />
      </div>
    </div>
  );
};

export default App;