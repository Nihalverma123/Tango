import React from 'react';
import './Hero.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Hero() {
  return (
    <>
      <div className='Hero'>
      <div className='container'>
       <h2>KISAN SE KISAN TAK</h2>
       <p className='fs-1 fw-bolder'>ORGANIC <span>TARGUAWAN</span><br></br><span>AGRO</span></p>
       <div className='d-flex gap-3'>
       {/* <button className='btn btn1 btn-outline-secondary'>Explore</button>
       <button className='btn' style={{background:'#2FC822',color:'white'}}>Get Started</button> */}
       </div>
      </div>
      </div>
    </>
  )
}

export default Hero
