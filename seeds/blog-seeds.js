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
            title: 'Test Blog 1',
            content: 'This is my testing blog one blah blah blah',
            user_id: 1

        },
        {
            title: 'Test Blog 2',
            content: 'This is my testing blog two blah blah blah',
            user_id: 2
        },
        {
            title: 'Test Blog 3',
            content: 'This is my testing blog three blah blah blah',
            user_id: 3
        }
    ];

    // create function that bulk creates data using the array I created
    const seedBlog = () => Blog.bulkCreate(blogData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

    module.exports = seedBlog;