import React from "react";
import "./EventItem.css";

import event5 from "../../assets/event5.png";
import event6 from "../../assets/event6.png";


function EventItem() {
  

  return (
    <>

      <div className="container-fluid">
        <div className="container py-3">
          <h2 className="text-center">Events</h2>
          <p className="text-center text-black">
            Targuwan Agro hosts a variety of events throughout the year, focused
            on promoting sustainable farming and organic agriculture. These
            events include workshops, farmer training sessions, and conferences
            where experts share the latest innovations in eco-friendly farming
            techniques. Our events also provide opportunities for networking,
            collaboration, and learning, empowering farmers and industry
            professionals alike. Join us to be part of a movement driving the
            future of agriculture towards sustainability and health.
          </p>
        </div>
      </div>

<div className="container py-4">
      <div className="Hero1">
        <div className="container">
        <p className="fs-3 text-center">
          Targuwan Agro’s manure function showcases the process of creating organic manure, offering hands-on demonstrations and expert insights into sustainable soil enrichment techniques.
          </p>
        </div>
      </div>
</div>

<div className="container py-4">
      <div className="Hero2">
        <div className="container">
        <p className="fs-3 text-center">
          Targuwan Agro events promote sustainable farming through workshops, training, and knowledge-sharing, empowering farmers with eco-friendly agricultural practices
          </p>
        </div>
      </div>
</div>

<div className="container py-4">
      <div className="Hero3">
        <div className="container">
          <p className="fs-3 text-center">
          Targuwan Agro’s manure function showcases the process of creating organic manure, offering hands-on demonstrations and expert insights into sustainable soil enrichment techniques.
          </p>
        </div>
      </div>
</div>


<div className="container py-4">

    <div className="row">
        <div className="col-lg-6" style={{height:"700px"}}>
            <div className="card border-0" >
                <img src={event5} alt="loading..." className="img-fluid" style={{height:"700px"}}/>
                <div className="text position-absolute" style={{bottom: "10%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <p className="fs-4">Honor the Earth, Worship the Divine—Prepare Manure with Blessings!</p>
            </div>
            </div>
        </div>
        <div className="col-lg-6 " style={{height:"700px"}}>
            <div className="card border-0">
            <img src={event6} alt="loading..." className="img-fluid"  style={{height:"700px"}}/>
            <div className="text position-absolute" style={{bottom: "10%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <p className="fs-4">Offer Prayers, Nurture the Soil—Cultivate with Gratitude!</p>
            </div>
            </div>
        </div>
    </div>
</div>





    </>
  );
}

export default EventItem;
