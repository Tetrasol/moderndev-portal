/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('AboutUsCtrl', function () {
  var ctrl;

  beforeEach(module('aboutUs'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('AboutUsCtrl');
  }));

  it('should have ctrlName as AboutUsCtrl', function () {
    expect(ctrl.ctrlName).toEqual('AboutUsCtrl');
  });
});
