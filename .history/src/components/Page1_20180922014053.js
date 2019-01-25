import React from "react";
import logo from "./logo.svg";
const Page1 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <button onClick={() => onRouteChange("page2")} />
      <button onClick={() => onRouteChange("page3")} />
    </div>
  );
};

export default Page1;
