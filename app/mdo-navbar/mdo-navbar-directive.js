(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name mdoNavbar.directive:mdoNavbar
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="mdoNavbar">
       <file name="index.html">
        <mdo-navbar></mdo-navbar>
       </file>
     </example>
   *
   */
  angular
    .module('mdoNavbar')
    .directive('mdoNavbar', mdoNavbar);

  function mdoNavbar() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'mdo-navbar/mdo-navbar-directive.tpl.html',
      replace: false,
      controllerAs: 'mdoNavbar',
      controller: function () {
        var vm = this;
        vm.name = 'mdoNavbar';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
