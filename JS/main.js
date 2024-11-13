const pantalla = document.getElementById("pantalla");

function presionarBoton(valor) {
    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
        pantalla.textContent = valor;
    } else {
        pantalla.textContent += valor;
    }
}

function limpiarPantalla() {
    pantalla.textContent = "0";
}

function borrarUltimo() {
    if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
        pantalla.textContent = "0";
    } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
    }
}

function resolver() {
    try {
        pantalla.textContent = eval(pantalla.textContent);
    } catch {
        pantalla.textContent = "Error";
    }
}
