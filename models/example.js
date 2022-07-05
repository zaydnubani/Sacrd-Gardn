const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// this is an example of how a model is written, replace 'example' with desired name.
class example extends Model {}

example.init(
    // these are columns in a table, they define the input info
    {
        // this would be the id column
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'example', 
    }
);

module.exports = example;