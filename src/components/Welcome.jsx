import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import logo from "../img/MyNeighborhoodSpeaks.png";

import "./Welcome.css";

const Welcome = () => {
  const [QuizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <h3>Clique no botão abaixo para começar</h3>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <div id="logo">
      <img src={logo} alt="Início do Quiz" />
      </div>
    </div>
  );
};

export default Welcome;
