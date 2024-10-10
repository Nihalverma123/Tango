import React, { useState } from "react";
import Seed from "../../assets/seed.png";
import Tech2 from "../../assets/tech2.png";
import Masala from "../../assets/masala.png";
import { useCollapse } from 'react-collapsed';

function Product() {
  const data = [
    {
      Image: Seed,
      title: "Organic Manure",
      description: "Grow Naturally, Choose Organic Seeds for a Future!",
      para: "Organic Manure: Grow Naturally, Choose Organic Seeds for a Sustainable Future!",
      buttonText: "View More",
    },
    {
      Image: Tech2,
      title: "Organic Manure",
      description: "Feed Your Soil Naturally with Organic Fertilizer.",
      para: "Organic Manure: Feed Your Soil Naturally with Organic Fertilizer for Healthier Plants!",
      buttonText: "View More",
    },
    {
      Image: Masala,
      title: "Remedies",
      description: "(Coming Soon..)",
      para: "Organic Remedies: Harness Natural Solutions for Holistic Health!",
      buttonText: "View More",
    },
  ];

  return (
    <div className="container-fluid" style={{ backgroundColor: 'linear-gradient(to right, rgba(217, 217, 217, 0.2), #D9D9D9)' }}>
      <h2 className="text-center">Products</h2>
      <p className="text-dark text-center fs-1 fw-bolder">Our Fresh & Organic Products</p>
      <div className="row justify-content-center py-2" style={{ gap: '70px' }}>
        {data.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

const Item = ({ item }) => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <div className="col-12 col-md-6 col-lg-2 px-2">
      <img src={item.Image} alt="loading..." style={{ width: "100%", height: '100%' }} />
      <h2>{item.title}</h2>
      <p className="text-dark">{item.description}</p>
      <div 
        {...getCollapseProps()} 
       
      
      >
        <p className="color">{item.para}</p>
      </div>
      <button
        className="btn"
        style={{ background: "#2FC822", color: "white" }}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default Product;
