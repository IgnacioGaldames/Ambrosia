$(document).foundation();
//Scripts
new WOW().init();

// #Variables
var turnoJugador = [
  "yo", "izquierda", "derecha", "viejo", "joven", "alto", "bajo",
  "todos", "hombres", "mujeres", "solteros", "en pareja", "par", "impar", "risa"
];

var numeroAccionJugador = [1, 2];
var numeroDuracionAccionJugador = [1, 2, 3, 4, 5];
var duracionAccion = ["turno", "siempre"];

var decisionJugador = ["elegir", "elejido"];
var complemento_accionJugador = ["tomar", "regalar"];

var ejemplosTomar = [
  "(Levante el vaso y beba su contenido)",
  "Simplemente toma",
  "Voh, dale",
  "1,2,3: TOMA",
  "Alzad vuestra copa y bebed",
  "Siganme los buenos",
  "Al abordaje, mis muchanchos",
  "Si alguien lee esto, por favor envíe ayuda",
  "01110100 01101111 01101101 01100001",
  "Jesús convertiría el agua en vino si estuviera en tu lugar",
  "Yo sé cosas y bebo. Pero la mayoría del tiempo solo sé que bebo."
];
var ejemplosLimon = [
  "limón",
  "paralepipedo",
  "ramero",
  "paragua",
  "melón",
];
var ejemplosNunca =  [
  "visto cierta película",
  "visto cierta serie",
  "hecho cierto acto sexual",
  "leído cierto libro",
  "visitado cierto lugar",
  "cometido algún error vergonzozo",
];
var ejemplosCultura = [
  "Marcas de autos japonenes",
  "Colores primarios",
  "Números entre el 1 y el 5",
  "Nombres de animales",
];
var ejemplosReglas= [
  "Evitar que alguien haga algo",
  "Invitar a que alguien haga algo",
];

var baseAccionJugador = ["nunca", "limon", "dedo", "chancho", "aob", "qlh", "vom", "cultura", "cascada", "historia", "regla"];
var baseAccionJugadores = ["trago"];

var clicks = 0;
var ultimoClick = 0;
var tituloFontAwesome = ["<i class='fa fa-beer'></i>"];

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

  // Random vars
  var valorTurnoJugador = turnoJugador[Math.floor(Math.random() * turnoJugador.length)];
  var complementoValorTurnoJugador = turnoJugador[Math.floor(Math.random() * turnoJugador.length)];
  // Variables PLurales
  if (valorTurnoJugador === "todos" && clicks <= 5 ||
      valorTurnoJugador === "hombres" && clicks <= 5 ||
      valorTurnoJugador === "mujeres" && clicks <= 5 ||
      valorTurnoJugador === "solteros" && clicks <= 5 ||
      valorTurnoJugador === "en pareja" && clicks <= 5 ||
      valorTurnoJugador === "par" && clicks <= 5 ||
      valorTurnoJugador === "impar" && clicks <= 5) {
    var accionJugador = baseAccionJugadores;
  }
  else if (valorTurnoJugador && clicks <= 5) {
    var accionJugador = baseAccionJugador;
  }
  else if (valorTurnoJugador === "todos" && clicks > 5 && clicks <= 10 ||
      valorTurnoJugador === "hombres" && clicks > 5 && clicks <= 10 ||
      valorTurnoJugador === "mujeres" && clicks > 5 && clicks <= 10 ||
      valorTurnoJugador === "solteros" && clicks > 5 && clicks <= 10 ||
      valorTurnoJugador === "en pareja" && clicks > 5 && clicks <= 10 ||
      valorTurnoJugador === "par" && clicks > 5 && clicks <= 10 ||
      valorTurnoJugador === "impar" && clicks > 5 && clicks <= 10) {
    var accionJugador = baseAccionJugadores.concat("compañero");
  }
  else if (valorTurnoJugador && clicks > 5 && clicks <= 10) {
    var accionJugador = baseAccionJugador.concat("compañero");
  }
  else if (valorTurnoJugador === "todos" && clicks > 10 && clicks <= 15 ||
      valorTurnoJugador === "hombres" && clicks > 10 && clicks <= 15 ||
      valorTurnoJugador === "mujeres" && clicks > 10 && clicks <= 15 ||
      valorTurnoJugador === "solteros" && clicks > 10 && clicks <= 15 ||
      valorTurnoJugador === "en pareja" && clicks > 10 && clicks <= 15 ||
      valorTurnoJugador === "par" && clicks > 10 && clicks <= 15 ||
      valorTurnoJugador === "impar" && clicks > 10 && clicks <= 15) {
    var accionJugador = baseAccionJugadores.concat("compañero", "shot");
  }
  else if (valorTurnoJugador && clicks > 10 && clicks <= 15) {
    var accionJugador = baseAccionJugador.concat("compañero", "shot");

  }
  else if (valorTurnoJugador === "todos" && clicks > 15 && clicks <= 20 ||
      valorTurnoJugador === "hombres" && clicks > 15 && clicks <= 20 ||
      valorTurnoJugador === "mujeres" && clicks > 15 && clicks <= 20 ||
      valorTurnoJugador === "solteros" && clicks > 15 && clicks <= 20 ||
      valorTurnoJugador === "en pareja" && clicks > 15 && clicks <= 20 ||
      valorTurnoJugador === "par" && clicks > 15 && clicks <= 20 ||
      valorTurnoJugador === "impar" && clicks > 15 && clicks <= 20) {
    var accionJugador = baseAccionJugadores.concat("compañero", "shot", "piquito");
  }
  else if (valorTurnoJugador && clicks > 15 && clicks <= 20) {
    var accionJugador = baseAccionJugador.concat("compañero", "shot", "piquito");
  }
  else if (valorTurnoJugador === "todos" && clicks > 20 && clicks <= 25 ||
      valorTurnoJugador === "hombres" && clicks > 20 && clicks <= 25 ||
      valorTurnoJugador === "mujeres" && clicks > 20 && clicks <= 25 ||
      valorTurnoJugador === "solteros" && clicks > 20 && clicks <= 25 ||
      valorTurnoJugador === "en pareja" && clicks > 20 && clicks <= 25 ||
      valorTurnoJugador === "par" && clicks > 20 && clicks <= 25 ||
      valorTurnoJugador === "impar" && clicks > 20 && clicks <= 25) {
    var accionJugador = baseAccionJugadores.concat("compañero", "shot", "piquito", "beso");
  }
  else if (valorTurnoJugador && clicks > 20 && clicks <= 25) {
    var accionJugador = baseAccionJugador.concat("compañero", "shot", "piquito", "beso");
  }
  else if (valorTurnoJugador === "todos" && clicks > 25 && clicks <= 30 ||
      valorTurnoJugador === "hombres" && clicks > 25 && clicks <= 30 ||
      valorTurnoJugador === "mujeres" && clicks > 25 && clicks <= 30 ||
      valorTurnoJugador === "solteros" && clicks > 25 && clicks <= 30 ||
      valorTurnoJugador === "en pareja" && clicks > 25 && clicks <= 30 ||
      valorTurnoJugador === "par" && clicks > 25 && clicks <= 30 ||
      valorTurnoJugador === "impar" && clicks > 25 && clicks <= 30) {
    var accionJugador = baseAccionJugadores.concat("compañero", "shot", "piquito", "beso", "prenda");
  }
  else if (valorTurnoJugador && clicks > 25 && clicks <= 30) {
    var accionJugador = baseAccionJugador.concat("compañero", "shot", "piquito", "beso", "prenda");
  }
  else if (valorTurnoJugador === "todos" && clicks > 30 ||
      valorTurnoJugador === "hombres" && clicks > 30 ||
      valorTurnoJugador === "mujeres" && clicks > 30 ||
      valorTurnoJugador === "solteros" && clicks > 30 ||
      valorTurnoJugador === "en pareja" && clicks > 30 ||
      valorTurnoJugador === "par" && clicks > 30 ||
      valorTurnoJugador === "impar" && clicks > 30) {
    var accionJugador = baseAccionJugadores.concat("compañero", "shot", "piquito", "beso", "prenda", "penitencia");
  }
  else if (valorTurnoJugador && clicks > 30) {
    var accionJugador = baseAccionJugador.concat("compañero", "shot", "piquito", "beso", "prenda", "penitencia");
  }

  // Sumar acciones
/*  if (clicks == 5) {
    accionJugador.push("compañero");
  } else if (clicks == 10) {
    accionJugador.push("shot");
  } else if (clicks == 15) {
    accionJugador.push("piquito");
    numeroAccionJugador == [1, 2, 3, 4];
  } else if (clicks == 20) {
    accionJugador.push("beso");
  } else if (clicks == 25) {
    accionJugador.push("prenda");
  } else if (clicks == 30) {
    accionJugador.push("penitencia");
  }
  */

  /*
  if (clicks >= 5) {
    accionJugador.push("compañero");
  } else if (clicks >= 10) {
    accionJugador.push("compañero","shot");
  } else if (clicks >= 15) {
    accionJugador.push("compañero","shot","piquito");
    numeroAccionJugador >= [1, 2, 3, 4];
  } else if (clicks >= 20) {
    accionJugador.push("compañero","shot","piquito","beso");
  } else if (clicks >= 25) {
    accionJugador.push("compañero","shot","piquito","beso","prenda");
  } else if (clicks >= 30) {
    accionJugador.push("compañero","shot","piquito","beso","prenda","penitencia");
  }
  */

    // Random vars
  var valorAccionJugador = accionJugador[Math.floor(Math.random() * accionJugador.length)];
  var valorNumeroAccionJugador = numeroAccionJugador[Math.floor(Math.random() * numeroAccionJugador.length)];
  var valorNumeroDuracionAccionJugador = numeroDuracionAccionJugador[Math.floor(Math.random() * numeroDuracionAccionJugador.length)];
  var valorDuracionAccion = duracionAccion[Math.floor(Math.random() * duracionAccion.length)];

  var valorDecisionJugador = decisionJugador[Math.floor(Math.random() * decisionJugador.length)];
  var valorComplementoAccionJugador = complemento_accionJugador[Math.floor(Math.random() * complemento_accionJugador.length)];

  var valorEjemplosTomar = ejemplosTomar[Math.floor(Math.random() * ejemplosTomar.length)];
  var valorEjemplosLimon = ejemplosLimon[Math.floor(Math.random() * ejemplosLimon.length)];
  var valorEjemplosNunca = ejemplosNunca[Math.floor(Math.random() * ejemplosNunca.length)];
  var valorEjemplosCultura = ejemplosCultura[Math.floor(Math.random() * ejemplosCultura.length)];
  var valorEjemplosReglas = ejemplosReglas[Math.floor(Math.random() * ejemplosReglas.length)];

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
    textoValorDuracionAccion = [
      "durante" + " " + valorNumeroDuracionAccionJugador + " " + "turno" + pluralDuracionAcciones
    ];
  } else if (valorDuracionAccion === "siempre") {
    textoValorDuracionAccion = ["por siempre jamás"];
  }

  // Variables lenguage
  if (valorTurnoJugador === "todos" ||
      valorTurnoJugador === "hombres" ||
      valorTurnoJugador === "mujeres" ||
      valorTurnoJugador === "solteros" ||
      valorTurnoJugador === "en pareja") {
    pluralJugadores = ["s "];

  } else {
    pluralJugadores = [" "];
  }
  var conjugar = [" " + valorTurnoJugador + " " + "le" + pluralJugadores + " " + "toca"];
  var conjugacionesTomar = [
    valorComplementoAccionJugador + " " +
    valorNumeroAccionJugador + " " + valorAccionJugador + pluralNumeroAcciones
  ];

  //Conjugaciones besar

  if (complementoValorTurnoJugador === "yo") {
    texto_ComplementoTurnoJugador = ["a mi"];
  } else if (complementoValorTurnoJugador === "izquierda" || complementoValorTurnoJugador === "derecha") {
    texto_ComplementoTurnoJugador = ["al de su" + complementoValorTurnoJugador];
  } else if (complementoValorTurnoJugador === "todos") {
    texto_ComplementoTurnoJugador = ["a quién quiera"];
  } else if (complementoValorTurnoJugador === "hombres" || complementoValorTurnoJugador === "solteros" || complementoValorTurnoJugador === "en pareja") {
    texto_ComplementoTurnoJugador = ["a los" + " " + complementoValorTurnoJugador];
  } else if (complementoValorTurnoJugador === "mujeres") {
    texto_ComplementoTurnoJugador = ["a las" +  " " + complementoValorTurnoJugador];
  } else if (complementoValorTurnoJugador === "viejo" || complementoValorTurnoJugador === "joven" || complementoValorTurnoJugador === "alto" || complementoValorTurnoJugador === "bajo") {
    texto_ComplementoTurnoJugador = ["al más" +  " " + complementoValorTurnoJugador];
  } else if (complementoValorTurnoJugador === "par" || complementoValorTurnoJugador === "impar") {
    texto_ComplementoTurnoJugador = ["a los nacidos en un año" + " " + complementoValorTurnoJugador];
  } else if (complementoValorTurnoJugador === "risa") {
    texto_ComplementoTurnoJugador = ["al que se ría primero"];
  } else if (complementoValorTurnoJugador) {
    texto_ComplementoTurnoJugador = ["Valor Turno jugador not found"];
  }

  var conjugacionesBesar = [
    "dar un" + " " + valorAccionJugador + " " + texto_ComplementoTurnoJugador
  ];

  // Oraciones acción juego

  if (valorAccionJugador === "nunca") {
    textoAccionJugador = ["decir nunca nunca"];
  } else if (valorAccionJugador === "limon") {
    textoAccionJugador = ["decir un" + " " + valorEjemplosLimon + " " + "medio" + " "+ valorEjemplosLimon];
  } else if (valorAccionJugador === "dedo") {
    textoAccionJugador = ["poner un dedo sobre la mesa"];
  } else if (valorAccionJugador === "chancho") {
    textoAccionJugador = ["inflar los pómulos"];
  } else if (valorAccionJugador === "aob") {
    textoAccionJugador = ["dar dos opciones a elegir"];
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
  } else if (valorAccionJugador === "beso" || valorAccionJugador === "piquito") {
    textoAccionJugador = [conjugacionesBesar];
  } else if (valorAccionJugador === "compañero") {
    textoAccionJugador = ["elegir a alguien para que sufra el mismo destino" + " " + textoValorDuracionAccion];
  } else if (valorAccionJugador === "trago" || valorAccionJugador === "shot") {
    textoAccionJugador = [conjugacionesTomar];
  } else if (valorAccionJugador === "prenda") {
    textoAccionJugador = ["quitarse una prenda"];
  } else if (valorAccionJugador === "penitencia") {
    textoAccionJugador = ["cumplir una penitencia"];
  }

  // Ejemplos acción juego
  if (valorAccionJugador === "nunca") {
    textoEjemploAccionJugador = [
      "Yo nunca nunca he" + " " + valorEjemplosNunca
    ];
  } else if (valorAccionJugador === "limon") {
    textoEjemploAccionJugador = [
      "Todos se enumeran. El primero debe decir un" + " " +
       valorEjemplosLimon + " " + "medio" + " "+ valorEjemplosLimon + " " +
       valorNumeroDuracionAccionJugador + " " + valorEjemplosLimon + pluralDuracionAcciones + " " + "medio" + " " + valorEjemplosLimon
    ];
  } else if (valorAccionJugador === "dedo") {
    textoEjemploAccionJugador = ["El último en poner el dedo sobre la mesa, toma"];
  } else if (valorAccionJugador === "chancho") {
    textoEjemploAccionJugador = ["El último en inflar los pómulos, toma"];
  } else if (valorAccionJugador === "aob") {
    textoEjemploAccionJugador = ["Todos eligen entre a y b y los que saquen menos votos, toman"];
  } else if (valorAccionJugador === "qlh") {
    textoEjemploAccionJugador = ["(Quién saque más votos, toma)"];
  } else if (valorAccionJugador === "vom") {
    textoEjemploAccionJugador = ["(Todos adivinan si es verdad o mentira. Quienes no acierten, toman)"];
  } else if (valorAccionJugador === "cultura") {
    textoEjemploAccionJugador = [
      "Como por ejemplo:" + " " + valorEjemplosCultura
    ];
  } else if (valorAccionJugador === "cascada") {
    textoEjemploAccionJugador = ["(Todos empiezan a tomar al mismo tiempo y solo dejan de hacerlo cuando el que está a su derecha para)"];
  } else if (valorAccionJugador === "historia") {
    textoEjemploAccionJugador = ["(Dice un palabra y el resto la repite, añadiendo su propia palabra)"];
  } else if (valorAccionJugador === "regla") {
    textoEjemploAccionJugador = ["Como por ejemplo:" + " " + valorEjemplosReglas];
  } else if (valorAccionJugador === "piquito") {
    textoEjemploAccionJugador = ["(dar un pequeño beso en los labios)"];
  } else if (valorAccionJugador === "beso") {
    textoEjemploAccionJugador = ["(dar un beso de verdad, como los que dan en Francia.)"];
  } else if (valorAccionJugador === "compañero") {
    textoEjemploAccionJugador = ["(El compañero tendra que hacer lo mismo. Tomar lo mismo, cumplir las mismas reglas y todo lo demás que el juego mande)"];
  } else if (valorAccionJugador === "trago") {
    textoEjemploAccionJugador = [valorEjemplosTomar];
  } else if (valorAccionJugador === "shot") {
    textoEjemploAccionJugador = ["(Un trago fuerte, al seco. Como un disparo)"];
  } else if (valorAccionJugador === "prenda") {
    textoEjemploAccionJugador = ["(Quitar o quitarse alguna ropa)"];
  } else if (valorAccionJugador === "penitencia") {
    textoEjemploAccionJugador = ["(hacer lo que le pidan que haga)"];
  }

  // Variables turno jugador
  if (valorTurnoJugador === "yo") {
    texto_turnoJugador = ["A mi me toca"];
  } else if (valorTurnoJugador === "izquierda" || valorTurnoJugador === "derecha") {
    texto_turnoJugador = ["Al de mi" + conjugar];
  } else if (valorTurnoJugador === "todos") {
    texto_turnoJugador = ["A" + conjugar];
  } else if (valorTurnoJugador === "hombres" || valorTurnoJugador === "solteros" || valorTurnoJugador === "en pareja") {
    texto_turnoJugador = ["A los" + conjugar];
  } else if (valorTurnoJugador === "mujeres") {
    texto_turnoJugador = ["A las" + conjugar];
  } else if (valorTurnoJugador === "viejo" || valorTurnoJugador === "joven" || valorTurnoJugador === "alto" || valorTurnoJugador === "bajo") {
    texto_turnoJugador = ["Al más" + conjugar];
  } else if (valorTurnoJugador === "par" || valorTurnoJugador === "impar") {
    texto_turnoJugador = ["A los nacidos en un año" + " " + valorTurnoJugador + " " + "les toca"];
  } else if (valorTurnoJugador === "risa") {
    texto_turnoJugador = ["Al que se ría primero le toca"];
  } else if (valorTurnoJugador) {
    texto_turnoJugador = ["Valor Turno jugador not found"];
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
  } else if (valorAccionJugador === "chancho") {
    icono_accionJugador = ["hand-o-down"];
  } else if (valorAccionJugador === "aob") {
    icono_accionJugador = ["fa-adjust"];
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
  } else if (valorAccionJugador === "prenda") {
    icono_accionJugador = ["shopping-bag"];
  } else if (valorAccionJugador === "penitencia") {
    icono_accionJugador = ["exclamation-circle"];
  } else if (valorAccionJugador) {
    icono_accionJugador = ["beer"];
  }
  console.log(accionJugador);
  console.log(valorAccionJugador);
  console.log(valorTurnoJugador);
  console.log(clicks);

  // Markups HTML
  fontAwesome = ["<i class='fa fa-" + icono_accionJugador + "'></i>"];
  var h1 = ["<h1  class='wow fadeIn' data-wow-duration='1s' data-wow-delay='1s'>"];

  // Retornar valor
  return [h1 + fontAwesome + "<br>" + " " + texto_turnoJugador + " " + textoAccionJugador + "</h1>" + "<br>" ];
  valorAlert = valorNumeroDuracionAccionJugador;
}
// #textoSecundario
var textoSecundario = function getTextoSecundario() {
    var h3 = ["<h3  class='wow fadeIn' data-wow-duration='1s' data-wow-delay='2s'>"];

    // Retornar valor
    return [h3 + textoEjemploAccionJugador + "</h3>"];
}
// #cargarTexto
function cargarTexto() {
  var tiempoActual = (new Date()).getTime();
  if (tiempoActual > (ultimoClick + 1)) {
    clicks += 1;
    document.getElementById("texto").innerHTML = mensaje();
    document.getElementById("texto_secundario").innerHTML = textoSecundario();
  } else {
    alert(alerta());
  }
  ultimoClick = tiempoActual;
}
