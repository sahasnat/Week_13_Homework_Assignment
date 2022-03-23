const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain Jacket',
    price: 89.99,
    stock: 4,
    category_id: 1,
  },
  {
    product_name: 'Small Size Socks',
    price: 10.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Office Coat',
    price: 122.99,
    stock: 4,
    category_id: 4,
  },
  {
    product_name: 'Fade Jeans',
    price: 32.99,
    stock: 40,
    category_id: 3,
  },
  {
    product_name: 'Wool Sweater',
    price: 79.99,
    stock: 32,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;