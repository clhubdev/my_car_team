import sequelize from '../infrastructure/database/index.js';
import config from './env.config.js';

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie');

        // for dev only
        if (config.appEnv === 'development') {
            await sequelize.sync({ force: true });
            console.log('All models were synchronized successfully.');
        }

    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error);
        process.exit(1);
    }
};

export { connectDB };