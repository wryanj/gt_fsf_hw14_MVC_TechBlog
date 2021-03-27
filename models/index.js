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

    // A Comment belongs to one user. This foreign key adds a user_id to comment (since I use underscore true in my options on the model)
    Comment.belongsTo(User, {
        foreignKey:'user_id'
    });

    // A user has many comments, thus creating foreign key in Comments Table (as user_id) - I can do this here, o in the block above
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
