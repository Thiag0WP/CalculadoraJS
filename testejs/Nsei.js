// var num1 = window.prompt("Informe um numero: ");
// var num2 = window.prompt("Informe outro numero: ");

// const options = {
//   somar: ["+", "soma", "plus", "mais"],
//   subtrair: ["-", "menos", "minus", "subtração", "sub", "subtracao"],
//   dividir: ["/", "%", "div", "divisão", "divisao", "division"],
//   multiplicar: [
//     "*",
//     "multiplication",
//     "multiplicação",
//     "multiplicacao",
//     "multi",
//     "veses",
//     "vezes",
//   ],
// };

// num1 = Number(num1);
// num2 = Number(num2);
// var soma = num1 + num2;
// var sub = num1 - num2;
// var div = num1 / num2;
// var mult = num1 * num2;

// console.log(num1);
// console.log(num2);
// var opt = window.prompt("Escolha uma operação basica(+,-,*,/): ");

// if (opt == options.somar) {
//   document.write("A soma de " + num1 + " e " + num2 + " é igual a: " + soma);
// } else if (opt == options.subtrair) {
//   document.write(
//     "A subtração de " + num1 + " e " + num2 + " é igual a: " + sub
//   );
// } else if (opt == options.multiplicar) {
//   document.write(
//     "A multiplicação de " + num1 + " e " + num2 + " é igual a: " + mult
//   );
// } else if (opt == options.dividir) {
//   document.write("A divisão de " + num1 + " e " + num2 + " é igual a: " + div);
// }

var num1;
var num2;
var operation;

num1 = +window.prompt("Digite o primeiro numero:");
num2 = +window.prompt("Digite o segundo numero:");

console.log(num1);
console.log(num2);
console.log(operation);

const options = {
  soma: ["+", "soma", "plus", "mais"],
  sub: ["-", "menos", "minus", "subtração", "sub", "subtracao"],
  div: ["/", "%", "div", "divisão", "divisao", "division"],
  multi: [
    "*",
    "multiplication",
    "multiplicação",
    "multiplicacao",
    "multi",
    "veses",
    "vezes",
  ],
};

// var soma = num1 + num2;
// var Sub = num1 - num2;

operation = +window.prompt("Digite a operação desejada:");

if (options.soma.indexOf(operation)) {
  document.write(num1 + num2);
} else if (options.sub.indexOf(operation)) {
  document.write(num1 - num2);
} else if (options.div.indexOf(operation)) {
  document.write(num1 / num2);
} else if (options.multi.indexOf(operation)) {
  document.write(num1 * num2);
} else document.write("Operação invalida");
