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
    vm.ourBackground = 'Where we come from';
    vm.meetOurTeam = 'Here are our team members some more information';

    vm.ourTeam = [
      {
        name: 'Omar Rivera (Co-Founder)',
        role: 'Software Engineer',
        github: 'g0r1v3r4',
        linkedIn: 'https://www.linkedin.com/in/gomarivera'
      },
      {
        name: 'Alexis Rivera (Co-Founder)',
        role: 'Software Engineer',
        github: 'gerrive',
        linkedIn: 'https://www.linkedin.com/pub/german-rivera-de-la-torre/53/656/4b2'
      }
    ];
  }
}());
