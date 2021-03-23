/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const router = require('express').Router(); // Require Express Router
    const { User, Blog} = require('../models'); // Require my Models
    const Comment = require('../models/comment'); // Adding this because I was having trouble getting via de-structure...
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
                    },
                    {
                        model: Comment,
                        attributes: ['comment']
                    },
                   
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

    // Posts new comments associated to blogs and users to the db
            // Body Example:
            /*
                {
                    "comment": "new comment",
                    "user_id": 2,
                    "blog_id": 2
                }
            */

            //Route
            router.post('/comment', async (req, res) => {
                console.log(`reqeust body is ${JSON.stringify(req.body)}`)
                try {
                    const commentData = await Comment.create(req.body);
                    res.status(200).json(commentData);
                } 
                catch (err) {
                    res.status(400).json(err);
                }
            });

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = router;