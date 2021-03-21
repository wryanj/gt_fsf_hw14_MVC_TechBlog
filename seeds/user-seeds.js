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
            user_name: 'fakeNameOne',
            email: 'fakeemailone@email.com',
            password: 'fakepw1',
        },
        {
            user_name: 'fakeNameTwo',
            email: 'fakeemailtwo@email.com',
            password: 'fakepw2',
        },
        {
            user_name: 'fakeNameThree',
            email: 'fakeemailthree@email.com',
            password: 'fakepw3',
        }
    ];

    // create function that bulk creates data using the array I created
    const seedUser = () => User.bulkCreate(userData);

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

    module.exports = seedUser;