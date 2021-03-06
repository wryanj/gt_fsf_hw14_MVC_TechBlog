/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    // Import all the seed data functions created in this directory
    const seedUser = require('./user-seeds');
    const seedBlog = require('./blog-seeds');
    const seedComment = require('./comment-seeds');
    
    
    // Import the database connection instance from connection / config
    const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                    Define Function for Database Seeding                    */
/* -------------------------------------------------------------------------- */

    const seedAll = async () => {
        // Every time I run this seedAll function it will overwrite my existing table and refresh it with my latest models, then the data in my seed files
        await sequelize.sync({ force: true }); // Force true adds a drop table if exists- so it will override any existing data I have in there. 
        console.log('\n----- DATABASE SYNCED -----\n');

        await seedUser();
        console.log('\n----- USERS SEEDED -----\n');

        await seedBlog();
        console.log('\n----- BLOGS SEEDED -----\n');

        await seedComment();
        console.log('\n----- COMMENTS SEEDED -----\n');

        process.exit(0);
  };

/* -------------------------------------------------------------------------- */
/*                          Execute Seed All Function                         */
/* -------------------------------------------------------------------------- */

  // NOTE to run this due to something with scope, do node seeds/index.js (dont cd into this seeds directory and then try and node this)
  seedAll();