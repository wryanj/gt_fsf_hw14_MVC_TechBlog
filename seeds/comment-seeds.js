/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const Comment = require('../models/comment'); // Was having trouble destructing here some reason

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
    // Define array of data to seed
    const commentData = [
        {
            comment: 'This is a comment! Nice!',
            user_id: 1,
            blog_id: 3
        },
        {
            comment: 'This is a comment Also! Sweet!',
            user_id: 2,
            blog_id: 1
        },
        {
            comment: 'This is a comment Also almost like the second commend in my seed! Awesome!',
            user_id: 3,
            blog_id: 1
        }
    ];

    // create function that bulk creates data using the array I created
    const seedComment = () => Comment.bulkCreate(commentData);
    

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

    module.exports = seedComment