const express = require('express')
const app = express()
const port = 3001
require("dotenv").config();
const cors = require('cors');
const database = require("./database/DB");
const Teste = require("./model/teste");

app.use(cors({
  origin: '*'
}));

app.get('/', async (req, res) => {

  res.send('esse é uma resposta automática')
})

app.get('/teste', async (req, res) => {
  await database.sync();

  const resposta = await Teste.create({
    nome: "teste"
  });

  console.log(resposta)

  res.send('apenas um teste asdaksdlkj!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})