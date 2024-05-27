const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('apenas um teste!')
})

app.get('/teste', (req, res) => {
  res.send('apenas um teste!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})