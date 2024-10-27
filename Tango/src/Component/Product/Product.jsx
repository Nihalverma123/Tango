import React, { useState } from "react";
import Seed from "../../assets/organicmenure.jpg";
import Tech2 from "../../assets/organicvegetable.jpg";
import milk from "../../assets/dairy milk.jpg";
import { useCollapse } from 'react-collapsed';

function Product() {
  const data = [
    {
      Image: Seed,
      title: "Organic Manure",
      description: "Grow Naturally, Choose Organic Seeds for a Future!",
      para: "Organic Manure: Grow Naturally, Choose Organic Seeds for a Sustainable Future!",
      buttonText: "View More",
      dropdown1  : "2kg",
      dropdown2  : "5kg",
      dropdown3  : "40kg",
      
    },
    {
      Image: Tech2,
      title: "Vegatables",
      description: "Feed Your Soil Naturally with Organic Fertilizer.",
      para: "Organic Manure: Feed Your Soil Naturally with Organic Fertilizer for Healthier Plants!",
      buttonText: "View More",
      dropdown1  : " Bell Pepper",
      dropdown2  : "Carrot",
      dropdown3  : "Brocoli",
      dropdown5  : "  Spinach",
      dropdown6  : "  Cauliflower",
      dropdown7  : "  Potato",
      dropdown8  : "  Tomato",
      dropdown9  : "   Cucumber",
      // dropdown10  : " Bell Pepper",
      // dropdown11  : "  Onion",
      // dropdown12  : "  Garlic",
      // dropdown13  : "  Zucchini",
      // dropdown14  : "  Eggplant (Brinjal)",
      // dropdown15  : "  Kale",
      // dropdown16  : "   Cabbage",
      // dropdown17  : "   Peas",
      // dropdown18  : "  Radish",
      // dropdown19  : "  Beetroot",
      // dropdown20  : " Pumpkin",
      // dropdown21  : "   Sweet Potato",
      
    },
    {
      Image: milk,
      title: "Dairy Products",
      description: "Dairy products are foods made from the milk of mammals....",
      para: "including cows, goats, and sheep. Common examples include milk, cheese, butter, yogurt, and cream.",
      buttonText: "View More",
      dropdown1  : "milk",
      // dropdown2  : "paneer",
      // dropdown3  : "frout",
      // dropdown4  : "bag"
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
      <div className="overflow-hidden">
      <img src={item.Image} alt="loading..." style={{ width: "100%", height: '300px',  objectFit:'cover'}} />
      </div>
      <h2>{item.title}</h2>
      <p className="text-dark">{item.description}</p>
      <div 
        {...getCollapseProps()} 
       
      
      >
        <p className="color">{item.para}</p>
      </div>
      <div className="d-flex   ">
      {/* <button
        className="btn"
        style={{ background: "#2FC822", color: "white" }}
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {/* {isExpanded ? 'Read Less' : 'Read More'} */}
      {/* </button>  */}
      
      <div className="dropdown mb-3">
  <a className="btn btn-secondary dropdown-toggle text-center fs-4" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"  style={{background:"green"  }}>
    {item.title}
  </a>

  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink"  style={{background:"green"}}>
    <li   className="fs-3 "><a className="dropdown-item text-dark-50" href="#">{item.dropdown1}</a></li>
    <li  className="fs-3 "><a className="dropdown-item text-dark-50" href="#">{item.dropdown2}</a></li>
    <li  className="fs-3 "><a className="dropdown-item text-dark-50" href="#">{item.dropdown3}</a></li>
    <li  className="fs-3 "><a className="dropdown-item text-dark-50" href="#">{item.dropdown4}</a></li>
    <li  className="fs-3 "><a className="dropdown-item text-dark-50" href="#">{item.dropdown5}</a></li>
    <li  className="fs-3 "><a className="dropdown-item text-dark-50" href="#">{item.dropdown6}</a></li>
    <li  className="fs-3 "><a className="dropdown-item text-dark-50" href="#">{item.dropdown7}</a></li>
    <li  className="fs-3 "><a className="dropdown-item text-dark-50" href="#">{item.dropdown8}</a></li>
    <li  className="fs-3 "><a className="dropdown-item text-dark-50" href="#">{item.dropdown9}</a></li>
  </ul>
</div>
</div>
    </div>
  );
};

export default Product;
