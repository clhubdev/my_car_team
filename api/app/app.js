import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { setupSwagger } from "../swagger.js";
import config from './config.js';

const app = express();

// CORS Liste domaines autorisés
const whitelist = ['https://mycarteam.fr', config.frontendBaseURL];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));
// End Cors

// Middleware Swager (auto-doc api)
setupSwagger(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

export default app;