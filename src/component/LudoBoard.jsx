import React from "react";
import { useState } from "react";

function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, green: 0, yellow: 0 });
  let [count, setCount] = useState(0);
  let [arr, setArr] = useState(["no Moves"]);

  let updateBlue = () => {
    setMoves((prevMoves) => {
      return { ...prevMoves, blue: prevMoves.blue + 1 };
    });
    console.log(moves);

    setArr((prevArr) => {
      return [...prevArr, "blue moves"];
    });
    console.log(arr);
  };
  return (
    <div className="ludo-board">
      <p>game begins</p>
      {arr}
      <div className="board">
        <p>Blue Moves ={moves.blue} </p>
        <button style={{ backgroundColor: "blue" }} onClick={updateBlue}>
          + 1
        </button>
        <p>Yellow Moves ={moves.yellow} </p>
        <button style={{ backgroundColor: "yellow" }}> + 1 </button>
        <p>Green Moves ={moves.green} </p>
        <button style={{ backgroundColor: "green" }}> + 1 </button>
        <p>Red Moves = {moves.red} </p>
        <button style={{ backgroundColor: "red" }}> + 1 </button>
      </div>
    </div>
  );
}
export default LudoBoard;
