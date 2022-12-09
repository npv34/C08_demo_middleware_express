const express = require('express');
const AppController = require("./controller/app.controller");
const checkAge = require("./middlewares/checkAge");
const port = 8000;
const app = express();

app.set('views', 'views')
app.set('view engine', 'ejs');

app.get('/login', (req, res) => {
    res.end('Welcome Login')
})

let appController = new AppController();

app.get('/', checkAge, (req, res) => {
    appController.getDefaultPokemon(req, res).catch(err => console.error(err))
})

app.listen(port)
