var Sequelize = require('sequelize');


const sequelize = new Sequelize(
  'bt5ljga7ljvkbk0vklkg', // database
  'ufoeht8luebxzkwz', // user / usuario
  'HECG9giNjB3OtkO3bYvm', //password
  {
    host: 'bt5ljga7ljvkbk0vklkg-mysql.services.clever-cloud.com',
    dialect: 'mysql'
    ,
    
  }
  
);

module.exports = sequelize;