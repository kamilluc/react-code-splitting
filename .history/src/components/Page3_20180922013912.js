import React from "react";

const Page3 = ({ onRouteChange }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Page1 onClick={() => onRouteChange("page2")} />
      <Page2 onClick={() => onRouteChange("page3")} />
    </div>
  );
};

export default Page3;
