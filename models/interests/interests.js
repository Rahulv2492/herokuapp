var Sequelize  = require("sequelize");
var sequelize  = require("../../utils/db");


const interestsModel = sequelize.define('interests', {
    interestsId: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    interestsName:  { type: Sequelize.STRING, allowNull: true, defaultValue: false },
    colorCode:  { type: Sequelize.STRING, allowNull: true, defaultValue: false },
});

module.exports = interestsModel;