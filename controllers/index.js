/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    // Import from Express
    const router = require('express').Router();

    // My Imports
    const homeRoutes = require('./homeRoutes')
    const apiRoutes = require('./api');
    

/* -------------------------------------------------------------------------- */
/*                       Define Middleware For This Path                      */
/* -------------------------------------------------------------------------- */

    router.use('/', homeRoutes); // for / path direct to homepage
    router.use('/api', apiRoutes); // for /api path direct into apis

/* -------------------------------------------------------------------------- */
/*                  Export Router Module for Use in ServerJS                  */
/* -------------------------------------------------------------------------- */

    module.exports = router;