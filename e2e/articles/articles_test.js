/*global describe, beforeEach, it, browser, expect */
'use strict';

var ArticlesPagePo = require('./articles.po');

describe('Articles page', function () {
  var articlesPage;

  beforeEach(function () {
    articlesPage = new ArticlesPagePo();
    browser.get('/#/articles');
  });

  it('should say ArticlesCtrl', function () {
    expect(articlesPage.heading.getText()).toEqual('articles');
    expect(articlesPage.text.getText()).toEqual('ArticlesCtrl');
  });
});
