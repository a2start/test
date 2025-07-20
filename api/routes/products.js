const express = require('express');
const router = express.Router();

let products = [
  { id: 1, name: 'T-Shirt', price: 19.99, category: 'Apparel' },
  { id: 2, name: 'Laptop', price: 799.99, category: 'Electronics' },
];

router.get('/', (req, res) => {
  const { category } = req.query;
  if (category) {
    return res.json(products.filter(p => p.category === category));
  }
  res.json(products);
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

router.post('/', (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

module.exports = router;
