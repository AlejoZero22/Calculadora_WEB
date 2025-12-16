console.log("JS cargado correctamente");

function calcular(operacion){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
   if (operandoA === "" || operandoB === "") {
        document.getElementById('resultado').innerHTML =
            "No puedo hacer Calculos con campos vacios";
        return;
    }
    operandoA = parseFloat(operandoA.value);
    operandoB = parseFloat(operandoB.value);
    let resultado;
    switch (operacion) {
            case 'sumar':
                resultado = operandoA + operandoB;
                break;
            case 'restar':
                resultado = operandoA - operandoB;
                break;
            case 'multiplicar':
                resultado = operandoA * operandoB;
                break;
        }
        document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`;
    }
 