$(document).foundation();
//Scripts
new WOW().init();




// IDEA: si sale penitencia como valor, entonces cargar una penitencia.
// IDEA: Preguntar si hay gomita.
// IDEA: si sale beso o piquito, que diga a quién O salga una brujula, como la botella.
// IDEA: llama a las usuarios por nombre.
// IDEA: los usuarios inician sesión en la misma red con facebook, luego los llama.
// IDEA: si es prenda se puede quitar o quitarse.

// #Funciones

// #getAlerta
var alerta = function getAlerta() {
  var numeroAlerta = numeroDuracionAccionJugador[Math.floor(Math.random() * numeroDuracionAccionJugador.length)];
  if (numeroAlerta > 1) {
    pluralNumeroAlerta = ["s"];
  } else {
    pluralNumeroAlerta = [" "];
  }
  return [
    "No te saltes turnos! Juega antes de volver a apretar el botón. Debes Tomar" + " " +
    numeroAlerta + " " + "Trago" + pluralNumeroAlerta
  ];
}

// #getMessage
var mensaje = function getMessage() {


  console.log(accionJugador);
  console.log(valorAccionJugador);
  console.log(valorTurnoJugador);
  console.log(clicks);

  // Markups HTML
  fontAwesome = ["<i class='fa fa-" + icono_accionJugador + "'></i>"];
  var h1 = ["<h1  class='wow fadeIn' data-wow-duration='0.5s' data-wow-delay='0s'>"];

  // Retornar valor
  return [h1 + fontAwesome + "<br>" + " " + + "</h1>" + "<br>" ];
  valorAlert = valorNumeroDuracionAccionJugador;
}
// #textoSecundario
var textoSecundario = function getTextoSecundario() {
    var h3 = ["<h3  class='wow fadeIn' data-wow-duration='0.5s' data-wow-delay='1s'>"];

    // Retornar valor
    return [h3 +  + "</h3>"];
}
// #cargarTexto
function cargarTexto() {
  var tiempoActual = (new Date()).getTime();
  if (tiempoActual > (ultimoClick + 1)) {

    document.getElementById("texto").innerHTML = mensaje();
    document.getElementById("texto_secundario").innerHTML = textoSecundario();
  } else {
    alert(alerta());
  }
  ultimoClick = tiempoActual;
}
