/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const router = require('express').Router();
    const { User, Blog } = require('../../models');
    const Comment = require('../../models/comment'); // Adding this because I was having trouble getting via de-structure...
    const withAuth = require('../../utils/auth');

/* -------------------------------------------------------------------------- */
/*                                Define Routes                               */
/* -------------------------------------------------------------------------- */

    // Routes mounted to /api/dash/...

/* ------------------------------- Get Routes ------------------------------- */

    // Return blogs belonging to user (this needs updating after MVP current only returns all blogs)
    router.get('/', withAuth, async (req, res) => {
            
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
                where: {
                    user_id: req.session.user_id
                }
            });
            
            

            // Serialize data so the template can read it
            const blogs = blogData.map((blog) => blog.get({plain : true}));
            

            // Pass serialized data and session flag into db
            res.render('dash', {
                blogs,
                logged_in: req.session.logged_in,
                user_name: req.session.user_name,
                user_id: req.session.user_id,
    
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
    })

/* ------------------------------- Post Routes ------------------------------ */

    // Posts new blogs associated with users to the db
    
        // Body Example:
            /*
                {
                        "title": "new blog title",
                        "content": "This is some blogger thoughts",
                        "user_id": 2
                }
            */

        //Route
        router.post('/blog', withAuth, async (req, res) => {
            console.log(`trying to create a blog`)
            try {
                console.log(JSON.stringify(req.body));
                const blogData = await Blog.create(req.body);
                res.status(200).json(blogData);
            } 
            catch (err) {
                res.status(400).json(err);
            }
        });

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
        router.post('/comment', withAuth, async (req, res) => {
            console.log(`reqeust body is ${JSON.stringify(req.body)}`)
            try {
                const commentData = await Comment.create(req.body);
                res.status(200).json(commentData);
            } 
            catch (err) {
                    res.status(400).json(err);
            }
        });

        

/* ------------------------------- Put Routes ------------------------------- */

    // Edit existing comment content or title

        // Body Example
            /*
                {
                    "title": "updated blog title",
                    "content": "This is some blogger thoughts",
                }
            */

        // Route
        router.put('/blog/:id', async (req, res) => {
            console.log(`reqeust body is ${JSON.stringify(req.body)}`)
            console.log(req.params.id)
            try {
                await Blog.update(
                    {
                        title: req.body.title,
                        content:req.body.content
                    },
                    {where: {id:req.params.id}}
                )
                res.status(200).json(`blog updated successfully!`);
            } 
            catch (err) {
                    res.status(400).json(err);
            }
        });

/* ------------------------------ Delete Routes ----------------------------- */
        
        // Route to delete a given blog
        router.delete('/blog/:id', async (req, res) => {
            console.log(`reqeust body is ${JSON.stringify(req.body)}`)
            try {
                await Blog.destroy(
                    {where: {id: req.params.id}}
                )
                res.status(200).json(`blog deleted successfully.`);
            } 
            catch (err) {
                    res.status(400).json(err);
            }
        });


/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

    module.exports = router;