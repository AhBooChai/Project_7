const Sequelize = require('sequelize');


  module.exports = new Sequelize('postgres', 'postgres', 'Dottieb00', {
    host: 'localhost',
    dialect: 'postgres',
    
  });
  
  
  