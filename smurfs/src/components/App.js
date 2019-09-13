import React, { Component } from "react";
import "./App.css";
import Smurf from './Smurf';
import SmurfForm from './SmurfForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurf />
        <br />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
