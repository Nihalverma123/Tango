import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import Fresh from "../../assets/Fresh.png";
import Fruits from "../../assets/Fruits.png";
import Plan from "../../assets/Plan.png";
import Veg from "../../assets/Veg.png";
import Cattel from "../../assets/Cattel.png";

function Service() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const Data = [
   
    {
      title: "Fresh Vegetables",
      description:
        "Savor the flavor of freshly picked, organic vegetables that are cultivated naturally.",
      longDescription:
        "Savor the flavor of freshly picked, organic vegetables that are cultivated naturally. These vegetables are grown without the use of synthetic pesticides, making them healthier for you and the environment. You can enjoy them knowing they are packed with nutrients and free from harmful chemicals.",
      buttonText: "Know More",
      backgroundImage: Fresh,
    },
   
    {
      title: "Organic Dairy Products",
      description:
        "Enjoy fresh, organic dairy products that come from animals raised on organic feed and without antibiotics.",
      longDescription:
        "Enjoy fresh, organic dairy products that come from animals raised on organic feed and without antibiotics. Organic dairy products are produced with high standards of animal welfare, and they do not contain synthetic hormones or antibiotics, ensuring a healthier, more sustainable food source.",
      buttonText: "Know More",
      backgroundImage: Fruits,
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="">
          <div
            className="row align-items-center justify-content-center p-2"
            style={{ gap: "50px" }}
          >
            <div className="col-lg-3 rounded-2">
              <h2 className="fs-1">Services</h2>
              <h3 className="text-black fs-2">
                Organic <span className="text-success">Farm</span>
                <br />
                Services
              </h3>
              <p className="text-black">
               We provide comprehensive organic farm services, including soil
                management, crop rotation, and sustainable practices to ensure
                healthy yields and environmentally friendly farming solutions. 
                
              </p>
              <button className="btn"  style={{
                    backgroundColor: "#2FC822",
                    position: "absolute", // Make the button position absolute
                    left: "15px", // 5px from the left
                    bottom: "15px", // 5px from the bottom
                  }}
                  // onClick={() => toggleExpand(index)}
                >
                  {/* {expandedIndex === index ? "Read Less" : "Read More"} */}
               
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
                  objectFit: "fill",
                  height: "300px",
                  color: "white",
                  position: "relative", // To allow absolute positioning of the button
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h2>{content.title}</h2>
                <p>
                  {expandedIndex === index
                    ? content.longDescription
                    : content.description}
                </p>
                <button
                  className="btn"
                  style={{
                    backgroundColor: "#2FC822",
                    position: "absolute", // Make the button position absolute
                    left: "15px", // 5px from the left
                    bottom: "15px", // 5px from the bottom
                  }}
                  onClick={() => toggleExpand(index)}
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
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
