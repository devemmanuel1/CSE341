const express = require('express');
const router = express.Router();

router.use("/swagger", require("./swagger"));

router.get('/', (req, res) => {
  //swagger.tags = ['Hola Mundo'];
  res.send('Hello, World');});

router.use("/users", require("./users"));

module.exports = router;
