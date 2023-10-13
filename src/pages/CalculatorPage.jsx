import React, { useEffect, useState } from "react";
import History from "../components/Calculator/History";
import NumberInput from "../components/Calculator/NumberInput";

export default function PageContainer() {
  const [number, setNumber] = useState(0);
  const [history, setHistory] = useState([]);
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (value) => {
    setInputValue(parseInt(value));
  };

  const addToHistory = () => {
    setHistory([...history, number]);
  };

  const handlePlus = () => {
    setNumber(number + inputValue);
  };

  const handleMinus = () => {
    setNumber(number - inputValue);
  };

  useEffect(() => {
    setHistory(JSON.parse(localStorage.getItem("history")));
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <>
      <NumberInput
        number={number}
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        inputValue={inputValue}
        handleInputChange={handleInputChange}
      />
      <button onClick={addToHistory}>Enregistrer</button>
      <History history={history} />
    </>
  );
}
