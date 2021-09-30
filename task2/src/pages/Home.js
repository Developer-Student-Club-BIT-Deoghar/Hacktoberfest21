import React from "react";
import banner from "../images/google-index.gif";
const Home = () => {
  return (
    <>
      <section className="section d-flex align-items-center" id="">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-sm-12 pt-5 pt-lg-0">
                <img src={banner} alt="banner" className="banner" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section d-flex align-items-center" id="sec-2">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-sm-12 pt-5 pt-lg-0">
                <h1 className="display-1">
                  Developer Student Clubs <br /> Birla Institute of Technology,
                  Mesra - Deoghar
                </h1>
                <p className="">
                  powered by <strong> Google Developers</strong>
                </p>
                <button className="btn btn-block btn-primary btn-lg">Become a Memeber</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
