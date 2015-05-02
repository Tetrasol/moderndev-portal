(function () {
  'use strict';

  angular
    .module('moderndev')
    .config(routes);

  function routes($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
