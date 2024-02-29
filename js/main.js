function jugarAdivinarNumero() {
    let minimo = parseInt(prompt("Ingrese el valor mínimo del rango:"));
    let maximo = parseInt(prompt("Ingrese el valor máximo del rango:"));

    while (isNaN(minimo) || isNaN(maximo) || minimo >= maximo) {
        alert("Por favor, ingrese valores válidos (min < max).");
        minimo = parseInt(prompt("Ingrese el valor mínimo del rango:"));
        maximo = parseInt(prompt("Ingrese el valor máximo del rango:"));
    }

    const numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

    let intentos = 0;
    let adivinado = false;

    while (!adivinado) {
        let intento = parseInt(prompt(`Intenta adivinar un número entre ${minimo} y ${maximo}.`));

        intentos++;

        if (intento === numeroAleatorio) {
            alert(`¡Felicidades!\nEl número era ${numeroAleatorio}.\nLo adivinaste en ${intentos} intentos.`);
            adivinado = true;
        } else if (intento < numeroAleatorio) {
            alert(`El número es más alto. Intenta otra vez. Llevas ${intentos} intentos.`);
        } else {
            alert(`El número es más bajo. Intenta otra vez. Llevas ${intentos} intentos.`);
        }
    }
}

jugarAdivinarNumero();