/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const User = require('./user');
    const Blog = require('./blog');
    const Comment = require('./comment');
    
/* -------------------------------------------------------------------------- */
/*                         Define Module Associations                         */
/* -------------------------------------------------------------------------- */

/* ----------------------------- Blogs and Users ---------------------------- */

    // A Blog belongs to one user
    Blog.belongsTo(User, {
        foreignKey:'user_id'
    });

    // A User has many blogs
    User.hasMany(Blog, {
        foreignKey: 'user_id'
    });

/* --------------------------- Comments and Users --------------------------- */

    // A Comment belongs to one user
    Comment.belongsTo(User, {
        foreignKey:'user_id'
    });

    // A user has many comments
    User.hasMany(Comment, {
        foreignKey: 'user_id',
    });

/* --------------------------- Comments and Blogs --------------------------- */

    // A comment belongs to one blog
    Comment.belongsTo(Blog, {
        foreignKey:'blog_id'
    });

    // A blog has many comments
    Blog.hasMany(Comment, {
        foreignKey:'blog_id',
        onDelete: 'CASCADE'
    })
    

/* -------------------------------------------------------------------------- */
/*                    Export Modules For Use in Other Files                   */
/* -------------------------------------------------------------------------- */
    module.exports = {
        User,
        Blog,
    };
