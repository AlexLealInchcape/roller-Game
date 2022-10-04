//import "./DiceGame.module.css";
import { useState } from "react";
import ShowImages from "../ShowImages/ShowImages";
import styles from "./DiceGame.module.css";

export default function DiceGame() {
  // reiniciar estados
  const reset = () => {
    return setNumberOfDice(null), setSumDice(null), setRoll([]);
  };
  // Estados Locales
  const [numberOfDice, setNumberOfDice] = useState(null);

  //Para usar con las imagenes
  const [roll, setRoll] = useState([]);

  //Sumatoria
  const [sumOfDice, setSumDice] = useState();

  //Funcion que reciba la cantidad de dados
  const diceRoll = (num) => {
    let rolls = [];
    let sumOfDice = 0;
    for (let i = 0; i < num; i++) {
      rolls[i] = Math.floor(Math.random() * 6) + 1;
      sumOfDice += rolls[i];
    }
    //Guardado temporal de los sigguientes Valores ::
    //la cantidad de dados que se pidieron
    setNumberOfDice(num);
    //la sumatoria
    setSumDice(sumOfDice);
    // Ell array de los dados
    setRoll(rolls);
  };

  return (
    <div className={styles.content}>
      <h1>Dice Roller</h1>
      <div>
        {[1, 2, 3, 4, 5].map((number) => {
          //Logica
          let text = number === 1 ? "die" : "dice";
          return (
            <button key={number} onClick={() => diceRoll(number)}>
              {number + " " + text}
            </button>
          );
        })}
      </div>
      <div class={styles.dados} >
        {roll.map((r, i) => {
          return <ShowImages key={i} roll={r} />;
        })}
      </div>
      <div>
        <p>resultado</p>
        <p>
          <b>Total obtenido:</b> {sumOfDice}
        </p>
        <p>
          <b>Posible maximo obtenido:</b> {numberOfDice * 6}
        </p>
      </div>
      <div>
        <button onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
}
