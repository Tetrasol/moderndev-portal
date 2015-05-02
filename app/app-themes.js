(function () {
  'use strict';

  angular.module('moderndev').config(themes);

  function themes($mdThemingProvider) {
    $mdThemingProvider
      .definePalette('moderndevBlue', {
        50: '#cfe2f3',
        100: '#cfe2f3',
        // 500 hue is the default
        200: '#003366',
        300: '#6699cc',
        400: '#6699cc',
        500: '#003366',
        600: '#336699',
        700: '#336699',
        800: '#003366',
        900: '#003366',
        A100: '#cfe2f3',
        // A200 hue is the default accent
        A200: '#6699cc',
        A400: '#336699',
        A700: '#003366',
        contrastDefaultColor: 'light',
        contrastDarkColors: ['100', '200', '300', '400', 'A100'],
        contrastStrongLightColors: ['500', '600', '700', 'A200', 'A400', 'A700']
      })
      .definePalette('moderndevYellow', {
        50: '#ffcc66',
        100: '#ffcc66',
        200: '#ffcc66',
        300: '#ffcc66',
        400: '#cc9933',
        500: '#cc9933',
        600: '#cc9933',
        700: '#cc9933',
        800: '#996600',
        900: '#996600',
        A100: '#ffcc66',
        A200: '#cc9933',
        A400: '#996600',
        A700: '#996600',
        contrastDefaultColor: 'dark'
      });

    $mdThemingProvider.theme('default')
      .primaryPalette('moderndevBlue')
      .accentPalette('moderndevYellow')
      .warnPalette('moderndevYellow')
      .backgroundPalette('grey');
  }
}());
