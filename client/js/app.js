// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-getting-started-intermediate
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular
  .module('app', [
    'ui.router',
    'lbServices'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
        $urlRouterProvider) {
        $stateProvider
          .state('add-equipo', {
            url: '/add-equipo',
            templateUrl: 'views/formulario.html',
            controller: 'AddEquipoController'
          })
          .state('score', {
            url: '/score',
            templateUrl: 'views/score.html',
            controller: 'ScoreController'
          });
            $urlRouterProvider.otherwise('score');
          }])
          .run(['$rootScope', '$state', 'LoopBackAuth', function($rootScope, $state, LoopBackAuth) {}]);