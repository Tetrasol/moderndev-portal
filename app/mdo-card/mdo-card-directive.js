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
     <example module='mdoCard'>
       <file name='index.html'>
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
        vm.articles = [{
          name: 'spider-senses 101',
          authorName: 'ParkerPeters',
          description: 'welcome to the jungle',
          image: 'http://images1.fanpop.com/images/image_uploads/Jak-and-Daxter-jak-and-ratchet-1189130_128_128.jpg',
          tags: ['tech', 'potatos']
        },
        {
          name: 'Upside Down Camera Shots',
          authorName: 'ParkerPeters',
          description: 'welcome to the jungle',
          image: '',
          tags: ['tech', 'potatos']
        },
        {
          name: 'Its tough been super',
          authorName: 'ParkerPeters',
          description: 'welcome to the jungle',
          image: '',
          tags: ['tech', 'potatos']
        }];
        vm.name = 'mdoCard';
      },
      link: function (scope, element, attrs) {
        /*jshint unused:false */
        /*eslint "no-unused-vars": [2, {"args": "none"}]*/
      }
    };
  }
}());
