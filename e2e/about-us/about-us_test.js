/*global describe, beforeEach, it, browser, expect */
'use strict';

var AboutUsPagePo = require('./about-us.po');

describe('About us page', function () {
  var aboutUsPage;

  beforeEach(function () {
    aboutUsPage = new AboutUsPagePo();
    browser.get('/#/about-us');
  });

  it('should say AboutUsCtrl', function () {
    expect(aboutUsPage.heading.getText()).toEqual('aboutUs');
    expect(aboutUsPage.text.getText()).toEqual('AboutUsCtrl');
  });
});
