export class Calculadora {
    

    eventExec(input) {

        const result = this.calculateExpression(input)

        $("#visor--calculadora").text(result)

    }

    eventOperation(key , input) {

        const valueVisor = $("#visor--calculadora").text()

        const result = this.calculateExpression(valueVisor + key + input)

        $("#visor--calculadora").text(result)

    }

    limparVisor() {

        $("#visor--calculadora").text("")

    }

    calculateExpression(expression) {

        const tokens = expression.split(/([\+\-\*\/])/);

        let result = Number(tokens[0]);
      
        for (let i = 1; i < tokens.length; i += 2) {
          const operator = tokens[i];
          const operand = Number(tokens[i + 1]);
      
          switch (operator) {
            case "+":
              result += operand;
              break;
            case "-":
              result -= operand;
              break;
            case "*":
              result *= operand;
              break;
            case "/":
              result /= operand;
              break;
            default:
              throw new Error(`Invalid operator: ${operator}`);
          }
        }
      
        return result;
    }

}