import React from 'react';

function ProductSearch({ onCategoryChange }) {
  return (
    <div className="container-fluid d-flex justify-content-center">
  <div className=" overflow-auto">
    <ul className="text-dark d-flex flex-nowrap py-4 gap-3">
      <li>
        <button className="btn btn-success text-dark" onClick={() => onCategoryChange('All')}>
          All
        </button>
      </li>
      <li>
        <button className="btn btn-outline-success text-dark" onClick={() => onCategoryChange('Fruits')}>
        Diry Product
        </button>
      </li>
      <li>
        <button className="btn btn-outline-success text-dark" onClick={() => onCategoryChange('Vegetables')}>
          Vegetables
        </button>
      </li>
      <li>
        <button className="btn btn-outline-success text-dark" onClick={() => onCategoryChange('Fertilizers')}>
        Jaivik Khad
        </button>
      </li>
      <li>
        <button className="btn btn-outline-success text-dark" onClick={() => onCategoryChange('Seeds')}>
        Organic Manure
        </button>
      </li>
    </ul>
  </div>
</div>

  );
}

export default ProductSearch;
