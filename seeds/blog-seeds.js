/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const {Blog} = require('../models')

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
    // Define array of data to seed
    const blogData = [
        {
            title: 'Mr Cows First Blog',
            content: 'Mooo',
            user_id: 1

        },
        {
            title: 'Mr Cows Second Blog',
            content: 'Mooo x2',
            user_id: 1
        },
        {
            title: 'Mr Ducks First Blog',
            content: 'Quack Quack',
            user_id: 2
        }
    ];

    // create function that bulk creates data using the array I created
    const seedBlog = () => Blog.bulkCreate(blogData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

    module.exports = seedBlog;