import React, { Component } from "react";
// import PropTypes from "prop-types";

export class Navbar extends Component {
  static propTypes = {};
  render() {
      let {mode, toggelMode} = this.props
      console.log(mode, toggelMode);
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsApp
            </a>
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
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    About
                  </a>
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
