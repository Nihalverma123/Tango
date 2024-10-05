import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Farmer from "../../assets/Farmer.png";
import "./AboutUs.css";

function AboutUs() {
  return (
    <>
      <div className="container-fluid p-4">
        <div className="container">
          <div className="row gap-4 justify-content-center">
            <div className="col-12 col-md-6 col-lg-6">
              <h2 className="fs-1">About Us</h2>
              <h3 className="text-dark fs-3">
                We Produce{" "}
                <span style={{ color: "#2FC822" }}>Organic Food </span>For Your
                Family
              </h3>
              <p className="text-dark fs-4 font-bold">
                Discover the true essence of organic living with products that
                nourish your body and soul. Grown without harmful chemicals or
                pesticides, our offerings are carefully selected to ensure
                purity and freshness. By choosing organic, you’re not only
                prioritizing your health but also supporting sustainable farming
                practices that preserve the Earth for future generations.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-5 rounded-2 d-flex justify-content-end p-2">
              <img
                src={Farmer}
                alt="loading..."
                width={"400px"}
                height={"210px"}
                className=".farmer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
