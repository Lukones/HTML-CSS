const express = require("express");
const app = express();

app.get("/", function (req, res) {
    res.send('<h1>Hello World</h1>');
})

app.get("/contact", function (req, res) {
    res.send("Contact me at: lucas@gmail.com");
})

app.get("/about", function (req, res) {
    res.send("<h1>Lukones</h1>" + "<p>Lukones Marketing Digital e ter a OPORTUNIDADE de como ser um EMPREENDEDOR DIGITAL</p>");
    
})

app.get("/hobbies", function(req, res) {
    res.send('Vida loka que sou amo muito tudo isso')
})

app.listen(3000, function () {
    console.log("Servidor rodando, conexão porta 3000");
});