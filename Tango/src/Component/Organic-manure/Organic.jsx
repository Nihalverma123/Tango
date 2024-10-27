import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Organic.css";

// Importing images
import manureImage from "../../assets/Group 22.png";
import organicFoodImage from "../../assets/image.png";
import organicFarmingImage from "../../assets/flat-lay-vegetables-stucco-background.png";
import benefitsImage from "../../assets/image1.png";

function Organic() {
  // State to track which section is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Array of content
  const contentArray = [
    {
      id: 'content-1',
      title: "Organic Seeds",
      description: "Organic seeds are harvested from plants grown without synthetic pesticides or fertilizers. These seeds promote healthier soil and biodiversity, benefiting the environment. Growing your own organic plants ensures a purer, more natural food source",
      // para: 'Organic seeds come from plants grown without synthetic chemicals, supporting a healthier environment and purer food.',
      backgroundImage: manureImage
    }
  ];

  const contentArray2 = [
    {
      id: 'content-2',
      title: "Organic Food",
      description: "Organic food is produced without synthetic pesticides, fertilizers, or genetically modified organisms (GMOs). It is grown using natural farming methods that prioritize soil health and sustainability. Organic food is considered healthier and safer, as it contains no harmful chemical residues, and it promotes environmental conservation and biodiversity",
      // para: 'Organic food is grown without synthetic chemicals, ensuring a more natural and eco-friendly diet.',
      backgroundImage: organicFoodImage
    },
    {
      id: 'content-3',
      title: "Organic Manure",
      description: "Organic manure enhances soil fertility and promotes sustainable plant growth. It enriches the soil with nutrients, improves structure, and supports beneficial microbes. As an eco-friendly alternative to chemical fertilizers, it fosters long-term soil health in organic farming",
      // para: 'Organic manure enriches soil naturally by recycling nutrients from decomposed plants and animal matter.',
      backgroundImage: organicFarmingImage
    }
  ];

  const contentArray3 = [
    {
      id: 'content-4',
      title: "Benefits of Organic Farming",
      description: "Organic farming offers numerous benefits, including improved soil fertility, reduced use of harmful chemicals, and enhanced biodiversity. It promotes sustainable agriculture by using natural fertilizers and pest control, ensuring healthier crops and ecosystems. Organic farming also supports eco-friendly practices, reduces environmental pollution, and provides consumers with chemical-free, nutritious food.",
      // para: 'Organic farming sustains the environment by growing crops and raising livestock without synthetic chemicals, fostering biodiversity and soil health.',
      backgroundImage: benefitsImage
    }
  ];

  const toggleExpand = (id) => {
    setExpandedIndex(expandedIndex === id ? null : id);
  };

  return (
    <>
      <div className='container-fluid py-4' style={{ backgroundColor: 'linear-gradient(rgba(47, 200, 34, 0.1))' }}>
        <div className="container">
          <div className="row">
            {contentArray.map((content) => (
              <div
                className="col-lg-6 align-content-end rounded-2 p-3 one"
                key={content.id}
                style={{
                  backgroundImage: `url(${content.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h2>{content.title}</h2>
                <p>
                  {expandedIndex === content.id ? content.description : `${content.description.slice(0, 100)}...`}
                </p>
                <button className='btn' style={{ backgroundColor: "#2FC822" }} onClick={() => toggleExpand(content.id)}>
                  {expandedIndex === content.id ? 'Read Less' : 'Read More'}
                </button>
              </div>
            ))}

            <div className="col-lg-6 mt-2 one2">
              {contentArray2.map((content) => (
                <div
                  className="col-lg-12 align-content-end rounded-3 two p-3"
                  key={content.id}
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${content.backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    marginBottom: "35px",
                  }}
                >
                  <h2>{content.title}</h2>
                  <p>
                    {expandedIndex === content.id ? content.description : `${content.description.slice(0, 100)}...`}
                  </p>
                  {expandedIndex === content.id && <p className="color">{content.para}</p>}
                  <button className='btn' style={{ backgroundColor: "#2FC822" }} onClick={() => toggleExpand(content.id)}>
                    {expandedIndex === content.id ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className='row py-3'>
            {contentArray3.map((content) => (
              <div
                className="col-lg-12 align-content-end p-3 rounded-2"
                key={content.id}
                style={{
                  backgroundImage: `url(${content.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <h2>{content.title}</h2>
                <p>
                  {expandedIndex === content.id ? content.description : `${content.description.slice(0, 100)}...`}
                </p>
                <button className='btn' style={{ backgroundColor: "#2FC822" }} onClick={() => toggleExpand(content.id)}>
                  {expandedIndex === content.id ? 'Read Less' : 'Read More'}
                </button>
                {expandedIndex === content.id && <p>{content.para}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Organic;
