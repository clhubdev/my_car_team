import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';
import { setupSwagger } from "../swagger.js";
import config from './config.js';

const app = express();

app.use(cors({
    origin: config.frontendBaseURL
}));

// Middleware Swager (auto-doc api)
setupSwagger(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

export default app;