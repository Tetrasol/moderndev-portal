(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name mdoHeader.directive:mdoHeader
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="mdoHeader">
       <file name="index.html">
        <mdo-header></mdo-header>
       </file>
     </example>
   *
   */
  angular
    .module('mdoHeader')
    .directive('mdoHeader', mdoHeader);

  function mdoHeader() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'mdo-header/mdo-header-directive.tpl.html',
      replace: false,
      controllerAs: 'mdoHeader',
      controller: function () {
        var vm = this;
        vm.name = 'mdoHeader';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
