(function () {
  'use strict';

  /* @ngdoc object
   * @name moderndev
   * @description
   *
   */
  angular
    .module('moderndev', [
    /* Base Modules*/
      'ngMaterial',
      'ui.router',
    /* Custom Modules*/
      'home',
      'blueFooter',
      'blueHeader',
      'mdoCard',
      'aboutUs',
      'articles'
    ]);
}());
