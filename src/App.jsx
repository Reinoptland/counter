import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const initialState = 7;

function scoreColor(score) {
  if (score <= 0) {
    return "red";
  } else if (score > 0 && score < 10) {
    return "white";
  } else {
    return "green";
  }
}

function App() {
  let [counter, setCounter] = useState(initialState);

  function increaseScore() {
    // NOT LIKE THIS:
    // counter = counter + 1;
    console.log("OLD SCORE", counter);
    const newScore = counter + 1;
    setCounter(newScore);
    // Old score: still
    console.log("NEW SCORE", newScore);
  }

  function decreaseScore() {
    setCounter(counter - 1);
  }

  console.log("RENDER");
  console.log("NEW SCORE ☑️", counter);

  return (
    <div className="App">
      <div className="card">
        <h1>Score Counter</h1>
        <h2 style={{ color: scoreColor(counter) }}>{counter}</h2>
        <button onClick={increaseScore}>+</button>
        <button onClick={decreaseScore} disabled={counter <= 0}>
          -
        </button>
      </div>
    </div>
  );
}

export default App;
