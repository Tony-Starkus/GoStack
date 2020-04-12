const express = require('express');
const cors = require('cors'); //npm install cors
const mongoose = require('mongoose');
const requireDir = require('require-dir'); //npm install require-dir

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o DB
/* Caso tenha usuario e senha, usar: mongodb://user@password */
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true });
requireDir('./src/models');

/*
req = pega informaçõe de quem está acessando (ex: ip)
res = resposta a requisição
*/
// Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);