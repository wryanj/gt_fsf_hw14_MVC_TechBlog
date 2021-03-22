/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */
    const router = require('express').Router();
    const { User } = require('../../models');
    // const withAuth = require('../../utils/auth');

/* -------------------------------------------------------------------------- */
/*                                Define Routes                               */
/* -------------------------------------------------------------------------- */

    // Routes mounted to /api/users/...

/* ------------------------------- Get Routes ------------------------------- */
    // Brings up the login page if user clicks login in nav
    router.get('/login', async (req, res) => {
            
        try{
            // Render the login screen and the status if they are logged in
            res.render('login', {
                logged_in: req.session.logged_in
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
    })

    // Brings up the signup page if user clicks they need to create new crednetials on login page
    router.get('/signup', async (req, res) => {
            
        try{
            // Render the login screen and the status if they are logged in
            res.render('signup', {
                logged_in: req.session.logged_in
            });
        }
        catch (err) {
            res.status(500).json(err);
        }
    })

/* ------------------------------- Post Routes ------------------------------ */
    // Posts new user credentials to the database
    router.post('/login', async (req, res) => {
        console.log(`reqeust body is ${req.body}`)
        try {
            const userData = await User.create(req.body);
            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;
        
                res.status(200).json(userData);
            });
        } 
        catch (err) {
            res.status(400).json(err);
        }
    });

/* ------------------------------- Put Routes ------------------------------- */

/* ------------------------------ Delete Routes ----------------------------- */

/* -------------------------------------------------------------------------- */
/*                              Export the Module                             */
/* -------------------------------------------------------------------------- */

    module.exports = router;