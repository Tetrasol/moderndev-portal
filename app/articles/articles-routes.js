(function () {
  'use strict';

  angular
    .module('articles')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('articles', {
        url: '/articles',
        templateUrl: 'articles/articles.tpl.html',
        controller: 'ArticlesCtrl',
        controllerAs: 'articles'
      });
  }
}());
