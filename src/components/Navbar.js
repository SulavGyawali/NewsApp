import React, { Component } from "react";
// import PropTypes from "prop-types";
import {Link } from "react-router-dom";


export class Navbar extends Component {
  static propTypes = {};
  render() {
      let {mode, toggelMode} = this.props
     return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsApp
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/entertaintment">Entertaintment</Link>
                </li>
                
                 <li className="nav-item">
                  <Link className="nav-link" to="/health">Health </Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/science">Science </Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/sport">Sport </Link>
                </li>
                 <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology </Link>
                </li>

              </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={toggelMode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >
              Enable {mode === 'light'? 'dark':'light'} Mode
            </label>
          </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
