// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const app = express();

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
