const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello llWorld!')
})

app.get('/wjpc', (req, res) => {
  res.send('Hello Wsadd!')
})

app.get('/puerto', (req, res) => {
  res.send('Hello puerto!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})