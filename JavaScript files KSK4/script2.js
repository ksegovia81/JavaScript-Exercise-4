/**
 * Compara dos números y determina cuál es mayor o si son iguales.
 * @param {number} num1 - El primer número a comparar.
 * @param {number} num2 - El segundo número a comparar.
 * @returns {object} Un objeto con la relación entre los números y los valores comparados.
 */
function cualEsMayor(num1, num2) {
    // Aseguramos que los números sean enteros
    num1 = Math.floor(num1);
    num2 = Math.floor(num2);

    let resultado;
    if (num1 > num2) {
        resultado = "mayor";
    } else if (num2 > num1) {
        resultado = "menor";
    } else {
        resultado = "igual";
    }

    return {
        resultado: resultado,
        num1: num1,
        num2: num2
    };
}

// Programa principal
function imprimirResultado(num1, num2) {
    const comparacion = cualEsMayor(num1, num2);
    let mensaje;

    switch (comparacion.resultado) {
        case "mayor":
            mensaje = `El primer número (${comparacion.num1}) es mayor que el segundo (${comparacion.num2}).`;
            break;
        case "menor":
            mensaje = `El segundo número (${comparacion.num2}) es mayor que el primero (${comparacion.num1}).`;
            break;
        case "igual":
            mensaje = `Los números son iguales (${comparacion.num1}).`;
            break;
    }

    console.log(mensaje);
}

// Ejemplos de uso
imprimirResultado(5, 3);
imprimirResultado(2, 7);
imprimirResultado(4, 4);
imprimirResultado(3.9, 3.1);  // Ejemplo con números decimales