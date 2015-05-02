(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name blueHeader.directive:blueHeader
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="blueHeader">
       <file name="index.html">
        <blue-header></blue-header>
       </file>
     </example>
   *
   */
  angular
    .module('blueHeader')
    .directive('blueHeader', blueHeader);

  function blueHeader() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'blue-header/blue-header-directive.tpl.html',
      replace: false,
      controllerAs: 'blueHeader',
      controller: function () {
        var vm = this;
        vm.name = 'blueHeader';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
