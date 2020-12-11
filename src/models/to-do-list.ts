import {Model, DataTypes, Sequelize} from 'sequelize';
import {database} from "../database";

export class ToDoList extends Model{
    public id!: number;
    public descripcion!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

}
ToDoList.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt :{
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
    }
},{
    tableName: 'to-do-list',
    sequelize: database 
})