var output = [];
var cont = 1;

function FizzBuzz() {

    while (cont < 101) {

        if (cont % 3 === 0 && cont % 5 !== 0) {
            output.push('Fizz')
        } else if (cont % 5 === 0 && cont % 3 !== 0) {
            output.push('Buzz')
        } else if (cont % 5 === 0 && cont % 3 === 0) {
            output.push('FizzBuzz')
        } else if (cont % 5 !== 0 && cont % 3 !== 0) {
            output.push(cont)
        }

        cont++

        console.log(output)
    }
}
