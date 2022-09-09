const express = require("express");
const https = require("node:https");
const { deserialize } = require("node:v8");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function (req, res) {

    const city = req.body.cidade;
    const apiKey = "cb2b2f9d7679484ef83c73476e71dba9";
    const unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=" + unit + "&lang=pt"

    https.get(url, function (resposta) {
        console.log(resposta.statusCode);
        resposta.on("data", function (data) {
            const DadosRel = JSON.parse(data);
            const temperatura = DadosRel.main.temp;
            const Descricao = DadosRel.weather[0].description;
            const icon = DadosRel.weather[0].icon;
            const URLImg = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1> O céu está: " + Descricao + "</h1>");
            res.write("<h2>Neste extamo momento o Brasil está com " + temperatura + "°C</h2>");
            res.write(`<img src='${URLImg}'>`);
            res.send()
        })
    })
})


app.listen(3000, function () {
    console.log('Serve ligado a porta 3000! OK')
})

