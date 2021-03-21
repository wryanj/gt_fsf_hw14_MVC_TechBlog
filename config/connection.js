/* -------------------------------------------------------------------------- */
/*                             IMPORT DEPENDENCIES                            */
/* -------------------------------------------------------------------------- */

// Require dotenv for use of env file for db name, user name and pw 

  require('dotenv').config();

// Require Sequalize  

  const Sequelize = require('sequelize');

/* -------------------------------------------------------------------------- */
/*         ESTABLISH DB CONNECTION VIA CREATION OF A SEQULIZE INSTANCE        */
/* -------------------------------------------------------------------------- */

  // Define new instance of sequalize 
  const sequelize = new Sequelize(

    // Pass in db, un and pw parameters to Sequalize Constructor 
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,

    // Specify host, dialect (using mySQL) and port of your local server
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    }
  );

/* -------------------------------------------------------------------------- */
/*                              EXPORT SEQUELIZE                              */
/* -------------------------------------------------------------------------- */

  module.exports = sequelize;