// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.directives','uiGmapgoogle-maps','googlemaps.init'])

.run( ['$ionicPlatform', '$rootScope', '$window',  function($ionicPlatform,$rootScope, $window) {
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

    $rootScope.user = {};


    $window.fbAsyncInit = function() {
      // Executed when the SDK is loaded
      FB.init({
        appId: 446464218862874,
        channelUrl: 'app/home.html',
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.8',
      });

      FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {


          FB.api('/me?fields=name,email,birthday,gender,first_name,last_name,picture', function(response) {
            $rootScope.firstName = response.first_name;
            $rootScope.lastName = response.last_name;
            $rootScope.gender = response.gender;
            $rootScope.birthday = response.birthday;
            $rootScope.email = response.email;
            $rootScope.picture = response.picture.data.url;

            console.log($rootScope.picture);
            console.log('Successful login for: ' + response.gender);
            console.log('Successful login for: ' + response.birthday);
            console.log('Successful login for: ' + response.email);
            console.log('Successful login for: ' + response.name);
          });

          FB.api('/me/email', function(response) {
            console.log(response);
          });

        }
        else {
          FB.login();
        }
      });

    };

    (function(d){
      // load the Facebook javascript SDK

      var js,
      id = 'facebook-jssdk',
      ref = d.getElementsByTagName('script')[0];

      if (d.getElementById(id)) {
        return;
      }

      js = d.createElement('script');
      js.id = id;
      js.async = true;
      js.src = "//connect.facebook.net/en_US/all.js";

      ref.parentNode.insertBefore(js, ref);

    }(document));

}])

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
          controller: 'CadastrarCtrl'
        }
      }
    })
    .state('app.acompanhar', {
      url: '/entrega',
      views: {
        'menuContent': {
          templateUrl: 'templates/acompanhar.html',
          controller: 'AcompanharCtrl'
        }
      }
    })

    .state('app.profile', {
      url: '/profile',
      views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'ProfileCtrl'
      }
    }
  })
  .state('app.menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'MenuCtrl'
  })
    ;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
