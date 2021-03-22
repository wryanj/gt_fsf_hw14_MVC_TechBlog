/* -------------------------------------------------------------------------- */
/*                             Define auth helper                             */
/* -------------------------------------------------------------------------- */

    const withAuth = (req, res, next) => {
        // If the user is not logged in, redirect the request to the login page
        if (!req.session.logged_in) {
        res.redirect('/api/users/login');
        } else {
        next();
        }
    };

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */
  
  module.exports = withAuth;