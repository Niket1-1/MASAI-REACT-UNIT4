import { React, useState } from "react";
import "./App.css";

import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  //      value  ,function

  const handleClick1 = (val) => {
    setCount(count + val);
  };

  return (
    <div className="App">
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          handleClick1(1);
        }}
        style={{ marginRight: "20px" }}
      >
        click me to increase 1
      </button>
      <button
        onClick={() => {
          handleClick1(-1);
        }}
        style={{ marginRight: "20px" }}
      >
        click me to decrement 1
      </button>
      <button
        onClick={() => {
          handleClick1(count);
        }}
      >
        Double
      </button>
    </div>
  );
}

export default App;
