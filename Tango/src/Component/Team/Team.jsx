import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Farmer1 from "../../assets/Farmer1.png";
import Farmer2 from "../../assets/Farmer2.png";
import Famer3 from "../../assets/Famer3.png";


function Team() {
  const data = [
    {
      backgroundImage: Farmer1,
      title: 'Farmer Name 1',
      buttonText: 'View More',
    },
    {
      backgroundImage: Farmer2,
      title: 'Farmer Name 2',
      buttonText: 'View More',
    },
    {
      backgroundImage: Famer3,
      title: 'Farmer Name 3',
      buttonText: 'View More',
    },
  ];

  return (
    <>
      <div className="container-fluid py-5">
        <div className="row justify-content-center" style={{gap:'50px'}}>
          {data.map((item, index) => (
            <div className="col-lg-3 align-content-end rounded-2 p-2" key={index}
             
                style={{
                  backgroundImage: `url(${item.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '300px',
                  objectFit:'fill'
        
                }}
              >
               
                  <h2>{item.title}</h2>
                  <button className="btn" style={{background:'#2FC822',color:'white'}}>{item.buttonText}</button>
               
              </div>
           
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
