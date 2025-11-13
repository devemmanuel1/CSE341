const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'CSE341 API',
        description: 'API documentation for CSE341 project',
    },
    host: 'localhost:3001',
    schemes: ['https', "http"],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);