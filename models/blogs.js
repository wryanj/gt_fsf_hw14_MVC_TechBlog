/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const { Model, DataTypes } = require('sequelize');
    const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                                Define Model                                */
/* -------------------------------------------------------------------------- */

    // Initialize Product model (table) by extending off Sequelize's Model class
    class Blogs extends Model {}

    // Model Layout (coulumns and data types)
    Blogs.init(

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
            date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            },
        },

        // Model Options
        {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'blogs',
        }
    );

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = Blogs;