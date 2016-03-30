$(document).foundation();
//Scripts
new WOW().init();

// #Variables
var turnoJugador = ["yo", "izquierda", "derecha", "viejo", "joven", "alto", "bajo", "todos", "hombres", "mujeres"];
var accionJugador = ["nunca", "limon", "dedo", "qlh", "vom", "cultura", "cascada", "historia", "regla", "trago", "shot"];
var numeroAccionJugador = [1, 2];
var numeroDuracionAccionJugador = [1, 2, 3, 4, 5];
var duracionAccion = ["turno", "siempre"];

var decisionJugador = ["elegir", "elejido"];
var complemento_accionJugador = ["dar", "recibir"];

var clicks = 0;

// IDEA: si sale penitencia como valor, entonces cargar una penitencia.
// IDEA: Preguntar si hay gomita.

// #Funciones
var mensaje = function getMessage() {

    // Random vars
    var valorTurnoJugador = turnoJugador[Math.floor(Math.random() * turnoJugador.length)];

    // Variables Acciones comunes
    if (clicks > 10) {
      accionJugador = ["nunca", "limon", "dedo", "qlh", "vom", "cultura", "cascada", "historia", "regla", "trago", "shot", "compañero"];
    }
    else if (clicks > 20) {
      accionJugador = ["nunca", "limon", "dedo", "qlh", "vom", "cultura", "cascada", "historia", "regla", "trago", "shot", "compañero",  "piquito"];
      numeroAccionJugador = [1, 2, 3, 4];
    }
    else if (clicks > 30) {
      accionJugador = ["nunca", "limon", "dedo", "qlh", "vom", "cultura", "cascada", "historia", "regla", "trago", "shot", "compañero", "piquito", "beso"];
    }
    else if (clicks > 40) {
      accionJugador = ["nunca", "limon", "dedo", "qlh", "vom", "cultura", "cascada", "historia", "regla", "trago", "shot", "compañero", "piquito", "beso", "prenda"];
    }

    var valorAccionJugador = accionJugador[Math.floor(Math.random() * accionJugador.length)];
    var valorNumeroAccionJugador = numeroAccionJugador[Math.floor(Math.random() * numeroAccionJugador.length)];
    var valorNumeroDuracionAccionJugador = numeroDuracionAccionJugador[Math.floor(Math.random() * numeroDuracionAccionJugador.length)];
    var valorDuracionAccion = duracionAccion[Math.floor(Math.random() * duracionAccion.length)];

    var valorDecisionJugador = decisionJugador[Math.floor(Math.random() * decisionJugador.length)];
    var valorComplementoAccionJugador = complemento_accionJugador[Math.floor(Math.random() * complemento_accionJugador.length)];

    // plural Acciones
    if (valorNumeroDuracionAccionJugador > 1) {
        pluralDuracionAcciones = ["s"];
    } else {
        pluralDuracionAcciones = [" "];
    }
    if (valorNumeroAccionJugador > 1) {
        pluralNumeroAcciones = ["s"];
    } else {
        pluralNumeroAcciones = [" "];
    }

    // Duración de la Acción
    if (valorDuracionAccion === "turno") {
        textoValorDuracionAccion = ["durante" + " " + valorNumeroDuracionAccionJugador + " " + "turno" + pluralDuracionAcciones];
    } else if (valorDuracionAccion === "siempre") {
        textoValorDuracionAccion = ["por siempre jamás"];
    }

    // Variables lenguage
    if (valorTurnoJugador === "todos" || valorTurnoJugador === "hombres" || valorTurnoJugador === "mujeres") {
        pluralJugadores = ["s"];
    } else {
        pluralJugadores = [" "];
    }
    var conjugar = [" " + valorTurnoJugador + " " + "le" + pluralJugadores + " " + "toca"];
    var conjugacionesTomar = ["tomar" + " " + valorNumeroAccionJugador + " " + valorAccionJugador + pluralNumeroAcciones];

    // Oraciones acción juego
    if (valorAccionJugador === "nunca") {
        textoAccionJugador = ["decir nunca nunca"];
    } else if (valorAccionJugador === "limon") {
        textoAccionJugador = ["decir un limón medio limón"];
    } else if (valorAccionJugador === "dedo") {
        textoAccionJugador = ["poner un dedo sobre la mesa"];
    } else if (valorAccionJugador === "qlh") {
        textoAccionJugador = ["inventar un escenario y que el resto apunte a quién lo haría o lo diría"];
    } else if (valorAccionJugador === "vom") {
        textoAccionJugador = ["decir una verdad o una mentira"];
    } else if (valorAccionJugador === "cultura") {
        textoAccionJugador = ["empezar un tema para jugar al bachillerato"];
    } else if (valorAccionJugador === "cascada") {
        textoAccionJugador = ["iniciar la cascada"];
    } else if (valorAccionJugador === "historia") {
        textoAccionJugador = ["empezar una historia"];
    } else if (valorAccionJugador === "regla") {
        textoAccionJugador = ["crear una regla"];
    } else if (valorAccionJugador === "piquito") {
        textoAccionJugador = ["dar un piquito"];
    } else if (valorAccionJugador === "beso") {
        textoAccionJugador = ["dar un beso"];
    } else if (valorAccionJugador === "compañero") {
        textoAccionJugador = ["elegir a alguien para que sufra el mismo destino" + " " + textoValorDuracionAccion];
    } else if (valorAccionJugador === "trago") {
        textoAccionJugador = [conjugacionesTomar];
    } else if (valorAccionJugador === "shot") {
        textoAccionJugador = [conjugacionesTomar];
    } else if (valorAccionJugador === "prenda") {
        textoAccionJugador = ["quitarse una prenda"];
    }

    // Ejemplos acción juego
    if (valorAccionJugador === "nunca") {
        textoEjemploAccionJugador = ["ejemplo"];
    } else if (valorAccionJugador === "limon") {
        textoEjemploAccionJugador = ["( Quién se equivoca, toma)"];
    } else if (valorAccionJugador === "dedo") {
        textoEjemploAccionJugador = ["(El último en poner el dedo, toma)"];
    } else if (valorAccionJugador === "qlh") {
        textoEjemploAccionJugador = ["(Quién saque más votos, toma)"];
    } else if (valorAccionJugador === "vom") {
        textoEjemploAccionJugador = ["(Todos adivinan si es verdad o mentira. Quienes no acierten, toman)"];
    } else if (valorAccionJugador === "cultura") {
        textoEjemploAccionJugador = ["(Palabras sin a, como por ejemplo 'PATATA')"];
    } else if (valorAccionJugador === "cascada") {
        textoEjemploAccionJugador = ["(Todos empiezan a tomar al mismo tiempo y solo dejan de hacerlo cuando el que está a su derecha para)"];
    } else if (valorAccionJugador === "historia") {
        textoEjemploAccionJugador = ["(Dice un palabra y el resto la repite, añadiendo su propia palabra)"];
    } else if (valorAccionJugador === "regla") {
        textoEjemploAccionJugador = ["(Una regla ingeniosa y atrevida)"];
    } else if (valorAccionJugador === "piquito") {
        textoEjemploAccionJugador = ["(dar un pequeño beso en los labios)"];
    } else if (valorAccionJugador === "beso") {
        textoEjemploAccionJugador = ["(dar un beso de verdad, como los que dan en Francia.)"];
    } else if (valorAccionJugador === "compañero") {
        textoEjemploAccionJugador = ["(El compañero tendra que hacer lo mismo. Tomar lo mismo, cumplir las mismas reglas y todo lo demás que el juego mande)"];
    } else if (valorAccionJugador === "trago") {
        textoEjemploAccionJugador = ["(Levante el vaso y beba su contenido)"];
    } else if (valorAccionJugador === "shot") {
        textoEjemploAccionJugador = ["(Un trago fuerte, al seco. Como un disparo)"];
    } else if (valorAccionJugador === "prenda") {
        textoEjemploAccionJugador = ["(Quitar o quitarse alguna ropa)"];
    }

    // Variables turno jugador
    if (valorTurnoJugador === "yo") {
        texto_turnoJugador = ["A mi me toca"];
    } else if (valorTurnoJugador === "izquierda") {
        texto_turnoJugador = ["Al de mi" + conjugar];
    } else if (valorTurnoJugador === "derecha") {
        texto_turnoJugador = ["Al de mi" + conjugar];
    } else if (valorTurnoJugador === "todos") {
        texto_turnoJugador = ["A" + conjugar];
    } else if (valorTurnoJugador === "hombres") {
        texto_turnoJugador = ["A los" + conjugar];
    } else if (valorTurnoJugador === "mujeres") {
        texto_turnoJugador = ["A las" + conjugar];
    } else if (valorTurnoJugador === "viejo" || valorTurnoJugador === "joven" || valorTurnoJugador === "alto" || valorTurnoJugador === "bajo") {
        texto_turnoJugador = ["Al más" + conjugar];
    }

    // Iconos acción juego
    if (valorAccionJugador === "trago") {
        icono_accionJugador = ["beer"];
    } else if (valorAccionJugador === "nunca") {
        icono_accionJugador = ["beer"];
    } else if (valorAccionJugador === "limon") {
        icono_accionJugador = ["lemon-o"];
    } else if (valorAccionJugador === "dedo") {
        icono_accionJugador = ["hand-o-down"];
    } else if (valorAccionJugador === "regla") {
        icono_accionJugador = ["gavel"];
    } else if (valorAccionJugador === "qlh") {
        icono_accionJugador = ["balance-scale"];
    } else if (valorAccionJugador === "vom") {
        icono_accionJugador = ["bullhorn"];
    } else if (valorAccionJugador === "cultura") {
        icono_accionJugador = ["comments"];
    } else if (valorAccionJugador === "shot") {
        icono_accionJugador = ["glass"];
    } else if (valorAccionJugador === "cascada") {
        icono_accionJugador = ["users"];
    } else if (valorAccionJugador === "historia") {
        icono_accionJugador = ["book"];
    } else if (valorAccionJugador === "piquito") {
        icono_accionJugador = ["heart-o"];
    } else if (valorAccionJugador === "beso") {
        icono_accionJugador = ["heart"];
    }

    var fontAwesome = ["<i class='fa fa-" + icono_accionJugador + "'></i>"];
    var h1 = ["<h1  class='wow fadeIn' data-wow-duration='1s' data-wow-delay='1s'>"];
    var h3 = ["<h3  class='wow fadeIn' data-wow-duration='1s' data-wow-delay='2s'>"];

    // Retornar valor
    return [h1 + fontAwesome + " " + texto_turnoJugador + " " + textoAccionJugador + "</h1>" + "<br>" + h3 + textoEjemploAccionJugador + "</h3>"];
}

function cargarTexto() {
    clicks += 1;
    document.getElementById("texto").innerHTML = mensaje();
}
