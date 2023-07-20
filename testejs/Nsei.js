var num1;
var num2;
var operation;

const options = {
  soma: ["+", "soma", "plus", "mais"],
  sub: ["-", "menos", "minus", "subtração", "sub", "subtracao"],
  div: ["/", "%", "div", "divisão", "divisao", "division"],
  multi: ["*", "multiplication", "multiplicação", "multiplicacao", "multi"],
};

function calculate(operation, num1, num2) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;
    default:
      return "Operação invalida";
  }
}

do {
  num1 = +window.prompt("Digite o primeiro numero:");
  num2 = +window.prompt("Digite o segundo numero:");
  console.log(num1);
  console.log(num2);

  operation = window.prompt("Digite a operação desejada(+, -, *, /):");
  operation = operation.trim();
  operation = operation.toLocaleLowerCase();

  if (options.soma.indexOf(operation) !== -1) {
    document.write("Resultado: " + calculate("+", num1, num2));
  } else if (options.sub.indexOf(operation) !== -1) {
    document.write("Resultado: " + calculate("-", num1, num2));
  } else if (options.div.indexOf(operation) !== -1) {
    document.write("Resultado: " + calculate("/", num1, num2));
  } else if (options.multi.indexOf(operation) !== -1) {
    document.write("Resultado: " + calculate("*", num1, num2));
  } else {
    document.write("Operação inválida");
  }

  document.write("<br>");

  var newOperation = window
    .prompt("Deseja realizar uma nova operação? (S/N)")
    .toUpperCase();
} while (newOperation === "S");
