import React from "react";
import Gallery1 from "../../assets/gallery1.png";
import Gallery2 from "../../assets/gallery2.png";
import Gallery3 from "../../assets/gallery3.png";
import Gallery4 from "../../assets/gallery4.png";
import Gallery5 from "../../assets/gallery5.png";
import Gallery6 from "../../assets/gallery6.png";
import Gallery7 from "../../assets/gallery7.png";
import Gallery8 from '../../assets/gallery8.png';
import Gallery9 from "../../assets/gallery9.png";
import Gallery10 from "../../assets/gallery10.png";
import Gallery11 from "../../assets/gallery11.png";

function Gallery() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row p-2 justify-content-end">
            <div className="col-12 col-md-6 col-lg-5">
              <p className="fs-1 fw-bolder text-black">
                Growing a{" "}
                <span>
                  Greener
                  <br /> Future
                </span>
                , One Field at a Time!
              </p>
              <p className="text-black">
                Explore our journey towards sustainable farming with a showcase
                of organic practices, innovative solutions, and farmer success
                stories through captivating visuals.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-7 d-flex justify-content-end">
              <img src={Gallery1} alt="loading..." className="w-50" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-3">
        <div className="container">
            <div className="row d-flex justify-content-end align-items-end">
                <div className="col-12 col-lg-5 d-flex justify-content-end">
                    <img src={Gallery2} alt="loading..." className="img-fluid"></img>
                </div>
                <div className="col-12 col-lg-3">
                    <img src={Gallery3} alt="loading..." className="img-fluid"></img>
                </div>

                <div className="col-12 col-lg-4 gap-4 d-flex flex-column">
                    <img src={Gallery4} alt="loading.." className="img-fluid"></img>
                    <img src={Gallery5} alt="loading.."
                    className="img-fluid"></img>
                </div>

            </div>
        </div>
      </div>

      <div className="container-fluid p-3">
        <div className="container">
            <div className="row g-3">
                <div className="col-lg-3">
                <img src={Gallery6} alt="loading..." className="img-fluid"></img>

                </div>
                <div className="col-lg-3">
                <img src={Gallery7} alt="loading..." className="img-fluid"></img>
                </div>
                <div className="col-lg-6">
                <img src={Gallery8} alt="loading..." className="img-fluid" style={{height:"280px",width:"100%"}}></img>
                </div>
            </div>
        </div>
      </div>


    <div className="container-fluid p-3">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <img src={Gallery9} alt="Loading.." className="img-fluid"></img>
                </div>
                <div className="col-lg-4">
                <img src={Gallery10} alt="Loading.." className="img-fluid"></img>
                </div>
                <div className="col-lg-4">
                <img src={Gallery11} alt="Loading.." className="img-fluid"></img>
                </div>
            </div>
        </div>
    </div>


    </>
  );
}

export default Gallery;
