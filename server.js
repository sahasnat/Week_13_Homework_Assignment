const express = require('express');
const routes = require('./routes');
const sequelize=require('./config/connection');

// //Import model to sync table with database
// const Product = require('./models/Product');
// const Category = require('./models/Category');
// const ProductTag = require('./models/ProductTag');
// const Tag = require('./models/Tag');
// const index = require('./models/index');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force:true}).then(()=>{
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})
