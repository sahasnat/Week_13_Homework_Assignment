require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });


    // const mysql = require('mysql')
    // require('dotenv').config();
    // const connectionLog = mysql.createPool({
    //     connectionLimit : 10,
    //     host: process.env.DB_HOST_LOG,
    //     user: process.env.DB_USER,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DB_DATABASE,
    //     port:process.env.DB_PORT
    // });

module.exports = sequelize;
