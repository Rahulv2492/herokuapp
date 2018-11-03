var Sequelize  = require("sequelize");
var sequelize  = require("../../utils/db");

const user = sequelize.define('user', {
    userId: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
    name: { type: Sequelize.STRING, allowNull: true, defaultValue: false },
    email: { type: Sequelize.STRING, unique: true, allowNull: true, defaultValue: false },
    picture: { type: Sequelize.STRING,allowNull: true, },
    status: { type: Sequelize.BOOLEAN,allowNull: true, defaultValue: false },
    DOB: { type: Sequelize.STRING, allowNull: true,defaultValue: false },
    gender:{ type: Sequelize.STRING,allowNull: true,defaultValue: false },
    live_in:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    work_as:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    education:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    know:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    relationship:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    havekids:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    smoke:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    drink:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    height:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    bodytype:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    eyes:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    hair:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    loking_for:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
    hair:{ type: Sequelize.STRING, allowNull: true,defaultValue: false },
});

module.exports = user;
