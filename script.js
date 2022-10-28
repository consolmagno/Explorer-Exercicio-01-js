let numberOne = Number(prompt('Digite o primeiro número:'))
let numberTwo = Number(prompt('Digite o segundo número:'))
let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let multi = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

alert(`A soma dos números é: ${sum}`)
alert(`A subtração dos números é: ${sub}`)
alert(`A multiplicação dos números é: ${multi}`)
alert(`A divisão dos números é: ${div}`)
alert(`O resto da divisão dos números é: ${restDiv}`)

if (sum % 2 != 1) {
  alert(`Soma é um número par:${sum}`)
} else {
  alert(`Soma é um número ímpar:${sum}`)
}

if (numberOne == numberTwo) {
  alert('Números inseridos são iguais')
} else {
  alert('Números inseridos são diferentes')
}
