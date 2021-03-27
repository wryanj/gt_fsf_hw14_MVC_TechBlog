
    // Import initial Dependencies
    const path = require('path');
    const express = require('express');
    const session = require('express-session');
    const exphbs = require('express-handlebars');
    const routes = require('./controllers');
    const helpers = require('./utils/helpers');

    // Seup Sequelize
    const sequelize = require('./config/connection');
    const SequelizeStore = require('connect-session-sequelize')(session.Store);

    // Setup Express Server
    const app = express();
    const PORT = process.env.PORT || 3001;


    // Create Engine with Helpers (after create add {helpers when ready} within the parenthesis. Custom helpers ie date conversion
    const hbs = exphbs.create({helpers}); // This is where I reference my helper.js I required above, to use helper functions

    // Create Session Object
    const sess = {
        secret: 'Super secret secret',
        cookie: {},
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
            db: sequelize
        }),
        // Set session to expire after 15 minutes (1 min = 60000 milleseconds)
        expires: new Date(Date.now() + (15*60000))

    };

    // Inform Express.js on which template engine to use
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');

    // Middleware For everything on this route
    app.use(session(sess));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(routes);

/* -------------------------------------------------------------------------- */
/*                         SYNC DB AND TURN ON SERVER                         */
/* -------------------------------------------------------------------------- */

    sequelize.sync({ force: false }).then(() => {
        app.listen(PORT, () => console.log(`now listning on port ${PORT}`));
    });