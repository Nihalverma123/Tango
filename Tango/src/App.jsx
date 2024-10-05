import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'

import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";


import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import Event from "./Pages/Events/Event";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";

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

    </Routes>

    <Footer></Footer>

    </Router>
      {/* <About /> */}
    </>
  );
}

export default App;
