const express = require('express');
const cloudinary = require('cloudinary');
const productRoutes = require('./routes/products'); // ✅ use correct one only

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// API route
app.use('/products', productRoutes);

// Optional: root route
app.get('/', (req, res) => res.send('E-commerce API running'));

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    process.exit(1);
});

// Cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME || 'your_cloud_name',
    api_key: process.env.CLOUDINARY_API_KEY || 'your_api_key',
    api_secret: process.env.CLOUDINARY_API_SECRET || 'your_api_secret',
});

// Start server
const server = app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error(`Unhandled Rejection: ${err.message}`);
    server.close(() => process.exit(1));
});
