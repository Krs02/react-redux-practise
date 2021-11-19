import React, { useRef } from "react";
import "./App.scss";
import Header from "./features/header/Header";
import { useSelector } from "react-redux";
import Info from "./features/info/Info";

function App() {
  const renderCnt = useRef(0);
  const style = useSelector((state) => {
    console.log("selector");
    renderCnt.current = renderCnt.current + 1;
    console.log("Counter", renderCnt);
    return state.PaletteReducer.style;
  });
  return (
    <div className="App" style={style}>
      <Header />
      <Info />
    </div>
  );
}

export default App;
