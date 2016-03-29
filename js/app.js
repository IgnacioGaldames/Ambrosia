$(document).foundation();
//Scripts
 new WOW().init();

// #Variables
var turnoJugador = ["yo", "izquierda", "derecha", "todos", "hombres", "mujeres", "viejo", "joven", "alto", "bajo"];
var accionJugador = ["trago", "nunca", "limon", "dedo", "regla", "qlh", "vom", "cultura", "shot", "cascada", "historia", "piquito", "beso"];
var decisionJugador = ["elijo", "eligen"];
var complemento_accionJugador = ["dar", "recibir"];
var numero_accionJugador = [1, 2, 3];


// IDEA: si sale penitencia como valor, entonces cargar una penitencia

// #Funciones
var mensaje = function getMessage() {

  // Random vars
  var valorTurnoJugador = turnoJugador[Math.floor(Math.random() * turnoJugador.length)];
  var valorAccionJugador = accionJugador[Math.floor(Math.random() * accionJugador.length)];
  var valorDecisionJugador = decisionJugador[Math.floor(Math.random() * decisionJugador.length)];
  var valorComplementoAccionJugador = complemento_accionJugador[Math.floor(Math.random() * complemento_accionJugador.length)];
  var valorNumeroAccionJugador = numero_accionJugador[Math.floor(Math.random() * numero_accionJugador.length)];

  // Variables Acciones

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
        textoAccionJugador = ["comments"];
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

  // Variables lenguage
  if (valorTurnoJugador === "todos" || valorTurnoJugador === "hombres" || valorTurnoJugador === "mujeres") {
    plural = ["s"];
  }
  else {
    plural = [" "];
  }
  var conjugar = [" " + valorTurnoJugador + " " + "le" + plural + " "+ "toca"];

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
