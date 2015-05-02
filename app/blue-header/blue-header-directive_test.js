/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('blueHeader', function () {
  var scope
    , element;

  beforeEach(module('blueHeader', 'blue-header/blue-header-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<blue-header></blue-header>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().blueHeader.name).toEqual('blueHeader');
  });
});
