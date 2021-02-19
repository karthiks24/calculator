/* eslint-disable no-eval */
import React, { useState } from "react";
import Display from "./container/Display";
import Keypad from "./container/Keypad";
import "./calculator.scss";

const Calaulator = () => {
  const [input, setInput] = useState();
  const [result, setResult] = useState(0);

  const clearData = () => {
    setInput("");
    setResult(0);
  };

  const handleClick = (e) => {
    let identifier = e.target.dataset.identifier;
    let value = e.target.innerHTML;

    if (identifier === "action") {
      value === "c" && clearData();
      value === "←" && setInput((prevState) => prevState.slice(0, -1));
    }
    if (identifier === "number" || identifier === "function") {
      setInput((prevState) => (prevState ? prevState + value : value));
    }
    if (identifier === "result") {
      try {
        let answer = eval(input);
        answer !== undefined && setResult(answer);
      } catch (error) {
        setResult("Invalid Calculation");
      }
    }
  };
  return (
    <div className='container'>
      <Display input={input} result={result} />
      <Keypad handler={handleClick} />
    </div>
  );
};

export default Calaulator;
