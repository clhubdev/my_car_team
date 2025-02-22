import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from '../interfaces/routes/index.js';
import { setupSwagger } from "./swagger.config.js";
import config from './env.config.js';

const app = express();

// Définir la whitelist des domaines autorisés
const whitelist = ['https://mycarteam.fr', config.frontendBaseURL];

const corsOptions = {
  origin: (origin, callback) => {
    // Autoriser les requêtes sans origine (ex: tests ou requêtes serveur à serveur)
    if (!origin || process.env.NODE_ENV === 'test' || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`Origine non autorisée: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

// requêtes preflight (OPTIONS)
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.sendStatus(204);
});


setupSwagger(app);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

export default app;
