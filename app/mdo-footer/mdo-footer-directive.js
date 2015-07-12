(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name mdoFooter.directive:mdoFooter
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="mdoFooter">
       <file name="index.html">
        <mdo-footer></mdo-footer>
       </file>
     </example>
   *
   */
  angular
    .module('mdoFooter')
    .directive('mdoFooter', mdoFooter);

  function mdoFooter() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'mdo-footer/mdo-footer-directive.tpl.html',
      replace: false,
      controllerAs: 'mdoFooter',
      controller: function () {
        var vm = this;
        vm.name = 'mdoFooter';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
