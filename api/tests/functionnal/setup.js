import sequelize from '../../src/infrastructure/database/index.js';

// Créer les tables de la BDD pour les tests puis fermer la connexion une fois les tests terminés
beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});
