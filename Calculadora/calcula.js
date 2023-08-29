/*
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/
let numberOne = prompt("Digite o primeiro número:");
let numberTwo = prompt("Digite o segundo número:");
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = (numberOne + numberTwo);
let subtraction = (numberOne - numberTwo);
let multiplication = (numberOne * numberTwo);
let division = (numberOne / numberTwo);
let rest = (numberOne % numberTwo);

alert(`
  A soma dos números é: ${sum} 
  A subtração dos números é: ${subtraction}
  A multiplicação dos números é: ${multiplication}
  A divisão dos números é: ${division.toFixed(2)}
  O resto da divisão é: ${rest} 
`)

if(numberOne === numberTwo) {
  alert("Os números inseridos são iguais.")
} else {
  alert("Os números inseridos são diferentes.")
}

if((numberOne % numberTwo) == 0) {
  alert("A soma dos números inseridos é par!")
} else {
  alert("A soma dos números inseridos é impar!")
}

