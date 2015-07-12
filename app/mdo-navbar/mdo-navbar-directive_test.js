/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('mdoNavbar', function () {
  var scope
    , element;

  beforeEach(module('mdoNavbar', 'mdo-navbar/mdo-navbar-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<mdo-navbar></mdo-navbar>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().mdoNavbar.name).toEqual('mdoNavbar');
  });
});
