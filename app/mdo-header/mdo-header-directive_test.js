/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('mdoHeader', function () {
  var scope
    , element;

  beforeEach(module('mdoHeader', 'mdo-header/mdo-header-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<mdo-header></mdo-header>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().mdoHeader.name).toEqual('mdoHeader');
  });
});
