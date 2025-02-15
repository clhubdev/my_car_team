import app from './config/express.config.js';
import config from './config/env.config.js';
import { connectDB } from './config/database.config.js';
import './infrastructure/database/models/index.js';

(async () => {
  await connectDB();

  app.listen(config.port, () => {
    console.log(`Serveur démarré sur le port ${config.port}`);
  });
})();