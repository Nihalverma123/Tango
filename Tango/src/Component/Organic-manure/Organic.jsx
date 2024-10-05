import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Organic.css";

// Importing images
import manureImage from "../../assets/Group 22.png";
import organicFoodImage from "../../assets/image.png";
import organicFarmingImage from "../../assets/flat-lay-vegetables-stucco-background.png";
import benefitsImage from "../../assets/image1.png";

function Organic() {
  // Array of content
  const contentArray = [
    {
      title: "Organic Manure",
      description: "Organic manure enhances soil fertility and promotes sustainable plant growth. It enriches the soil with nutrients, improves structure, and supports beneficial microbes. As an eco-friendly alternative to chemical fertilizers, it fosters long-term soil health in organic farming......",
      buttonText: "Know More",
      backgroundImage: manureImage
    }
  ];

  const contentArray2 = [
    {
      title: "Organic Food",
      description: "Organic food is produced without synthetic pesticides, fertilizers, or genetically modified organisms (GMOs). It is grown using natural farming methods that prioritize soil health and sustainability. Organic food is considered healthier and safer, as it contains no harmful chemical residues, and it promotes environmental conservation and biodiversity........",
      buttonText: "Know More",
      backgroundImage: organicFoodImage
    },
    {
      title: "Organic  Manure",
      description: "Organic manure enhances soil fertility and promotes sustainable plant growth. It enriches the soil with nutrients, improves structure, and supports beneficial microbes. As an eco-friendly alternative to chemical fertilizers, it fosters long-term soil health in organic farming......",
      buttonText: "Know More",
      backgroundImage: organicFarmingImage
    }
  ];

  const contentArray3 = [
    {
      title: "Benefits of Organic Farming",
      description: "Organic farming offers numerous benefits, including improved soil fertility, reduced use of harmful chemicals, and enhanced biodiversity. It promotes sustainable agriculture by using natural fertilizers and pest control, ensuring healthier crops and ecosystems. Organic farming also supports eco-friendly practices, reduces environmental pollution, and provides consumers with chemical-free, nutritious food",
      buttonText: "Know More",
      backgroundImage: benefitsImage
    }
  ];

  return (
    <>
      <div className='container-fluid py-4' style={{backgroundColor: 'llinear-gradient(rgba(47, 200, 34, 0.1);'}}>
        <div className="container">
          <div className="row">
            {/* Accessing the first object in the array */}
            {contentArray.map((content, index) => (
              <div
                className="col-lg-6 align-content-end rounded-2 p-3 one"
                key={index}
                style={{
                  backgroundImage: `url(${content.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h2>{content.title}</h2>
                <p>{content.description}</p>
                <button className='btn' style={{ backgroundColor: "#2FC822" }}>
                  {content.buttonText}
                </button>
              </div>
            ))}

            <div className="col-lg-6  mt-2 one2">
              {contentArray2.map((content, index) => (
                <div
                className="col-lg-12 align-content-end rounded-3 two p-3"
                key={index}
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${content.backgroundImage})`,

                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  marginBottom: "35px",
                }}
              >
                  <h2>{content.title}</h2>
                  <p>{content.description}</p>
                  <button className='btn' style={{ backgroundColor: "#2FC822" }}>
                    {content.buttonText}
                  </button>
                </div>
              ))}
            </div>

          </div>

          <div className='row py-3' >
            {contentArray3.map((content, index) => (
                <div
                className="col-lg-12 align-content-end p-3 rounded-2"
                key={index}
                style={{
                  backgroundImage: `url(${content.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h2>{content.title}</h2>
                <p>{content.description}</p>
                <button className='btn' style={{ backgroundColor: "#2FC822" }}>
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

export default Organic;
