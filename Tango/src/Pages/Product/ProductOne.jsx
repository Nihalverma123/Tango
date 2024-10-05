import React, { useState } from 'react';
import Fert1 from '../.././assets/Fert1.png';
import Fert2 from '../.././assets/Fert2.png';
import Fruits1 from '../.././assets/Fruits1.png';
import Fruits3 from '../.././assets/Fruits3.png';
import Veg1 from '../.././assets/veg1.png';
import Veg2 from '../.././assets/veg2.png';
import Seed1 from '../.././assets/Seed1.png';
import Seed2 from '../.././assets/Seed2.png';
import ProductSearch from './ProductSearch'; // Import the ProductSearch component

function ProductOne() {
  const [category, setCategory] = useState('All'); // Manage selected category

  const data = [
    // Fertilizers
    { category: 'Fertilizers', Image: Fert1, title: "Fertilizer", description: "Grow Naturally...", buttonText: "View More" },
    { category: 'Fertilizers', Image: Fert2, title: "Fertilizer", description: "Feed Your Soil...", buttonText: "View More" },
    { category: 'Fertilizers', Image: Fert1, title: "Fertilizer", description: "Grow Naturally...", buttonText: "View More" },
    { category: 'Fertilizers', Image: Fert2, title: "Fertilizer", description: "Feed Your Soil...", buttonText: "View More" },

    // Fruits
    { category: 'Fruits', Image: Fruits1, title: "Fruits", description: "Grow Naturally...", buttonText: "View More" },
    { category: 'Fruits', Image: Fruits3, title: "Fruits", description: "Equip Your Farm...", buttonText: "View More" },
    { category: 'Fruits', Image: Fruits1, title: "Fruits", description: "Grow Naturally...", buttonText: "View More" },
    { category: 'Fruits', Image: Fruits3, title: "Fruits", description: "Equip Your Farm...", buttonText: "View More" },
    // Vegetables
    { category: 'Vegetables', Image: Veg1, title: "Vegetable", description: "Grow Naturally...", buttonText: "View More" },
    { category: 'Vegetables', Image: Veg2, title: "Vegetable", description: "Feed Your Soil...", buttonText: "View More" },
    { category: 'Vegetables', Image: Veg1, title: "Vegetable", description: "Grow Naturally...", buttonText: "View More" },
    { category: 'Vegetables', Image: Veg2, title: "Vegetable", description: "Feed Your Soil...", buttonText: "View More" },
    // Seeds
    { category: 'Seeds', Image: Seed1, title: "Organic Manure", description: "Grow Naturally...", buttonText: "View More" },
    { category: 'Seeds', Image: Seed2, title: "Organic Manure", description: "Feed Your Soil...", buttonText: "View More" },
    { category: 'Seeds', Image: Seed1, title: "Organic Manure", description: "Grow Naturally...", buttonText: "View More" },
    { category: 'Seeds', Image: Seed2, title: "Organic Manure", description: "Feed Your Soil...", buttonText: "View More" }
  ];

  // Filter products based on selected category
  const filteredData = category === 'All' ? data : data.filter(item => item.category === category);

  return (
    <div className="container-fluid" style={{ backgroundColor: 'linear-gradient(to right, rgba(217, 217, 217, 0.2), #D9D9D9)' }}>
      <ProductSearch onCategoryChange={setCategory} /> {/* Pass setCategory to ProductSearch */}
      <div className="row justify-content-center py-4" style={{ gap: '70px' }}>
        {filteredData.map((item, index) => (
          <div className="col-12 col-md-6 col-lg-2 px-2" key={index}>
            <img src={item.Image} alt={item.title} style={{ width: "100%", height: '100%' }} />
            <h2>{item.title}</h2>
            <p className="text-dark">{item.description}</p>
            <button className="btn" style={{ background: "#2FC822", color: "white" }}>
              {item.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOne;
