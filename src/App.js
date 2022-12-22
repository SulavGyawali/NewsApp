// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  mode = "light";
  constructor() {
    super();
    this.state = {
      mode: this.mode,
      alert: null,
    };
  }
  render() {
    const showAlert = (message, type) => {
      this.setState({
        alert: {
          message: message,
          type: type,
        },
      });
      setTimeout(() => {
        this.setState({ alert: null });
      }, 1500);
    };
    const toggelMode = () => {
      if (this.state.mode === "light") {
        this.setState({
          mode: "info",
        });
        document.body.style.backgroundColor = "#042743";
        showAlert("Dark mode has been enabled", "success");
      } else {
        this.setState({
          mode: "light",
        });
        document.body.style.backgroundColor = "white";
        showAlert("Light mode has been enabled", "success");
      }
    };
    return (
      <div>
        <Router>
          <Navbar
            mode={this.state.mode}
            toggelMode={toggelMode}
            showAlert={showAlert}
          />
          <Alert alert={this.state.alert} />

          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News
                key="business"
                  mode={this.state.mode}
                  pageSize={18}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/"
              element={
                <News
                key="general"
                  mode={this.state.mode}
                  pageSize={18}
                  country="in"
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/entertaintment"
              element={
                <News
                key="entertaintment"
                  mode={this.state.mode}
                  pageSize={18}
                  country="in"
                  category="entertaintment"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                key="health"
                  mode={this.state.mode}
                  pageSize={18}
                  country="in"
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                key="science"
                  mode={this.state.mode}
                  pageSize={18}
                  country="in"
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sport"
              element={
                <News
                key="sport"
                  mode={this.state.mode}
                  pageSize={18}
                  country="in"
                  category="sport"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                key="technology"
                  mode={this.state.mode}
                  pageSize={18}
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
