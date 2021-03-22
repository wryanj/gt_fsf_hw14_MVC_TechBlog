/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require('express').Router();
    const dashRoutes = require('./dashRoutes');
    const userRoutes = require('./userRoutes');   

/* -------------------------------------------------------------------------- */
/*                       Define Middleware For This Path                      */
/* -------------------------------------------------------------------------- */

    // Routes mounted to /api...

    router.use('/dash', dashRoutes); // any path with /api/dash use dash routes
    router.use('/users', userRoutes); // any path with /api/users use user routes

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;