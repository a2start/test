import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
  axios.get(`/api/v1/product/${id}`)
    .then(res => {
      console.log('Product:', res.data.product); // ✅ This logs the product details
      setProduct(res.data.product);
    })
    .catch(err => console.error(err));
}, [id]);


  if (!product) return <p>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <img
        src={product.images[0]?.url}
        alt={product.name}
        style={{ width: '300px' }}
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <strong>₹{product.price}</strong>

      {/* Size Dropdown */}
      <div style={{ marginTop: '1rem' }}>
        <label htmlFor="sizeSelect" style={{ display: 'block', marginBottom: '0.5rem' }}>
          Select Size:
        </label>
        <select
          id="sizeSelect"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          style={{ padding: '0.5rem', width: '200px' }}
        >
          <option value="">Choose size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>
    </div>
  );
};

export default ProductDetail;
