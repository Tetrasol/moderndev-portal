(function () {
  'use strict';

  /**
   * @ngdoc object
   * @name aboutUs.controller:AboutUsCtrl
   *
   * @description
   *
   */
  angular
    .module('aboutUs')
    .controller('AboutUsCtrl', AboutUsCtrl);

  function AboutUsCtrl() {
    var vm = this;
    vm.ctrlName = 'AboutUsCtrl';
  }
}());
