import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className='main'>
      <div className='container py-5'>
        <div className='row py-1'>
          <div className='col-12 col-md-6 col-lg-3'>
            <h2 style={{color:"#2FC822"}}>Quick Links</h2>
            <ul>
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
                {/* <li>About Us</li>
                <li>Our Services</li> */}
                <li><Link  to="/ourteam" >Meet the Team</Link></li>
                {/* <li>Latest Blog</li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
            </ul>
          </div>
          <div className='col-12 col-md-6 col-lg-3 '>
            <h2 style={{color:"#2FC822"}}>Popular Links</h2>
            <ul>
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/gallery">Gallery</Link>
                  </li>
                {/* <li>About Us</li> */}
                {/* <li>Our Services</li> */}
                <li><Link  to="/ourteam" >Meet the Team</Link></li>
                {/* <li>Latest Blog</li> */}
                <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </li>
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
        <h2 className='text-white'>© All Rights Reserved <br /> Designed & Developed by <a  href="https://crazywebdev.com/" style={{textDecoration:'none',  color:'white'}}>Crazywebdev technologies</a></h2>
      </div>
    </>
  )
}

export default Footer
