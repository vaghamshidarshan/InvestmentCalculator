import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Result from "./component/Result";
import UserInput from "./component/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 11,
    duration: 10,
  });

  const [color, setColor] = useState("red");
  const [result, setResult] = useState("Yellow");

  const newColor = () => {
    if (color === "Yellow") {
      setColor("red");
      setResult("yellow");
    }
    if (color === "red") {
      setColor("yellow");
      setResult("red");
    }
    if (color === "Yellow") {
      setColor("green");
      setResult("#fff");
    }
  };

  const inputIsValid = userInput.duration >= 1;

  function handleChanges(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [inputIdentifier]: +newValue,
    }));
  }

  const [newColorState, setNewColorState] = useState("white");

  return (
    <div className="App">
      <Header />
      <UserInput userInput={userInput} onChange={handleChanges} />
      {!inputIsValid && <p>Please enter valid input data</p>}
      {inputIsValid && <Result input={userInput} />}

      <h1 style={{ color: newColorState }}>CSS is great!</h1>
      <ul>
        <li>
          <button onClick={() => setNewColorState("green")}>Yes</button>
        </li>
        <li>
          <button onClick={() => setNewColorState("red")}>No</button>
        </li>
      </ul>

      <div>
        <h1 style={{ color: color, backgroundColor: result }}>Style me!</h1>
        <button onClick={newColor}>Toggle style</button>
      </div>
    </div>
  );
}

export default App;
