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

    var conjugar = [valor_turnoJugador + "le" + plural + " toca"];

    if (valor_turnoJugador === "yo") {
        texto_turnoJugador = ["A mi me toca"];
    } else if (valor_turnoJugador === "izquierda") {
        texto_turnoJugador = ["Al de mi " + conjugar];
    } else if (valor_turnoJugador === "derecha") {
        texto_turnoJugador = ["Al de mi " + conjugar];
    } else if (valor_turnoJugador === "todos") {
        texto_turnoJugador = ["A " + conjugar];
    } else if (valor_turnoJugador === "hombres") {
        texto_turnoJugador = ["A los " + conjugar];
    } else if (valor_turnoJugador === "hombres") {
        texto_turnoJugador = ["A las " + conjugar];
    } else if (valor_turnoJugador === "viejo" && valor_turnoJugador === "joven" && valor_turnoJugador === "alto" && valor_turnoJugador === "bajo") {
        texto_turnoJugador = ["Al más " + conjugar];
    }

    texto_valor_accionJugador = valor_accionJugador;

    // if valor acción 

    // Iconos acción juego

    if (valor_accionJugador === "tomar") {
        icono_accionJugador = ["beer"];
    } else if (valor_accionJugador === "nunca") {
        icono_accionJugador = ["beer"];
    } else if (valor_accionJugador === "limon") {
        icono_accionJugador = ["lemon-o"];
    } else if (valor_accionJugador === "dedo") {
        icono_accionJugador = ["hand-o-down"];
    } else if (valor_accionJugador === "regla") {
        icono_accionJugador = ["gavel"];
    } else if (valor_accionJugador === "qlh") {
        icono_accionJugador = ["beer"];
    } else if (valor_accionJugador === "vom") {
        icono_accionJugador = ["beer"];
    } else if (valor_accionJugador === "cultura") {
        icono_accionJugador = ["comments"];
    } else if (valor_accionJugador === "shot") {
        icono_accionJugador = ["glass"];
    } else if (valor_accionJugador === "cascada") {
        icono_accionJugador = ["fa-beer"];
    } else if (valor_accionJugador === "historia") {
        icono_accionJugador = ["book"];
    } else if (valor_accionJugador === "piquito") {
        icono_accionJugador = ["heart-o"];
    } else if (valor_accionJugador === "beso") {
        icono_accionJugador = ["heart"];
    }

    var fontAwesome = "<i class='fa fa-" + icono_accionJugador + "'></i>";

    // Retornar valor
    return [fontAwesome + " " + texto_turnoJugador + " " + texto_valor_accionJugador];
}

function cargarTexto() {
    document.getElementById("texto").innerHTML = getMessage();
}
