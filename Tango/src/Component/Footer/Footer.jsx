import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";

function Footer() {
  return (
    <>
    <div className='main'>
      <div className='container py-5'>
        <div className='row py-1'>
          <div className='col-12 col-md-6 col-lg-3'>
            <h2 style={{color:"#2FC822"}}>Quick Links</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Meet The Team</li>
                <li>Latest Blog</li>
                <li>Contact Us</li>
            </ul>
          </div>
          <div className='col-12 col-md-6 col-lg-3 '>
            <h2 style={{color:"#2FC822"}}>Popular Links</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Meet The Team</li>
                <li>Latest Blog</li>
                <li>Contact Us</li>
            </ul>
          </div>
          <div className='col-12 col-md-6 col-lg-6 '>
          <form className="d-flex">
            <input type="email" className="form-control me-2" placeholder="Your email address" required />
            <button className="btn btn-success" type="submit">Subscribe</button>
            </form>

          </div>

        </div>
      </div>
      </div>
      <div className='copy'>
        <h2 className='text-white'>© All Rights Reserved.br Designed & Developed by <a href="https://crazywebdev.com/">crazywebdev technologies</a></h2>
      </div>
    </>
  )
}

export default Footer
