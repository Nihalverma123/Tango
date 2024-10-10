import React, { useState } from 'react';
import Fert1 from '../.././assets/Fert1.png';
import Fert2 from '../.././assets/Fert2.png';
import Fruits1 from '../.././assets/Fruits1.png';
import Fruits3 from '../.././assets/Fruits3.png';
import Veg1 from '../.././assets/veg1.png';
import Veg2 from '../.././assets/veg2.png';
import Seed1 from '../.././assets/Seed1.png';
import Seed2 from '../.././assets/Seed2.png';
import ProductSearch from './ProductSearch';
import { useCollapse } from 'react-collapsed';

function ProductOne() {
  const [category, setCategory] = useState('All'); // Manage selected category
  const [expandedIndex, setExpandedIndex] = useState(null); // Manage which item is expanded

  const data = [
    // Fertilizers
    { category: 'Fertilizers', Image: Fert1, title: "Fertilizer", description: "Grow Naturally...", parag: "Organic Fertilizer: Grow Naturally and Sustainably for a Healthier Future!", buttonText: "View More" },
    { category: 'Fertilizers', Image: Fert2, title: "Fertilizer", description: "Feed Your Soil...", parag: "Fertilizer: Feed Your Soil for Abundant, Healthy Growth!", buttonText: "View More" },
    { category: 'Fertilizers', Image: Fert1, title: "Fertilizer", description: "Grow Naturally...", parag: "Organic Fertilizer: Grow Naturally and Sustainably for a Healthier Future!", buttonText: "View More" },
    { category: 'Fertilizers', Image: Fert2, title: "Fertilizer", description: "Feed Your Soil...", parag: "Fertilizer: Feed Your Soil for Abundant, Healthy Growth!", buttonText: "View More" },

    // Fruits
    { category: 'Fruits', Image: Fruits1, title: "Fruits", description: "Grow Naturally...", parag: "Organic Fruits: Grow Naturally for Flavorful, Nutritious Harvests!", buttonText: "View More" },
    { category: 'Fruits', Image: Fruits3, title: "Fruits", description: "Equip Your Farm...", parag: "Organic Fruits: Equip Your Farm for Bountiful, Eco-Friendly Harvests!", buttonText: "View More" },
    { category: 'Fruits', Image: Fruits1, title: "Fruits", description: "Grow Naturally...", parag: "Organic Fruits: Grow Naturally for Flavorful, Nutritious Harvests!", buttonText: "View More" },
    { category: 'Fruits', Image: Fruits3, title: "Fruits", description: "Equip Your Farm...", parag: "Organic Fruits: Equip Your Farm for Bountiful, Eco-Friendly Harvests!", buttonText: "View More" },

    // Vegetables
    { category: 'Vegetables', Image: Veg1, title: "Vegetable", description: "Grow Naturally...", parag: "Organic Vegetables: Grow Naturally for Fresh, Nutritious Produce!", buttonText: "View More" },
    { category: 'Vegetables', Image: Veg2, title: "Vegetable", description: "Feed Your Soil...", parag: "Organic Vegetables: Feed Your Soil for Nutrient-Rich, Sustainable Growth!", buttonText: "View More" },
    { category: 'Vegetables', Image: Veg1, title: "Vegetable", description: "Grow Naturally...", parag: "Organic Vegetables: Grow Naturally for Fresh, Nutritious Produce!", buttonText: "View More" },
    { category: 'Vegetables', Image: Veg2, title: "Vegetable", description: "Feed Your Soil...", parag: "Organic Vegetables: Feed Your Soil for Nutrient-Rich, Sustainable Growth!", buttonText: "View More" },

    // Seeds
    { category: 'Seeds', Image: Seed1, title: "Organic Manure", description: "Grow Naturally...", parag: "Organic Manure: Grow Naturally for Lush, Fertile Soil!", buttonText: "View More" },
    { category: 'Seeds', Image: Seed2, title: "Organic Manure", description: "Feed Your Soil...", parag: "Organic Manure: Feed Your Soil for Richer, Sustainable Growth!", buttonText: "View More" },
    { category: 'Seeds', Image: Seed1, title: "Organic Manure", description: "Grow Naturally...", parag: "Organic Manure: Grow Naturally for Lush, Fertile Soil!", buttonText: "View More" },
    { category: 'Seeds', Image: Seed2, title: "Organic Manure", description: "Feed Your Soil...", parag: "Organic Manure: Feed Your Soil for Richer, Sustainable Growth!", buttonText: "View More" }
  ];

  // Filter products based on selected category
  const filteredData = category === 'All' ? data : data.filter(item => item.category === category);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="container-fluid" style={{ backgroundColor: 'linear-gradient(to right, rgba(217, 217, 217, 0.2), #D9D9D9)' }}>
      <ProductSearch onCategoryChange={setCategory} /> {/* Pass setCategory to ProductSearch */}
      <div className="row justify-content-center py-4" style={{ gap: '70px' }}>
        {filteredData.map((item, index) => (

          <div className="col-12 col-md-6 col-lg-2 px-2" key={index}>
            <img src={item.Image} alt={item.title} style={{ width: "100%", height: '100%' }} />
            <h2>{item.title}</h2>
            <p className="text-dark">{item.description}</p>
            {expandedIndex === index && <p className="color">{item.parag}</p>}
            <button 
              className="btn" 
              style={{ background: "#2FC822", color: "white" }}
              onClick={() => toggleExpand(index)}
            >
              {expandedIndex === index ? 'Read Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOne;
