import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { BsSun, BsMoon } from "react-icons/bs";

//USING LOCAL STORAGE FOR SAVE THE THEME

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Navbar = () => {
  //useState is USED FOR MANAGAING THE STATE IN DARK AND LIGHT

  const [theme, setTheme] = useState(getStorageTheme());
  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  //useEffect is USED FOR RE-RENDERING THE PAGE AND COME BACK WITH SAME THEME THAT WE SAVE IN LOCAL.
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img
                    src={logo}
                    alt="logo"
                    width="50"
                    className="d-inline-block align-text-top"
                  />
                  <span> DSC BIT-D</span>
                </NavLink>
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon top-bar"></span>
                  <span className="toggler-icon middle-bar"></span>
                  <span className="toggler-icon bottom-bar"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menuActive"
                        className="nav-link"
                        aria-current="page"
                        exact
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menuActive"
                        className="nav-link"
                        aria-current="page"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        activeClassName="menuActive"
                        className="nav-link"
                        aria-current="page"
                        to="/team"
                      >
                        Team
                      </NavLink>
                    </li>
                    <button
                      className="btn btn-block mx-1"
                      onClick={changeTheme}
                    >
                      {theme === "dark-theme" ? (
                        <BsSun color="#fff" />
                      ) : (
                        <BsMoon />
                      )}
                    </button>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
