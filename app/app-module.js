(function () {
  'use strict';

  /* @ngdoc object
   * @name moderndev
   * @description
   *
   */
  angular
    .module('moderndev', [
      /** Needed libraries for app to work. **/
      'ngMaterial',
      'ui.router',

      /** Custom made and routable views **/
      'home',
      'articles',

      /** Custom made directives for app **/
      'blueFooter',
      'blueHeader',
      'greyBody',
      'mdoCard'
    ]);
}());
