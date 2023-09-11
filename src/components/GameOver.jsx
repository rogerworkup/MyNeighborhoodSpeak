import { useContext } from "react"
import { QuizContext } from "../context/quiz"

import mns from "../img/MNS.png"

import "./GameOver.css"

const GameOver = () => {
    const [QuizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {QuizState.score}</p>
        <p>Você acertou {QuizState.score} de {QuizState.questions.length} perguntas.</p>
        <img src= {mns} alt="Fim do Quiz" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Reiniciar</button>
    </div>
  )
}

export default GameOver