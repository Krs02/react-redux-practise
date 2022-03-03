import React, { useEffect, useRef } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.scss";
import Uploader from "./features/uploader/Uploader";
import Login from "./features/login/Login";

function App() {
  const renderCnt = useRef(0);
  useEffect(() => {
    renderCnt.current = renderCnt.current + 1;
    console.log("use Effect all time, App - Render Count : ", renderCnt.current);
  });
  return (
    <div className="App">
      {/* <Uploader /> */}
      <Login />
    </div>
  );
}

export default App;
