// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import News from "./components/News";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  let pageSize = 6;
  let apiKey = process.env.REACT_APP_NEWS_API;
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [progress, setProgress] = useState(10);

  const loadBar = (progress) => {
    setProgress(progress);
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 500);
  };
  const toggelMode = () => {
    if (mode === "light") {
      setMode("info");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <div>
      <Router>
        <Navbar mode={mode} toggelMode={toggelMode} showAlert={showAlert} />
        <LoadingBar color="#f11946" progress={progress} height={3} />

        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/business"
            element={
              <News
                loadBar={loadBar}
                apiKey={apiKey}
                key="business"
                mode={mode}
                pageSize={pageSize}
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
                loadBar={loadBar}
                apiKey={apiKey}
                key="general"
                mode={mode}
                pageSize={pageSize}
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
                loadBar={loadBar}
                apiKey={apiKey}
                key="entertaintment"
                mode={mode}
                pageSize={pageSize}
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
                loadBar={loadBar}
                apiKey={apiKey}
                key="health"
                mode={mode}
                pageSize={pageSize}
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
                loadBar={loadBar}
                apiKey={apiKey}
                key="science"
                mode={mode}
                pageSize={pageSize}
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
                loadBar={loadBar}
                apiKey={apiKey}
                key="sport"
                mode={mode}
                pageSize={pageSize}
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
                loadBar={loadBar}
                apiKey={apiKey}
                key="technology"
                mode={mode}
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
