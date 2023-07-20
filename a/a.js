var num1;
var num2;
var operation;

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
      return "Operação inválida";
  }
}

do {
  num1 = +window.prompt("Digite o primeiro número:");
  num2 = +window.prompt("Digite o segundo número:");
  console.log(num1);
  console.log(num2);

  operation = window.prompt("Digite a operação desejada (+, -, *, /):");
  operation = operation.trim(); // Remove espaços em branco do início e fim da string
  operation = operation.toLowerCase(); // Converte a operação para minúsculas

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

  document.write("<br>"); // Quebra de linha para facilitar a leitura

  // Pergunta ao usuário se deseja fazer outra operação
  var continueCalc = window
    .prompt("Deseja fazer outra operação? (S/N)")
    .toUpperCase();
} while (continueCalc === "S");
