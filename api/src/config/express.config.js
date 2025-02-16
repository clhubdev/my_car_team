import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import routes from '../interfaces/routes/index.js';
import { setupSwagger } from "./swagger.config.js";
import config from './env.config.js';

const app = express();

// CORS Liste domaines autorisés
const whitelist = ['https://mycarteam.fr', config.frontendBaseURL];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || process.env.NODE_ENV === 'test' || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, 
};

app.use(cors(corsOptions));
// End Cors

// Middleware Swager (auto-doc api)
setupSwagger(app);

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

export default app;