import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import logo from "../images/logo.png";
const Footer = () => {
  return (
    <>
      <section className="container-fluid" id="footer">
        <footer className="text-center  pt-4 pt-md-5 ">
          <div className="row">
            <div className="col-sm-6">
              {/* <h2>Explore</h2>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="text-muted" href="#">
                    Industries
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" href="#">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" href="#">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" href="#">
                    Privacy Policy
                  </Link>
                </li>
              </ul> */}
              <Link className="navbar-brand" to="/">
                <img
                  src={logo}
                  alt="logo"
                  width="50"
                  className="d-inline-block align-text-top"
                />
                <span> Developer Student Club</span>
              </Link>
            </div>

            <div className=" col-sm-6">
              <h2>Follow us</h2>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-muted" href="#">
                    <AiOutlineInstagram className="" size="" />
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" href="#">
                    <i className="fab fa-twitter fa-2x"></i>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" href="#">
                    <i className="fab fa-linkedin fa-2x"></i>
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" href="#">
                    <AiOutlineGithub />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="d-grid gap-2 d-m-flex justify-content-md-center mx-3">
            <p className="text-muted">
              Copyright © 2021 DSC BIT-D.All rights reserved.
            </p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
