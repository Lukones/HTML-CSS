function fibonacciGenerator(n) {

    var numeros = [];

    if (n === 1) {
        numeros = [0]
    } else if (n === 2) {
        numeros = [0, 1]
    }

    numeros = [0, 1]

    for (var i = 2; i < n; i++) {
        numeros.push(numeros[numeros.length - 2] + numeros[numeros.length - 1]);
    }

    return numeros
}

var output = fibonacciGenerator(10);

console.log(output)
