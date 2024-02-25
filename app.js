const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


const { authenticateToken, loginUser } = require('./auth');

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});