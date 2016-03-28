// Variables

var turnoJugador["yo", "izquierda", "derecha", "todos", "hombres", "mujeres", "viejo", "joven", "alto", "bajo"];
var accionJugador["trago", "nunca", "limon", "dedo", "regla", "qlh", "vom", "cultura", "shot", "cascada", "historia", "piquito", "beso"];
var decisionJugador["elijo", "eligen"];
var complemento_accionJugador["dar", "recibir"];
var numero_accionJugador[1, 2, 3];

// Funciones

function getMessage() {
    // Random vars
    var valor_turnoJugador = turnoJugador[Math.floor(Math.random() * turnoJugador.length)];
    var valor_accionJugador = accionJugador[Math.floor(Math.random() * accionJugador.length)];
    var valor_decisionJugador = decisionJugador[Math.floor(Math.random() * decisionJugador.length)];
    var valor_complemento_accionJugador = complemento_accionJugador[Math.floor(Math.random() * complemento_accionJugador.length)];
    var valor_numero_accionJugador = numero_accionJugador[Math.floor(Math.random() * numero_accionJugador.length)];

    // If variables son Pural
    if (valor_turnoJugador === "todos" && valor_turnoJugador === "hombres" && valor_turnoJugador === "mujeres") {
        plural = ["s"];
    } else if {
        plural = [""];
    }

    // If variables turno jugador
    if (valor_turnoJugador === "yo") {
        texto_turnoJugador = ["A mi me toca"];
    } else if (valor_turnoJugador === "izquierda") {
        texto_turnoJugador = ["Al de mi " + valor_turnoJugador + "le" + plural + " toca"];
    } else if (valor_turnoJugador === "derecha") {
        texto_turnoJugador = ["Al de mi " + valor_turnoJugador + "le" + plural + " toca"];
    } else if (valor_turnoJugador === "todos") {
        texto_turnoJugador = ["A " + valor_turnoJugador + "le" + plural + " toca"];
    } else if (valor_turnoJugador === "hombres") {
        texto_turnoJugador = ["A los " + valor_turnoJugador + "le" + plural + " toca"];
    } else if (valor_turnoJugador === "hombres") {
        texto_turnoJugador = ["A las " + valor_turnoJugador + "le" + plural + " toca"];
    } else if (valor_turnoJugador === "viejo" && valor_turnoJugador === "joven" && valor_turnoJugador === "alto" && valor_turnoJugador === "bajo") {
        texto_turnoJugador = ["Al más " + valor_turnoJugador + "le" + plural + " toca"];
    }

    // if valor acción 

    // Retornar valor
    return [texto_turnoJugador];
}

function cargarTexto() {
    document.getElementById("texto").innerHTML = getMessage();
}
