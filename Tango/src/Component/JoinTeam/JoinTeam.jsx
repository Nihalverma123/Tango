import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function JoinTeam() {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center p-2">
          <div className="col-lg-4">
            <h2 className='text-dark'>Join To Get <span style={{color: "#2FC822"}}>Latest Updates on New Collections..</span> </h2>
            <p className='text-dark fs-3 fw-bolder'>Join our email subscription now to get updates on new arrivals and coupons.</p>
            <input type='email' placeholder='Your Email Id' className='ronded-5 w-75 px-2 py-2'></input> <button  className='btn btn-success'>Subscribe</button>
          </div>
          <div className="col-lg-7 rounded-5" style={{height:"400px"}}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115293.28983757322!2d78.47988655243067!3d25.441094863732385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397776d458ba7703%3A0x96e9cda55c3481ca!2sJhansi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1726985368570!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: '0',borderRadius:"5px"}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinTeam;
