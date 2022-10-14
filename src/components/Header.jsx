import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

export const Header = () => {
  return (
    <>
      {" "}
      <header>
        <nav className="navbar navbar-dark navbar_design">
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">
              <img src={Logo} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="my-wallet">
                    Wallet
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
