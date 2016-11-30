// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.directives','uiGmapgoogle-maps','googlemaps.init'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  })

  .state('app.gas', {
      url: '/gas',
      views: {
        'menuContent': {
          templateUrl: 'templates/gas.html',
          controller: 'GasCtrl'
        }
      }
    })

  .state('app.taxi', {
      url: '/taxi',
      views: {
        'menuContent': {
          templateUrl: 'templates/taxi.html',
          controller: 'TaxiCtrl'
        }
      }
    })

    .state('app.cadastrar', {
      url: '/cadastrar',
      views: {
        'menuContent': {
          templateUrl: 'templates/cadastrar.html',
          controller: 'cadastrarCtrl'
        }
      }
    })
    .state('app.acompanhar', {
      url: '/entrega',
      views: {
        'menuContent': {
          templateUrl: 'templates/acompanhar.html',
          controller: 'acompanharCtrl'
        }
      }
    })

    .state('app.profile', {
      url: '/profile',
      views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })
  .state('app.menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
