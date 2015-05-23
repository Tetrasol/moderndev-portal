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
            headerImg: 'http://www.cheynewallace.com/wp-content/uploads/2013/12/AngularJS_Banner.jpg',
            name: 'spider-senses 101',
            link: 'spider-senses-101',
            authorName: 'ParkerPeters',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla sapien, lobortis eget ' +
            'sodales et, mollis nec ex. Nulla egestas tellus eget diam tincidunt dictum. Nunc sed eros dignissim est ' +
            'congue auctor. Proin et nisl ultrices, eleifend nunc sit amet, feugiat quam. Nunc sem metus, finibus' +
            ' non ' +
            'libero sed, pellentesque condimentum augue. Maecenas finibus varius massa, ut laoreet nisl luctus' +
            ' dapibus. ' +
            'Pellentesque quis massa vitae quam rutrum consectetur. Proin aliquet viverra nisl sed porttitor.',
            image: 'http://images1.fanpop.com/images/image_uploads/Jak-and-Daxter-jak-and-ratchet-1189130_128_128.jpg',
            tags: ['tech', 'potatos']
          },
          {
            headerImg: 'http://mooccircle.com/wp-content/uploads/2014/12/python1.png',
            name: 'Upside Down Camera Shots',
            link: 'upside-down-camera-shots',
            authorName: 'ParkerPeters',
            description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, ' +
            'per inceptos himenaeos. Integer feugiat felis non ullamcorper sodales. Duis sit amet ' +
            'lacus tincidunt, pellentesque urna at, semper massa. Sed quam leo, ullamcorper sed quam ut,' +
            ' blandit euismod turpis. Fusce a sem dictum, ultrices tellus in, placerat risus. Pellentesque ' +
            'porttitor sed lectus in aliquet. Quisque molestie leo non lobortis aliquet. Class aptent taciti ' +
            'sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ut pellentesque ante.',
            image: 'http://fc05.deviantart.net/fs71/f/2013/090/0/3/dexters_lab_by_atr0p0s69-d5zytnh.png',
            tags: ['tech', 'potatos']
          },
          {
            headerImg: 'http://mooccircle.com/wp-content/uploads/2014/12/python1.png',
            name: 'Upside Down Camera Shots',
            link: 'upside-down-camera-shots',
            authorName: 'ParkerPeters',
            description: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra,' +
            ' per inceptos himenaeos. Integer feugiat felis non ullamcorper sodales. Duis sit amet ' +
            'lacus tincidunt, pellentesque urna at, semper massa. Sed quam leo, ullamcorper sed quam ut, ' +
            'blandit euismod turpis. Fusce a sem dictum, ultrices tellus in, placerat risus. Pellentesque porttitor ' +
            'sed lectus in aliquet. Quisque molestie leo non lobortis aliquet. Class aptent ' +
            'taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' +
            ' Maecenas ut pellentesque ante.',
            image: 'http://fc05.deviantart.net/fs71/f/2013/090/0/3/dexters_lab_by_atr0p0s69-d5zytnh.png',
            tags: ['tech', 'potatos']
          },
          {
            headerImg: 'http://mooccircle.com/wp-content/uploads/2014/12/python1.png',
            name: 'Upside Down Camera Shots',
            link: 'upside-down-camera-shots',
            authorName: 'ParkerPeters',
            description: 'Class aptent taciti sociosqu ad litora torquent per ' +
            'conubia nostra, per inceptos himenaeos. Integer feugiat felis non ullamcorper sodales.' +
            ' Duis sit amet lacus tincidunt, pellentesque urna at, semper massa. Sed quam leo, ullamcorper' +
            ' sed quam ut, blandit euismod turpis. Fusce a sem dictum, ultrices tellus in, placerat risus. ' +
            'Pellentesque porttitor sed lectus in aliquet. Quisque molestie leo non lobortis aliquet.' +
            ' Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' +
            ' Maecenas ut pellentesque ante.',
            image: 'http://fc05.deviantart.net/fs71/f/2013/090/0/3/dexters_lab_by_atr0p0s69-d5zytnh.png',
            tags: ['tech', 'potatos']
          },
          {
            headerImg: 'http://static.thetechjournal.net/wp-content/uploads/2010/08/android-header.jpg',
            name: 'Its tough been super',
            link: 'its-tough-been-super',
            authorName: 'ParkerPeters',
            description: 'Nam sit amet velit eu erat tincidunt gravida ac sed nisi. Suspendisse ' +
            'non dictum nibh, at pretium est. Cum sociis natoque penatibus et magnis dis parturient ' +
            'montes, nascetur ridiculus mus. Praesent massa nibh, fermentum quis euismod at, commodo ' +
            'non dolor. Duis tempor, diam at malesuada posuere, ante nisl interdum massa, a faucibus ' +
            'nunc sapien imperdiet felis. Maecenas et ex sit amet nisi volutpat cursus. Integer dui ' +
            'lectus, tempus ac porttitor ac, tempus fringilla augue. Quisque justo erat, accumsan et ' +
            'libero sit amet, ullamcorper laoreet quam.',
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
