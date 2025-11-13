// const swaggerAutogen = require('swagger-autogen')();

// const doc = {
//     info: {
//         title: 'CSE341 API',
//         description: 'API documentation for CSE341 project',
//     },
//     host: 'localhost:3000',
//     schemes: ['https', "http"],
// };

// const outputFile = './swagger.json';
// const endpointsFiles = ['./routes/index.js'];

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// swaggerAutogen(outputFile, endpointsFiles, doc);

const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE341 API',
    description: 'API documentation for CSE341 project',
  },
  host: 'localhost:3000',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);