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
      'mdoFooter',
      'mdoHeader',
      'mdoCard',
      'aboutUs',
      'articles',
      'mdoNavbar'
    ]);
}());
