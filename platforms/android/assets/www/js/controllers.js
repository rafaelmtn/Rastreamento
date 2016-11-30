angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  $scope.showLogin = true;
  $scope.actionMenuToogle = '';

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);

    $scope.showLogin= false;
    $scope.actionMenuToogle = 'menu-toggle="left"';
  };
})

.controller('MapCtrl', function($scope,$ionicLoading) {
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);

        var posOptions = {timeout: 10000, enableHighAccuracy: false};
        navigator.geolocation.getCurrentPosition(function(posOptions) {
            map.setCenter(new google.maps.LatLng(posOptions.coords.latitude, posOptions.coords.longitude));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(posOptions.coords.latitude, posOptions.coords.longitude),
                map: map,
                title: "My Location"
            });
        });

        $scope.map = map;
    });
})
.controller('GasCtrl', function($scope) {})
.controller('HomeCtrl', function($scope) {})
.controller('TaxiCtrl', function($scope) {});
