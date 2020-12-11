"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToDoList = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../database");
class ToDoList extends sequelize_1.Model {
}
exports.ToDoList = ToDoList;
ToDoList.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    }
}, {
    tableName: 'to-do-list',
    sequelize: database_1.database
});
