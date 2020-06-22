require('dotenv').config({
    path: __dirname + '/.env'
});

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => res.send('It Works!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
