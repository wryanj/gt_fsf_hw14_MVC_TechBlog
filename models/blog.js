/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const { Model, DataTypes } = require('sequelize');
    const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                                Define Model                                */
/* -------------------------------------------------------------------------- */

    // Initialize Product model (table) by extending off Sequelize's Model class
    class Blog extends Model {}

    // Model Layout (coulumns and data types)
    Blog.init(

        // Define attributes representing table columns and properties in SQL...
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'User',
                    key: 'id'
                }
            },
            date_created: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: DataTypes.NOW,
            },
        },

        // Model Options
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'blog',
        }
    );

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = Blog;