$(document).foundation();
//Scripts
 new WOW().init();

// #Variables
var turnoJugador = ["yo", "izquierda", "derecha", "todos", "hombres", "mujeres", "viejo", "joven", "alto", "bajo"];
var accionJugador = ["trago", "nunca", "limon", "dedo", "regla", "qlh", "vom", "cultura", "shot", "cascada", "historia", "piquito", "beso","compañero"];
var decisionJugador = ["elijo", "eligen"];
var duracionAccion = ["turno", "siempre"];
var complemento_accionJugador = ["dar", "recibir"];
var numeroAccionJugador = [1, 2, 3];


// IDEA: si sale penitencia como valor, entonces cargar una penitencia

// #Funciones
var mensaje = function getMessage() {

  // Random vars
  var valorTurnoJugador = turnoJugador[Math.floor(Math.random() * turnoJugador.length)];
    // Variables Acciones
  if (valorTurnoJugador === "todos" || valorTurnoJugador === "hombres" || valorTurnoJugador === "mujeres") {
    accionJugador = ["trago","regla","shot","piquito","beso"];
  }
  var valorAccionJugador = accionJugador[Math.floor(Math.random() * accionJugador.length)];
  var valorDecisionJugador = decisionJugador[Math.floor(Math.random() * decisionJugador.length)];
  var valorComplementoAccionJugador = complemento_accionJugador[Math.floor(Math.random() * complemento_accionJugador.length)];
  var valorNumeroAccionJugador = numeroAccionJugador[Math.floor(Math.random() * numeroAccionJugador.length)];
  var valorDuracionAccion = duracionAccion[Math.floor(Math.random() * duracionAccion.length)];

  // plural Acciones
  if (valorNumeroAccionJugador > 1) {
    pluralAcciones = ["s"];
  }
  else {
    pluralAcciones = [" "];
  }

  // Duración de la Acción
  if (valorDuracionAccion === "turno") {
      textoValorDuracionAccion = ["durante" + " " + valorNumeroAccionJugador + " " + "turno" + pluralAcciones];
  }
   else if (valorDuracionAccion === "siempre") {
      textoValorDuracionAccion = ["por siempre jamás"];
  }

  // Iconos acción juego
  if (valorAccionJugador === "tomar") {
      textoAccionJugador = ["tomar"];
  }
   else if (valorAccionJugador === "nunca") {
      textoAccionJugador = ["decir nunca nunca"];
  }
  else if (valorAccionJugador === "limon") {
      textoAccionJugador = ["decir un limón medio limón"];
  }
  else if (valorAccionJugador === "dedo") {
      textoAccionJugador = ["poner un dedo sobre la mesa"];
  }
  else if (valorAccionJugador === "regla") {
      textoAccionJugador = ["crear una regla"];
  }
  else if (valorAccionJugador === "qlh") {
      textoAccionJugador = ["inventar un escenario y que el resto apunte a quién lo haría o lo diría"];
  }
  else if (valorAccionJugador === "vom") {
      textoAccionJugador = ["decir una verdad o una mentira"];
  }
  else if (valorAccionJugador === "cultura") {
        textoAccionJugador = ["debe empezar un tema para jugar al bachillerato" ];
  }
  else if (valorAccionJugador === "shot") {
      textoAccionJugador = ["tomar un shot"];
  }
  else if (valorAccionJugador === "cascada") {
      textoAccionJugador = ["iniciar la cascada"];
  }
  else if (valorAccionJugador === "historia") {
      textoAccionJugador = ["empezar una historia"];
  }
  else if (valorAccionJugador === "piquito") {
      textoAccionJugador = ["dar un piquito"];
  }
  else if (valorAccionJugador === "beso") {
      textoAccionJugador = ["dar un beso"];
  }
  else if (valorAccionJugador === "compañero") {
      textoAccionJugador = ["debe elegir a alguien para que haga lo mismo" + " " + textoValorDuracionAccion];
  }

  // Variables lenguage
  if (valorTurnoJugador === "todos" || valorTurnoJugador === "hombres" || valorTurnoJugador === "mujeres") {
    pluralJugadores = ["s"];
  }
  else {
    pluralJugadores = [" "];
  }
  var conjugar = [" " + valorTurnoJugador + " " + "le" + pluralJugadores + " "+ "toca"];

  // Variables turno jugador
  if (valorTurnoJugador === "yo") {
      texto_turnoJugador = ["A mi me toca"];
  }
  else if (valorTurnoJugador === "izquierda") {
      texto_turnoJugador = ["Al de mi" + conjugar];
  }
  else if (valorTurnoJugador === "derecha") {
     texto_turnoJugador = ["Al de mi" + conjugar];
  }
  else if (valorTurnoJugador === "todos") {
   texto_turnoJugador = ["A" + conjugar];
  }
  else if (valorTurnoJugador === "hombres") {
      texto_turnoJugador = ["A los" + conjugar];
  }
  else if (valorTurnoJugador === "mujeres") {
      texto_turnoJugador = ["A las" + conjugar];
  }
  else if (valorTurnoJugador === "viejo" || valorTurnoJugador === "joven" || valorTurnoJugador === "alto" || valorTurnoJugador === "bajo") {
      texto_turnoJugador = ["Al más" + conjugar];
  }

  console.log(texto_turnoJugador);
  console.log(plural);

  // Iconos acción juego
  if (valorAccionJugador === "tomar") {
      icono_accionJugador = ["beer"];
  }
   else if (valorAccionJugador === "nunca") {
      icono_accionJugador = ["beer"];
  }
  else if (valorAccionJugador === "limon") {
      icono_accionJugador = ["lemon-o"];
  }
  else if (valorAccionJugador === "dedo") {
      icono_accionJugador = ["hand-o-down"];
  }
  else if (valorAccionJugador === "regla") {
      icono_accionJugador = ["gavel"];
  }
  else if (valorAccionJugador === "qlh") {
      icono_accionJugador = ["beer"];
  }
  else if (valorAccionJugador === "vom") {
      icono_accionJugador = ["beer"];
  }
  else if (valorAccionJugador === "cultura") {
      icono_accionJugador = ["comments"];
  }
  else if (valorAccionJugador === "shot") {
      icono_accionJugador = ["glass"];
  }
  else if (valorAccionJugador === "cascada") {
      icono_accionJugador = ["fa-beer"];
  }
  else if (valorAccionJugador === "historia") {
      icono_accionJugador = ["book"];
  }
  else if (valorAccionJugador === "piquito") {
      icono_accionJugador = ["heart-o"];
  }
  else if (valorAccionJugador === "beso") {
      icono_accionJugador = ["heart"];
  }

  var fontAwesome = ["<i class='fa fa-" + icono_accionJugador + "'></i>"];
  var h1 = ["<h1  class='wow fadeIn' data-wow-duration='1s' data-wow-delay='1s'>"];

  // Retornar valor
  return [h1 + fontAwesome + " " + texto_turnoJugador + " " + textoAccionJugador + "</h1>"];
}

function cargarTexto()
  {
    document.getElementById("texto").innerHTML = mensaje();
  }
