// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app')
  .controller('ScoreController', ['$scope', '$interval', 'Registro', function($scope, $interval, Registro) {
    $scope.reload = function() {
      $scope.registros = Registro.find();
    };
    $scope.reload();
    $interval($scope.reload, 5000);
  }])
  .controller('AddEquipoController', ['$scope', '$state', 'Registro', function($scope, $state, Registro) {
    $scope.submitForm = function() {
      Registro
        .create({
          equipo: $scope.registro.equipo
        })
        .$promise
        .then(function() {
          $state.go('score');
        });
};  }])
  ;