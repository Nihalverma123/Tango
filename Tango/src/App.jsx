import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";


import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import Event from "./Pages/Events/Event";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";
import OurTeam from "./Component/Ourteam/OurTeam";
import ProductHeader from "./Pages/ProductHeader/ProductHeader";
import Organimenure from "./Pages/OrganicMenure/Organimenure";
import CompanyHetory from "./Component/Ourteam/CompanyHetory";

function App() {
  return (
    <>
    <Router>

    <Header></Header>

    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/gallery" element={<Gallery />} />/
        <Route path="/contact" element={<Contact />} />/
        <Route path="/event" element={<Event  />} />
        <Route path="/ourteam" element={<OurTeam></OurTeam>}/>
        <Route path="/productheader" element={<ProductHeader/>}/>
        <Route path="/productheader" element={<Organimenure/>}/>
        <Route path="/companyhestory" element={<CompanyHetory/>}/>

    </Routes>

    <Footer></Footer>

    </Router>
      
     
    </>
  );
}

export default App;
