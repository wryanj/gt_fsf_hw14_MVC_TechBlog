/* -------------------------------------------------------------------------- */
/*                             IMPORT DEPENDENCIES                            */
/* -------------------------------------------------------------------------- */

    // Express and Helpers
    const path = require('path');
    const express = require('express');
    const session = require('express-session');
    const exphbs = require('express-handlebars');
    const routes = require('./controllers');
    const helpers = require('./utils/helpers');

    // Sequelize
    const sequelize = require('./config/connection');
    const SequelizeStore = require('connect-session-sequelize')(session.Store);

/* -------------------------------------------------------------------------- */
/*                        Setup Server and Specify Port                       */
/* -------------------------------------------------------------------------- */

    // Setup Express Server
    const app = express();
    const PORT = process.env.PORT || 3001;

/* -------------------------------------------------------------------------- */
/*                   ESTABLISH HANDLEBARS AS TEPLATE ENGINE                   */
/* -------------------------------------------------------------------------- */

    // Create Engine with Helpers
    const hbs = exphbs.create({ helpers });

    // Inform Express.js on which template engine to use
    app.engine('handlebars', hbs.engine);
    app.set('view engine', 'handlebars');

/* -------------------------------------------------------------------------- */
/*                   DEFINE SESSION OBJECT FOR COOKIE USAGE                   */
/* -------------------------------------------------------------------------- */

    const sess = {
        secret: 'Super secret secret',
        cookie: {},
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
            db: sequelize
        })
    };

/* -------------------------------------------------------------------------- */
/*                              DEFINE MIDDLEWARE                             */
/* -------------------------------------------------------------------------- */
    app.use(session(sess));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(routes);

/* -------------------------------------------------------------------------- */
/*                         SYNC DB AND TURN ON SERVER                         */
/* -------------------------------------------------------------------------- */

    sequelize.sync({ force: false }).then(() => {
        app.listen(PORT, () => console.log('Now listening'));
    });