(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name blueFooter.directive:blueFooter
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="blueFooter">
       <file name="index.html">
        <blue-footer></blue-footer>
       </file>
     </example>
   *
   */
  angular
    .module('blueFooter')
    .directive('blueFooter', blueFooter);

  function blueFooter() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'blue-footer/blue-footer-directive.tpl.html',
      replace: false,
      controllerAs: 'blueFooter',
      controller: function () {
        var vm = this;
        vm.name = 'blueFooter';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
