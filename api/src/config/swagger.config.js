import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from "swagger-ui-express";

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MyCarTeam API Documentation',
            version: '1.0.0',
        },
    },
    apis: ['./interfaces/routes/*.js'], // files containing annotations
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app) {
    app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}