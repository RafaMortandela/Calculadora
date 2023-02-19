import { Calculadora } from "./calculadora.js";

const calculadora = new Calculadora()

$(".botao").on("click", (e) => {

    const input = $("#input--numero").val()

    switch (e.target.value) {
        case "=":

            calculadora.eventExec(input)

            break;
        case "+":

            calculadora.eventOperation("+" , input)

            break;
        case "-":

            calculadora.eventOperation("-" , input)

            break;
        case "*":

            calculadora.eventOperation("*" , input)

            break;
        case "÷":

            calculadora.eventOperation("/" , input)
            break;
        case "C":

            calculadora.limparVisor()

            break;
    }

    $("#input--numero").val("")

})