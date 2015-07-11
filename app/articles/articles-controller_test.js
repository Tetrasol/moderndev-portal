/*global describe, beforeEach, it, expect, inject, module*/
'use strict';

describe('ArticlesCtrl', function () {
  var ctrl;

  beforeEach(module('articles'));

  beforeEach(inject(function ($rootScope, $controller) {
    ctrl = $controller('ArticlesCtrl');
  }));

  it('should have ctrlName as ArticlesCtrl', function () {
    expect(ctrl.ctrlName).toEqual('ArticlesCtrl');
  });
});
