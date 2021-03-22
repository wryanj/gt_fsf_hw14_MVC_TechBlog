/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const router = require('express').Router();
    const { User, Blog } = require('../../models');
    //const withAuth = require('../../utils/auth');

/* -------------------------------------------------------------------------- */
/*                                Define Routes                               */
/* -------------------------------------------------------------------------- */

    // Routes mounted to /api/dash/...

/* ------------------------------- Get Routes ------------------------------- */
    // For Dash, return only blogs belonging to the logged in user
    router.get('/', async (req, res) => {
            
        try{

            // Get the data from the blogs DB
            const blogData = await Blog.findAll({
                include: [
                    {
                        model: User,
                        attributes: ['user_name']
                    }
                ],
            });
            
            // Serialize data so the template can read it
            const blogs = blogData.map((blog) => blog.get({plain : true}));
            console.log(blogs);

            // Pass serialized data and session flag into db
            res.render('dash', {
                blogs,
                logged_in: req.session.logged_in
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
    })

/* ------------------------------- Post Routes ------------------------------ */

/* ------------------------------- Put Routes ------------------------------- */

/* ------------------------------ Delete Routes ----------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

    module.exports = router;