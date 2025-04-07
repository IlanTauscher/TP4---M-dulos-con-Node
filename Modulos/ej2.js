const sumar = (num1, num2) => {
    let suma = num1 + num2
    console.log(`${num1} + ${num2} = ${suma}`)
}

const restar = (num1, num2) => {
    let resta = num1 - num2
    console.log(`${num1} - ${num2} = ${resta}`)
}

const multiplicar = (num1, num2) => {
    let multiplicar = num1 * num2
    console.log(`${num1} * ${num2} = ${multiplicar}`)
}

function pi(){
    const PI = Math.PI;

    console.log(PI);
}

module.exports = {
    sumar,
    restar,
    multiplicar,
    pi
};