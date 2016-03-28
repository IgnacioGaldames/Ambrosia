$(document).foundation();
//Scripts

 new WOW().init();

// #Variables


var Jugador = ["Yo","Izquierda","Derecha", "Todos"];
var decisionJugador = ["Elijo","Eligen"];
var accionJugador = ["Dar","Recibir"];
var numeroAcciones = [1,2];
var accionJuego = ["Trago","Tapa"];


// IDEA: si sale penitencia como valor, entonces cargar una penitencia

// #Funciones


function getMessage() {
   var valorJugador = Jugador[Math.floor(Math.random() * Jugador.length)];
   var valor_decisionJugador = decisionJugador[Math.floor(Math.random() * decisionJugador.length)];

    if (valorJugador === "Yo" && valor_decisionJugador === "Elijo" ) {
      texto_valorJugador = ["Yo elijo"];
    }
    else if (valorJugador === "Yo" && valor_decisionJugador === "Eligen" ) {
      texto_valorJugador = ["A mi me eligen"];
    }
    else if (valorJugador === "Izquierda" && valor_decisionJugador === "Elijo" ) {
      texto_valorJugador = ["Al de mi Izquierda le elijo"];
    }
    else if (valorJugador === "Izquierda" && valor_decisionJugador === "Eligen" ) {
      texto_valorJugador = ["El de mi Izquierda me elije"];
    }
    else if (valorJugador === "Derecha" && valor_decisionJugador === "Elijo" ) {
      texto_valorJugador = ["Al de mi Derecha le elijo"];
    }
    else if (valorJugador === "Derecha" && valor_decisionJugador === "Eligen" ) {
      texto_valorJugador = ["El de mi Derecha me elige"];
    }
    else if (valorJugador === "Todos" && valor_decisionJugador === "Elijo" ) {
      texto_valorJugador = ["A Todos les elijo"];
    }
    else if (valorJugador === "Todos" && valor_decisionJugador === "Eligen" ) {
      texto_valorJugador = ["Todos me eligen"];
    }



   var valor_accionJugador = accionJugador[Math.floor(Math.random() * accionJugador.length)];
   var valor_numeroAcciones = numeroAcciones[Math.floor(Math.random() * numeroAcciones.length)];
   var valor_accionJuego = accionJuego[Math.floor(Math.random() * accionJuego.length)];

   if (valor_numeroAcciones === 1) {
     texto_valor_accionJuego = [valor_accionJuego];
   }
   else {
     texto_valor_accionJuego = [valor_accionJuego + "s"];
   }

   return [texto_valorJugador + ' '  + valor_accionJugador + ' ' + valor_numeroAcciones  + ' ' + texto_valor_accionJuego];
}

function cargarTexto()
  {
    document.getElementById("texto").innerHTML = getMessage();
  }
