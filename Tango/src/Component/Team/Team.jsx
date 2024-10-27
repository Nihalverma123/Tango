import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Farmer1 from "../../assets/Farmer1.png";
import Farmer2 from "../../assets/Farmer2.png";
import Famer3 from "../../assets/Famer3.png";

function Team() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const data = [
    {
      backgroundImage: Farmer1,
      title: 'Farmer Name 1',
      buttonText: 'View More',
      para: 'Indian farmers tirelessly nourish the land, feeding millions despite numerous challenges. Their resilience and dedication embody hope and perseverance. They drive the agricultural economy with innovation and hard work.',
      shortPara: 'Indian farmers tirelessly nourish the land...',
    },
    {
      backgroundImage: Farmer2,
      title: 'Farmer Name 2',
      buttonText: 'View More',
      para: 'Indian farmers tirelessly nourish the land, feeding millions despite numerous challenges. Their resilience and dedication embody hope and perseverance. They drive the agricultural economy with innovation and hard work.',
      shortPara: 'Indian farmers tirelessly nourish the land...',
    },
    {
      backgroundImage: Famer3,
      title: 'Farmer Name 3',
      buttonText: 'View More',
      para: 'Indian farmers tirelessly nourish the land, feeding millions despite numerous challenges. Their resilience and dedication embody hope and perseverance. They drive the agricultural economy with innovation and hard work.',
      shortPara: 'Indian farmers tirelessly nourish the land...',
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <div className="container-fluid py-5">
        <div className="row justify-content-center" style={{ gap: '50px' }}>
          {data.map((item, index) => (
            <div
              className="col-lg-3 align-content-end rounded-2 p-2"
              key={index}
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '300px',
                objectFit: 'fill',
                position: 'relative',
                color: 'white',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              <div style={{ flexGrow: 1 }}>
                <h2>{item.title}</h2>
                <p>
                  {expandedIndex === index ? item.para : item.shortPara}
                </p>
              </div>
              <button
                className="btn"
                style={{
                  background: '#2FC822',
                  color: 'white',
                  position: 'absolute',
                  bottom: '10px',
                  left: '10px',
                }}
                onClick={() => toggleExpand(index)}
              >
                {expandedIndex === index ? 'Read Less' : 'Read More'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
