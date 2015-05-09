/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('mdoCard', function () {
  var scope
    , element;

  beforeEach(module('mdoCard', 'mdo-card/mdo-card-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<mdo-card></mdo-card>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().mdoCard.name).toEqual('mdoCard');
  });
});
