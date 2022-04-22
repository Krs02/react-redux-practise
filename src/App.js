import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import BMI from "./bmi/BMI";
import Calc from "./calc/Calc";

function App() {
  console.log("33");
  return (
    <div className="App">
      <BMI />
      <br /> <br /> <br />{" "}
      <div className="calc">
        <Calc />
      </div>
      <div className="bounce_ball">
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="five"></div>
      </div>
    </div>
  );
}

export default App;
