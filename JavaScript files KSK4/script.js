function cualEsMayor(num1, num2) {
    // Aseguramos que los números sean enteros
    num1 = Math.floor(num1);
    num2 = Math.floor(num2);

    if (num1 > num2) {
        return `El primer número (${num1}) es mayor que el segundo (${num2}).`;
    } else if (num2 > num1) {
        return `El segundo número (${num2}) es mayor que el primero (${num1}).`;
    } else {
        return `Los números son iguales (${num1}).`;
    }
}

function mostrarComparacion() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('resultado').textContent = "Por favor, ingrese dos números válidos.";
    } else {
        const resultado = cualEsMayor(num1, num2);
        document.getElementById('resultado').textContent = resultado;
    }
}