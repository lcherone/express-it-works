require('dotenv').config({
    path: __dirname + '/../.env'
});

const app = require('express')()
const port = process.env.PORT || 8080

app.set("views", __dirname + '/views')
app.set("view engine", "ejs")

app.get('/', (req, res) => res.render('index', {
    domain: req.hostname
}))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
