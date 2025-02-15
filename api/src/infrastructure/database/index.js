import Sequelize from 'sequelize';
import config from '../../config/env.config.js';


const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'mysql',
  port: config.dbPort,
  logging: false, 
});

export default sequelize;