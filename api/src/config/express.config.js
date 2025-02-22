import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from '../interfaces/routes/index.js';
import { setupSwagger } from "./swagger.config.js";
import config from './env.config.js';

const app = express();

// CORS : liste des domaines autorisés
const whitelist = ['https://mycarteam.fr', config.frontendBaseURL];

console.log()

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || process.env.NODE_ENV === 'test' || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`Origine non autorisée: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

// Appliquer le middleware CORS pour toutes les routes
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));


setupSwagger(app);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

export default app;
