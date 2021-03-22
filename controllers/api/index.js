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

    router.use('/blogs', dashRoutes); // any path with /api/blogs use blog routes
    router.use('/users', userRoutes); // any path with /api/users use user routes

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;