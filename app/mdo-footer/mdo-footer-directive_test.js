/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('mdoFooter', function () {
  var scope
    , element;

  beforeEach(module('mdoFooter', 'mdo-footer/mdo-footer-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<mdo-footer></mdo-footer>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().mdoFooter.name).toEqual('mdoFooter');
  });
});
