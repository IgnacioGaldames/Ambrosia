
//Scripts

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
  "Nombres de paises",
];
var ejemplosReglas= [
  "Evitar que alguien haga algo",
  "Invitar a que alguien haga algo",
];

var ejemplosPenitencia= [
  "Adivinar quién te beso"
];

var baseAccionJugador = ["nunca", "limon", "dedo", "chancho", "aob", "qlh", "vom", "cultura", "cascada", "historia", "regla"];
var baseAccionJugadores = ["trago"];
var accionJugadoresPiso2 = ["compañero"];
var accionJugadoresPiso3 = ["compañero", "shot"];
var accionJugadoresPiso4 = ["compañero", "shot", "piquito"];
var accionJugadoresPiso5 = ["compañero", "shot", "piquito", "beso"];
var accionJugadoresPiso6 = ["compañero", "shot", "piquito", "beso", "prenda"];
var accionJugadoresPiso7 = ["compañero", "shot", "piquito", "beso", "prenda", "penitencia"];

var clicks = 0;
var ultimoClick = 0;
var tituloFontAwesome = ["<i class='fa fa-beer'></i>"];

var multiplier = prompt("Cantidad de jugadores", "1");;
var piso1= multiplier * 1;
var piso2= multiplier * 2;
var piso3= multiplier * 3;
var piso4= multiplier * 4;
var piso5= multiplier * 5;
var piso6= multiplier * 6;


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
  if (valorTurnoJugador === "todos" && clicks <= piso1 ||
      valorTurnoJugador === "hombres" && clicks <= piso1 ||
      valorTurnoJugador === "mujeres" && clicks <= piso1 ||
      valorTurnoJugador === "solteros" && clicks <= piso1 ||
      valorTurnoJugador === "en pareja" && clicks <= piso1 ||
      valorTurnoJugador === "par" && clicks <= piso1 ||
      valorTurnoJugador === "impar" && clicks <= piso1) {
    var accionJugador = baseAccionJugadores;
  }
  else if (valorTurnoJugador && clicks <= piso1) {
    var accionJugador = baseAccionJugador;
  }
  else if (valorTurnoJugador === "todos" && clicks > piso1 && clicks <= piso2 ||
      valorTurnoJugador === "hombres" && clicks > piso1 && clicks <= piso2 ||
      valorTurnoJugador === "mujeres" && clicks > piso1 && clicks <= piso2 ||
      valorTurnoJugador === "solteros" && clicks > piso1 && clicks <= piso2 ||
      valorTurnoJugador === "en pareja" && clicks > piso1 && clicks <= piso2 ||
      valorTurnoJugador === "par" && clicks > piso1 && clicks <= piso2 ||
      valorTurnoJugador === "impar" && clicks > piso1 && clicks <= piso2) {
    var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso2);
  }
  else if (valorTurnoJugador && clicks > piso1 && clicks <= piso2) {
    var accionJugador = baseAccionJugador.concat(accionJugadoresPiso2);
  }
  else if (valorTurnoJugador === "todos" && clicks > piso2 && clicks <= piso3 ||
      valorTurnoJugador === "hombres" && clicks > piso2 && clicks <= piso3 ||
      valorTurnoJugador === "mujeres" && clicks > piso2 && clicks <= piso3 ||
      valorTurnoJugador === "solteros" && clicks > piso2 && clicks <= piso3 ||
      valorTurnoJugador === "en pareja" && clicks > piso2 && clicks <= piso3 ||
      valorTurnoJugador === "par" && clicks > piso2 && clicks <= piso3 ||
      valorTurnoJugador === "impar" && clicks > piso2 && clicks <= piso3) {
    var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso3);
  }
  else if (valorTurnoJugador && clicks > piso2 && clicks <= piso3) {
    var accionJugador = baseAccionJugador.concat(accionJugadoresPiso3);

  }
  else if (valorTurnoJugador === "todos" && clicks > piso3 && clicks <= piso4 ||
      valorTurnoJugador === "hombres" && clicks > piso3 && clicks <= piso4 ||
      valorTurnoJugador === "mujeres" && clicks > piso3 && clicks <= piso4 ||
      valorTurnoJugador === "solteros" && clicks > piso3 && clicks <= piso4 ||
      valorTurnoJugador === "en pareja" && clicks > piso3 && clicks <= piso4 ||
      valorTurnoJugador === "par" && clicks > piso3 && clicks <= piso4 ||
      valorTurnoJugador === "impar" && clicks > piso3 && clicks <= piso4) {
    var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso4);
  }
  else if (valorTurnoJugador && clicks > piso3 && clicks <= piso4) {
    var accionJugador = baseAccionJugador.concat(accionJugadoresPiso4);
  }
  else if (valorTurnoJugador === "todos" && clicks > piso4 && clicks <= piso5 ||
      valorTurnoJugador === "hombres" && clicks > piso4 && clicks <= piso5 ||
      valorTurnoJugador === "mujeres" && clicks > piso4 && clicks <= piso5 ||
      valorTurnoJugador === "solteros" && clicks > piso4 && clicks <= piso5 ||
      valorTurnoJugador === "en pareja" && clicks > piso4 && clicks <= piso5 ||
      valorTurnoJugador === "par" && clicks > piso4 && clicks <= piso5 ||
      valorTurnoJugador === "impar" && clicks > piso4 && clicks <= piso5) {
    var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso5);
  }
  else if (valorTurnoJugador && clicks > piso4 && clicks <= piso5) {
    var accionJugador = baseAccionJugador.concat(accionJugadoresPiso5);
  }
  else if (valorTurnoJugador === "todos" && clicks > piso5 && clicks <= piso6 ||
      valorTurnoJugador === "hombres" && clicks > piso5 && clicks <= piso6 ||
      valorTurnoJugador === "mujeres" && clicks > piso5 && clicks <= piso6 ||
      valorTurnoJugador === "solteros" && clicks > piso5 && clicks <= piso6 ||
      valorTurnoJugador === "en pareja" && clicks > piso5 && clicks <= piso6 ||
      valorTurnoJugador === "par" && clicks > piso5 && clicks <= piso6 ||
      valorTurnoJugador === "impar" && clicks > piso5 && clicks <= piso6) {
    var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso6);
  }
  else if (valorTurnoJugador && clicks > piso5 && clicks <= piso6) {
    var accionJugador = baseAccionJugador.concat(accionJugadoresPiso6);
  }
  else if (valorTurnoJugador === "todos" && clicks > piso6 ||
      valorTurnoJugador === "hombres" && clicks > piso6 ||
      valorTurnoJugador === "mujeres" && clicks > piso6 ||
      valorTurnoJugador === "solteros" && clicks > piso6 ||
      valorTurnoJugador === "en pareja" && clicks > piso6 ||
      valorTurnoJugador === "par" && clicks > piso6 ||
      valorTurnoJugador === "impar" && clicks > piso6) {
    var accionJugador = baseAccionJugadores.concat(accionJugadoresPiso7);
  }
  else if (valorTurnoJugador && clicks > piso6) {
    var accionJugador = baseAccionJugador.concat(accionJugadoresPiso7);
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
  var valorEjemplosPenitencia = ejemplosPenitencia[Math.floor(Math.random() * ejemplosReglas.length)];

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
    texto_ComplementoTurnoJugador = ["al de su" + " " + complementoValorTurnoJugador];
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

  // Variables turno jugador
switch (valorTurnoJugador) {
  case "yo":
    texto_turnoJugador = ["A mi me toca"];
    break;
  case "izquierda":
  case "derecha":
    texto_turnoJugador = ["Al de mi" + conjugar];
    break;
  case "todos":
    texto_turnoJugador = ["A" + conjugar];
    break;
  case "hombres":
  case "solteros":
  case "en pareja":
    texto_turnoJugador = ["A los" + conjugar];
    break;
  case "mujeres":
    texto_turnoJugador = ["A las" + conjugar];
    break;
  case "viejo":
  case "joven":
  case "alto":
  case "bajo":
    texto_turnoJugador = ["Al más" + conjugar];
    break;
  case "par":
  case "impar":
    texto_turnoJugador = ["A los nacidos en un año" + " " + valorTurnoJugador + " " + "les toca"];
    break;
  case "risa":
    texto_turnoJugador = ["Al que se ría primero le toca"];
    break;
  default:
    texto_turnoJugador = ["Valor Turno jugador not found"];
}

// Ejemplos acción juego

switch (valorAccionJugador) {
  case "nunca":
    textoEjemploAccionJugador = [
      "Yo nunca nunca he" + " " + valorEjemplosNunca
    ];
    icono_accionJugador = ['beer'];
    textoAccionJugador = ["decir nunca nunca"];
    break;
  case "limon":
    textoEjemploAccionJugador = [
      "Todos se enumeran. El primero debe decir un" + " " +
       valorEjemplosLimon + " " + "medio" + " "+ valorEjemplosLimon + " " +
       valorNumeroDuracionAccionJugador + " " + valorEjemplosLimon + pluralDuracionAcciones + " " + "medio" + " " + valorEjemplosLimon
    ];
    icono_accionJugador = ['lemon-o'];
    textoAccionJugador = ["decir un" + " " + valorEjemplosLimon + " " + "medio" + " "+ valorEjemplosLimon];
    break;
  case "dedo":
    textoEjemploAccionJugador = ["El último en poner el dedo sobre la mesa, toma"];
    icono_accionJugador = ['hand-o-down'];
    textoAccionJugador = ["poner un dedo sobre la mesa"];
    break;
  case "chancho":
    textoEjemploAccionJugador = ["El último en inflar los pómulos, toma"];
    icono_accionJugador = ['hand-o-down'];
    textoAccionJugador = ["inflar los pómulos"];
    break;
  case "aob":
    textoEjemploAccionJugador = ["Todos eligen entre a y b y los que saquen menos votos, toman"];
    icono_accionJugador = ['fa-adjust'];
    textoAccionJugador = ["dar dos opciones a elegir"];
    break;
  case "qlh":
    textoEjemploAccionJugador = ["(Quién saque más votos, toma)"];
    icono_accionJugador = ['balance-scale'];
    textoAccionJugador = ["inventar un escenario y que el resto apunte a quién lo haría o lo diría"];
    break;
  case "vom":
    textoEjemploAccionJugador = ["(Todos adivinan si es verdad o mentira. Quienes no acierten, toman)"];
    icono_accionJugador = ['bullhorn'];
    textoAccionJugador = ["decir una verdad o una mentira"];
    break;
  case "cultura":
    textoEjemploAccionJugador = [
      "Como por ejemplo:" + " " + valorEjemplosCultura
    ];
    icono_accionJugador = ['comments'];
    textoAccionJugador = ["empezar un tema para jugar al bachillerato"];
    break;
  case "cascada":
    textoEjemploAccionJugador = ["(Todos empiezan a tomar al mismo tiempo y solo dejan de hacerlo cuando el que está a su derecha para)"];
    icono_accionJugador = ['users'];
    textoAccionJugador = ["iniciar la cascada"];
    break;
  case "historia":
    textoEjemploAccionJugador = ["(Dice un palabra y el resto la repite, añadiendo su propia palabra)"];
    icono_accionJugador = ['book'];
    textoAccionJugador = ["empezar una historia"];
    break;
  case "regla":
    textoEjemploAccionJugador = ["Como por ejemplo:" + " " + valorEjemplosReglas];
    icono_accionJugador = ['gavel'];
    textoAccionJugador = ["crear una regla"];
    break;
  case "trago":
    textoEjemploAccionJugador = [valorEjemplosTomar];
    icono_accionJugador = ['beer'];
    textoAccionJugador = [conjugacionesTomar];
    break;
  case "compañero":
    textoEjemploAccionJugador = ["(El compañero tendra que hacer lo mismo. Tomar lo mismo, cumplir las mismas reglas y todo lo demás que el juego mande)"];
    icono_accionJugador = ['beer'];
    textoAccionJugador = ["elegir a alguien para que sufra el mismo destino" + " " + textoValorDuracionAccion];
    break;
  case "shot":
    textoEjemploAccionJugador = ["(Un trago fuerte, al seco. Como un disparo)"];
    icono_accionJugador = ['glass'];
    textoAccionJugador = [conjugacionesTomar];
    break;
  case "piquito":
    textoEjemploAccionJugador = ["(dar un pequeño beso en los labios)"];
    icono_accionJugador = ['heart-o'];
    textoAccionJugador = [conjugacionesBesar];
    break;
  case "beso":
    textoEjemploAccionJugador = ["(dar un beso de verdad, como los que dan en Francia.)"];
    icono_accionJugador = ['heart'];
    textoAccionJugador = [conjugacionesBesar];
    break;
  case "prenda":
    textoEjemploAccionJugador = ["(Quitar o quitarse alguna ropa)"];
    icono_accionJugador = ['shopping-bag'];
    textoAccionJugador = ["quitarse una prenda"]; //A mi me toca quitarse una prenda
    break;
  case "penitencia":
    textoEjemploAccionJugador = [valorEjemplosPenitencia];
    icono_accionJugador = ['exclamation-circle'];
    textoAccionJugador = ["cumplir una penitencia"];
    break;
  default:
    icono_accionJugador = ['beer'];
}

  console.log(accionJugador);
  console.log(valorAccionJugador);
  console.log(valorTurnoJugador);
  console.log(clicks);

  // Markups HTML
  fontAwesome = ["<i class='fa fa-" + icono_accionJugador + "'></i>"];
  var h1 = ["<h1  class='wow fadeIn' data-wow-duration='0.5s' data-wow-delay='0s'>"];

  // Retornar valor
  return [h1 + fontAwesome + "<br>" + " " + texto_turnoJugador + " " + textoAccionJugador + "</h1>" + "<br>" ];
  valorAlert = valorNumeroDuracionAccionJugador;
}
// #textoSecundario
var textoSecundario = function getTextoSecundario() {
    var h3 = ["<h3  class='wow fadeIn' data-wow-duration='0.5s' data-wow-delay='1s'>"];

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
