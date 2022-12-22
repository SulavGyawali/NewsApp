// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";

export default class App extends Component {
  mode = 'light'
  constructor() {
    super();
    this.state = {
      mode: this.mode
    };

  }
  render() {
    const toggelMode = () =>{
      if (this.state.mode === "light") {
    console.log(this.state.mode);

        this.setState({
          mode: "info",
        });
        document.body.style.backgroundColor = "#042743";
      } else {
        this.setState({
          mode: "light",
        });
        document.body.style.backgroundColor = "white";
      }
    }
    return (
      <div>
        <Navbar mode={this.state.mode} toggelMode={toggelMode} />
        <News mode={this.state.mode} pageSize={6}/>
      </div>
    );
  }
}
