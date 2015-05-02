/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('greyBody', function () {
  var scope
    , element;

  beforeEach(module('greyBody', 'grey-body/grey-body-directive.tpl.html'));

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile(angular.element('<grey-body></grey-body>'))(scope);
  }));

  it('should have correct text', function () {
    scope.$apply();
    expect(element.isolateScope().greyBody.name).toEqual('greyBody');
  });
});
