// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  mode = "light";
  apiKey= process.env.REACT_APP_NEWS_API
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  constructor() {
    super();
    this.state = {
      mode: this.mode,
      alert: null,
      progress: 10,
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
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
          <Alert alert={this.state.alert} />

          <Routes>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="business"
                  mode={this.state.mode}
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="general"
                  mode={this.state.mode}
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="entertaintment"
                  mode={this.state.mode}
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="health"
                  mode={this.state.mode}
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="science"
                  mode={this.state.mode}
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="sport"
                  mode={this.state.mode}
                  pageSize={this.pageSize}
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
                  setProgress={this.setProgress} apiKey={this.apiKey}
                  key="technology"
                  mode={this.state.mode}
                  pageSize={this.pageSize}
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
