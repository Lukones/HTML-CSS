const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
    console.log(req.body);
    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var resposta = n1 + n2;

    res.send("Resultado da soma " + resposta );
});

app.get('/bmiCalculator', function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmiCalculator", function(req, res){
    console.log(req.body);
    var peso = Number(req.body.peso);
    var altura = Number(req.body.altura);

    function bmiCalculator(peso, altura) {

        var imc_result = peso / altura_m2(altura);
        return imc_result
        
    }
    
    function altura_m2(altura) {
        var altura_result = altura * altura;
        return altura_result
        
    }
    
    var bmi = bmiCalculator(peso, altura);
    

    res.send("Verificamos que p seu IMC é " + bmi )
})

app.listen(3000, function() {
    console.log('Servidor Rodando porta 3000!')
});

