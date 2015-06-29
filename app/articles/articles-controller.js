(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name articles.controller:ArticlesCtrl
   *
   * @description
   *
   */
  angular
    .module('articles')
    .controller('ArticlesCtrl', ArticlesCtrl);

  function ArticlesCtrl() {
    var vm = this;
    vm.ctrlName = 'ArticlesCtrl';
  }
}());
