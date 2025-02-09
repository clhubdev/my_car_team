import dotenv from 'dotenv';

dotenv.config();

const config = {
  appEnv: process.env.APP_ENV,

  // port serveur Express
  port: process.env.PORT,

  // ports BDD
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,

  // JsonWebToken
  jsonWebTokenSecret: process.env.JWT_SECRET,

  // OpenRouteService API
  openRouteServiceKey: process.env.ORS_KEY,

  //BASE URL FOR FRONTEND 
  frontendBaseURL: process.env.FRONTEND_BASE_URL
};

export default config;
