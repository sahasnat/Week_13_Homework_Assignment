const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Jacket',
  },
  {
    category_name: 'Sweater',
  },
  {
    category_name: 'Jeans',
  },
  {
    category_name: 'Coats',
  },
  {
    category_name: 'Socks',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;