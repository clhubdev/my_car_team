import { execSync } from 'child_process';
import sequelize from '../infrastructure/database/index.js';
import config from './env.config.js';

const connectDB = async (retries = 5) => {
    try {
        await sequelize.authenticate();
        console.log('Connexion à la base de données réussie');

        // for dev only
        if (config.appEnv === 'development') {
            await sequelize.sync({ force: true });
            console.log('All models were synchronized successfully.');
            execSync('npx sequelize-cli db:seed:all', { stdio: 'inherit' });
            console.log('Seeders exécutés avec succès');
        }

    } catch (error) {
        console.error('Erreur de connexion à la base de données :', error.message);
        if (retries > 0) {
            console.log(`Nouvelle tentative dans 5 secondes... (tentatives restantes : ${retries})`);
            await new Promise(res => setTimeout(res, 5000));
            return connectDB(retries - 1);
        } else {
            console.error('Plus de tentatives, arrêt de l\'application.');
            process.exit(1);
        }
    }
};

export { connectDB };