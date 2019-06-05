import React, { Component } from "react";
import Header from "./components/Header";
import MainC from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainC />
      </div>
    );
  }
}

export default App;
