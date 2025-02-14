import Sequelize from 'sequelize';
import config from '../../../config.js';


const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPassword, {
  host: config.dbHost,
  dialect: 'mysql',
  port: config.dbPort,
  logging: false, 
});

export const connectDB = async () => {
    try {
      await sequelize.authenticate();
      console.log('Connexion à la base de données réussie');

      // for dev only
      if (config.appEnv === 'development') {
        await sequelize.sync({ alter: true });
        console.log('All models were synchronized successfully.');
      }
      
    } catch (error) {
      console.error('Erreur de connexion à la base de données :', error);
      process.exit(1);
    }
  };

  export default sequelize;