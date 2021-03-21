/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const User = require('./user');
    const Blog = require('./blog');
    
/* -------------------------------------------------------------------------- */
/*                         Define Module Associations                         */
/* -------------------------------------------------------------------------- */

    // A Blog belongs to one user
    Blog.belongsTo(User, {
        foreignKey:'user_id'
    })

    // A User has many blogs
    User.hasMany(Blog, {
        foreignKey: 'user_id'
    })

/* -------------------------------------------------------------------------- */
/*                    Export Modules For Use in Other Files                   */
/* -------------------------------------------------------------------------- */
    module.exports = {
        User,
        Blog,
    };
