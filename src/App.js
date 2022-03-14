import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./component/header/Header";
import Profile from "./component/profile/Profile";
function App() {
  return (
    <div className="app">
      <Header />
      <Profile />
    </div>
  );
}

export default App;
