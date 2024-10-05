import React from "react";
import Seed from "../../assets/seed.png";
import Tech2 from "../../assets/tech2.png";
import Tech from "../../assets/tech.png";
import Masala from "../../assets/masala.png";
// import Farmer from "../../assets/Farmer.png";

function Product() {
  const data = [
    {
      Image: Seed,
      title: "Organic Manure",
      description:
        "Grow Naturally, Choose Organic Seeds for a Future!",
      buttonText: "View More",
    },
    {
      Image: Tech2,
      title: "Organic Manure",
      description: "Feed Your Soil Naturally with Organic Fertilizer.",
      buttonText: "View More",
    },
    // {
    //   Image: Tech,
    //   title: "Equipment",
    //   description: "Equip Your Farm Naturally for Sustainable Growth",
    //   buttonText: "View More",
    // },
    {
      Image: Masala,
      title: "Remedies ",
      description: "(Coming Soon..).",
      buttonText: "View More",
    },
  ];

  return (
    <div className="container-fluid" style={{backgroundColor:'linear-gradient(to right, rgba(217, 217, 217, 0.2), #D9D9D9)'}}>
    <h2 className="text-center">Products</h2>
    <p className="text-dark text-center fs-1 fw-bolder">Our Fresh & Organic Products</p>
      <div className="row justify-content-center py-2" style={{gap:'70px'}}>
      
        {data.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-2 px-2" key={index}>
            <img
              src={item.Image}
              alt="loading..."
              style={{ width: "100%",height:'100%' }}
            />
            <h2>{item.title}</h2>
            <p className="text-dark">{item.description}</p>
            <button
              className="btn"
              style={{ background: "#2FC822", color: "white" }}
            >
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
