(function () {
  'use strict';

  angular
    .module('aboutUs')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('aboutUs', {
        url: '/about-us',
        templateUrl: 'about-us/about-us.tpl.html',
        controller: 'AboutUsCtrl',
        controllerAs: 'aboutUs'
      });
  }
}());
