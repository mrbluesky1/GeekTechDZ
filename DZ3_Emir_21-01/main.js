let numA = Number(prompt('Введите число A'))
let numB = Number(prompt('Введите число B'))

function smaller(a, b) {
    return console.log(Math.min(a, b))
}

smaller(numA, numB)

let numC = Number(prompt('Введите число'))

function length(c) {
    return console.log(numC.toString().length)
}

length(numC)

let numA2 = Number(prompt('Введите число A'))
let symbol = prompt('Введите математический символ')
let numB2 = Number(prompt('Введите число B'))

function cal (a, c, b) {
    if (c === '+') {
        alert(a + b)
    } else if (c === '-') {
        alert(a - b)
    } else if (c === '*') {
        alert(a * b)
    } else if (c === '/') {
        alert(a / b)
    } else {
        alert('Только математический символ')
    }
}

cal(numA2, symbol, numB2)