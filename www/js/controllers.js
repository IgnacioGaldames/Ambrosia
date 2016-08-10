angular.module('app.controllers', [])



.controller('jugarCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName


function ($scope, $stateParams) {

  var turnoJugador = [
    "yo", "izquierda", "derecha", "viejo", "joven", "alto", "bajo", "todos", "hombres", "mujeres", "solteros", "en pareja", "par", "impar", "risa"
  ];


  $scope.jugar = function jugar() {

    var valorTurnoJugador = turnoJugador[Math.floor(Math.random() * turnoJugador.length)];

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

    // Variables turno jugador
    var conjugar = [" " + valorTurnoJugador + " " + "le" + pluralJugadores + " " + "toca"];

    if (valorTurnoJugador === "yo") {
      texto_turnoJugador = "A mi me toca";
    } else if (valorTurnoJugador === "izquierda" || valorTurnoJugador === "derecha") {
      texto_turnoJugador = "Al de mi" + conjugar;
    } else if (valorTurnoJugador === "todos") {
      texto_turnoJugador = "A" + conjugar;
    } else if (valorTurnoJugador === "hombres" || valorTurnoJugador === "solteros" || valorTurnoJugador === "en pareja") {
      texto_turnoJugador = "A los" + conjugar;
    } else if (valorTurnoJugador === "mujeres") {
      texto_turnoJugador = "A las" + conjugar;
    } else if (valorTurnoJugador === "viejo" || valorTurnoJugador === "joven" || valorTurnoJugador === "alto" || valorTurnoJugador === "bajo") {
      texto_turnoJugador = "Al más" + conjugar;
    } else if (valorTurnoJugador === "par" || valorTurnoJugador === "impar") {
      texto_turnoJugador = "A los nacidos en un año" + " " + valorTurnoJugador + " " + "les toca";
    } else if (valorTurnoJugador === "risa") {
      texto_turnoJugador = "Al que se ría primero le toca";
    } else if (valorTurnoJugador) {
      texto_turnoJugador = "Valor Turno jugador not found";
    }

    $scope.jugadores = texto_turnoJugador;
    $scope.onoff = false

  }

}])

.controller('jugadoresCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('nuevoJugadorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('Menu', function($scope) {
  $scope.toggle = {
    gomitas: true,
    companero: true,
    shot: true,
    piquito: true,
    beso: true,
    prenda: true,
    penitencia: true
  };
});
