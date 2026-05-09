import { DataTypes } from "sequelize";


const createEmpModel = (sequelize) => {
    const Employee = sequelize.define('Employee', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: { isEmail: true }
        }, designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        empId: {
            type: DataTypes.INTEGER,
            unique: true,

        }
    })
    return Employee
}

export default createEmpModel