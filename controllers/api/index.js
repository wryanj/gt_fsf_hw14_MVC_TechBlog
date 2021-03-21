/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require('express').Router();
    const blogRoutes = require('./blogRoutes');
    const userRoutes = require('./userRoutes');   

/* -------------------------------------------------------------------------- */
/*                       Define Middleware For This Path                      */
/* -------------------------------------------------------------------------- */

    router.use('/blogs', blogRoutes); // any path with /api/blogs use blog routes
    router.use('/users', userRoutes); // any path with /api/users use user routes

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
    module.exports = router;