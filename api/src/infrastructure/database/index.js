import Sequelize from 'sequelize';
import config from '../../config/env.config.js';
import testConfig from '../../config/database.test.js';


const databaseOptions = config.appEnv === 'test' ? testConfig : {
  host: config.dbHost,
  dialect: 'mysql',
  port: config.dbPort,
  logging: false, 
}

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, databaseOptions);

export default sequelize;