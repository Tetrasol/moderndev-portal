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

    vm.ourTeam = [
      {
        name: 'Omar Rivera',
        avatarImg: '../../images/defaultPerson.png',
        role: 'Software Engineer (Co-Founder)',
        github: 'g0r1v3r4',
        linkedIn: 'https://www.linkedin.com/in/gomarivera'
      },
      {
        name: 'Alexis Rivera',
        avatarImg: '../../images/defaultPerson.png',
        role: 'Software Engineer (Co-Founder)',
        github: 'gerrive',
        linkedIn: 'https://www.linkedin.com/pub/german-rivera-de-la-torre/53/656/4b2'
      }
    ];
  }
}());
