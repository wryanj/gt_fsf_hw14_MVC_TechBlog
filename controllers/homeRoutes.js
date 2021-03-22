/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require('express').Router(); // Require Express Router
    const { User, Blog } = require('../models'); // Require my Models
    // const withAuth = require('../utils/auth'); // Require my auth function

/* -------------------------------------------------------------------------- */
/*                                Define Routes                               */
/* -------------------------------------------------------------------------- */

    // base route for page

/* ------------------------------- GET Routes ------------------------------- */
    
    // First time site visit with no prior login return dash_home with no create / edit options
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
            res.render('home', {
                blogs,
                logged_in: req.session.logged_in
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
    })

/* ------------------------------- POST Routes ------------------------------ */

/* ------------------------------- PUT Routes ------------------------------- */

/* ------------------------------ DELETE Routes ----------------------------- */

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = router;