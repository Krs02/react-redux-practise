import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./component/header/Header";
import Info from "./component/info/Info";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
    </div>
  );
}

export default App;
