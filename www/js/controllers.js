angular.module('starter.controllers', [])

.controller('AppCtrl', ["$scope", "$ionicModal", "$timeout", "$window", function($scope, $ionicModal, $timeout, $window) {
  $scope.login = function(username, password) {
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("password", password);
  };

  $scope.isLoggedIn = function() {
      if(window.localStorage.getItem("username") !== undefined && window.localStorage.getItem("password") !== undefined) {
          return true;
      } else {
          return false;
      }
  };

  $scope.logout = function() {
      window.localStorage.removeItem("username");
      window.localStorage.removeItem("password");
  };

}])
.controller('GpsgateController',function(){
  function soap() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open('POST', 'sistema2.wolfrastreamento.com.br', true);

        var xmlContent =
          '<?xml version="1.0" encoding="utf-8"?>' +
            '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'+
                '<soap:Body>'+
                  '<Login xmlns="http://gpsgate.com/services/">' +
                      '<strUsername>rafael</strUsername>' +
                      '<strPassword>rafael123</strPassword>' +
                      '<iApplicationID>21</iApplicationID>' +
                    '</Login>'+
                '</soap:Body>'+
            '</soap:Envelope>';

         xmlhttp.onreadystatechange = function () {
             if (xmlhttp.readyState == 4) {
                 if (xmlhttp.status == 200) {
                     console.log('ok');
                 }
             }
         }

         xmlhttp.setRequestHeader('Content-Type', 'text/xml');
         xmlhttp.send(xmlContent);
         console.log(xmlhttp);
     }
})
.controller('MapCtrl', ["$scope","$ionicLoading", function($scope,$ionicLoading) {
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
}])
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
