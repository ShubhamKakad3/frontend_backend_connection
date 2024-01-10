const express = require('express')


const app = express()
const products = [
  {
    id: 1,
    name: "p1",
  },
  {
    id: 2,
    name: "p2",
  },
];

app.get('/', (req,res) => {
    res.send('any')
})
app.get('/api/data', (req,res) => {
    res.send(products)
})
 const port = process.env.PORT || 3000
app.listen(port)