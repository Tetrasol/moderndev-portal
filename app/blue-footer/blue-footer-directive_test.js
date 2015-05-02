/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('blueFooter', function () {
  var scope
    , element;

  beforeEach(module('blueFooter', 'blue-footer/blue-footer-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<blue-footer></blue-footer>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().blueFooter.name).toEqual('blueFooter');
  });
});
