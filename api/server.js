import app from './app.js';
import config from './config.js';
import { connectDB } from './src/infrastructure/database/sequelize.js';
import './src/infrastructure/models/index.js';

(async () => {
  await connectDB();

  app.listen(config.port, () => {
    console.log(`Serveur démarré sur le port ${config.port}`);
  });
})();