/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const {User} = require('../models')

/* -------------------------------------------------------------------------- */
/*                            Define Data to Inject                           */
/* -------------------------------------------------------------------------- */
    // Define array of data to seed
    const userData = [
        {
            user_name: 'MrCow43',
            email: 'cowpies@moo.com',
            password: 'cowpies123',
        },
        {
            user_name: 'MrDuck57',
            email: 'mallard@ponds.com',
            password: 'ieatfish123',
        },
        {
            user_name: 'MrCrow',
            email: 'crowsrweird@blackbird.com',
            password: 'crow123456',
        }
    ];

    // create function that bulk creates data using the array I created
    const seedUser = () => User.bulkCreate(userData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

    module.exports = seedUser;