import express from 'express';
import routes from './routes/index.js';
import { setupSwagger } from "../swagger.js"; 

const app = express();

// Middleware Swager (auto-doc api)
setupSwagger(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

export default app;