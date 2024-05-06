const express = require('express')

const app = express()
const hostName = 'localhost'
const port = 8017

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://${hostName}:${port}`)
})