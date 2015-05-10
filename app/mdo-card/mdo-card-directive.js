(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name mdoCard.directive:mdoCard
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
     <example module="mdoCard">
       <file name="index.html">
        <mdo-card></mdo-card>
       </file>
     </example>
   *
   */
  angular
    .module('mdoCard')
    .directive('mdoCard', mdoCard);

  function mdoCard() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'mdo-card/mdo-card-directive.tpl.html',
      replace: false,
      controllerAs: 'mdoCard',
      controller: function () {
        var vm = this;
        vm.name = 'mdoCard';
        vm.description = 'hello my name is g';
        vm.authorName = 'gr';
        vm.tags = ['angular', 'html'];
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
