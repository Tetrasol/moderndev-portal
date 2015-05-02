(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name greyBody.directive:greyBody
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="greyBody">
       <file name="index.html">
        <grey-body></grey-body>
       </file>
     </example>
   *
   */
  angular
    .module('greyBody')
    .directive('greyBody', greyBody);

  function greyBody() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'grey-body/grey-body-directive.tpl.html',
      replace: false,
      controllerAs: 'greyBody',
      controller: function () {
        var vm = this;
        vm.name = 'greyBody';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
