import React from "react";
import logo from "../logo.svg";
const Page3 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <button onClick={() => onRouteChange("page1")} />
      <button onClick={() => onRouteChange("page2")} />
    </div>
  );
};

export default Page3;
