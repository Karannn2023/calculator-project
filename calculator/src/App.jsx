import "./App.css";
import Heading from "./heading";
import Buttons from "./assets/buttons";
import { useState } from "react";

function App() {
  let keys = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];
  let [calVal, setcalVal] = useState("");
  const handleButtonClick = (value) => {
    if (value.target.innerText === "c") {
      setcalVal("");
    } else if (value.target.innerText === "=") {
      const plus = eval(calVal);
      setcalVal(plus);
    } else {
      const newValue = calVal + value.target.innerText;
      setcalVal(newValue);
    }
  };
  return (
    <>
      <Heading></Heading>
      <Buttons
        items={keys}
        values={calVal}
        handleOnChange={handleButtonClick}
      ></Buttons>
    </>
  );
}

export default App;
