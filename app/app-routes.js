(function () {
  'use strict';

  angular
    .module('moderndev')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
