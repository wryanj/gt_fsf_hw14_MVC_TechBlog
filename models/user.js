/* -------------------------------------------------------------------------- */
/*                             Import Dependencies                            */
/* -------------------------------------------------------------------------- */

    const { Model, DataTypes } = require('sequelize');
    const bcrypt = require('bcrypt');
    const sequelize = require('../config/connection');

/* -------------------------------------------------------------------------- */
/*                                Define Model                                */
/* -------------------------------------------------------------------------- */
    
    // Initialize Product model (table) by extending off Sequelize's Model class
    class User extends Model {
        
        // Run check pw method of bcrypt 
        checkPassword(loginPw) {
            return bcrypt.compareSync(loginPw, this.password);
        }
        
    }

    // Model Layout (columns and data types)
    User.init(

        // Define attributes representing table columns and properties in SQL...
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            user_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true,
            },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [8],
                },
            },
        },

        // Define Model Options
        {
            
            // Hooks
            hooks: {
                beforeCreate: async (newUserData) => {
                    newUserData.password = await bcrypt.hash(newUserData.password, 10);
                    return newUserData;
                },
                beforeUpdate: async (updatedUserData) => {
                    updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                    return updatedUserData;
                },
            },
            
            // Other Options
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'user',
        }
    );

/* -------------------------------------------------------------------------- */
/*                                Export Module                               */
/* -------------------------------------------------------------------------- */

    module.exports = User;
