angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('inicio.jugar', {
    url: '/jugar',
    views: {
      'tab1': {
        templateUrl: 'templates/jugar.html',
        controller: 'jugarCtrl'
      }
    }
  })

  .state('inicio.jugadores', {
    url: '/jugadores',
    views: {
      'tab3': {
        templateUrl: 'templates/jugadores.html',
        controller: 'jugadoresCtrl'
      }
    }
  })

  .state('inicio', {
    url: '/inicio',
    templateUrl: 'templates/inicio.html',
    abstract:true
  })

  .state('nuevoJugador', {
    url: '/nuevo_jugador',
    templateUrl: 'templates/nuevoJugador.html',
    controller: 'nuevoJugadorCtrl'
  })

$urlRouterProvider.otherwise('/inicio/jugar')

  

});