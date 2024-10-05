import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Fresh from "../../assets/Fresh.png";
import Fruits from "../../assets/Fruits.png";
import Plan from "../../assets/Plan.png";
import Veg from "../../assets/Veg.png";
import Cattel from "../../assets/Cattel.png";

function Service() {
  const Data = [
    {
      title: "Fresh Vegetables",
      description:
        "Savor the flavor of freshly picked, organic vegetables that are cultivated naturally",
      buttonText: "Know More",
      backgroundImage: Fresh,
    },
    {
      title: "Organic Dairy Products",
      description:
        "Savor the flavor of freshly picked, organic vegetables that are cultivated naturally",
      buttonText: "Know More",
      backgroundImage: Fruits,
    },
    // {
    //   title: "Fresh Vegetables",
    //   description:
    //     "Savor the flavor of freshly picked, organic vegetables that are cultivated naturally",
    //   buttonText: "Know More",
    //   backgroundImage: Plan,
    // },
    // {
    //   title: "Fresh Vegetables",
    //   description:
    //     "Savor the flavor of freshly picked, organic vegetables that are cultivated naturally",
    //   buttonText: "Know More",
    //   backgroundImage: Cattel,
    // },
    // {
    //   title: "Fresh Vegetables",
    //   description:
    //     "Savor the flavor of freshly picked, organic vegetables that are cultivated naturally",
    //   buttonText: "Know More",
    //   backgroundImage: Veg,
    // },
  ];

  return (
    <>
      <div className="container-fluid">
        <div className="">
          <div className="row align-items-center justify-content-center p-2" style={{gap:'50px'}}>
            <div className="col-lg-3 rounded-2">
              <h2 className="fs-1">Services</h2>
              <h3 className="text-black fs-2">
                Organic <span className="text-success">Farm </span>
                <br />
                Services
              </h3>
              <p className="text-black">
                We provide comprehensive organic farm services, including soil
                management, crop rotation, and sustainable practices to ensure
                healthy yields and environmentally friendly farming solutions.
              </p>
              <button className="btn" style={{ backgroundColor: "#2FC822" }}>
                Know More
              </button>
            </div>
            {Data.map((content, index) => (
              <div
                className="col-lg-3 align-content-end rounded-2 p-3 my-2 mainn"
                key={index}
                style={{
                  backgroundImage: `url(${content.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  objectFit:"fill",
                  height: "300px",
                }}
              >
                <h2>{content.title}</h2>
                <p>{content.description}</p>
                <button className="btn" style={{ backgroundColor: "#2FC822" }}>
                  {content.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
