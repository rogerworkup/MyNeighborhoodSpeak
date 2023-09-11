import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import logo from "../img/MyNeighborhoodSpeak.png";

import "./Welcome.css";

const Welcome = () => {
  const [QuizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar</p>
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
