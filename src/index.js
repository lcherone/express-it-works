require('dotenv').config({
    path: __dirname + '/../.env'
});

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

console.log(__dirname)

app.set("views", __dirname+'/views')
app.set("view engine", "ejs")

app.get('/', (req, res) => res.render('index', {
    domain: req.hostname
}))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))