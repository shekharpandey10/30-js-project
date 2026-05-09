import { Sequelize } from "sequelize";

import initModels from './init-model.js'


export const dbConnect = async (dbname, username, password) => {
    const sequelize = new Sequelize(dbname, username, password, {
        host: 'localhost',
        dialect: 'postgres'
    });

    try {
        await sequelize.authenticate();
        initModels(sequelize)
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

}