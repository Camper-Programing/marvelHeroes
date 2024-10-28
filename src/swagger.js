import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Swagger Documentation',
        version: '1.0.0',
        description: 'Swagger Documentation',
    },
};

const options = {
    swaggerDefinition,
    apis: ['./routes/*.js'], // Adjust the path according to your project structure
};

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
