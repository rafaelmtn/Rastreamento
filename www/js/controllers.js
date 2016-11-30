angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('MapCtrl', function($scope,$ionicLoading) {
    this.initMap = function () {
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
    };
})
.controller('cadastrarCtrl', ['$scope', '$state',function ($scope, $state) {


}])
.controller('GasCtrl', ['$scope', '$state',function ($scope, $state) {
  this.goHome = function () {
    $state.go("app.home");
  };
  this.goAcompanhar = function () {
    $state.go("app.acompanhar");
  };
}])
.controller('HomeCtrl', ['$scope', '$state',function ($scope, $state) {

  this.goProfile = function () {
    $state.go("app.profile");
  };

  this.goCadastrar = function () {
    $state.go("app.cadastrar");
  };

}])
.controller('TaxiCtrl', ['$scope', '$state',function ($scope, $state) {

}])
.controller('MenuCtrl', ['$scope', '$state',function ($scope, $state) {
  this.goGas = function () {
    $state.go("app.gas");
  };
}])
.controller('ProfileCtrl', ['$scope', '$state',function ($scope, $state) {

}])
.controller('AcompanharCtrl', ['$scope', '$state',function ($scope, $state) {

}]);
